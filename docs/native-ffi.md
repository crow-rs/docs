---
sidebar_position: 8
---
 
# Native FFI
 
Crow can call C functions directly. This is how the standard library works — printing, file I/O, memory allocation are all thin wrappers around C.
 
## Declaring native functions
 
```rust
native fun puts(s: string) = "puts"
```
 
This tells the compiler: "there's a C function called `puts` that takes a string and returns nothing."
 
The `= "symbol"` part is the linker symbol. If it matches the Crow name, you can omit it:
 
```rust
native fun exit(code: i32)   // links to C's "exit"
```
 
## Type mapping
 
| Crow type | C type |
|-----------|--------|
| `i8` | `int8_t` |
| `i16` | `int16_t` |
| `i32` | `int32_t` / `int` |
| `i64` | `int64_t` / `long` |
| `u8` | `uint8_t` |
| `u16` | `uint16_t` |
| `u32` | `uint32_t` |
| `u64` | `uint64_t` |
| `f32` | `float` |
| `f64` | `double` |
| `string` | `CrowStr` (struct) |
| `bool` | `int8_t` |
 
## Using runtime functions
 
The Crow runtime provides basic I/O:
 
```rust
native fun print_str(s: string) = "crow_print_str"
native fun print_i32(n: i32) = "crow_print_i32"
native fun println() = "crow_println"
native fun read_line() -> string = "crow_read_line"
native fun read_i32() -> i32 = "crow_read_i32"
```
 
Usage:
 
```rust
fun main() -> i8 {
    print_str("What's your name? ")
    val name = read_line()
    print_str("Hello, ")
    print_str(name)
    println()
    0
}
```
 
## Writing your own C functions
 
Create a C file:
 
```c
// mylib.c
#include <math.h>
 
double my_sqrt(double x) {
    return sqrt(x);
}
 
int my_factorial(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```
 
Compile it:
 
```bash
cc -c mylib.c -o mylib.o -fPIC
```
 
Use from Crow:
 
```rust
native fun my_sqrt(x: f64) -> f64 = "my_sqrt"
native fun my_factorial(n: i32) -> i32 = "my_factorial"
 
fun main() -> i8 {
    val root = my_sqrt(144.0)  // 12.0
    val fact = my_factorial(5) // 120
    0
}
```
 
Link everything together:
 
```bash
crow build program.crow -o program
# or manually:
cc program.o mylib.o runtime/libcrow_rt.a -o program -lm
```
 
## Restrictions
 
Native functions cannot have generic type parameters. This is a C limitation — C doesn't have generics, so there's no way to generate a symbol for an arbitrary type.
 
```rust
// This is an error:
native fun bad[T](x: T) = "bad"
 
// Instead, make concrete versions:
native fun print_i32(n: i32) = "crow_print_i32"
native fun print_i64(n: i64) = "crow_print_i64"
```
