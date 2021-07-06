# Data layer

## `fooBar`: Core entity

Includes such like `interface FooBar`, `function createFooBar()`

## `fooBarData`: Persistence functions

Includes such like `fetchFooBar()`, `saveFooBar()`

## `fooBarHooks`, `FooBarContext`: React Hooks, Context

Includes such like `useFooBar()`, `<FooBarProvider>`

# Hooks

`useFooBar()` would accept `id` as `string` for a certain data record, and would return a `FooBar` object if found by the given condition, otherwise `null`.

Until dependency data is ready, it would accept `id` as `undefined` and return `undefined` always.

```tsx
const [fooBar] = useFooBar(id);

if (fooBar === undefined) {
  return <>Loading...</>;
}

if (fooBar === null) {
  return <>Not found</>;
}

return <>{String(fooBar)}</>;
```
