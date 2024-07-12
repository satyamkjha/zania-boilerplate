import Home from './Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import { ChakraProvider, Container } from '@chakra-ui/react';
import ErrorPage from 'ErrorPage';
import { theme } from 'theme';
import { TaskProvider } from 'context/TaskContext';

function App() {
	return (
		<div className='app'>
			<TaskProvider>
				<ChakraProvider theme={theme}>
					{/* <Header /> */}
					<Container
						width={'100%'}
						maxWidth={'100vw'}
						display={'flex'}
						justifyContent={'center'}
						height={'calc(100%)'}
						overflowY={'scroll'}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='*' element={<ErrorPage />} />
						</Routes>
					</Container>
				</ChakraProvider>
			</TaskProvider>
		</div>
	);
}

export default App;
