import Node from "./node";

export default class LinkedList{
    Head: Node | null = null;
    Tail: Node | null = null;
    constructor(data?: unknown){
        if(data === null || data === undefined){
            this.Head = null;
            this.Tail = null;
            return;
        }else{
            const newNode = new Node(data)
            this.Head = newNode;
            this.Tail = newNode;
        }
    }


    // Checks if the linked list is empty
    IsEmpty = (): boolean => {
        if(this.Head == null){
            return true
        }else{
            return false;
        }
    }

    // Appends a new node to the beginning of the linked list
    AddFirst = (data: unknown): void => {
        const newNode = new Node(data);
        if(this.Head === null){
            this.Head = newNode             
        }else{
            newNode.nextNode = this.Head
            this.Head = newNode
        }
    }

    // Appends a new node at the end of the linked list
    AddLast = (data: unknown): void => {
        const newNode = new Node(data)
        if(this.Head === null){
            this.Head = newNode;
            return 
        }else{
            if(this.Tail){
                this.Tail.nextNode = newNode;
                this.Tail = newNode;
                return
            }
        }        
    }

    // Calculates and returns the number of elements in the linked list
    Size = (): number => {
        let size: number = this.Head? 1: 0;
        let current = this.Head;
        while(current?.nextNode?.data){
            size++;
            if(current?.nextNode){
                current = current.nextNode
            }
        }
        return size;
    } 

    // Prints to the console, all the elements of the linked list
    Print = (): void => {
        const count: number = this.Size(); 
        let current = this.Head;
        let result: string = "[";
        if(this.Head === null){
            result+= "]";            
        }
        for(let i = 0; i < count; i++){        
            if(current?.nextNode){
                result +=  current?.data + " -> ";
                current = current?.nextNode;
            }else{
                result += current?.data + "]";           
            }        
        }
        console.log(result);
    }
    
    // Computes the index of a node. Returns the index as a number if found and if not found, it returns -1.
    IndexOf = (data: unknown): number => {
        const node = new Node(data)
        let index: number = 0;
        // let found: boolean = false;
        let current = this.Head
        while(current?.data){
            index += 1;
            if(current?.data === data) {
                // found = true
                return index - 1;
            }
            if(current?.nextNode){
                current = current.nextNode
            }else{
                current = null;
            }         
        }
        return -1
    }

    // Checks if a node is contained in a list. Returns boolean;
    Contains = (data: unknown): boolean => {
        const newNode = new Node(data);
        let found: boolean = false;
        let current = this.Head;
        while(current){
            if(current.data === data){
                found = true;
            }
            if(current?.nextNode){
                current = current.nextNode
            }else{
                current = null;
            }   
        }
        return found;
    }

    // Gets the previous node to the given node. Returns a Node if found, and null if not found
    GetPreviousNode = (data: unknown) => {
        const node = new Node(data);
        let current = this.Head;
        while(current){
            if(current?.nextNode?.data === node.data) return current;
            current = current?.nextNode? current.nextNode: null
        }
        return null
    }

    // Inserts a new node at the given position. Returns void;
    Insert = (data: unknown, position: number) => {
        const node = new Node(data);
        const count: number = this.Size();
        if(position === 0){
            this.AddFirst(data)
            return 
        }else if(position === count - 1){
            this.AddLast(data)
            return
        }else{
            let index: number = 0;
            let current = this.Head;
            while(index < count){
                if(index === position - 1 &&  current?.nextNode){
                    node.nextNode = current?.nextNode;
                    current.nextNode = node;
                    return
                }
                current = current?.nextNode? current.nextNode: null
                index++
            }
        }
        return null
    }

}