angular.module("ReviewApp").factory("feedbackFactory", feedbackFactory);
function feedbackFactory($http) {
  return {
    getAll: getAllfeedback,
    deleteOne: deleteOneFeedback,
    addFeedback: addFeedback,
  };
  function getAllfeedback(id) {
    console.log("=====");
    return $http
      .get("api/post/reviews/" + id + "/feedback/")
      .then(complete)
      .catch(failed);
  }

  function deleteOneFeedback(id, feedbackId) {
    return $http
      .delete("api/post/reviews/" + id + "/feedback/" + feedbackId)
      .then(complete)
      .catch(failed);
  }
  function addFeedback(id, newFeedback) {
    return $http
      .post("/reviews/" + id + "/feedback", newFeedback)
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
