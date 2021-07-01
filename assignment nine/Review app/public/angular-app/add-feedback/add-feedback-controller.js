angular
  .module("ReviewApp")
  .controller("addFeedbackController", addFeedbackController);

function addFeedbackController(feedbackFactory) {
  const vm = this;
  const newFeedback = {
    userName: vm.name,
    feedbackContent: vm.feedback,
    date: new Date().toLocaleDateString(),
  };

  feedbackFactory.addFeedback(newFeedback).then(function (response) {
    console.log("successfully added");
  });
}
