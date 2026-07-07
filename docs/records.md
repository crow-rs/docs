---
sidebar_position: 4
---
 
# Records
 
Records group related data together. Think of them as structs.
 
## Defining a record
 
```rust
rec Point {
    x: i32,
    y: i32
}
```
 
This creates a type `Point` with two fields: `x` and `y`, both `i32`.
 
## Creating a record
 
Use the type name followed by field assignments in braces:
 
```rust
val origin = Point { x = 0, y = 0 }
val p = Point { x = 10, y = 20 }
```
 
Every field must be assigned. If you forget one, the compiler will tell you:
 
```
error: missing field `y` in `Point`
```
 
Fields can be assigned in any order:
 
```rust
val p = Point { y = 20, x = 10 }   // same as above
```
 
## Accessing fields
 
Use dot notation:
 
```rust
val p = Point { x = 10, y = 20 }
val sum = p.x + p.y   // 30
```
 
## Records are immutable
 
Once created, a record's fields cannot be changed. To "update" a record, create a new one:
 
```rust
fun move_right(p: Point) -> Point {
    Point { x = p.x + 1, y = p.y }
}
```
 
This is not wasteful — the compiler optimizes this well, and immutability prevents entire classes of bugs.
 
## Records with multiple fields
 
Records can have any number of fields with different types:
 
```rust
rec Person {
    name: string,
    age: i32,
    height: f64
}
 
val alice = Person {
    name = "Alice",
    age = 30,
    height = 1.65
}
 
print_str(alice.name)
print_i32(alice.age)
```
 
## Passing records to functions
 
Records work like any other type — pass them to functions, return them, store them in variables:
 
```rust
fun distance_from_origin(p: Point) -> f64 {
    // simplified: manhattan distance
    p.x + p.y
}
 
fun make_point(x: i32, y: i32) -> Point {
    Point { x = x, y = y }
}
