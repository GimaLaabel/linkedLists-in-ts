"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./LinkedList"));
const list1 = new LinkedList_1.default();
// list1.AddFirst(2)
// list1.AddFirst(3)
// list1.AddFirst(4)
// list1.AddFirst(5)
// list1.AddFirst(6)
console.log(list1.IsEmpty());
const list1size = list1.Size();
console.log(list1size);
list1.Print();
