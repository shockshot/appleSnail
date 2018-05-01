const defaultErrorHandler = (res, err) => {
  res.status(500).send('err:'+err);
}

export default defaultErrorHandler;