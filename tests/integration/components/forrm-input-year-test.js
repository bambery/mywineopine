import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forrm-input-year', 'Integration | Component | forrm input year', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{forrm-input-year}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#forrm-input-year}}
      template block text
    {{/forrm-input-year}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
