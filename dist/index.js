"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./LinkedList"));
const list1 = new LinkedList_1.default(1);
list1.AddLast(2);
list1.AddLast(3);
list1.AddLast(4);
list1.AddLast(5);
list1.AddLast(6);
// list1.AddFirst(2)
// list1.AddFirst(3)
// list1.AddFirst(4)
// list1.AddFirst(5)
// list1.AddFirst(6)
console.log({ isEmpty: list1.IsEmpty() });
let list1size = list1.Size();
console.log({ ['size of list']: list1size });
list1.Insert(7, 9);
list1.Print();
const item = 7;
console.log({ ["index of " + item]: list1.IndexOf(item) });
console.log({ found: list1.Contains(3) });
const prevNode = list1.GetPreviousNode(item);
console.log({ ["Previous node of " + item]: prevNode === null || prevNode === void 0 ? void 0 : prevNode.data });
