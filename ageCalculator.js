function ageCalculator(firstName, yearOfBirth, currentYear) {
  const currentAge = currentYear - yearOfBirth;
  const result = firstName  + " is " + currentAge + " years old.";
  return result;
}
console.log(ageCalculator("Miranda", 1983, 2015));