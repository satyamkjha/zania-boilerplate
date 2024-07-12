import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const ErrorPage = () => {
	const { idValue } = useParams<{ idValue: string }>();

	console.log(idValue);

	return (
		<VStack
			spacing={5}
			height={'100%'}
			color={'black'}
			width={'100%'}
			justifyContent={'center'}
			flexDirection={'column'}
			alignItems={'center'}>
			<Text>404 Not Found</Text>
		</VStack>
	);
};

export default ErrorPage;
