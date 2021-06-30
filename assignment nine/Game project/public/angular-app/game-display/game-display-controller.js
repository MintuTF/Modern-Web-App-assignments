angular.module("gameApp").controller("getOneGame", getOneGame);

function getOneGame(gameFactory, $routeParams) {
  console.log("akdkjadbk");
  const vm = this;
  const id = $routeParams.id;

  gameFactory.getOne(id).then(function (response) {
    vm.game = response;
  });
  // $http.get("/api/games/" + id).then(function (response) {
  //   console.log(response);
  //   vm.game = response.data;
  // });
}
