function predictSalary() {
  const tenth = parseFloat(document.getElementById('tenth').value);
  const twelfth = parseFloat(document.getElementById('twelfth').value);
  const test = parseFloat(document.getElementById('test').value);
  const interview = parseFloat(document.getElementById('interview').value);
  const experience = parseFloat(document.getElementById('experience').value);

  if (isNaN(tenth) || isNaN(twelfth) || isNaN(test) || isNaN(interview) || isNaN(experience)) {
    document.getElementById('result').textContent = '⚠️ Please fill in all fields properly.';
    return;
  }

  // Simple prediction formula (replace with your model logic)
  let salary = (tenth + twelfth) * 50 + test * 1000 + interview * 1200 + experience * 2500;

  document.getElementById('result').textContent = `💰 Estimated Salary: ₹${salary.toFixed(2)}`;
}
