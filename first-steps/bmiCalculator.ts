interface MultiplyValues {
    value1: number;
    value2: number;
  }
  
  const parseArguments = (args: string[]): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      };
    } else {
      throw new Error('Provided values were not numbers!');
    }
  };


const calculateBmi = (height: number , weight: number ) => {
    
    const IMC = weight / (height)**2*10000;

    switch (true) {
        case IMC < 16.00 : {
            return "Low weight (severe thinness)";
        }
        case IMC >= 16.00 && IMC < 17.00 : {
            return "Low weight (moderate thinness)";  
        }
        case IMC >= 17.00 && IMC <= 18.49 : {
            return "Low weight (mild thinness)";
        }
        case IMC >= 18.5 && IMC <= 24.99 : {
            return "Normal (healthy weight)";
        }
        case IMC >= 25.00 && IMC <= 29.99 : {
            return "Overweight (pre-obesity)";
        }
        case IMC >= 30.00 && IMC <= 34.99 : {
            return "Obesity (mild)";
        }
        case IMC >= 35.00 && IMC <= 39.99 : {
            return "Obesity (medium)";
        }
        case IMC >= 40.00: {
            return "Obesity (morbid)";
        }
        default: {
            return "Invalid BMI value";
        }
    }
};

try {
    const { value1, value2 } = parseArguments(process.argv);
    console.log(calculateBmi(value1, value2));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

export default calculateBmi;