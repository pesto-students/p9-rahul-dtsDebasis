//memoization function
function memoize(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}

function add(...arg) {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum = sum + arg[i];
    }
    return sum;
}

const memorizeAdd = memoize(add);

console.log(memorizeAdd(100, 100));
console.log(memorizeAdd(100));
console.log(memorizeAdd(100, 200));
console.log(memorizeAdd(100, 100));