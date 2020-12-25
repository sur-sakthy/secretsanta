export class Entrant {
  #id: Number;
  #name: String;

  constructor(name: String) {
    this.#name = name;
   }
  
  get id(): Number {
    return this.#id;
  }

  set id(id: Number) {
    this.#id = id;
  }

  get name(): String {
    return this.#name;
  }

  set name(name: String) {
    this.#name = name;
  }
}