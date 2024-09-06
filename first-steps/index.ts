import express from 'express';
const app = express();
import  calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight || isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: 'Invalid or missing parameters' });
  }

  const bmi = calculateBmi(height, weight);

  return res.json(
    {
      weight,
      height,
      bmi
    }
  );
});


app.post('/exercises', (req, res) => {
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { dailyExerciseHours, targetDailyHours } = req.body;


  if (!dailyExerciseHours || targetDailyHours === undefined) {
    return res.status(400).json({ error: "parameters missing" });
  }

  if (!Array.isArray(dailyExerciseHours) || !dailyExerciseHours.every(h => typeof h === 'number') || typeof targetDailyHours !== 'number') {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  
  const result = calculateExercises(dailyExerciseHours, targetDailyHours);
  
  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



