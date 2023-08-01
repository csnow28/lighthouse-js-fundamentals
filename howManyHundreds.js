function howManyHundreds(number){
return (number - (number % 100)) / 100;
}
console.log(howManyHundreds(1000));