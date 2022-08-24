interface Todo {
  title: string;
  description: string;
}

type MyReadOnly<T> = { readonly [key in keyof T]: T[key] };

const todo: MyReadOnly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // cannot reassign a readonly property
todo.description = "barFoo"; // cannot reassign a readonly property
