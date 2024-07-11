import API from '../helpers/api';

export const mockGetAPI = async (
	project_url: string,
	project_branch: string
) => {
	try {
		const { data } = await API.get<{}>('', {
			//   body,
		});
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const mockPostAPI = async (
	project_url: string,
	project_branch: string
) => {
	try {
		const { data } = await API.post<{}>('', {
			//   body,
		});
		return data;
	} catch (e) {
		console.log(e);
	}
};
