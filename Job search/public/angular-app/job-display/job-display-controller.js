angular.module("jobApp").controller("getOneJob", getOneJob);

function getOneJob(jobFactory, $routeParams) {
  console.log("akdkjadbk");
  const vm = this;
  const id = $routeParams.id;

  jobFactory.getOne(id).then(function (response) {
    vm.Job = response;
  });

  vm.deleteJob = function (id) {
    jobFactory.deleteOne(id).then(function (response) {
      console.log("successfull deleted");
    });
  };
}
