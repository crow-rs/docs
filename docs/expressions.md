---
sidebar_position: 7
---
 
# Expressions
 
In Crow, almost everything is an expression — it produces a value. This makes code more concise and composable.
 
## Blocks
 
A block is a list of expressions wrapped in braces. The last expression is the block's value:
 
```rust
val result = {
    val a = 10
    val b = 20
    a + b          // block returns 30
}
```
 
Function bodies, `if` branches, and `match` arms are all blocks.
 
## If expressions
 
`if` is an expression, not a statement. It returns a value:
 
```rust
val max = if a > b { a } else { b }
```
 
Both branches must return the same type. If there's no `else`, the type is unit:
 
```rust
if ready {
    launch()
}
// type: unit
```
 
## Operators
 
### Arithmetic
`+`, `-`, `*`, `/`, `%` — work on integers and floats.
 
### Comparison
`==`, `!=`, `<`, `<=`, `>`, `>=` — return `bool`.
 
### Logical
`&&` (and), `||` (or), `!` (not) — short-circuit evaluation.
 
```rust
val safe = x > 0 && x < 100
val fallback = primary || secondary
val inverted = !flag
```
 
### Precedence
 
Standard math precedence. Use parentheses when in doubt:
 
```rust
val result = a + b * c      // b * c first
val result = (a + b) * c    // a + b first
```
 
## Todo and panic
 
For code you haven't written yet:
 
```rust
fun complex_algorithm(data: i32) -> i32 {
    todo   // compiles, crashes at runtime with "not yet implemented"
}
```
 
For errors that should never happen:
 
```rust
fun validate(x: i32) -> i32 {
    if x < 0 {
        panic   // crashes with "panic"
    } else {
        x
    }
}
```
 
Both have type `never` — they fit anywhere because they never actually return a value.
