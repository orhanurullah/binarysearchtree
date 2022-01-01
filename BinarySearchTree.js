class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 0;
    }
}

class BinarySearchTree {

    constructor(){
        this.root = null;
    }

    create(data){
        const newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(current){
            if(data === current.data){
                return undefined;
            }
            if(data < current.data){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

const bst = new BinarySearchTree();
bst.create(10);
bst.create(32);
bst.create(3);
bst.create(7);
bst.create(4);
console.log(bst);