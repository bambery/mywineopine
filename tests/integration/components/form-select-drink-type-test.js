import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-select-drink-type', 'Integration | Component | form select drink type', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-select-drink-type}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-select-drink-type}}
      template block text
    {{/form-select-drink-type}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
