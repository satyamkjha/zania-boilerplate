import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import { Flex, Heading, VStack, Text, Button, HStack } from '@chakra-ui/react';
import { Task } from 'common/variables';
import { useTaskData } from 'context/TaskContext';
import React from 'react';

const TaskComp: React.FC<{
	task: Task;
}> = ({ task }) => {
	const { deleteTasks, doneTask } = useTaskData();

	return (
		<Flex
			justifyContent={'space-between'}
			alignItems={['flex-start', 'flex-start', 'center']}
			flexDir={['column', 'column', 'row']}
			p={5}
			borderRadius={10}
			boxShadow={'2px 2px 5px #ececec'}
			backgroundColor={task.status === 'done' ? '#D7FFE4' : '#f0f7fc'}
			width={'100%'}>
			<VStack mb={[5, 5, 0]} spacing={2} alignItems={'flex-start'}>
				<Heading size={'md'}>{task.title}</Heading>
				<Text>{task.subtitle}</Text>
			</VStack>
			<HStack>
				<Button
					rightIcon={<CheckIcon />}
					colorScheme='teal'
					onClick={() => doneTask(task.id)}>
					Done
				</Button>
				<Button
					rightIcon={<DeleteIcon />}
					colorScheme='red'
					onClick={() => deleteTasks(task.id)}>
					Delete
				</Button>
			</HStack>
		</Flex>
	);
};

export default TaskComp;
