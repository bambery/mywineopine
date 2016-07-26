import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  ratingOne: Ember.computed.gte("value", 1),
  ratingTwo: Ember.computed.gte("value", 2),
  ratingThree: Ember.computed.gte("value", 3),
  ratingFour: Ember.computed.gte("value", 4),
  ratingFive: Ember.computed.gte("value", 5),
  actions: {
    ratingClicked(rating){
      if(rating === this.get("value")) {
        this.set("value", null);
      } else {
        this.set("value", rating);
      }
    }
  }
});
