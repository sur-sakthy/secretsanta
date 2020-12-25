export class Entrant {
  #id: number;
  #name: string;

  constructor(name: string) {
    this.#name = name;
   }
  
  get id(): number {
    return this.#id;
  }

  set id(id: number) {
    this.#id = id;
  }

  get name(): string {
    return this.#name;
  }

  set name(name: string) {
    this.#name = name;
  }
}
