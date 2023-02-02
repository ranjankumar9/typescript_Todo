import axios,{AxiosResponse} from 'axios'
import { Todo } from './Utils';

export const getTodos = async() => {
    let res: AxiosResponse<Todo[]> = await axios.get("http://localhost:8080/todos")
    return res.data;
}

export const addTodos = async(title: string) => {
    let res: AxiosResponse<Todo> = await axios.post("http://localhost:8080/todos", {
        title,
        status: false,
    })
    return res.data;
}

export const toggleTodo = async(id:number, status: boolean) => {
    let res:AxiosResponse<Todo> = await axios.patch(`http://localhost:8080/todos/${id}`,{
        status
    })
    return res.data;
}

export const deleteTodo = async(id:number) => {
    let res:AxiosResponse<Todo> = await axios.delete(`http://localhost:8080/todos/${id}`)
    return res.data;
}