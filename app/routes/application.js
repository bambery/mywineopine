import Ember from 'ember';

let reviews = [{
  id: 1,
  producer: "Peter Michael",
  type: "cabernet sauvignon",
  year: 2012,
  ratingAvg: 5,
  ratingDean: 5,
  ratingLauren: 5,
  price: 195,
  country: "USA",
  state: "California",
  region: "Napa Valley"
}, {
  id: 2,
  producer: "Evening Land",
  type: "pinot noir",
  year: 2012,
  ratingAvg: 4.5,
  ratingDean: 4,
  ratingLauren: 5,
  price: 140,
  country: "USA",
  state: "Oregon",
  region: "Dundee"
},{
  id: 120,
  producer: "Gramercy",
  type: "syrah",
  year: 2013,
  ratingAvg: 4,
  ratingDean: 3,
  ratingLauren: 5,
  price: 50,
  country: "USA",
  state: "Washington",
  region: "Walla Walla"
}];

export default Ember.Route.extend({
  model(){
    return reviews;
  }
});
