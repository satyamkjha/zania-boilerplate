import { ReactNode } from 'react';

export interface Task {
	id: number;
	category: string;
	title: string;
	status: string;
	subtitle: string;
}

export const initialTasks = [
	{
		id: 1,
		category: 'Shopping',
		title: 'Shopping',
		status: 'pending',
		subtitle: "Get essentials from Trader Joe's",
	},
	{
		id: 2,
		category: 'Shopping',
		title: 'Shoes',
		status: 'pending',
		subtitle: 'Purchase running shoes',
	},
	{
		id: 3,
		category: 'Work',
		title: 'Presentation',
		status: 'pending',
		subtitle: 'Create slides for team meeting',
	},
	{
		id: 4,
		category: 'Work',
		title: 'Review',
		status: 'pending',
		subtitle: "Review frontend team's pull request",
	},
	{
		id: 5,
		category: 'Home',
		title: 'Garage',
		status: 'pending',
		subtitle: 'Organize tools and discard unnecessary items',
	},
	{
		id: 6,
		category: 'Home',
		title: 'Plants',
		status: 'pending',
		subtitle: 'Water indoor and outdoor plants',
	},
	{
		id: 7,
		category: 'Health',
		title: 'Exercise',
		status: 'pending',
		subtitle: 'Complete 30-minute yoga session',
	},
	{
		id: 8,
		category: 'Health',
		title: 'Appointment',
		status: 'pending',
		subtitle: 'Visit dentist for routine check-up',
	},
];

export interface TaskContextType {
	tasks: Task[];
	filteredTasks: Task[];
	filterTasks: (term: string) => void;
	deleteTasks: (id: number) => void;
	doneTask: (id: number) => void;
	clearFilter: () => void;
	addtask: (task: {
		category: string;
		title: string;
		status: string;
		subtitle: string;
	}) => void;
}

export interface TaskProviderProps {
	children: ReactNode;
}
