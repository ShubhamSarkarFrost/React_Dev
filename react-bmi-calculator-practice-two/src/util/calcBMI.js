// exports functions to calculate BMI and category
export function calculateBMI({ mode, imperial, metric }) {
  if (mode === 'standard') {
    const totalInches = (imperial.feet || 0) * 12 + (imperial.inches || 0);
    if (!totalInches || !imperial.pounds) return 0;
    const bmi = (imperial.pounds / (totalInches * totalInches)) * 703;
    return bmi;
  } else {
    const meters = (metric.cm || 0) / 100;
    if (!meters || !metric.kg) return 0;
    const bmi = metric.kg / (meters * meters);
    return bmi;
  }
}

export function getBMICategory(bmi) {
  if (!bmi) return null;
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Healthy';
  if (bmi < 30) return 'Overweight';
  return 'Obesity';
}