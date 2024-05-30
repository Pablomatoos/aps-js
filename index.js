/**
Trabalho da Disciplina de Programacao de JavaScript
Turma: 963N
Aluno: Pablo de matos
Matricula: 2024101352
*/

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= num/2; i += 1) {
        if (num % i === 0) return false;
    }
    return true;
}

function findLargestPrimes(): void {
    const startNum = parseInt(prompt("Digite um numero: "), 10);

    const primes: number[] = [];
    let num = startNum;

    while (primes.length < 10) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    primes.sort((a, b) => b - a); // Ordenar os primos em ordem decrescente

    console.log(`Os 10 maiores numeros primos a partir de ${startNum} sao:`);
    primes.forEach(prime => console.log(prime));
}

// Chamar a funcao para executar
findLargestPrimes();
