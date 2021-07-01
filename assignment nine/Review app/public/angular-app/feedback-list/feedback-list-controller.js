angular.module("ReviewApp").controller("getFeedback", getFeedback);

function getFeedback($routeParams, feedbackFactory) {
  const vm = this;
  const id = $routeParams.id;

  feedbackFactory.getAll(id).then(function (response) {
    // vm.reviews = response.parent();

    vm.feedbacks = response.feedback;
    vm.feedbacks.shift();
    console.log(vm.feedbacks);
    // vm.feedbacks = vm.feedbacks.feedback;
  });

  vm.deleteOnes = function (feedbackId) {
    feedbackFactory.deleteOne(id, feedbackId).then(function (response) {
      alert("successful delete");
    });
  };

  // vm.addFeedbackController = function (id, feedbackFactory) {
  //   const vm = this;
  //   const newFeedback = {
  //     userName: vm.name,
  //     feedbackContent: vm.feedback,
  //     date: new Date().toLocaleDateString(),
  //   };

  //   feedbackFactory.addFeedback(id, newFeedback).then(function (response) {
  //     console.log("successfully added");
  //   });
  // };
}
