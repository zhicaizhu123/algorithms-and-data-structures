function Node(element) {
  this.element = element
  this.next = null
  this.prev = null
}

function DoubleWayLinkedList() {
  this.size = 0
  this.head = null
}

// 查找链表中值为element的节点
DoubleWayLinkedList.prototype.find = function (element) {
  if (this.head === null) return null
  let current = this.head
  while(current.next) {
    if (current.element === element) {
      return current
    }
    current = current.next
  }
  return null
}

// 从链表尾部添加一个新的节点
DoubleWayLinkedList.prototype.push = function (element) {
  const node = new Node(element)
  if (this.head === null) {
    this.head = node
  } else {
    let current = this.head
    while(current.next !== null) {
      current = current.next
    }
    current.next = node
    node.prev = current
  }
  this.size++
}

// 向链表中的item节点之后插入一个值为element的新节点
DoubleWayLinkedList.prototype.insertAfter = function(element, item) {
  const node = new Node(element)
  let prevNode = this.find(item)
  if (prevNode === null) {
    return console.log(`【${item}】值不存在`)
  }
  const next = prevNode.next || null
  node.prev = prevNode
  node.next = next
  prevNode.next = node
  this.size++
}

// 删除链表中值为element的节点
DoubleWayLinkedList.prototype.remove = function(element) {
  const node = this.find(element)
  if (node === null) {
    return console.log(`【${element}】值不存在`)
  }
  if (this.head === node) {
    this.head = node.next
    if (node.next) {
      node.next.prev = this.head
    }
  } else {
    node.prev.next = node.next
    if (node.next) {
      node.next.prev = node.prev
    }
  }
  this.size--
}

// 获取链表头
DoubleWayLinkedList.prototype.getHead = function() {
  return this.head
}

// 获取链表长度
DoubleWayLinkedList.prototype.length = function () {
  return this.size
}
