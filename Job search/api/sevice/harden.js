module.exports.harden = function (err, result) {
  const respose = {
    status: 200,
    massage: result,
  };

  if (err) {
    respose.status = 500;
    respose.massage = err;
  } else if (!result) {
    respose.status = 400;
    respose.massage = { error: "You entered wrong input" };
  }
  return respose;
};
