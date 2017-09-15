
import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service(),
  tagName: 'tr',

  click() {
    this.get('router').transitionTo('films.film', this.get('film.id'));
  }
});
