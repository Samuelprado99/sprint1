import promptSync = require("prompt-sync");

const prompt = promptSync();

export function fatorial(): void {
    let value: number;
    console.log("");
    console.log("========== CÁLCULO FATORIAL ==========");
    console.log("");
    
    do {
        let input: string = prompt("Escreva um número: ");
        value = parseFloat(input);

        if (isNaN(value)) {
            console.log("Por favor, insira um número válido.");
        }
        if (value < 0){
            console.log("Por favor, escreva um número maior ou igual a 0")
        }
    } while (isNaN(value) || value < 0); 

    let holder = value;
    let resultado = 1;
    
    if (holder > -1) {
        if (holder === 0) { }
        else {
            if (holder === 1) { }
            else {
                if (holder >= 2) {
                    while (holder >= 1) {
                        resultado *= holder;
                        holder--;
                    }
                }
            }   
        }
        console.log(`O resultado do fatorial de ${value} é ${resultado}.`);
    }
}