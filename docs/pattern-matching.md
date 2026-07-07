---
sidebar_position: 6
---
 
# Pattern Matching
 
Pattern matching is how you inspect values and branch based on their shape. It's like `switch` on steroids.
 
## Basic match
 
```rust
fun describe(n: i32) -> string {
    match n {
        0 -> "zero",
        1 -> "one",
        val other -> "something else"
    }
}
```
 
Each arm is `pattern -> expression`. The first matching arm wins. `val other` binds the value to a name — it matches anything.
 
## Matching enums
 
This is where match shines. Given:
 
```rust
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
    Point
}
```
 
You can destructure each variant:
 
```rust
fun area(s: Shape) -> f64 {
    match s {
        Circle(r) -> 3.14159 * r * r,
        Rectangle(w, h) -> w * h,
        Point -> 0.0
    }
}
```
 
The compiler checks that you handled every variant. If you forget `Point`, you get:
 
```
error: non-exhaustive match — missing variant `Point`
```
 
## Wildcard pattern
 
Use `_` when you don't care about a value:
 
```rust
match color {
    Red -> "red",
    _ -> "not red"    // matches Green, Blue, anything
}
```
 
## Binding with val
 
`val name` matches anything and binds the value to `name` for use in the arm body:
 
```rust
match age {
    0 -> "newborn",
    1 -> "one year old",
    val n -> "age: " // n is available here
}
```
 
## Or patterns
 
Match multiple values in one arm with `|`:
 
```rust
match day {
    1 | 7 -> "weekend",
    val _ -> "weekday"
}
```
 
## Nested patterns
 
Patterns can be nested to destructure complex data:
 
```rust
enum Expr {
    Num(i32),
    Add(Expr, Expr)
}
 
match expr {
    Num(0) -> "zero",
    Num(val n) -> "number",
    Add(Num(0), val right) -> "adding zero",
    val _ -> "complex expression"
}
```
 
## Match is an expression
 
`match` returns a value. Every arm must return the same type:
 
```rust
val label = match status {
    0 -> "ok",
    1 -> "warning",
    val _ -> "error"
}
```
 
## Multiple subjects
 
You can match on multiple values at once:
 
```rust
match (x, y) {
    (0, 0) -> "origin",
    (0, val _) -> "y-axis",
    (val _, 0) -> "x-axis",
    val _ -> "somewhere"
}
```
 
Each arm gets a pattern per subject, separated by commas.
