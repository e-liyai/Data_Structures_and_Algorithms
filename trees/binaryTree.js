import BinaryTreeNode from '../node/binaryTreeNode'

export default class {
  constructor() {
    this._head = new BinaryTreeNode(null)
    this._count = 0
  }

  add(value) {
    if(this._head._value === null) {
      this._head.nodeValue = value
    } else {
      addTo(this._head, value)
    }
    this._count++
  }

  addTo(binaryTreeNode, value) {
    if(binaryTreeNode.compareWith(value)) {
      if(binaryTreeNode._left === null) {
        binaryTreeNode.nodeLeft = new BinaryTreeNode(value)
      } else {
        addTo(binaryTreeNode._left, value)
      }
    } else {
      if(binaryTreeNode._right === null) {
        binaryTreeNode.nodeRight = new BinaryTreeNode(value)
      } else {
        addTo(binaryTreeNode._right, value)
      }
    }
  }

  contains(value) {
    return findWithParent(value) !== null
  }

  findWithParent(value) {
    let current = this._head
    let parent = null
    let result = null

    while(current._value !== null) {
      let compareResult = current.compareWith(value)
      if (compareResult) {
        parent = current
        current = current._right
      } else if (compareResult === -1) {
        parent = current
        current = current._left
      } else {
        result = {currentNode: current, parentNode: parent}
        break
      }
    }
    return result
  }

  remove(value) {
    let current
    let parent

    current = findWithParent(value)
    if(current === null) return false
    this._count--

    parent = current.parentNode
    current = current.currentNode

    // case 1: current has no right child, then current's left replaces current
    if(current._right === null) {
      if(parent === null) this._head = current._left
      else {
        let result = parent.compareWith(current._value)
        if (result) parent.nodeLeft = current._left
        else if (result < 0) parent.nodeRight = current._left
      }
    }
    // case 2: if current's right child has no left child, then current's right child replaces current
    else if(current._right._left === null) {
      current._right.nodeLeft = current._left

      if(parent === null) this._head = current._right
      else {
        let result = parent.compareWith(current._value)
        if (result) parent.nodeLeft = current._right
        else if (result < 0) parent.nodeRight = current._right
      }
    }
    // case 3: if current's right child has a left child, then replace current with
    //  current's right child's left most node
    else {
      let leftMostNode = current._right._left
      let leftMostParent = current._right

      while(leftMostNode._left === null) {
        leftMostParent = leftMostNode
        leftMostNode = leftMostNode._left
      }

      leftMostParent.nodeLeft = leftMostNode._right

      leftMostNode.nodeLeft = current._left
      leftMostNode.nodeRight = current._right

      if (parent === null) this._head = leftMostNode
      else {
        let result = parent.compareWith(current._value)
        if(result) parent.nodeLeft = leftMostNode
        if(result < 0) parent.nodeRight = leftMostNode
      }
    }
    return true
  }
}