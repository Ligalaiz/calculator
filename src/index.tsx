import { Global } from '@emotion/react';
import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { globalStyle } from 'src/styles';

ReactDOM.render(
  <>
    <Global styles={globalStyle} />
    <App />
  </>,

  document.getElementById('root'),
);
