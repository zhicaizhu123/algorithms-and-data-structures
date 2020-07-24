function Node(element) {
  this.element = element
  this.next = null
  this.prev = null
}

// // 双向循环链表
function DoubleWayCircleLinkedList() {
  this.size = 0
  this.head = null
  this.tail = null
}

// 查找链表中值为element的节点
DoubleWayCircleLinkedList.prototype.find = function (element) {
  if (this.head === null) return null
  let current = this.head
  while(current.next && current.next !== this.head) {
    if (current.element === element) {
      return current
    }
    current = current.next
  }
  return null
}

// 从链表尾部添加一个新的节点
DoubleWayCircleLinkedList.prototype.push = function (element) {
  const node = new Node(element)
  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    let current = this.head
    while(current.next !== this.head) {
      current = current.next
    }
    current.next = node
    node.prev = current
    this.tail = node
  }
  this.size++
}

// 向链表中的item节点之后插入一个值为element的新节点
DoubleWayCircleLinkedList.prototype.insertAfter = function(element, item) {
  const node = new Node(element)
  let prevNode = this.find(item)
  if (prevNode === null) {
    return console.log(`【${item}】值不存在`)
  }
  const isTail = prevNode === this.tail
  const next = prevNode.next || null
  node.prev = prevNode
  node.next = next
  prevNode.next = node
  if (isTail) {
    this.tail = node
  }
  this.size++
}

// 删除链表中值为element的节点
DoubleWayCircleLinkedList.prototype.remove = function(element) {
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
DoubleWayCircleLinkedList.prototype.getHead = function() {
  return this.head
}

// 获取链表尾元素
DoubleWayCircleLinkedList.prototype.getTail = function () {
  return this.tail
}

// 获取链表长度
DoubleWayCircleLinkedList.prototype.length = function () {
  return this.size
}
