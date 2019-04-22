import { LocalStorage } from "../../helpers/LocalStorageHelper";
import { ITodoItem } from "./Todo";

class TodoServiceClass {
  private STORAGE_KEY: string = "todoList";

  constructor() {}

  get(): Array<ITodoItem> {
    return JSON.parse(LocalStorage.get(this.STORAGE_KEY) || "[]");
  }

  save(todos: Array<ITodoItem>) {
    LocalStorage.set(this.STORAGE_KEY, JSON.stringify(todos));
  }

  clear() {
    LocalStorage.remove(this.STORAGE_KEY);
  }
}

export const TodoService = new TodoServiceClass();
