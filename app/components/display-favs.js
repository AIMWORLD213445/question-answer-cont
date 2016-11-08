import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    removeFromFavs(item) {
      this.get('favoriteList').remove(item);
    }
  }
});
