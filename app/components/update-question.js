import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    updateForm() {
      this.set("updateForm", true);
    },
    update(question) {
      var params = {
          query: this.get("query"),
          author: this.get("author"),
          note: this.get("note"),
      };
      this.set("updateForm", false);
      this.sendAction("update", question, params);
    }
  }
});
