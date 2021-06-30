angular.module("ReviewApp").factory("feedbackFactory", feedbackFactory);
function feedbackFactory($http) {
  return {
    getAll: getAllfeedback,
  };
  function getAllfeedback(id) {
    console.log("=====");
    return $http
      .get("api/post/reviews/" + id + "/feedback/")
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
