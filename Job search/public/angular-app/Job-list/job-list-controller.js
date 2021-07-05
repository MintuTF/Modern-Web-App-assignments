angular.module("jobApp").controller("getAllJob", getAllJob);

function getAllJob(jobFactory, $location, $routeParams) {
  const vm = this;
  vm.count = 2;
  vm.offset = $routeParams.offset ? routeParams.offset : 0;

  jobFactory.getAll(this.count, this.offset).then(function (response) {
    vm.jobs = response;
  });

  vm.nextPage = function () {
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
    const newJob = {
      title: vm.title,
      salary: vm.salary,
      skill: vm.skill,
      exprience: vm.exprience,
      postDate: Date.now(),
    };

    jobFactory.addJob(newJob).then(function (response) {
      console.log("successfully added");
      $location.path("/");
    });
  };

  vm.search = function (searchKey) {
    console.log(searchKey);
    jobFactory.search(searchKey).then(function (response) {
      $location.path("/");
      vm.jobs = response;
    });
  };
}
