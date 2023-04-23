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

    IsEmpty = () => {
        if(this.Head == null){
            return true
        }else{
            return false;
        }
    }

    AddFirst = (data: unknown) => {
        const newNode = new Node(data);
        if(this.Head === null){
            this.Head = newNode             
        }else{
            newNode.nextNode = this.Head
            this.Head = newNode
        }
    }

    AddLast = (data: unknown) => {
        const newNode = new Node(data)
        
    }
    
    Size = () => {
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

    Print = () => {
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

    AddNode = (data: unknown) => {
        const newNode = new Node(data);
        if(this.Head === null){
            this.Head = newNode
            this.Tail = newNode
        }
    }
}