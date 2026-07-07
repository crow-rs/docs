---
sidebar_position: 5
---
 
# Enums
 
Enums are named sets of constants. Like `enum class` in C++ or `enum` in Rust without data. Each variant is just a label with an integer value underneath.
 
## Basic enum
 
```rust
enum Direction {
    North,
    South,
    East,
    West
}
 
val d = Direction::North
```
 
Variants are numbered automatically starting from 0: `North = 0`, `South = 1`, `East = 2`, `West = 3`.
 
## Specifying the underlying type
 
By default the compiler picks the smallest integer type that fits all variants. You can set it explicitly:
 
```rust
enum (i8) Status {
    Ok,
    Warning,
    Error
}
```
 
The `(i8)` means each `Status` value is stored as an 8-bit integer. Useful when you care about memory layout — protocol headers, hardware registers, binary file formats.
 
Available underlying types: `i8`, `i16`, `i32`, `i64`, `u8`, `u16`, `u32`, `u64`.
 
## Explicit values
 
You can assign specific values to variants:
 
```rust
enum (u8) HttpStatus {
    Ok = 200,
    NotFound = 404,
    ServerError = 500
}
```
 
Mix and match — some explicit, some auto-incremented:
 
```rust
enum (i32) Signal {
    HUP = 1,
    INT,        // 2
    QUIT,       // 3
    KILL = 9,
    TERM = 15
}
```
 
## Using enums
 
Enums work naturally with pattern matching:
 
```rust
fun describe(d: Direction) -> string {
    match d {
        Direction::North -> "going north",
        Direction::South -> "going south",
        Direction::East -> "going east",
        Direction::West -> "going west"
    }
}
```
 
The compiler checks that you handled every variant. Forget one and you get a compile error.
 
## When to use enums
 
Enums are the right choice when your variants don't carry data — they're just labels. Status codes, directions, modes, flags.
 
If your variants need to carry different data (a shape that's either a circle with a radius or a rectangle with width and height), use a [sum type](./sum-types) instead.
