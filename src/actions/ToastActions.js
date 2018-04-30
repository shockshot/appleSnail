import v4 from 'uuid';
import { Promise } from 'core-js';

export const TOAST = {
  SET:  "TOAST.SET",
  DISMISS: "TOAST.DISMISS"
}

export const addMessage = (message) => dispatch => {
  const messageId = v4();
  dispatch({
    type: TOAST.SET,
    message,
    messageId
  });

  return new Promise((next, revoke) => {
    setTimeout( () => {
      dispatch(dismiss(messageId));
      next();
    }, 3000);
  });
}

export const dismiss = (messageId) => {
  return {
    type: TOAST.DISMISS,
    messageId: messageId
  }
}