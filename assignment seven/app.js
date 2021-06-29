angular.module("myProperApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./main/main.html",
      controller: "mainController",
      controllerAs: "mainCtrl",
    })
    .when("/about", {
      templateUrl: "./about/about.html",
      controller: "aboutController",
      controllerAs: "aboutCtrl",
    })
    .when("/country", {
      templateUrl: "./country/country.html",
      controller: "countryController",
      controllerAs: "countryCtrl",
    })
    .when("/country/:name", {
      templateUrl: "./country/country.html",
      controller: "getCountryByname",
      controllerAs: "countryCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
}
