
import Ember from 'ember';

const {
  Component
} = Ember;


export default Component.extend({
  router: Ember.inject.service(),
  tagName: 'tr',
  linkTo: null,
  item: {},
  cols: [],

  click() {
    if (!this.get('linkTo')) { return; }
    const { route, param } = this.get('linkTo');

    this.get('router').transitionTo(route, this.get('item')[param]);
  }
});
