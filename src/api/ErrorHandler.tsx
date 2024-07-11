import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import API from '../helpers/api';

const ErrorHandler: React.FC<{ children: any }> = ({ children }) => {
	const toast = useToast();
	// const history = useHistory();

	useEffect(() => {
		const interceptor = API.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				toast({
					title: `Unexpected Error`,
					status: 'error',
					isClosable: true,
					position: 'bottom',
				});
				return error;
			}
		);

		return () => {
			API.interceptors.response.eject(interceptor);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
};
