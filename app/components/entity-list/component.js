
import Ember from 'ember';
import { comparator } from '../../utils';

const {
  Component,
  computed
} = Ember;


export default Component.extend({
  tagName: 'table',
  classNames: 'ui sortable selectable celled table black entity-list',
  data: [],
  cols: [],
  link: null,
  sortBy: null,
  sortDirection: 'descending',

  sortedData: computed('data', 'cols', 'sortBy', 'sortDirection', function() {
    const data = this.get('data');
    const by = this.get('sortBy');
    const { type } = this.get('cols').find(({key}) => key == by);
    const direction = this.get('sortDirection');

    return data.sort(comparator(by, type, direction));
  }),

  actions: {
    handleSort(by) {
      this.setProperties({
        sortBy: by,
        sortDirection: this.get('sortDirection') === 'descending' ? 'ascending': 'descending'
      });
    }
  }
});
