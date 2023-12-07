"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, sal, r) {
        this.fname = f;
        this.lname = l;
        this.salary = sal;
        this.dept = new department_1.Department(r);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n            First Name  :: ".concat(this.fname, "\n            Last Name   :: ").concat(this.lname, "\n            Salary      :: ").concat(this.salary, "\n            Department  :: ").concat(this.dept.getRole(), "\n        "));
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
