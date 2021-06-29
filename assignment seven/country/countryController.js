angular
  .module("myProperApp")
  .controller("countryController", countryController)
  .controller("getCountryByname", getCountryByname);
function countryController(CountryFactory) {
  const vm = this;
  // $http.get("https://restcountries.eu/rest/v2/all").then(function (response) {
  //   console.log(response);
  //   vm.countries = response.data;
  // });

  CountryFactory.getAllcountry().then(function (response) {
    console.log(response);
    vm.countries = response;
  });
}

function getCountryByname($routeParams, CountryFactory) {
  const vm = this;
  const name = $routeParams.name;

  CountryFactory.getOneCoutry(name).then(function (response) {
    vm.countries = response;
  });

  // $http
  //   .get("https://restcountries.eu/rest/v2/name/" + name)
  //   .then(function (response) {
  //     vm.countries = response.data;
  //   });
}
