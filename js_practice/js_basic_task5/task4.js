function determinePerformance(math, literature, physics) {
    const average = (math + literature + physics) / 3;
  
    
    if (average >= 1 && average <= 49) {
      return "Низька успішність";
    } else if (average >= 50 && average <= 69) {
      return "Середня успішність";
    } else if (average >= 70 && average <= 89) {
      return "Добра успішність";
    } else if (average >= 90 && average <= 100) {
      return "Дуже добра успішність";
    } else {
      return "Неправильний ввід або помилка обчислення"; 
  }
}
  
  const mathGrade = 75;
  const literatureGrade = 80;
  const physicsGrade = 90;
  
  const performance = determinePerformance(mathGrade, literatureGrade, physicsGrade);
  console.log(performance);