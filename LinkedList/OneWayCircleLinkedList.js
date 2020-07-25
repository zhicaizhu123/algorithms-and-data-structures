function Node(element) {
  this.element = element;
  this.next = null;
}

// 单向循环列表
function OneWayCircleLinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
}

// 查找链表中值为element的节点
OneWayCircleLinkedList.prototype.find = function (element) {
  let current = this.head;
  if (current === null) return null;
  // 当前查找的元素为链表头
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

// 获取值为element的节点的上个节点
OneWayCircleLinkedList.prototype.findPrev = function (element) {
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
OneWayCircleLinkedList.prototype.insertAfter = function (element, item) {
  const node = new Node(element);
  // 获取参考节点
  const prevNode = this.find(item);
  if (prevNode === null) {
    return console.log(`【${item}】节点不存在`);
  }
  // 判断要参考节点是否为尾元素
  const isTail = prevNode === this.tail;
  node.next = prevNode.next;
  prevNode.next = node;
  if (isTail) {
    // 如果要参考节点是否为尾元素，更改尾元素的指向
    this.tail = node;
  }
  this.size++;
};

// 删除链表中值为element的节点
OneWayCircleLinkedList.prototype.remove = function (element) {
  // 获取要移除的当前元素
  const node = this.find(element);
  if (node === null) {
    return console.log(`【${element}】不存在`);
  }
  // 查找上一个元素
  const prevNode = this.findPrev(element);
  // 判断当前要删除的元素是否是为元素
  const isTail = node === this.tail;
  if (prevNode) {
    // 如果上一个元素存在
    prevNode.next = node.next;
    if (isTail) {
      this.tail = prevNode;
    }
  } else {
    // 否则当前链表只有一个元素可删除
    this.head = null;
    this.tail = null;
  }
  this.size--;
  return node;
};

// 从链表尾部添加一个新的节点
OneWayCircleLinkedList.prototype.push = function (element) {
  const node = new Node(element);
  if (!this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.next = this.head;
    this.tail = node;
  }
  this.size++;
};

// 从链表头部添加一个新的节点
OneWayCircleLinkedList.prototype.unshift = function (element) {
  const node = new Node(element);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
    this.tail.next = this.head;
  }
  this.size++;
};

// 弹出链表尾部
OneWayCircleLinkedList.prototype.pop = function () {
  if (!this.tail) {
    return console.log("当前链表尾空链表");
  }
  const tail = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    const prevNode = this.findPrev(this.tail.element);
    this.tail = prevNode;
    this.tail.next = this.head;
  }
  this.size--;
  return tail;
};

// 弹出链表头部
OneWayCircleLinkedList.prototype.shift = function () {
  if (!this.head) {
    return console.log("当前链表尾空链表");
  }
  const head = this.head;
  this.head = this.head.next;
  if (!this.head) {
    this.tail = null;
  } else {
    this.tail.next = this.head;
  }
  this.size--;
  return head;
};

// 获取链表头
OneWayCircleLinkedList.prototype.getHead = function () {
  return this.head;
};

// 获取链表尾元素
OneWayCircleLinkedList.prototype.getTail = function () {
  return this.tail;
};

// 获取链表长度
OneWayCircleLinkedList.prototype.length = function () {
  return this.size;
};
