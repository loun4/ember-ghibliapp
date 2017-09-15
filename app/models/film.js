
import Ember from 'ember';


export default Ember.Object.extend({
  urlRoot: '/films',
  id: null,
  title: '',
  description: '',
  director: '',
  producer: '',
  release_date: '',
  rt_score: ''
});
