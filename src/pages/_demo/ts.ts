

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
) => void;


type newArr<T extends number, A extends any[] = []> =
  A['length'] extends T
  ? A
  : newArr<T, [...A, '']>

type A = newArr<4>;


// 类型参数T、U
type ExtractSelf3<T, U> = T extends U ? U : T;

// 类型参数T、infer U相当于补充声明类型参数U
type ExtractSelf<T> = T extends infer U ? U : T;

// 报错：Cannot find name 'U'.  只传入类型参数T，未对U进行声明
//  type ExtractSelf2<T> = T extends U ? U : T;