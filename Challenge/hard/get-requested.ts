// Implement the advanced util type GetRequired<T>, which remains all the required fields
type GetRequired = {
  [P in keyof T as Omit<T, P> extends T ? never : P]: T[P];
};

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }
