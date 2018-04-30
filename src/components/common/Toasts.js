import React from 'react';
import { Alert } from 'reactstrap';

// import {Logger} from 'helpers';

import classNames from 'classnames/bind';
import styles from './Toasts.scss';
const st = classNames.bind(styles);

// import v4 from 'uuid';

const Toasts = (props) => 
<div className={st('toastContainer')+' container' }>
  { props.messages.map(message => 
    <Alert className={st('toast')} color="info" key={message.messageId}>
      {message.message}
    </Alert>
  ) }
</div>

export default Toasts;