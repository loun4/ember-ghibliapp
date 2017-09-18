
import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'table',
  classNames: 'ui sortable selectable celled table black entity-list',
  data: [],
  cols: [],
  link: null
});
