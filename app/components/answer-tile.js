import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),

  actions: {
    addToBestAnswers(item) {
      this.get('favoriteAnswers').add(item);
    },
  }
});
