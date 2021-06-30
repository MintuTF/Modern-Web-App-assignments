angular.module("ReviewApp").controller("getOneUser", getOneUser);

function getOneUser($routeParams, userFactory) {
  const vm = this;
  const id = $routeParams.id;
  userFactory.getOne(id).then(function (response) {
    vm.user = response;
  });
}
