type Team = "red" | "blue" | "yellow";

type User = {
  name: string;
  healthBar: number;
  team: Team;
};

type Player = User & {};

interface IUser {
  readonly name: string;
  healthBar: number;
  team: Team;
}

interface IPlayer extends IUser {}

const lee: Player = {
  name: "lee",
  healthBar: 100,
  team: "blue",
};

const kim: IPlayer = {
  name: "kim",
  healthBar: 500,
  team: "yellow",
};

// Type, Interface : 오브젝트의 모양을 결정한다.
// Type : 오브젝트의 모양, alias type, 특정값 제한 등 Interface보다 목적이 다양하다
// Interface : 오브젝트의 모양을 TS에 설명하기위해서만 사용되는 키워드
