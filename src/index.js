import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './container/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<div>
		<Provider store={Store}>
			<App />
		</Provider>
	</div>
)
