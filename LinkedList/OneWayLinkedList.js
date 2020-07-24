function Node(element) {
  this.element = element
  this.next = null
}

function OneWayLinkedList() {
  this.size = 0
  this.head = null
}

// 查找链表中值为element的节点
OneWayLinkedList.prototype.find = function (element) {
  const current = this.head
  if (current === null) return null
  while(current.element !== element) {
    current = current.next
  }
  return current
}

OneWayLinkedList.prototype.findPrev = function (element) {
  const node = this.find(element)
  if (node === null) {
    return console.log('没有找到要删除的元素')
  }
  if (this.head.element === element) {
    return null
  }
  let current = this.head
  let prev = null
  while(current.element !== element) {
    prev = current
    current = current.next
  }
  return prev
}

// 从链表尾部添加一个新的节点
OneWayLinkedList.prototype.push = function (element) {
  const node = new Node(element)
  
  if (this.head === null) {
    this.head = node
  } else {
    let current = this.head
    while(current.next !== null) {
      current = current.next
    }
    current.next = node
  }
  this.size++
}

// 向链表中的item节点之后插入一个 值为element的新节点
OneWayLinkedList.prototype.insertAfter = function(element, item) {
  const node = new Node(element)
  const prevNode = this.find(item)
  if (prevNode === null) {
    return console.log('item节点不存在')
  }
  node.next = prevNode.next
  prevNode.next = node
  this.size++
}

// 删除链表中值为element的节点
OneWayLinkedList.prototype.remove = function(element) {
  const node = this.find(element)
  if (node === null) {
    return console.log('没有找到要删除的元素')
  }
  const prevNode = this.findPrev(element)
  if (prevNode) {
    prevNode.next = node.next
  } else {
    this.head = node.next
  }
  this.size--
}

OneWayLinkedList.prototype.getHead = function() {
  return this.head
}

OneWayLinkedList.prototype.length = function () {
  return this.size
}
