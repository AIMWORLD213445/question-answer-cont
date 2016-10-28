import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return this.store.findRecord("question", params.question_id);
    },
    actions: {
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

      saveAnswer(params) {
        var newAnswer = this.store.createRecord("answer", params);
        var answer = params.answer;
        answer.get("answers").addObject(newAnswer);
        newAnswer.save().then(function() {
          return answer.save();
        });
        this.transitionTo("question", question);
      }
    }
});
