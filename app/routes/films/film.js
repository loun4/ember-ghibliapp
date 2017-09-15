
import Ember from 'ember';

export default Ember.Route.extend({
  model({film_id}) {
    return this.modelFor('films').findBy('id', film_id);
  }
});
