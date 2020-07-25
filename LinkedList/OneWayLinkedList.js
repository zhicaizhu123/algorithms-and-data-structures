function Node(element) {
  this.element = element;
  this.next = null;
}

// 单链表
function OneWayLinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
}

// 查找链表中值为element的节点
OneWayLinkedList.prototype.find = function (element) {
  let current = this.head;
  if (current === null) return null;
  if (current.element === element) return current;
  while (current.next !== null) {
    current = current.next;
    if (current.element === element) {
      return current;
    }
  }
  return null;
};

// 获取值为element的节点的上个节点
OneWayLinkedList.prototype.findPrev = function (element) {
  const node = this.find(element);
  if (node === null) {
    return console.log("没有找到要查询的元素");
  }
  if (this.head.element === element) {
    return null;
  }
  let current = this.head;
  let prev = null;
  while (current.element !== element) {
    prev = current;
    current = current.next;
  }
  return prev;
};

// 向链表中的item节点之后插入一个 值为element的新节点
OneWayLinkedList.prototype.insertAfter = function (element, item) {
  const node = new Node(element);
  const prevNode = this.find(item);
  if (prevNode === null) {
    return console.log("item节点不存在");
  }
  const isTail = prevNode === this.tail;
  node.next = prevNode.next;
  prevNode.next = node;
  if (isTail) {
    this.tail = node;
  }
  this.size++;
};

// 删除链表中值为element的节点
OneWayLinkedList.prototype.remove = function (element) {
  const node = this.find(element);
  if (node === null) {
    return console.log("没有找到要删除的元素");
  }
  const isTail = node === this.tail;
  const prevNode = this.findPrev(element);
  if (prevNode) {
    prevNode.next = node.next;
  } else {
    this.head = node.next;
  }
  if (isTail) {
    this.tail = prevNode || this.head;
  }
  this.size--;
  return node;
};

// 从链表尾部添加一个新的节点
OneWayLinkedList.prototype.push = function (element) {
  if (!this.tail) {
    const node = new Node(element);
    this.head = node;
    this.tail = node;
    this.size++;
  } else {
    this.insertAfter(element, this.tail.element);
  }
};

// 从链表头部添加一个新的节点
OneWayLinkedList.prototype.unshift = function (element) {
  const node = new Node(element);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    this.size++;
  } else {
    node.next = this.head;
    this.head = node;
    this.size++;
  }
};

// 弹出链表尾部
OneWayLinkedList.prototype.pop = function () {
  if (!this.tail) {
    return console.log("当前链表尾空链表");
  }
  return this.remove(this.tail.element);
};

// 弹出链表头部
OneWayLinkedList.prototype.shift = function () {
  if (!this.head) {
    return console.log("当前链表尾空链表");
  }
  return this.remove(this.head.element);
};

// 获取链表头
OneWayLinkedList.prototype.getHead = function () {
  return this.head;
};

// 获取链表尾
OneWayLinkedList.prototype.getTail = function () {
  return this.tail;
};

// 获取链表长度
OneWayLinkedList.prototype.length = function () {
  return this.size;
};
