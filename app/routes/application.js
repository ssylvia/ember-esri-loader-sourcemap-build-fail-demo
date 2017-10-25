// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  esriLoader: Ember.inject.service('esri-loader'),

  renderTemplate: function () {
    // render the template as normal
    this._super(...arguments);
    // then preload the JSAPI
    // NOTE: to use the latest 4.x release don't pass any arguments to load()
    this.get('esriLoader').load({ url: 'https://js.arcgis.com/3.20compact' }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }
});
