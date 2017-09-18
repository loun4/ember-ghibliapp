
import Ember from 'ember';

const {
  Route
} = Ember;


export default Route.extend({
  model({vehicle_id}) {
    const vehicle = this.modelFor('vehicles').findBy('id', vehicle_id);

    const films = this.modelFor('application').films.filter(film =>
      vehicle.get('films').includes(film.get('id'))
    );

    const people = this.modelFor('application').people.filter(people =>
      vehicle.get('pilot').includes(people.get('id'))
    );

    return { vehicle, films, people };
  }
});
