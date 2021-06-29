angular.module("myProperApp").factory("CountryFactory", CountryFactory);
function CountryFactory($http) {
  return {
    getAllcountry: getAllcountry,
    getOneCoutry: getOneCoutry,
  };
  function getAllcountry() {
    console.log("=====");
    return $http
      .get("https://restcountries.eu/rest/v2/all")
      .then(complete)
      .catch(failed);
  }
  function getOneCoutry(name) {
    return $http
      .get("https://restcountries.eu/rest/v2/name/" + name)
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
