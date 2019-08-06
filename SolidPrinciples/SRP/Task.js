"use strict";
exports.__esModule = true;
var Database_1 = require("./Database");
/*
* THE CLASS DOESN'T FOLLOW THE SRP PRINCIPLE (Commented Wrong Code)
*/
//class Task {
//    private db: Database;
//    constructor(private title: string, private deadline: Date) {
//        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
//    }
//    getTitle() {
//        return this.title + "(" + this.deadline + ")";
//    }
//    save() {
//        this.db.tasks.save({ title: this.title, date: this.deadline });
//    }
//}
var Task = /** @class */ (function () {
    function Task(title, deadline) {
        this.title = title;
        this.deadline = deadline;
    }
    Task.prototype.getTitle = function () {
        return this.title + "(" + this.deadline + ")";
    };
    return Task;
}());
var TaskRepository = /** @class */ (function () {
    function TaskRepository() {
        this.db = Database_1.Database.connect("admin:password@fakedb", ["tasks"]);
    }
    TaskRepository.prototype.save = function (task) {
        this.db.tasks.save(JSON.stringify(task));
    };
    return TaskRepository;
}());
