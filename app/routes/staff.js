
import Ember from 'ember';
import { unique } from '../utils';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    const { films } = this.modelFor('application');

    return {
      directors: films.mapBy('director').filter(unique),
      producers: films.mapBy('producer').filter(unique)
    }
  }
});
