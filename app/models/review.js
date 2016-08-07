import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  vineyard: DS.attr('string'),
  // vineyard should be moved over to producer, which is vineyard for wines 
  // and company for sodas
  year: DS.attr('string'),
  photo: DS.attr('string'),
//  type: DS.belongsTo('wineType'),
  wineType: DS.attr('string'),
  price: DS.attr('string'),
  regionOrCity: DS.attr('string'),
  stateOrProvince: DS.attr('string'),
  country: DS.attr('string')
});
