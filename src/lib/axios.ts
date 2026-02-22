import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "http://localhost:5050/api" : "magical-music-backend-production.up.railway.app/api",
});
