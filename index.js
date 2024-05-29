"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var Student = /** @class */ (function () {
    function Student(n) {
        this.name = n;
    }
    return Student;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.students = [];
    }
    Person.prototype.addStudent = function (obj) {
        this.students.push(obj);
    };
    return Person;
}());
var persons = new Person();
var startProgram = function (persons) { return __awaiter(void 0, void 0, void 0, function () {
    var _loop_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(chalk_1.default.bold.magentaBright("*** Welcome to the Program... ***"));
                _loop_1 = function () {
                    var answer, engageStudent_1, student, newStudent;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, inquirer_1.default.prompt([{
                                        name: "Select",
                                        type: "list",
                                        message: "Who do you want to talk to?",
                                        choices: ["Teacher", "Student", "Exit"]
                                    }])];
                            case 1:
                                answer = _b.sent();
                                if (!(answer.Select == "Teacher")) return [3 /*break*/, 2];
                                console.log(chalk_1.default.yellowBright("Hello Teacher! How are You?"));
                                return [3 /*break*/, 5];
                            case 2:
                                if (!(answer.Select == "Student")) return [3 /*break*/, 4];
                                return [4 /*yield*/, inquirer_1.default.prompt([{
                                            name: "student",
                                            type: "input",
                                            message: "Which student do you want to talk to?"
                                        }])];
                            case 3:
                                engageStudent_1 = _b.sent();
                                student = persons.students.find(function (val) { return val.name == engageStudent_1.student; });
                                if (!student) {
                                    newStudent = new Student(engageStudent_1.student);
                                    persons.addStudent(newStudent);
                                    console.log("Hello' ".concat(newStudent.name, " Nice to meet you!"));
                                    console.log(chalk_1.default.yellowBright("How are you?"));
                                    console.log("\nNew Student!!! This student added in your list:");
                                    console.log(persons.students);
                                }
                                if (student) {
                                    console.log("Hello' ".concat(engageStudent_1.student, " Nice to see you again!"));
                                    console.log(chalk_1.default.yellowBright("How are you? \n"));
                                    console.log(persons.students);
                                }
                                return [3 /*break*/, 5];
                            case 4:
                                if (answer.Select == "Exit") {
                                    console.log(chalk_1.default.bold.magenta("*** Exiting the Program ***"));
                                    process.exit();
                                }
                                _b.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                };
                _a.label = 1;
            case 1: return [5 /*yield**/, _loop_1()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                if (true) return [3 /*break*/, 1];
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
startProgram(persons);
