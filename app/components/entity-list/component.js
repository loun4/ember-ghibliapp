
import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'table',
  classNames: 'ui sortable selectable celled table black entity-list',
  data: [],
  cols: [],
  linkTo: null
});
