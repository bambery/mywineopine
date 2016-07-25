import Ember from 'ember';

let wines = [{
  id: 1,
  vineyard: "Peter Michael",
  type: "cabernet sauvignon",
  vintage: 2012,
  ratingAvg: 5,
  ratingDean: 5,
  ratingLauren: 5,
  price: 195,
  country: "USA",
  state: "California",
  region: "Napa Valley"
}, {
  id: 2,
  vineyard: "Evening Land",
  type: "pinot noir",
  vintage: 2012,
  ratingAvg: 4.5,
  ratingDean: 4,
  ratingLauren: 5,
  price: 140,
  country: "USA",
  state: "Oregon",
  region: "Dundee"
},{
  id: 120,
  vineyard: "Gramercy",
  type: "syrah",
  vintage: 2013,
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
    return wines;
  }
});
