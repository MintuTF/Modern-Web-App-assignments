angular.module("ReviewApp").controller("getAllReviews", getAllReviews);

function getAllReviews(reviewFactory) {
  const vm = this;
  reviewFactory.getAll().then(function (response) {
    vm.reviews = response;
  });

  vm.addreview = function () {
    const vm = this;
    const newReview = {
      title: vm.title,
      type: vm.type,
      author: vm.author,
    };

    reviewFactory.addreview(newReview).then(function (response) {
      console.log("successfully added");
    });
  };
}
