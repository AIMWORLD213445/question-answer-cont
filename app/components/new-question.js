import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newFormShow() {
      this.set("addNewQuestion", true);
    },

    saveQuestion() {
      var params = {
        query: this.get("query") ? this.get('query'):"",
        author: this.get("author") ? this.get('author'):"",
        note: this.get("note") ? this.get('note'):"",
      };
      this.set("addNewQuestion", false);
      this.sendAction("saveQuestion", params);
      this.set('query', "");
      this.set('author', "");
      this.set('note', "");
   },
  }
});
