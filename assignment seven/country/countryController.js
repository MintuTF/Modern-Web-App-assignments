angular
  .module("myProperApp")
  .controller("countryController", countryController)
  .controller("getCountryByname", getCountryByname);
function countryController($http) {
  const vm = this;
  $http.get("https://restcountries.eu/rest/v2/all").then(function (response) {
    vm.countries = response.data;
  });
}

function getCountryByname($http, $routeParams) {
  const vm = this;
  const name = $routeParams.name;

  $http
    .get("https://restcountries.eu/rest/v2/name/" + name)
    .then(function (response) {
      vm.countries = response.data;
    });
}
