let number = [15, 20, 25, 30, 40, 55];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
    
}
console.log(sum);

let names  = ["Ali", "Maqsood", "Abu bakar", "Fatima", "sara" ];
let found = false;
for (let i = 0; i < names.length; i++) {
    if (names[i] === "sara") {
        console.log("sara found at index ",i);
        found = true;
        break;
    }
}
    if (!found) {
         console.log("element not found ");
    }
    
    
