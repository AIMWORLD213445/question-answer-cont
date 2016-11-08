import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  count: Ember.computed('question.answers.length', function(){
    return 'Answer Count:' + " " + this.get('question.answers.length');
  }),

  actions: {
    delete(question) {
      this.sendAction('deleteQuestion', question);
    },

    update(question, params){
      this.sendAction("update", question, params);
    },
    addToFavs(item) {
      this.get('favoriteList').add(item);
    },
  }
});
