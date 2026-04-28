# Part 1: Variables and Scoping

1. **values added: 20** - `var` is function-scoped, so `result` is accessible anywhere inside `sumValues`.
2. **final result: 20** - Since `var` isn't block-scoped, `result` stays accessible even after the `if` block ends.
3. It ignores block levels, which leads to naming collisions and accidental overrides.
4. **values added: 20** - `let` is block-scoped, and line 9 is inside the same block where it was declared.
5. **ReferenceError** - `let` only exists within the `if` block; line 13 is outside that scope.
6. **TypeError** - You can't reassign a `const` after its initial assignment.
7. **ReferenceError** - Like `let`, `const` is block-scoped and doesn't exist at line 13.
