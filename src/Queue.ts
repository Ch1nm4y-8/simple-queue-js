export class Queue<T> {
  #items: T[] = [];
  #head = 0;

  constructor(values?: Iterable<T>) {
    this.#items = values ? Array.from(values) : [];
  }

  enqueue(value: T): this {
    this.#items.push(value);
    return this;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const value = this.#items[this.#head++];

    if (this.#head * 2 >= this.#items.length) {
      this.#items = this.#items.slice(this.#head);
      this.#head = 0;
    }

    return value;
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.#items[this.#head];
  }

  clear(): void {
    this.#items = [];
    this.#head = 0;
  }

  size(): number {
    return this.#items.length - this.#head;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  *[Symbol.iterator](): IterableIterator<T> {
    for (let i = this.#head; i < this.#items.length; i++) {
      yield this.#items[i];
    }
  }

  toArray(): T[] {
    return this.#items.slice(this.#head);
  }

  clone(): Queue<T> {
    return new Queue(this);
  }
}
