import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newFormShow() {
      this.set("addNewQuestion", true);
    },

    saveQuestion() {
      var params = {
        question: this.get("query"),
        author: his.get("author"),
        note: his.get("note"),
      };
      this.set("addNewQuestion", false);
      this.sendAction("saveQuestion", params);
    }
  }
});
