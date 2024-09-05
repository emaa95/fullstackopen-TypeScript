interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const parseExerciseArgs = (args: string[]): { targetDailyHours: number, dailyExerciseHours: number[] } => {
  if (args.length < 4) throw new Error('Not enough arguments');
  
  const targetDailyHours = Number(args[2]);
  const dailyExerciseHours = args.slice(3).map(hours => {
      const parsed = Number(hours);
      if (isNaN(parsed)) {
          throw new Error('All exercise hours should be numbers');
      }
      return parsed;
  });

  if (isNaN(targetDailyHours)) {
      throw new Error('Target daily hours should be a number');
  }

  return {
      targetDailyHours,
      dailyExerciseHours
  };
};

const calculateExercises = (dailyExerciseHours: number[], targetDailyHours: number): Result => {
    const periodLength = dailyExerciseHours.length;
    let trainingDays = 0;
    let suma = 0;
    let success = false;

    for (let i = 0; i < dailyExerciseHours.length; i++) {
        suma += dailyExerciseHours[i];
        if (dailyExerciseHours[i] !== 0 ) {
          trainingDays += 1;
        }
    }

    const average = suma / periodLength;
    if (average >= targetDailyHours) {
      success = true;
    }

    let rating = 1;
    let ratingDescription = '';

    if (average >= targetDailyHours) {
        rating = 3;
        ratingDescription = 'Excellent, you met or exceeded the daily target.';
    } else if (average >= 0.8 * targetDailyHours) {
        rating = 2;
        ratingDescription = 'Good job, but there is some room for improvement to reach the daily target.';
    } else {
        rating = 1;
        ratingDescription = 'You need to work harder to meet the daily target.';
    }


    return {
      periodLength: periodLength,
      trainingDays: trainingDays,
      success: success,
      rating: rating,
      ratingDescription: ratingDescription,
      target: targetDailyHours,
      average: average,
    };
};

try {
  const { targetDailyHours, dailyExerciseHours } = parseExerciseArgs(process.argv);
  console.log(calculateExercises(dailyExerciseHours, targetDailyHours));
} catch (error) {
  if (error instanceof Error) {
      console.log('Error:', error.message);
  } else {
      console.log('Unknown error occurred');
  }
}
