angular.module("ReviewApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  console.log("===========");
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/user-list/user-list.html",
      controller: "getAllUser",
      controllerAs: "allUser",
    })
    .when("/users/:id", {
      templateUrl: "angular-app/user-display/user-display.html",
      controller: "getOneUser",
      controllerAs: "vm",
    })
    .when("/reviews", {
      templateUrl: "angular-app/review-list/review-list.html",
      controller: "getAllReviews",
      controllerAs: "allReviews",
    })
    .when("/reviews/:id/feedbacks", {
      templateUrl: "angular-app/feedback-list/feedback-list.html",
      controller: "getFeedback",
      controllerAs: "allFeedback",
    })
    .otherwise({
      redirectTo: "/",
    });
}
