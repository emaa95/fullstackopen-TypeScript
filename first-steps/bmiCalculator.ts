const calculateBmi = (height: number , weight: number ) => {
    
    const IMC = weight / (height)**2*10000

    switch (true) {
        case IMC < 16.00 : {
            return "Low weight (severe thinness)"
        }
        case IMC >= 16.00 && IMC < 17.00 : {
            return "Low weight (moderate thinness)"  
        }
        case IMC >= 17.00 && IMC <= 18.49 : {
            return "Low weight (mild thinness)"
        }
        case IMC >= 18.5 && IMC <= 24.99 : {
            return "Normal (healthy weight)"
        }
        case IMC >= 25.00 && IMC <= 29.99 : {
            return "Overweight (pre-obesity)"
        }
        case IMC >= 30.00 && IMC <= 34.99 : {
            return "Obesity (mild)"
        }
        case IMC >= 35.00 && IMC <= 39.99 : {
            return "Obesity (medium)"
        }
        case IMC >= 40.00: {
            return "Obesity (morbid)"
        }
    }
}

console.log(calculateBmi(180, 74));