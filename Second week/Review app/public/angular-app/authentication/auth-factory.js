angular.module("ReviewApp").factory("AuthFactory", AuthFactory);

function AuthFactory() {
  let auth = false;
  return {
    auth: auth,
  };
}
