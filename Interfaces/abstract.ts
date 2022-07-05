abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}

// 추상클래스는 인스턴스화를 허용하지 않는다.
// 자바스크립트에서는 abstract의 개념이 존재하지 않는다.
// Interface는 컴파일하면 JS로 바뀌지 않고 사라진다. 하지만, 자바스크립트에서는 class User가 존재한다.

interface IUser {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

class Player2 implements IUser {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}
