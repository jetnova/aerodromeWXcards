import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.css';

import App from './components/javascript/App';

// FontAwesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
library.add(fab, far);

ReactDOM.render(<App />, document.getElementById('root'));
