
import Ember from 'ember';


export default Ember.Route.extend({
  model({location_id}) {
    const location = this.modelFor('locations').findBy('id', location_id);

    const films = this.modelFor('application').films.filter(film =>
      location.get('films').includes(film.get('id'))
    );

    return { location, films };
  }
});
