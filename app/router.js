import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('films', function() {
    this.route('film', { path: ':film_id' });
  });
});

export default Router;
