import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    updateForm() {
      this.set("updateForm", true);
    },
    update(question) {
      var params = {
          question: this.get("query"),
          author: his.get("author"),
          note: his.get("note"),
      };
      this.set("updateForm", false);
      this.sendAction("update", question, params);
    }
  }
});
