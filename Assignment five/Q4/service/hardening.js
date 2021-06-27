module.exports.harden = function (err, result) {
  const response = {
    status: 200,
    massage: result,
  };

  if (err) {
    response.status = 500;
    response.massage = err;
  }
  if (!result) {
    response.status = 400;
    response.massage = { error: "you entered wrong input" };
  }

  return response;
};
