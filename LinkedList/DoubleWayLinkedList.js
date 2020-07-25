function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

// 双向链表
function DoubleWayLinkedList() {
  this.size = 0;
  this.head = null;
}

// 查找链表中值为element的节点
DoubleWayLinkedList.prototype.find = function (element) {
  if (this.head === null) return null;
  let current = this.head;
  while (current.next) {
    if (current.element === element) {
      return current;
    }
    current = current.next;
  }
  return null;
};

// 向链表中的item节点之后插入一个值为element的新节点
DoubleWayLinkedList.prototype.insertAfter = function (element, item) {
  const node = new Node(element);
  let prevNode = this.find(item);
  if (prevNode === null) {
    return console.log(`【${item}】值不存在`);
  }
  const next = prevNode.next || null;
  node.prev = prevNode;
  node.next = next;
  prevNode.next = node;
  this.size++;
};

// 删除链表中值为element的节点
DoubleWayLinkedList.prototype.remove = function (element) {
  const node = this.find(element);
  if (node === null) {
    return console.log(`【${element}】值不存在`);
  }
  if (this.head === node) {
    this.shift();
  } else if (this.tail === node) {
    this.pop();
  } else {
    node.prev.next = node.next;
    if (node.next) {
      node.next.prev = node.prev;
    }
    this.size--;
  }
  return node;
};

// 从链表尾部添加一个新的节点
DoubleWayLinkedList.prototype.push = function (element) {
  const node = new Node(element);
  if (!this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.size++;
};

// 从链表头部添加一个新的节点
DoubleWayLinkedList.prototype.unshift = function (element) {
  const node = new Node(element);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  this.size++;
};

// 弹出链表尾部
DoubleWayLinkedList.prototype.pop = function () {
  if (!this.tail) {
    return console.log("当前链表尾空链表");
  }
  const tail = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  this.size--;
  return tail;
};

// 弹出链表头部
DoubleWayLinkedList.prototype.shift = function () {
  if (!this.head) {
    return console.log("当前链表尾空链表");
  }
  const head = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  this.size--;
  return head;
};

// 获取链表头
DoubleWayLinkedList.prototype.getHead = function () {
  return this.head;
};

// 获取链表长度
DoubleWayLinkedList.prototype.length = function () {
  return this.size;
};
