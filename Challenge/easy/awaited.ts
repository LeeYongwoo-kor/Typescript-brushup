type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T;

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string
