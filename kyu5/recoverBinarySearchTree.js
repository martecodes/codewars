const recoverTree = function(root) {
    //target the swapped nodes
    //BST inorder traversal on BST leads to an ascending array
    
    //[1,2,3] => [3,2,1]
    //[1,2,3,4] => [1,3,2,4]
    //[1,2,3,4,5,6] => [5,2,3,4,1,6]
    
    //target the first swapped node where the next on is smaller => first node
        //target the next swapped node, where the prev is bigger => last node
    
    //keep track of the previous node and compare
    
    let prev = null
    let first = null
    let second = null
    
    const walk = (node) => {
        if(node === null) return
        
        if(node.left){
            walk(node.left)
        }
        
        if(prev?.val > node.val){
            if(first === null){
                first = prev
            }
            
            second = node
        }
        
        prev = node
    
        if(node.right){
            walk(node.right)
        }
    }

    walk(root);

    [first.val, second.val] = [second.val, first.val]
};