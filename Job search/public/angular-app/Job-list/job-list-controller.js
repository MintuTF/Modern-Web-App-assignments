angular.module("jobApp").controller("getAllJob", getAllJob);

function getAllJob(jobFactory, $location, $routeParams) {
  const vm = this;
  vm.count = 2;
  vm.offset = $routeParams.offset ? routeParams.offset : 0;

  console.log("====", vm.title);
  const newJob = {
    title: vm.title,
    salary: vm.salary,
    skill: vm.skill,
    exprience: vm.exprience,
  };
  console.log(vm.title);
  jobFactory.getAll(this.count, this.offset).then(function (response) {
    vm.jobs = response;
  });

  vm.nextPage = function () {
    console.log("======");
    vm.offset = vm.offset + vm.count;
    jobFactory.getAll(this.count, this.offset).then(function (response) {
      vm.jobs = response;
    });
  };
  vm.prevPage = function () {
    vm.offset = vm.offset - vm.count;
    if (this.offset < 0) {
      vm.offset = 0;
    }
    jobFactory.getAll(this.count, this.offset).then(function (response) {
      vm.jobs = response;
    });
  };

  vm.addJob = function () {
    jobFactory.addJob(newJob).then(function (response) {
      console.log(response);
      $location.path("/jobs");
    });
  };

  vm.search = function (searchKey) {
    console.log(searchKey);
    jobFactory.search(searchKey).then(function (response) {
      $location.path("/");
      vm.jobs = response;
    });
  };

  // vm.updategame = function () {
  //   vm.update = vm.games;
  // };
}
