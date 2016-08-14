import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-rating-dean', 'Integration | Component | form rating dean', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-rating-dean}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-rating-dean}}
      template block text
    {{/form-rating-dean}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
