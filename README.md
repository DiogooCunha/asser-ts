# Asser-ts

---

- [Easy Assertions](#assert-const)

Get Started:

    `npm i @diogoocunha/asser-ts`

# `assert` const

The `assert` package provides some helpful methods that allow you to write better code in Typescript.

- Prints friendly, easy to read failure descriptions
- Allows for very readable code
- Optionally annotate each assertion with a message

```typescript
interface foo = {
    bar?: string;
}

const (val: foo) {
    // Asserts the type and narrows it down
    assert.isString(val.bar, "it should be a string");

    // We are sure it cannot be undefined now
    console.log(val.bar.length);
}
```
