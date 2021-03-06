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
    .when("/game/addgame", {
      templateUrl: "angular-app/game-list/add-game.html",
      controller: "getAllGame",
      controllerAs: "vm",
    })
    .when("/game/updategame", {
      templateUrl: "angular-app/game-list/update-game.html",
      controller: "getAllGame",
      controllerAs: "vm",
    })

    .otherwise({
      redirectTo: "/",
    });
}
