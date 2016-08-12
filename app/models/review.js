import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  producer: DS.attr('string'),
  // vineyard should be moved over to producer, which is vineyard for wines 
  // and company for sodas
  year: DS.attr('number'),
  photo: DS.attr('string'),
//  type: DS.belongsTo('wineType'),
  wineType: DS.attr('string'),
  price: DS.attr('number'),
  regionOrCity: DS.attr('string'),
  stateOrProvince: DS.attr('string'),
  country: DS.attr('string'),
  ratingAvg: DS.attr('number'),
  ratingLauren: DS.attr('number'),
  ratingDean: DS.attr('number')
});
