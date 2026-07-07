---
sidebar_position: 6
---
 
# Sum Types
 
Sum types represent values that can be one of several variants, where each variant can carry different data. In Haskell they're called `data`, in Rust they're `enum` with fields. In Crow — `uni`.
 
## Syntax
 
```
uni Shape = Circle(f64) | Rectangle(f64, f64) | Point.
```
 
Read it like a sentence: "a Shape is a Circle with a radius, or a Rectangle with width and height, or a Point." The dot at the end marks the end of the definition.
 
## Creating values
 
Use the variant name directly:
 
```rust
val s1 = Circle(5.0)
val s2 = Rectangle(10.0, 20.0)
val s3 = Point
```
 
Each value knows which variant it is. `Circle`, `Rectangle`, and `Point` are all the same type — `Shape`.
 
## Variants without data
 
A variant doesn't have to carry anything:
 
```rust
uni Answer = Yes | No | Maybe.
 
val a = Yes
val b = Maybe
```
 
## Variants with multiple fields
 
A variant can carry any number of values:
 
```rust
uni Color = RGB(u8, u8, u8) | HSL(f64, f64, f64) | Named(string).
 
val red = RGB(255, 0, 0)
val sky = HSL(200.0, 0.8, 0.6)
val white = Named("white")
```
 
## Pattern matching
 
You can't access the data inside a sum type with dot notation — you don't know which variant you have. Use `match`:
 
```rust
fun area(s: Shape) -> f64 {
    match s {
        Circle(r) -> 3.14159 * r * r,
        Rectangle(w, h) -> w * h,
        Point -> 0.0
    }
}
```
 
The compiler checks exhaustiveness. Forget a variant — compile error:
 
```
error: non-exhaustive match — missing variant `Point`
```
 
## Recursive types
 
Sum types can reference themselves. This is how you build lists, trees, and expressions:
 
```rust
uni IntList = Cons(i32, IntList) | Nil.
 
val list = Cons(1, Cons(2, Cons(3, Nil)))
```
 
Process with recursion:
 
```rust
fun sum(l: IntList) -> i32 {
    match l {
        Cons(head, tail) -> head + sum(tail),
        Nil -> 0
    }
}
 
val total = sum(list)   // 6
```
 
A binary tree:
 
```rust
uni Tree = Node(Tree, i32, Tree) | Leaf.
 
val tree = Node(
    Node(Leaf, 1, Leaf),
    2,
    Node(Leaf, 3, Leaf)
)
```
 
## The classic: Option
 
Instead of null pointers, represent "maybe a value":
 
```rust
uni Option = Some(i32) | None.
 
fun safe_divide(a: i32, b: i32) -> Option {
    if b == 0 { None } else { Some(a / b) }
}
 
fun main() -> i8 {
    match safe_divide(10, 0) {
        Some(result) -> print_i32(result),
        None -> print_str("cannot divide by zero\n")
    }
    0
}
```
 
No null, no null pointer exceptions. If a value might be absent, the type says so.
 
## The classic: Result
 
Success or failure:
 
```rust
uni Result = Ok(i32) | Err(string).
 
fun parse_number(s: string) -> Result {
    // ...
    Ok(42)
}
 
match parse_number(input) {
    Ok(n) -> print_i32(n),
    Err(msg) -> print_str(msg)
}
```
 
## Nested destructuring
 
Patterns can reach into nested structures:
 
```rust
uni Expr = Num(i32) | Add(Expr, Expr) | Mul(Expr, Expr).
 
fun eval(e: Expr) -> i32 {
    match e {
        Num(n) -> n,
        Add(a, b) -> eval(a) + eval(b),
        Mul(a, b) -> eval(a) * eval(b)
    }
}
 
// 2 + 3 * 4
val expr = Add(Num(2), Mul(Num(3), Num(4)))
val result = eval(expr)   // 14
```
 
## Enum vs Sum type
 
| | `enum` | `uni` |
|---|---|---|
| Syntax | `enum Name { A, B }` | `uni Name = A \| B.` |
| Variants carry data | No | Yes |
| Size in memory | Integer (configurable) | Tag + largest variant |
| Use case | Status codes, flags | Data structures, error handling |
 
Use `enum` when variants are just labels. Use `uni` when variants carry different data.
