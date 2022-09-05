// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.
type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};
type RequiredKeys<T> = keyof GetRequired<T>;

type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
