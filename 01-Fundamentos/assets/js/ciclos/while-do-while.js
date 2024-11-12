

const carros = ['seat', 'ferrari', 'toyota', 'fiat'];

let i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

while (carros[i]) {
    if (i === 1) {
        // break;
        i++
        continue;
    }
    console.log(carros[i]);
    i++;
}

let j = 10;

do {
    console.log(carros[j]);
    j++;
} while (carros[j]);
