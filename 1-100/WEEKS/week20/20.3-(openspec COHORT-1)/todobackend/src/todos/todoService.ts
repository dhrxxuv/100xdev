import { title } from "process";
import { Todo } from "./todo";

export type TodoCreationParam = Pick<Todo, "title"| "description">

export class TodoService{
    public get(todoId:string):Todo{
        return{
            id:todoId,
            title:"Mocked title",
            description:"Mocked description",
            done:false
        }
    }

    public create(todoCreationParams:TodoCreationParam):Todo{
        console.log('Mocked db call')
        const id = Math.random().toString()
        return{
            id,
            title:todoCreationParams.title,
            description:todoCreationParams.description,
            done:false
        }
    }
}