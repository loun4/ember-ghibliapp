
import Ember from 'ember';

const {
  RSVP,
  Route
} = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      films     : this.store.findAll('film'),
      people    : this.store.findAll('people'),
      locations : this.store.findAll('location'),
      vehicles  : this.store.findAll('vehicle')
    });
  }
});
