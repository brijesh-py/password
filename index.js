//  selectors
let btn = document.querySelector(".btn");
let password_output = document.querySelector("#password");
let charactors = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&`;
let password_range = document.querySelector("#range");
const copy_password = document.querySelector("#copy-password");
let length = 8;

// generator password function
const generatePassword = () => {
    let temp = ''
    for(let x = 1; x <= length; x++){
        temp += charactors[Math.floor(Math.random()*charactors.length)];
    }
    password_output.value = temp;
} 
// auto-generate
generatePassword();

// generate button
btn.addEventListener("click",() => {
    generatePassword();
});

// length of passowrd
password_range.addEventListener("input",() => {
    length = password_range.value;
    generatePassword();
})

// copy password
copy_password.addEventListener("click",() => {
    password_output.select()
    navigator.clipboard.writeText(password_output.value)
})
