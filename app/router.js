
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

  this.route('people', function() {
    this.route('person', { path: ':person_id' });
  });

  this.route('locations', function() {
    this.route('location', { path: ':location_id' });
  });

  this.route('vehicles', function() {
    this.route('vehicle', { path: ':vehicle_id' });
  });

  this.route('staff', function() {});
});

export default Router;
