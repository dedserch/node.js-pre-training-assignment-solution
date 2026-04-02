import {Todo, TodoStatus} from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  return state.map(todo => completed? {...todo, status: TodoStatus.COMPLETED } : { ...todo, status: TodoStatus.PENDING })
}

export function clearCompleted(state: Todo[]): Todo[] {
  return state.filter(todo => todo.status !== TodoStatus.COMPLETED)
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  return state.reduce((count, todo) => todo.status === status? todo.id++: 0,0)
}
