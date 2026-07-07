---
sidebar_position: 2
---
 
# Types
 
Crow is statically typed — every value has a type known at compile time. But you rarely need to write types explicitly. The compiler infers them.
 
## Integers
 
Signed and unsigned, from 8 to 64 bits:
 
| Type | Size | Range |
|------|------|-------|
| `i8` | 8 bit | -128 to 127 |
| `i16` | 16 bit | -32768 to 32767 |
| `i32` | 32 bit | ±2 billion |
| `i64` | 64 bit | ±9.2 quintillion |
| `u8` | 8 bit | 0 to 255 |
| `u16` | 16 bit | 0 to 65535 |
| `u32` | 32 bit | 0 to ~4 billion |
| `u64` | 64 bit | 0 to ~18 quintillion |
 
```rust
val x = 42         // compiler infers i32
val y: i8 = 10     // explicit: i8
val z: u64 = 1000  // explicit: u64
```
 
If you don't annotate, integer literals default to `i32`.
 
## Floats
 
Two sizes:
 
| Type | Size | Precision |
|------|------|-----------|
| `f32` | 32 bit | ~7 decimal digits |
| `f64` | 64 bit | ~15 decimal digits |
 
```rust
val pi = 3.14159      // infers f64
val half: f32 = 0.5   // explicit: f32
```
 
Float literals default to `f64`.
 
## Bool
 
Two values: `true` and `false`.
 
```rust
val ready = true
val done = false
```
 
Used in `if` expressions and pattern matching. No implicit conversion from integers — `if 1` is a type error.
 
## String
 
Text enclosed in double quotes:
 
```rust
val greeting = "Hello, world!"
val with_newline = "first line\nsecond line"
```
 
Strings are immutable. Under the hood they're a pointer and a length — no null terminator surprises.
 
## Unit
 
The type of "nothing interesting". Written as the absence of a return type or as an empty expression.
 
```rust
fun log(msg: string) {
    print_str(msg)
}
```
 
`log` doesn't have a `-> type` annotation — it returns unit. This is Crow's equivalent of `void`, but it's a real value you can pass around.
 
## Variables
 
Two kinds of bindings:
 
```rust
val x = 10    // immutable — cannot reassign
var y = 20    // mutable — can reassign
 
y = 30        // ok
x = 30        // compile error: cannot assign to immutable binding
```
 
Use `val` by default. Use `var` when you genuinely need to update a value in a loop or accumulator.
 
### Wildcard
 
If you don't care about a value, use `_`:
 
```rust
_ = some_function()   // call for side effects, discard result
```
 
## Type annotations
 
Usually optional. Add them when:
- The compiler can't infer (rare)
- You want to be explicit for readability
- You want a narrower type than the default
```rust
val a = 100          // i32 (inferred)
val b: i8 = 100      // i8 (explicit — fits in range)
val c: u8 = 200      // u8 (explicit — unsigned)
```
 
Type goes after the name, separated by `:`. Same syntax everywhere — variables, function parameters, return types.
