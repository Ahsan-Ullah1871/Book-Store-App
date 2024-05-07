import axios from "axios";

const AxiosReq = axios.create({
	baseURL: "https://backend-server1.vercel.app/api/v1",
	headers: {
		"access-control-allow-origin": "*",
		"Content-type": "application/json",
	},
});

// request interceptor
AxiosReq.interceptors.request.use((config) => {
	// const token = localStorage.getItem("token");
	// if (token) {
	//     config.headers.Authorization = `Bearer ${token}`;
	// }
	return config;
});

// response interceptor
AxiosReq.interceptors.response.use(
	(response) => {
		return response?.data?.data?.data;
	},
	(error) => {
		if (error.response.status === 401) {
			console.log(error);
		}
		return Promise.reject(error);
	}
);

export default AxiosReq;

