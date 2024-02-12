import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	BrowserRouter,
	BrowserRouter as Router,
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { DataProvider } from './context/DataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DataProvider>
			<BrowserRouter>
				<AuthProvider>
					<App />
				</AuthProvider>
			</BrowserRouter>
		</DataProvider>
	</React.StrictMode>
);
