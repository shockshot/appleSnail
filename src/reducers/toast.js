import { TOAST } from 'actions/ToastActions';
import { handleActions } from 'redux-actions';
import {Logger} from 'helpers';

export default handleActions({
  //목록
  ///////////////////////////////////////////////
  [TOAST.SET]: (state, action) => {
    const messages = Object.assign([], state.messages);
    messages.push({
      message: action.message,
      messageId: action.messageId
    })
    Logger.debug('message(set):', messages);
    return {
      messages: messages
    };
  },
  [TOAST.DISMISS]: (state, action) => {
    const messages = Object.assign([], state.messages);
    const idx = messages.findIndex(message => message.messageId === action.messageId);
    messages.splice(idx,1);
    Logger.debug('messages (dismiss):', messages)
    return {
      messages: messages
    }
  }
}, {messages: []})