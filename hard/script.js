// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
//BMI = mass / height ^2 = mass / (height * height)




bmiTom = 8 / (9 * 9);
bmiJerry = 45 / (10 * 10);
console.log(bmiTom, bmiJerry); //their BMIs are equal
tomsbmiHigher = bmiTom > bmiJerry;

console.log(`Is Tom's BMI higher than Jerry's? ${tomsbmiHigher}`);

let calcBMI = function(mass, height) {
    return mass / (height * height)
}
let tomsBMI = calcBMI(8, 9);
let jerryBMI = calcBMI(45, 10)
console.log(tomsBMI, jerryBMI);