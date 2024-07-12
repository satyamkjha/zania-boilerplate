import {
	Button,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';
import { useTaskData } from 'context/TaskContext';
import React, { useState } from 'react';

const AddTask: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
	isOpen,
	onClose,
}) => {
	const [task, setTask] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [taskError, setTaskError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const [categoryError, setCategoryError] = useState(false);
	const { addtask } = useTaskData();

	return (
		<Modal size={'2xl'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add Task</ModalHeader>
				<ModalCloseButton />
				<ModalBody
					display={'flex'}
					flexDir={'column'}
					alignItems={'flex-start'}
					justifyContent={'flex-start'}>
					<HStack w='100%' mb={2}>
						<Text w='100px'>Task</Text>

						<Input
							width={'calc(100% - 100px)'}
							isRequired
							value={task}
							onChange={(e) => {
								setTask(e.target.value);
								if (taskError) setTaskError(false);
							}}></Input>
					</HStack>
					{taskError && (
						<Text color='orange' ml={'110px'} w='100%' mb={5}>
							Task field cannot be left empty
						</Text>
					)}

					<HStack w='100%' mb={2}>
						<Text w='100px'>Description</Text>

						<Input
							width={'calc(100% - 100px)'}
							isRequired
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
								if (descriptionError) setDescriptionError(false);
							}}></Input>
					</HStack>

					{descriptionError && (
						<Text color='orange' ml={'110px'} w='100%' mb={5}>
							Description field cannot be left empty
						</Text>
					)}

					<HStack w='100%' mb={2}>
						<Text w='100px'>Category</Text>

						<Input
							width={'calc(100% - 100px)'}
							isRequired
							value={category}
							onChange={(e) => {
								setCategory(e.target.value);
								if (categoryError) setCategoryError(false);
							}}></Input>
					</HStack>
					{categoryError && (
						<Text color='orange' ml={'110px'} w='100%' mb={5}>
							Category field cannot be left empty
						</Text>
					)}
				</ModalBody>

				<ModalFooter>
					<Button
						onClick={() => {
							if (!task.length) {
								setTaskError(true);
								return;
							}
							if (!description.length) {
								setDescriptionError(true);
								return;
							}
							if (!category.length) {
								setCategoryError(true);
								return;
							}
							addtask({
								title: task,
								subtitle: description,
								category: category,
								status: 'pending',
							});
							setTask('');
							setCategory('');
							setDescription('');
							onClose();
						}}
						colorScheme='teal'>
						Add task
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddTask;
