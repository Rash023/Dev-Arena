"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "Mock todo",
            description: "Mocked todo",
            done: false
        };
    }
}
exports.TodoService = TodoService;
