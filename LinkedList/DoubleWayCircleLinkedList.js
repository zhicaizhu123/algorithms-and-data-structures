function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

// // 双向循环链表
function DoubleWayCircleLinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
}

// 查找链表中值为element的节点
DoubleWayCircleLinkedList.prototype.find = function (element) {
  if (this.head === null) return null;
  let current = this.head;
  if (current.element === element) return current;
  while (current.next !== this.head) {
    // 判断是否已经遍历完一轮，如果是则终止
    current = current.next;
    if (current.element === element) {
      return current;
    }
  }
  return null;
};

// 向链表中的item节点之后插入一个值为element的新节点
DoubleWayCircleLinkedList.prototype.insertAfter = function (element, item) {
  const node = new Node(element);
  let prevNode = this.find(item);
  if (prevNode === null) {
    return console.log(`【${item}】值不存在`);
  }
  const isTail = prevNode === this.tail;
  node.prev = prevNode;
  node.next = prevNode.next;
  prevNode.next = node;
  if (isTail) {
    this.tail = node;
  }
  this.size++;
};

// 删除链表中值为element的节点
DoubleWayCircleLinkedList.prototype.remove = function (element) {
  const node = this.find(element);
  if (node === null) {
    return console.log(`【${element}】值不存在`);
  }
  if (this.head === node) {
    this.head = node.next;
    if (node.next) {
      node.next.prev = this.head;
    }
    this.tail.next = this.head;
    this.head.prev = this.tail;
  } else {
    node.prev.next = node.next;
    if (node.next) {
      node.next.prev = node.prev;
    }
  }
  this.size--;
  return node;
};

// 从链表尾部添加一个新的节点
DoubleWayCircleLinkedList.prototype.push = function (element) {
  const node = new Node(element);
  if (!this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    if (this.head === this.tail) {
      this.head.next = node;
    } else {
      this.tail.next = node;
    }
    this.head.prev = node;
    node.prev = this.head;
    node.next = this.head;
    this.tail = node;
  }
  this.size++;
};

// 从链表头部添加一个新的节点
DoubleWayCircleLinkedList.prototype.unshift = function (element) {
  const node = new Node(element);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else if (this.head === this.tail) {
    this.head.next = node;
    this.head.prev = node;
    node.prev = this.head;
    node.next = this.head;
    this.head = node;
  } else {
    this.tail.next = node;
    this.head.prev = node;
    node.prev = this.tail;
    node.next = this.head;
    this.head = node;
  }
  this.size++;
};

// 弹出链表尾部
DoubleWayCircleLinkedList.prototype.pop = function () {
  if (!this.tail) {
    return console.log("当前链表尾空链表");
  }
  const tail = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
  this.size--;
  return tail;
};

// 弹出链表头部
DoubleWayCircleLinkedList.prototype.shift = function () {
  if (!this.head) {
    return console.log("当前链表尾空链表");
  }
  const head = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
  this.size--;
  return head;
};

// 获取链表头
DoubleWayCircleLinkedList.prototype.getHead = function () {
  return this.head;
};

// 获取链表尾元素
DoubleWayCircleLinkedList.prototype.getTail = function () {
  return this.tail;
};

// 获取链表长度
DoubleWayCircleLinkedList.prototype.length = function () {
  return this.size;
};
