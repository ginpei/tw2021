import { Primitive, z } from "zod";

export function merge(target: any, source: any): unknown {
  if (isPrimitive(source) || isPrimitive(target)) {
    return source;
  }

  const keys = pickKeys(target, source);

  const result: Record<string, any> = {};
  keys.forEach((key) => {
    result[key] = key in source ? merge(target[key], source[key]) : target[key];
  });
  return result;
}

function isPrimitive(value: unknown): value is Primitive {
  return typeof value !== "object" || value === null;
}

function pickKeys(...records: Record<string, any>[]): string[] {
  const set = new Set<string>();
  records.forEach((v) => Object.keys(v).forEach((key) => set.add(key)));
  const keys = Array.from(set);
  return keys;
}
