import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),

  actions: {
    removeFromBestAnswers(item) {
      this.get('favoriteAnswers').remove(item);
    }
  }
});
