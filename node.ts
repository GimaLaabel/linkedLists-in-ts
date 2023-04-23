export default class Node{
    data: unknown;
    nextNode: Node | null = null;
    constructor(data: unknown){
        this.data = data;
    }
}