// Implement the advanced util type GetRequired<T>, which remains all the required fields
type GetRequired<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }
