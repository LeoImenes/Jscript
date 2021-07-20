console.log(`Trabalhando com listas `);

// const salvador = `Salvador`;
// const sp = `São Paulo`;
// const rj = `Rio de Janeiro`;


const listadeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
listadeDestinos.push(`Curitiba`)
console.log("Destinos possiveis:");
console.log(listadeDestinos);

listadeDestinos.splice(1, 1);
console.log(listadeDestinos);