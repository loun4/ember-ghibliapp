import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('entity-list', 'Integration | Component | entity list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('data', []);
  this.set('cols', []);

  this.render(hbs`{{entity-list
    data=data
    cols=cols
  }}`);

  assert.equal(this.$().text().trim(), '');
});
