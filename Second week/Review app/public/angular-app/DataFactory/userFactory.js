angular.module("ReviewApp").factory("userFactory", userFactory);
function userFactory($http) {
  return {
    getAll: getAllUser,
    getOne: getOneUser,
  };
  function getAllUser() {
    console.log("=====");
    return $http.get("api/users").then(complete).catch(failed);
  }
  function getOneUser(id) {
    return $http
      .get("api/users/" + id)
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
