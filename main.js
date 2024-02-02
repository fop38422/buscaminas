let mapa = [10];

for (let i = 0; i < 10; i++){
    mapa[i] = [];
    for (let j = 1; j <= 10; j++){
       mapa[i][j] = 0;
    }
}

for (let i = 0; i < 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(mapa[i][j]);
    }
}