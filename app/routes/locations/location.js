
import Ember from 'ember';

const {
  Route
} = Ember;


export default Route.extend({
  model({location_id}) {
    const location = this.modelFor('locations').findBy('id', location_id);

    const films = this.modelFor('application').films.filter(film =>
      location.get('films').includes(film.get('id'))
    );

    return { location, films };
  }
});
