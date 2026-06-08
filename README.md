# @ch1nm4y-8/simple-queue-js

A lightweight FIFO queue for JavaScript and TypeScript.

## Features

- Zero runtime dependencies
- FIFO (First In, First Out)
- Full TypeScript support with type declarations
- Supports ESM (`import`)
- Supports CommonJS (`require`)

## Install

```bash
npm install @ch1nm4y-8/simple-queue-js
```

---

## TypeScript

```ts
import { Queue } from "@ch1nm4y-8/simple-queue-js";

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.size()); // 2
```

### Constructor

```ts
const queue = new Queue([1, 2, 3]);

console.log(queue.dequeue()); // 1
```

### Type Safety

```ts
const queue = new Queue<number>();

queue.enqueue(1);

// Type Error
queue.enqueue("hello");
```

---

## ECMAScript Modules (ESM)

```js
import { Queue } from "@ch1nm4y-8/simple-queue-js";

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");

console.log(queue.dequeue()); // A
```

---

## CommonJS

```js
const { Queue } = require("@ch1nm4y-8/simple-queue-js");

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");

console.log(queue.dequeue()); // A
```

---

## API

### enqueue(value)

Adds an item to the back of the queue.

```ts
queue.enqueue(1);
```

Returns:

```ts
this;
```

---

### dequeue()

Removes and returns the front item.

```ts
const value = queue.dequeue();
```

Returns:

```ts
T | undefined;
```

---

### peek()

Returns the front item without removing it.

```ts
const value = queue.peek();
```

Returns:

```ts
T | undefined;
```

---

### clear()

Removes all items from the queue.

```ts
queue.clear();
```

Returns:

```ts
void
```

---

### size()

Returns the number of items in the queue.

```ts
console.log(queue.size());
```

Returns:

```ts
number;
```

---

### isEmpty()

Returns whether the queue is empty.

```ts
console.log(queue.isEmpty());
```

Returns:

```ts
boolean;
```

---

## Example

```ts
import { Queue } from "@ch1nm4y-8/simple-queue-js";

const tasks = new Queue<string>();

tasks.enqueue("Build");
tasks.enqueue("Test");
tasks.enqueue("Deploy");

while (!tasks.isEmpty()) {
  console.log(tasks.dequeue());
}
```

Output:

```text
Build
Test
Deploy
```

## License

MIT
