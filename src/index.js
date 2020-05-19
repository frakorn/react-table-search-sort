import List from './components/list/List';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<List />, 
    document.getElementById('root')
)

serviceWorker.unregister();
