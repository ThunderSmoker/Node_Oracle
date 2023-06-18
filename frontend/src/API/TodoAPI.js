import axios from 'axios';
const API= axios.create({baseURL:'http://localhost:5000'});
export const fetchTodos = () => API.get('/');
export const addTodo = (data) => API.post(`/create`,data);
export const deleteTodo = (data) => API.post(`/delete`,data);