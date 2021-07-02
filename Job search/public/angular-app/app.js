// angular.module("gameApp", ["ngRoute"]).config(config);
angular.module("jobApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  console.log("===========");
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/job-list/job-list.html",
      controller: "getAllJob",
      controllerAs: "getJob",
    })
    .when("/jobs/:id", {
      templateUrl: "angular-app/job-display/job-display.html",
      controller: "getOneJob",
      controllerAs: "vm",
    })
    .when("/job/addjob", {
      templateUrl: "angular-app/job-list/add-job.html",
      controller: "getAllJob",
      controllerAs: "vm",
    })
    // .when("/game/updategame", {
    //   templateUrl: "angular-app/game-list/update-game.html",
    //   controller: "getAllGame",
    //   controllerAs: "vm",
    // })

    .otherwise({
      redirectTo: "/",
    });
}
