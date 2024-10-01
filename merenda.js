function sommaInteri(N) {
    // A voi l'onore!
    let contatore = 0;
    let sum = 0;

    if (N === '' || N < 0) return 'Invalid input'

    while (sum <= N) {
        contatore++;
        console.log(contatore)
        sum += contatore;
        console.log(sum)
    }
    return contatore - 1
}
