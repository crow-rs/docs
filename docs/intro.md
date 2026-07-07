---
slug: /intro
sidebar_position: 1
---
 
# Introduction
 
Crow is a compiled, functional-first programming language. It looks like this:
 
```rust
fun main() -> i8 {
    println("Hello, world!\n")
    0
}
```
 
No semicolons. No curly braces around every expression. The last expression in a block is its return value — `0` here is what `main` returns.
 
Crow compiles directly to native machine code through LLVM. There's no virtual machine, no interpreter, no garbage collector running behind the scenes.
 
## What makes Crow different
 
Most languages fall into two camps: practical but messy (Python, JavaScript) or safe but verbose (Rust, Haskell). Crow tries to sit in between.
 
Three ideas shape the language:
 
**Everything is an expression.** An `if` returns a value. A `match` returns a value. A block returns a value. You don't need `return` — the last expression is the result.
 
**Side effects are explicit.** When a function reads a file, mutates state, or talks to the network — the type system knows about it. You can see what a function does before you call it.
 
**Types work for you, not against you.** Crow infers types. You write `val x = 42` and the compiler figures out that `x` is `i32`. You only annotate when you want to.
 
## Your first program
 
Create a file `hello.cr`:
 
```rust
fun main() -> i8 {
    println("Hello, world!\n")
    0
}
```
 
Compile and run:
 
```bash
crow build hello.crow -o hello
./hello
```
 
`main` returns `i8` — an 8-bit integer. `0` means success, like in C.
 
## What's next
 
Start with [Types](./types) to learn the building blocks, then move to [Functions](./functions) to see how to write and compose logic.
 
