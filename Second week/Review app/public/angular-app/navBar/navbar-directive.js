angular.module("ReviewApp").directive("navNavigation", navbar);

function navbar() {
  return {
    restrict: "E",
    templateUrl: "angular-app/navBar/navbar.html",
  };
}
