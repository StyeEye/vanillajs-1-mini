let count = 0;

function increase() {
    count++;
    console.log(`increased: ${count}`);
}

function decrease() {
    count--;
    console.log(`decreased: ${count}`);
}

function reset() {
    count = 0;
    console.log(`reset: ${count}`);
}
console.log(`hello world`);