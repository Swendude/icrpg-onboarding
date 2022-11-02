export function objKeys<Obj extends {}>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[];
}

type ValueOf<T> = T[keyof T];

export function objValues<Obj extends {}>(obj: Obj) {
  return Object.values(obj) as ValueOf<Obj>[];
}
