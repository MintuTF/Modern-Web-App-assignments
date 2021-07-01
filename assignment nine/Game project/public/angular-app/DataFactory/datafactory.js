angular.module("gameApp").factory("gameFactory", gameFactory);

function gameFactory($http) {
  return {
    getOne: getOneGame,
    getAll: getAllGame,
    addgame: addgame,
    deleteOne: deleteOne,
  };

  function getAllGame() {
    return $http.get("/api/games").then(complete).catch(failed);
  }

  function getOneGame(id) {
    return $http
      .get("/api/games/" + id)
      .then(complete)
      .catch(failed);
  }

  function addgame(newGame) {
    return $http.post("/api/games/", newGame).then(complete).catch(failed);
  }
  function deleteOne(id) {
    return $http
      .delete("/api/games/" + id)
      .then(complete)
      .catch(failed);
  }

  function complete(response) {
    console.log(response);

    return response.data;
  }
  function failed(error) {
    return error.statusText;
  }
}
