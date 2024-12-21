import { Todo } from "./todo";


export type TodoCreationParams= Pick<Todo,"title" | "description">

export class TodoService{
    public get(todoId:string):Todo{
        return {
            id:todoId,
            title:"Mock todo",
            description:"Mocked todo",
            done:false
        }

    }
}