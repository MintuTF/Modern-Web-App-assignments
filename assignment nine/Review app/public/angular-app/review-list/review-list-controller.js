angular.module("ReviewApp").controller("getAllReviews", getAllReviews);

function getAllReviews(reviewFactory) {
  const vm = this;
  reviewFactory.getAll().then(function (response) {
    vm.reviews = response;
  });
}
