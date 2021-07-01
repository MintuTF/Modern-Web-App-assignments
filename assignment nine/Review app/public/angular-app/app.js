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
    .when("/reviews/addreview", {
      templateUrl: "angular-app/review-list/add-review.html",
      controller: "getAllReviews",
      controllerAs: "allFeedback",
    })
    // .when("/review/feedback/addfeedback", {
    //   templateUrl: "angular-app/add-feedback/add-feedback.html",
    //   controller: "getFeedback",
    //   controllerAs: "vm",
    // })
    .otherwise({
      redirectTo: "/",
    });
}
