//Fibonacci con recursividad

function Fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n > 1) {
        let result = Fibonacci(n - 1) + Fibonacci(n - 2);
        return result;
    }
}

//Diccionario (fibonacci)

function Fibonacci(n, memory) {
    if (n in memory) {
        return memory[n];
    }
    if (n === 0) {
        memory[n] == 0;
        return 0;
    }
    if (n === 1) {
        memory[n] == 1;
        return 1;
    }
    if (n > 1) {
        resultado = Fibonacci(n-1, memory) + Fibonacci(n-2, memory)
        memory[n] = resultado;
        return resultado;
    }


} 