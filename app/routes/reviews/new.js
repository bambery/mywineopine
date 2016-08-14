import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('review');
  },

  actions: {
    foo() { alert("foo!")},
    formSubmit(newReview) {
      newReview.save().then(() => this.transitionTo('index'));
    }
  }
});
