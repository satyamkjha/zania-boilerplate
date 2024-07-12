import {
	Button,
	Flex,
	HStack,
	Input,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';
import AddTask from 'components/AddTask';
import TaskContainer from 'components/TaskContainer';
import { useTaskData } from 'context/TaskContext';
import React, { useState } from 'react';

const Home = () => {
	const [term, setTerm] = useState('');
	const { clearFilter, filterTasks } = useTaskData();
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<Flex
			height={'100%'}
			width={'100%'}
			maxW='1000px'
			flexDir={'column'}
			justifyContent={'flex-start'}
			alignItems={'center'}
			padding={[3, 3, 5, 10]}>
			<Stack
				justifyContent={'space-around'}
				alignItems={'center'}
				width={['100%']}
				py={10}
				border={'1px solid #ececec80'}
				borderRadius={10}
				mb={5}
				px={5}
				boxShadow={'5px 5px 10px #ececec'}
				flexDir={['column', 'column', 'row']}
				height={['fit-content', 'fit-content', '50px']}>
				<Button
					onClick={onOpen}
					colorScheme='teal'
					width={['100%', '100%', '150px']}>
					Add task
				</Button>
				<Input
					width={['100%', '100%', 'calc(100% - 300px)']}
					value={term}
					onChange={(e) => setTerm(e.target.value)}></Input>
				<HStack width={['100%', '100%', '250px']}>
					<Button w='100px' onClick={() => filterTasks(term)}>
						Search
					</Button>
					<Button
						colorScheme='purple'
						width={['calc(100% - 100px)', 'calc(100% - 100px)', '150px']}
						onClick={clearFilter}>
						Cancel
					</Button>
				</HStack>
			</Stack>
			<TaskContainer />
			<AddTask isOpen={isOpen} onClose={onClose} />
		</Flex>
	);
};

export default Home;
