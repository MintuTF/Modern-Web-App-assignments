angular.module("gameApp").controller("getAllGame", getAllGame);

function getAllGame(gameFactory, $location) {
  const vm = this;
  vm.count = 10;
  vm.offset = 0;
  const newGame = {
    title: vm.title,
    price: vm.price,
    year: vm.year,
    maxPlayes: vm.maxPlayes,
  };
  gameFactory.getAll(this.count, this.offset).then(function (response) {
    vm.games = response;
  });

  vm.nextPage = function () {
    console.log("======");
    vm.offset = vm.offset + vm.count;
    gameFactory.getAll(this.count, this.offset).then(function (response) {
      vm.games = response;
    });
  };

  vm.addgame = function () {
    if (vm.addgameform.$valid) {
      gameFactory.addgame(newGame).then(function (response) {
        alert("successfully added");
        $location.path("/games");
      });
    }
  };

  vm.search = function (searchKey) {
    console.log(searchKey);
    gameFactory.searchgame(searchKey).then(function (response) {
      $location.path("/");
      vm.games = response;
    });
  };

  vm.updategame = function () {
    vm.update = vm.games;
  };
}
