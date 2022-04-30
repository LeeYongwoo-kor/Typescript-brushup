interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

function makeUser(user: User) {
  return "HI";
}

makeUser({
  firstName: "Lee",
  lastName: "MB",
  fullName: () => "LeeMB",
  sayHi: (name) => "hi, I'm string",
});
