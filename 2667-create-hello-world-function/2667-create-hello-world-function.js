function createHelloWorld() {
    return function(...args) {
        return "Hello World";
    };
}

// Example usage:
const f = createHelloWorld();
console.log(f());
console.log(f({}, null, 99)); 