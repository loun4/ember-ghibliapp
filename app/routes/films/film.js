
import Ember from 'ember';
import { filterByEntityId } from '../../utils';


export default Ember.Route.extend({
  model({film_id}) {
    const filterByFilmId = filterByEntityId.bind(null, 'films', film_id);

    return {
        film        : this.modelFor('films').findBy('id', film_id),
        people      : this.modelFor('application').people.filter(filterByFilmId),
        locations   : this.modelFor('application').locations.filter(filterByFilmId),
        vehicles    : this.modelFor('application').vehicles.filter(filterByFilmId)
    };
  }
});
