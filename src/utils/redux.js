const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const REQUEST_LOAD_MORE = 'REQUEST_LOAD_MORE';
const SUCCESS_LOAD_MORE = 'SUCCESS_LOAD_MORE';
const FAILURE_LOAD_MORE = 'FAILURE_LOAD_MORE';

export const createRequestTypes = (base, withLoadMore = false) => {
  let types = [REQUEST, SUCCESS, FAILURE];

  if (withLoadMore) types = types.concat([REQUEST_LOAD_MORE, SUCCESS_LOAD_MORE, FAILURE_LOAD_MORE]);

  return (types.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {}));
};

export const generateAsyncActionCreator = status => ({
  request: (data, context) => ({
    type: status.REQUEST,
    payload: data,
    context,
  }),
  success: (data, context) => ({
    type: status.SUCCESS,
    payload: data,
    context,
  }),
  error: (err, context) => ({
    type: status.FAILURE,
    payload: err,
    context,
  }),
});
