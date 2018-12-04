import nodeElement from '../../node/nodeElement'
import helper from '../../util/helper'

function printNodeExamples () {
  let node1 = new nodeElement(4)
  let node2 = new nodeElement(3, node1)
  let node3 = new nodeElement(2, node2)

  helper.printList(node3)
}

printNodeExamples()