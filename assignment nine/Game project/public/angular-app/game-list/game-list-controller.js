angular.module("gameApp").controller("getAllGame", getAllGame);

function getAllGame(gameFactory) {
  const vm = this;

  gameFactory.getAll().then(function (response) {
    vm.games = response;
  });
}
