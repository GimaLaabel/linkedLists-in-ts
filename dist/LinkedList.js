"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
class LinkedList {
    constructor(data) {
        this.Head = null;
        this.Tail = null;
        this.IsEmpty = () => {
            if (this.Head == null) {
                return true;
            }
            else {
                return false;
            }
        };
        this.AddFirst = (data) => {
            const newNode = new node_1.default(data);
            if (this.Head === null) {
                this.Head = newNode;
            }
            else {
                newNode.nextNode = this.Head;
                this.Head = newNode;
            }
        };
        this.AddLast = (data) => {
            const newNode = new node_1.default(data);
        };
        this.Size = () => {
            var _a;
            let size = this.Head ? 1 : 0;
            let current = this.Head;
            while ((_a = current === null || current === void 0 ? void 0 : current.nextNode) === null || _a === void 0 ? void 0 : _a.data) {
                size++;
                if (current === null || current === void 0 ? void 0 : current.nextNode) {
                    current = current.nextNode;
                }
            }
            return size;
        };
        this.Print = () => {
            const count = this.Size();
            let current = this.Head;
            let result = "[";
            if (this.Head === null) {
                result += "]";
            }
            for (let i = 0; i < count; i++) {
                if (current === null || current === void 0 ? void 0 : current.nextNode) {
                    result += (current === null || current === void 0 ? void 0 : current.data) + " -> ";
                    current = current === null || current === void 0 ? void 0 : current.nextNode;
                }
                else {
                    result += (current === null || current === void 0 ? void 0 : current.data) + "]";
                }
            }
            console.log(result);
        };
        this.AddNode = (data) => {
            const newNode = new node_1.default(data);
            if (this.Head === null) {
                this.Head = newNode;
                this.Tail = newNode;
            }
        };
        if (data === null || data === undefined) {
            this.Head = null;
            this.Tail = null;
            return;
        }
        else {
            const newNode = new node_1.default(data);
            this.Head = newNode;
            this.Tail = newNode;
        }
    }
}
exports.default = LinkedList;
