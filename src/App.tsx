import React from 'react';
import cl from './App.module.scss';

const cn = require('classnames');

const App = () => <div className={cn({ [`${cl.text}`]: true })}>Hi Ts</div>;

export default App;
