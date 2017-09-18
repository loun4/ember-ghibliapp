
import Ember from 'ember';

const {
  Route
} = Ember;


export default Route.extend({
  model({person_id}) {
    const person = this.modelFor('people').findBy('id', person_id);

    const films = this.modelFor('application').films.filter(film =>
      person.get('films').includes(film.get('id'))
    );

    return { person, films };
  }
});
