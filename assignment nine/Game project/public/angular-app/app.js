// angular.module("gameApp", ["ngRoute"]).config(config);
angular.module("gameApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  console.log("===========");
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/game-list/game-list.html",
      controller: "getAllGame",
      controllerAs: "getGame",
    })
    .when("/games/:id", {
      templateUrl: "angular-app/game-display/game-display.html",
      controller: "getOneGame",
      controllerAs: "vm",
    })
    .otherwise({
      redirectTo: "/",
    });
}
