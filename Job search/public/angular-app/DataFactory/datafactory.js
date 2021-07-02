angular.module("jobApp").factory("jobFactory", JobFactory);

function JobFactory($http) {
  return {
    getAll: getAllJob,
    getOne: getOneJob,
    addJob: addJob,
    deleteOne: deleteOne,
    search: search,
  };

  function getAllJob(count, offset) {
    return $http
      .get("/api/jobs?count=" + count + "&offset=" + offset)
      .then(complete)
      .catch(failed);
  }

  function getOneJob(id) {
    return $http
      .get("/api/jobs/" + id)
      .then(complete)
      .catch(failed);
  }

  function addJob(newJob) {
    return $http.post("/api/jobs/", newJob).then(complete).catch(failed);
  }
  function deleteOne(id) {
    return $http
      .delete("/api/jobs/" + id)
      .then(complete)
      .catch(failed);
  }

  function search(searchKey) {
    return $http
      .get("/api/jobs/?title=" + searchKey)
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
