angular.module("gameApp").controller("getOneGame", getOneGame);

function getOneGame(gameFactory, $routeParams) {
  console.log("akdkjadbk");
  const vm = this;
  const id = $routeParams.id;

  gameFactory.getOne(id).then(function (response) {
    vm.game = response;
  });

  vm.deleteGame = function (id) {
    gameFactory.deleteOne(id).then(function (response) {
      console.log("successfull deleted");
    });
  };
}
