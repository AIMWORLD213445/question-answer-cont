import Ember from 'ember';

export default Ember.Route.extend({
  favoriteList: Ember.inject.service(),


  model() {
    return this.store.findAll('question');
    return this.store.findAll('answer');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo("index");
    },

    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo("index");
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo("index");
    },
    removeFromFavs(item) {
      this.get('favoriteList').remove(item);
    }
  }
});
