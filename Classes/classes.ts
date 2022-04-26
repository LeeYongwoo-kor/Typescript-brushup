abstract class User {
  constructor(
    protected firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName = (): void => console.log(this.nickname);
  // protected: parent property is accessible
}

const lee = new Player("lee", "mb", "이명박");
lee.getFullName();
