import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
	return (
		<Flex
			boxShadow={'5px 0px 10px #ececec'}
			justifyContent={'space-between'}
			px={15}
			h='80px'
			alignItems={'center'}>
			<Heading fontSize={['lg']}>Zania Live Coding Round</Heading>
		</Flex>
	);
};

export default Header;
