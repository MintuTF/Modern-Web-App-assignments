angular.module("ReviewApp").controller("getFeedback", getFeedback);

function getFeedback($routeParams, feedbackFactory) {
  const vm = this;
  const id = $routeParams.id;

  feedbackFactory.getAll(id).then(function (response) {
    vm.feedbacks = response.feedback;
    vm.feedbacks.shift();
    // vm.feedbacks = vm.feedbacks.feedback;
  });
}
