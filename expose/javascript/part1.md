# Part 1: Quick Introduction

1. **Prints:** values added: 20. `var` has the scope of the function, allowing access to `result` anywhere in `sumValues`.
2. **Prints:** final result: 20. `result` is still accessible outside the `if-condition` because `var` is function-scoped.
3. I feel like it ignores block levels. We're going to get naming conflicts and scoping issues.
4. **Prints:** values added: 20. Since the `let` keyword is block-scoped, and line 9 is inside the same `if-condition` where `result` was declared, it has access to our variable.
5. **ReferenceError**. `result` is only defined in the `if-condition`. Line 13 is outside that block and cannot access it.
6. **TypeError**. I initialize `result` as a `const`, holding value 0, in Line 5. But Line 7 tries to reassign a new value to it, and that's illegal for constants.
7. **ReferenceError**. `const` has the same condition-scoping rules as `let`. Line 13 is outside the `if-condition` where `result` was defined.
