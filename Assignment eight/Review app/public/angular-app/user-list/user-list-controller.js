angular.module("ReviewApp").controller("getAllUser", getAllUser);

function getAllUser(userFactory) {
  const vm = this;
  userFactory.getAll().then(function (response) {
    vm.users = response;
  });
}
