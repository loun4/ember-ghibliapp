
import Ember from 'ember';

const {
  Component,
  computed
} = Ember;


export default Component.extend({
  classNames: 'ui grid entity-page',

  sections: computed('directors', 'producers', function() {
    return [{
      title: 'Directors',
      data: this.get('directors')
    }, {
      title: 'Producers',
      data: this.get('producers')
    }]
  })
});
