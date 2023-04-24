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
        // Checks if the linked list is empty
        this.IsEmpty = () => {
            if (this.Head == null) {
                return true;
            }
            else {
                return false;
            }
        };
        // Appends a new node to the beginning of the linked list
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
        // Appends a new node at the end of the linked list
        this.AddLast = (data) => {
            const newNode = new node_1.default(data);
            if (this.Head === null) {
                this.Head = newNode;
                return;
            }
            else {
                if (this.Tail) {
                    this.Tail.nextNode = newNode;
                    this.Tail = newNode;
                    return;
                }
            }
        };
        // Calculates and returns the number of elements in the linked list
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
        // Prints to the console, all the elements of the linked list
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
        // Computes the index of a node. Returns the index as a number if found and if not found, it returns -1.
        this.IndexOf = (data) => {
            const node = new node_1.default(data);
            let index = 0;
            // let found: boolean = false;
            let current = this.Head;
            while (current === null || current === void 0 ? void 0 : current.data) {
                index += 1;
                if ((current === null || current === void 0 ? void 0 : current.data) === data) {
                    // found = true
                    return index - 1;
                }
                if (current === null || current === void 0 ? void 0 : current.nextNode) {
                    current = current.nextNode;
                }
                else {
                    current = null;
                }
            }
            return -1;
        };
        // Checks if a node is contained in a list. Returns boolean;
        this.Contains = (data) => {
            const newNode = new node_1.default(data);
            let found = false;
            let current = this.Head;
            while (current) {
                if (current.data === data) {
                    found = true;
                }
                if (current === null || current === void 0 ? void 0 : current.nextNode) {
                    current = current.nextNode;
                }
                else {
                    current = null;
                }
            }
            return found;
        };
        // Gets the previous node to the given node. Returns a Node if found, and null if not found
        this.GetPreviousNode = (data) => {
            var _a;
            const node = new node_1.default(data);
            let current = this.Head;
            while (current) {
                if (((_a = current === null || current === void 0 ? void 0 : current.nextNode) === null || _a === void 0 ? void 0 : _a.data) === node.data)
                    return current;
                current = (current === null || current === void 0 ? void 0 : current.nextNode) ? current.nextNode : null;
            }
            return null;
        };
        // Inserts a new node at the given position. Returns void;
        this.Insert = (data, position) => {
            const node = new node_1.default(data);
            const count = this.Size();
            if (position === 0) {
                this.AddFirst(data);
                return;
            }
            else if (position === count - 1) {
                this.AddLast(data);
                return;
            }
            else {
                let index = 0;
                let current = this.Head;
                while (index < count) {
                    if (index === position - 1 && (current === null || current === void 0 ? void 0 : current.nextNode)) {
                        node.nextNode = current === null || current === void 0 ? void 0 : current.nextNode;
                        current.nextNode = node;
                        return;
                    }
                    current = (current === null || current === void 0 ? void 0 : current.nextNode) ? current.nextNode : null;
                    index++;
                }
            }
            return null;
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
