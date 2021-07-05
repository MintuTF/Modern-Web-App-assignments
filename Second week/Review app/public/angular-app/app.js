angular.module("ReviewApp", ["ngRoute", "angular-jwt"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/welcome/welcome.html",
    })
    .when("/uses", {
      templateUrl: "angular-app/user-list/user-list.html",
      controller: "getAllUser",
      controllerAs: "allUser",
    })
    .when("/users/:id", {
      templateUrl: "angular-app/user-display/user-display.html",
      controller: "getOneUser",
      controllerAs: "vm",
    })
    .when("/register", {
      templateUrl: "angular-app/register/register.html",
      controller: "RegisterController",
      controllerAs: "vm",
      access: { restricted: false },
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
