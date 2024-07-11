import Header from './components/Header';
import Home from './Home';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles.css';
import { Container } from '@chakra-ui/react';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
]);

function App() {
	return (
		<div className='app'>
			<Header />
			<Container
				width={'100%'}
				height={'calc(100% - 80px)'}
				overflowY={'scroll'}>
				<RouterProvider router={router} />
			</Container>
		</div>
	);
}

export default App;
