

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
) => void;



// 类型参数T、U
type ExtractSelf3<T, U> = T extends U ? U : T;

// 类型参数T、infer U相当于补充声明类型参数U
type ExtractSelf<T> = T extends infer U ? U : T;

// 报错：Cannot find name 'U'.  只传入类型参数T，未对U进行声明
//  type ExtractSelf2<T> = T extends U ? U : T;


type newArr<T extends number, A extends any[] = []> =
  A['length'] extends T
  ? A
  : newArr<T, [...A, '']>


type GreaterArr<T extends any[], U extends any[]> = U extends [...T, ...any] ? false : true;

type GreaterThan<T extends number, U extends number> = GreaterArr<newArr<T>, newArr<U>>

type C = GreaterThan<5, 4>;

type CC = ['', ''] extends ['', '', '', ...any] ? true : false;

type CCC = { name: 'Alice' } extends { name: 'Alice', age: 18 } ? true : false;

type CCCC = { name: 'Alice', age: 18 } extends { name: 'Alice' } ? true : false;


type AA = (number | string) extends string ? true : false;

type AAA = string extends (number | string) ? true : false;

type Point2<M extends string[]> = M[number];
type P = Point2<['small', 'medium', 'large']>;

type IsNever<T> = [T] extends [never] ? true : false
type IsUnion<U> = IsNever<U> extends true ? "" : U
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`

type ClassNames1 = BEM<'btn', ['price'], []> // 'btn__price'
type ClassNames2 = BEM<'btn', ['price'], ['warning', 'success']> // 'btn__price--warning' | 'btn__price--success'
type ClassNames3 = BEM<'btn', [], ['small', 'medium', 'large']> // 'btn--small' | 'btn--medium' | 'btn--large'
type ClassNames4 = BEM<'btn', ['primary', 'danger'], ['small', 'medium', 'large']> // "btn__primary--small" | "btn__primary--medium" | "btn__primary--large" | "btn__danger--small" | "btn__danger--medium" | "btn__danger--large"


// T[number]转联合类型
type ToUnion<T> = T extends any[] ? T[number] : T;

type Without<T, U> =
  // R 表示数组 T 的第一个元素的类型，而 F 表示剩余部分的数组类型 => 将数组 T 分解为它的第一个元素类型 R 和剩余部分的数组类型 F。
  T extends [infer R, ...infer F]
  // 如果 R 可以被转换为 U 的联合类型，则说明需要
  ? R extends ToUnion<U>
  // 满足，则排除第一个元素R，使用剩余数组F，继续递归比较F和U
  ? Without<F, U>
  // 不满足，则保留第一个元素R，使用剩余数组F，继续递归比较F和U，并将结果与R组合
  : [R, ...Without<F, U>]
  : T

type toWithout1 = Without<[1, 3, 4], 1>;
type toWithout2 = Without<[1, 3, 4], [3]>;
type toWithout3 = Without<[1, 3, 4], [3, 1]>;



type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}


type GetValueType<T> = T extends Promise<infer R> ? R : never;

type PromiseType = Promise<number[]>;

type Res = GetValueType<PromiseType>;