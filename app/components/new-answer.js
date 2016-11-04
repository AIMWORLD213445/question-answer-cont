import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set("addNewAnswer", true);
    },
    saveAnswer() {
      var params = {
        username: this.get("username") ? this.get('username'):"",
        content: this.get("content") ? this.get('content'):"",
        question: this.get("question"),
      };
      this.set("addNewAnswer", false);
      this.sendAction("saveAnswer", params);
      this.set('username',"");
      this.set('content',"");
    }
  }
});
