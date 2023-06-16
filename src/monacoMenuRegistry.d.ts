declare module 'monaco-editor/esm/vs/platform/actions/common/actions' {
  /** MenuRegistry用的菜单数据结构 */
  export declare interface MenuElement {
    command: {
      id: string;
      title: string;
    };
    subMenu;
    title?: string;
    group: string;
    order: number;
  }

  export declare class Node<E> {
    static readonly Undefined: Node<unknown>;
    element: E;
    next: Node<E>;
    prev: Node<E>;
    constructor(element: E);
  }

  export declare class LinkedList<E> {
    _first: Node<E>;
    _last: Node<E>;
    _size: number;
    get size(): number;
    isEmpty(): boolean;
    clear(): void;
    unshift(element: E): () => void;
    push(element: E): () => void;
    private _insert;
    shift(): E | undefined;
    pop(): E | undefined;
    _remove;
    [Symbol.iterator](): Iterator<E>;
  }

  export declare class MenuRegistryClass {
    _menuItems: Map<{ id: string }, LinkedList<MenuElement>>;
    constructor() {
      this._menuItems = new Map();
    }
  }

  export declare const MenuRegistry: MenuRegistryClass;
}
