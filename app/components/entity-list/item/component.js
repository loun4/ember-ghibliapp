
import Ember from 'ember';

const {
  Component
} = Ember;


export default Component.extend({
  router: Ember.inject.service(),
  tagName: 'tr',
  classNames: 'entity-list__row',
  link: null,
  item: {},
  cols: [],

  click() {
    const link = this.get('link');
    if (!link) { return; }

    this.get('router').transitionTo(link, this.get('item.id'));
  }
});
