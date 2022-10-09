console.log("Hello Youtube!!");

// Class to store a tree node

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function getHeightAndBalance(node) {
    if(node == null) {
        return 0;
    }
    let leftHeight = getHeightAndBalance(node.left);
    let rightHeight = getHeightAndBalance(node.right);
    if(leftHeight == -1 || rightHeight == -1) {
        return -1;
    }
    if(Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    } else {
        // return the height
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

let tree = new TreeNode(100);
tree.left = new TreeNode(50);
tree.left.left = new TreeNode(40);
tree.right = new TreeNode(80);
tree.right.left = new TreeNode(60);
tree.right.right = new TreeNode(90);
tree.right.right.right = new TreeNode(95);


let treeHeight = getHeightAndBalance(tree);
if(treeHeight > -1) {
    console.log('Balanced tree');
    console.log('Height: ', treeHeight);
} else {
    console.log('Unbalanced tree');
}


