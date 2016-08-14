import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('review');
  },

  actions: {
    formSubmit(newReview) {
      newReview.save().then(() => this.transitionTo('index'));
    }
  }
});
