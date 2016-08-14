import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-rating-lauren', 'Integration | Component | form rating lauren', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-rating-lauren}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-rating-lauren}}
      template block text
    {{/form-rating-lauren}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
