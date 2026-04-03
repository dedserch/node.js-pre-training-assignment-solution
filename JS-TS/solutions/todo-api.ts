import { InMemoryRepository } from './repository';
import {Todo, NewTodo, TodoStatus} from './types';

class TodoNotFoundError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'TodoNotFoundError'
    }
}

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    try {
        let res = await new Promise<Todo[]>((resolve, reject) => {
            setTimeout(() => resolve(this.repo.findAll()),300)
        })

        return res
    } catch (error) {
        throw new TodoNotFoundError("Todos not found")
    }
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    try {
        const todo = {
            id: 1,
            status: TodoStatus.PENDING,
            ...newTodo,
            createdAt: new Date()
        }
        let res = await new Promise<Todo>((resolve, reject) => {
            setTimeout(() => resolve(this.repo.add(todo)),300)
        })

        return res
    } catch (error) {
        throw new Error(error)
    }
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    try {
        let res = await new Promise<Todo>((resolve, reject) => {
            setTimeout(() => resolve(this.repo.update(id, update)),300)
        })

        return res
    } catch (error) {
        throw new TodoNotFoundError(`Todo with id ${id} not found`)
    }
  }

  async remove(id: number): Promise<void> {
    try {
        let res = await new Promise<void>((resolve, reject) => {
            setTimeout(() => resolve(this.repo.remove(id)), 300)
        })

        return res
    } catch (error) {
        throw new TodoNotFoundError(`Todo with id ${id} not found`)
    }
  }
}
