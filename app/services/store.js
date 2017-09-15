
import Ember from 'ember';
import ENV from '../config/environment';

const {
	Service,
	getOwner,
	$
} = Ember;


$.ajaxSetup({
	timeout: ENV.AJAX_TIMEOUT
});

export default Service.extend({
  find(name, id, query) {
    const model = this.getModel(name);
    const { urlRoot } = model;

    return  $.getJSON(this.endPoint(urlRoot, id, query))
            .then(item =>
              model.constructor.create(item)
            );
  },

  findAll(name, query) {
    const model = this.getModel(name);
    const { urlRoot } = model;

    return  $.getJSON(this.endPoint(urlRoot, null, query))
            .then(items =>
              items.map(item => model.constructor.create(item))
            );
  },

  endPoint(url, id, query) {
    if (id) {
      url += `/${id}`;
    }

    if (query) {
      url += `?${$.param(query)}`;
    }

    return url;
  },

  getModel(name) {
    const model = getOwner(this).lookup(`model:${name}`);

    if (!model) {
      throw new Error(`cannot find record ${name}`);
    }

    return model;
  }
});
