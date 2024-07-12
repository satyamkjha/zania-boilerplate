import { VStack, Text } from '@chakra-ui/react';
import React from 'react';
import TaskComp from './Task';
import { useTaskData } from 'context/TaskContext';

const TaskContainer: React.FC = () => {
	const { filteredTasks } = useTaskData();

	return (
		<VStack
			overflowY={'scroll'}
			height={'calc(100% - 50px)'}
			spacing={5}
			width={'100%'}>
			{filteredTasks.length ? (
				filteredTasks.map((item) => <TaskComp task={item} />)
			) : (
				<Text>No Task with the searched Category was found</Text>
			)}
		</VStack>
	);
};

export default TaskContainer;
