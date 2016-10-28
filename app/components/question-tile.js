import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
        this.sendAction('deleteQuestion', question);
    },

    update(question, params){
      this.sendAction("update", question, params);
    },
  }
});
