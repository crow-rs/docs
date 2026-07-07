---
sidebar_position: 3
---
 
# Functions
 
Functions are declared with `fun`. Parameters are typed, return type goes after `->`.
 
## Basics
 
```rust
fun add(a: i32, b: i32) -> i32 {
    a + b
}
```
 
No `return` keyword — the last expression in the body is the return value. This is true for every block in Crow, not just functions.
 
Call with parentheses:
 
```rust
val result = add(10, 20)   // 30
```
 
## No return type = unit
 
If a function doesn't produce a meaningful value, omit the `-> type`:
 
```rust
fun greet(name: string) {
    print_str("Hello, ")
    print_str(name)
    print_str("!\n")
}
```
 
This is equivalent to `-> unit`.
 
## Multiple expressions
 
A function body is a block. Every expression in it is evaluated in order. Only the last one becomes the return value:
 
```rust
fun compute(x: i32) -> i32 {
    val doubled = x * 2
    val adjusted = doubled + 1
    adjusted   // this is returned
}
```
 
Intermediate bindings with `val` let you break complex logic into readable steps.
 
## Calling conventions
 
Functions are called by value. Arguments are copied in (scalars are cheap, structures are reference-counted under the hood):
 
```rust
fun increment(n: i32) -> i32 {
    n + 1
}
 
val x = 10
val y = increment(x)   // x is still 10, y is 11
```
 
## Generics
 
Functions can be generic over types. Type parameters go in square brackets:
 
```rust
fun identity[T](x: T) -> T {
    x
}
 
val a = identity(42)       // T = i32, returns 42
val b = identity("hello")  // T = string, returns "hello"
```
 
The compiler figures out `T` from the argument — you don't need to specify it at the call site. Under the hood, Crow generates a separate version of the function for each concrete type (monomorphization).
 
You can have multiple type parameters:
 
```rust
fun pair[A, B](first: A, second: B) -> ... {
    // ...
}
```
 
## Native functions
 
To call C functions, declare them with `native fun`:
 
```rust
native fun sqrt(x: f64) -> f64 = "sqrt"
native fun print_i32(n: i32) = "crow_print_i32"
```
 
The string after `=` is the C symbol name that the linker will look for. If omitted, the Crow function name is used:
 
```rust
native fun exit(code: i32) // links to C's "exit"
```
 
Native functions cannot have generic type parameters.
