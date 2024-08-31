interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}
const calculateExercises = (dailyExerciseHours: number[], targetDailyHours: number): Result => {
    const periodLength = dailyExerciseHours.length
    let trainingDays = 0;
    let suma = 0;
    let success = false;

    for (let i = 0; i < dailyExerciseHours.length; i++) {
        suma += dailyExerciseHours[i]
        if (dailyExerciseHours[i] !== 0 ) {
          trainingDays += 1;
        }
    }

    const average = suma / periodLength;
    if (average >= targetDailyHours) {
      success = true
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
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 1))