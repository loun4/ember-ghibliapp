# Ember Ghibli App

Demo https://ember-ghibliapp.herokuapp.com/

Ghibli Application built with Ember.js, Ember-cli & Semantic UI

The application consumes the Ghibli API https://ghibliapi.herokuapp.com

## Setup
Clone the repo and run
```
npm install
```

```
ember serve
```
## Ember data or not Ember data ?
Ember data is a very big library, it may be overkill for small projects.

The data layer is handled by a small and custom store service.

## All entities are fetched in application route, why ?
Ghibli API seems in progress, most array associations are wrong and there is no server side way to filter people by film id or url.
IMO the best solution should be an API filter
```
people?films=film_url
```
Unfortunately this solution is not implemented.

So, all entities are fetched in application route and filters are handled within models hooks.

If you have another solution, feel free to pull request !


