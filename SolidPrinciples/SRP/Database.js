"use strict";
exports.__esModule = true;
var Database = /** @class */ (function () {
    function Database(connectionString, repository) {
        this.connectionString = connectionString;
        this.repository = repository;
    }
    Database.connect = function (connectionString, repository) {
        return new Database(connectionString, repository);
    };
    return Database;
}());
exports.Database = Database;
var Entity = /** @class */ (function () {
    function Entity() {
    }
    Entity.prototype.save = function (jsonEntity) {
        //SAVING DATA
        return true;
    };
    return Entity;
}());
exports.Entity = Entity;
