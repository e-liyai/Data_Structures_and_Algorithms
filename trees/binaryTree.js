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

    while(current._value !== null) {
      let compareResult = current.compareWith(value)
      if (compareResult) {
        parent = current
        current = current._left
      } else if (compareResult === -1) {
        parent = current
        current = current._right
      } else {
        break
      }
    }
    return {currentNode: current, parentNode: parent}
  }
}