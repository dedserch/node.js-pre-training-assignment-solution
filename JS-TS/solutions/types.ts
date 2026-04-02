interface Todo {
    id: number;
    title: string;
    description?: string;
    status?: TodoStatus;
    readonly createdAt: Date;
}

enum TodoStatus {
    PENDING = "pending",
    IN_PROGRESS = "inProgress",
    COMPLETED = "completed",
}

type NewTodo = Omit<Todo, "id" | "createdAt">

export { Todo, NewTodo ,TodoStatus };