angular.module("ReviewApp").controller("getFeedback", getFeedback);

function getFeedback($routeParams, feedbackFactory) {
  const vm = this;
  const id = $routeParams.id;

  feedbackFactory.getAll(id).then(function (response) {
    // vm.reviews = response.parent();
    console.log(response);
    vm.feedbacks = response.feedback;
    vm.feedbacks.shift();
    console.log(vm.feedbacks);
    // vm.feedbacks = vm.feedbacks.feedback;
  });
}
