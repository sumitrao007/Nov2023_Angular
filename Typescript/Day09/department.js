"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(r) {
        this.role = r;
    }
    //getter
    Department.prototype.getRole = function () {
        return (this.role);
    };
    //setter
    Department.prototype.setRole = function (r) {
        this.role = r;
    };
    return Department;
}());
exports.Department = Department;
