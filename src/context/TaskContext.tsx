import {
	Task,
	TaskContextType,
	TaskProviderProps,
	initialTasks,
} from 'common/variables';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const TaskContext = createContext<TaskContextType | undefined>(
	undefined
);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [filteredTasks, setFilteredTaks] = useState<Task[]>([]);

	const [maxId, setMaxId] = useState(0);

	useEffect(() => {
		let maximumId = tasks.reduce(
			(max, item) => (item.id > max ? item.id : max),
			0
		);
		setMaxId(maximumId);
	}, []);

	useEffect(() => {
		if (tasks.length) {
			setFilteredTaks(tasks);
			const interval = setInterval(() => {
				localStorage.setItem('tasks', JSON.stringify(tasks));
				clearInterval(interval);
			}, 1000);

			return () => clearInterval(interval); // Cleanup the interval
		} else {
			let data = localStorage.getItem('tasks');
			if (data) {
				setTasks(JSON.parse(data));
			} else {
				setTasks(initialTasks);
			}
		}
	}, [tasks]);

	const filterTasks = (term: string) => {
		let newFilter: Task[] = [];
		tasks.forEach((item: Task) => {
			if (item.category.includes(term)) {
				newFilter.push(item);
			}
		});
		setFilteredTaks(newFilter);
	};

	const clearFilter = () => {
		setFilteredTaks(tasks);
	};

	const deleteTasks = (id: number) => {
		let newTaks = tasks.filter((item) => !(item.id === id));
		setTasks(newTaks);
	};

	const doneTask = (id: number) => {
		let newTasks = tasks.map((item) => {
			if (item.id === id) {
				return {
					...item,
					status: 'done',
				};
			}
			return item;
		});
		setTasks(newTasks);
	};

	const addtask = (task: {
		category: string;
		title: string;
		status: string;
		subtitle: string;
	}) => {
		setTasks((prevState) => [...prevState, { ...task, id: maxId + 1 }]);
		setMaxId(maxId + 1);
	};

	return (
		<TaskContext.Provider
			value={{
				filterTasks,
				doneTask,
				deleteTasks,
				tasks,
				clearFilter,
				filteredTasks,
				addtask,
			}}>
			{children}
		</TaskContext.Provider>
	);
};

export function useTaskData() {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error(
			'TransactionContext must be used within a TransactionProvider'
		);
	}

	return { ...context };
}
