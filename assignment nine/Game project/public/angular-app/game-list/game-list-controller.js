angular.module("gameApp").controller("getAllGame", getAllGame);

function getAllGame(gameFactory) {
  const vm = this;

  const newGame = {
    title: vm.title,
    price: vm.price,
    year: vm.year,
    maxPlayes: vm.maxPlayes,
  };
  gameFactory.getAll().then(function (response) {
    vm.games = response;
  });

  vm.addgame = function () {
    gameFactory.addgame(newGame).then(function (response) {
      alert("successfully added");
    });
  };
}
