angular.module("ReviewApp").factory("reviewFactory", reviewFactory);
function reviewFactory($http) {
  return {
    getAll: getAllReview,
    getOne: getOnereview,
    addreview: addreview,
  };
  function getAllReview() {
    console.log("=====");
    return $http.get("api/post/reviews").then(complete).catch(failed);
  }
  function getOnereview(id) {
    return $http
      .get("api/post/reviews/" + id)
      .then(complete)
      .catch(failed);
  }
  function addreview(newReview) {
    return $http
      .post("api/post/reviews/", newReview)
      .then(complete)
      .catch(failed);
  }
  function complete(response) {
    console.log(response);

    return response.data;
  }
  function failed(error) {
    return error.statusText;
  }
}
