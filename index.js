const passwordShow = document.querySelector('.password__show');
const passwordGenerateBtn = document.querySelector('.password__generate__btn');
const passwordCopyBtn = document.querySelector('.password__copy__btn');
const passwordSecureCheck = document.querySelector('.password__secure__check');
const passwordLengthRange = document.querySelector('#password__length__range');
const passwordLengthShow = document.querySelector(".password__length__show");
const passwordNumber = document.querySelector('#password__number');
const passwordSymbols = document.querySelector('#password__symbols');
const passwordLowercase = document.querySelector('#password__characters__lowercase');
const passwordUppercase = document.querySelector('#password__characters__uppercase');
let passwordLength=8;

const validateToPasswordIsSecure = () => {
    if(passwordLength < 8){
        passwordSecureCheck.querySelector('span ion-icon').name = 'shield-outline'
        passwordSecureCheck.querySelector('span').setAttribute('class','text-danger me-2 display-3')
        passwordSecureCheck.querySelector('b').innerText = "Failed Password";
        document.body.setAttribute('class','bg-danger');
    }else if(passwordLength < 12){
        passwordSecureCheck.querySelector('span ion-icon').name = 'shield-half-outline'
        passwordSecureCheck.querySelector('span').setAttribute('class','text-warning me-2 display-3')
        passwordSecureCheck.querySelector('b').innerText = "Medium Password";
        document.body.setAttribute('class','bg-warning');
    }else if(passwordLength < 60){
        passwordSecureCheck.querySelector('span ion-icon').name = 'shield-checkmark-outline'
        passwordSecureCheck.querySelector('span').setAttribute('class','text-success me-2 display-3')
        passwordSecureCheck.querySelector('b').innerText = "Secure Password";
        document.body.setAttribute('class','bg-success');
    }
}

const passwordGenerate = () =>{
    const number = '1234567890';
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "@#$%&+=-_?";
    let tempCharacters = "";
    if(passwordNumber.checked == true) tempCharacters += number;
    if(passwordLowercase.checked == true) tempCharacters += lowercaseCharacters;
    if(passwordUppercase.checked == true) tempCharacters += uppercaseCharacters;
    if(passwordSymbols.checked == true) tempCharacters += symbols;
    let tempPassword = "";
    if(tempCharacters && passwordLength != undefined && passwordNumber.checked || passwordUppercase.checked || passwordLowercase.checked || passwordSymbols.checked){
        for(let x=1;x<=passwordLength;x++){
            tempPassword += tempCharacters[Math.floor(Math.random()*tempCharacters.length)]; 
        }
        passwordShow.value = tempPassword;
    }
    tempCharacters = "";
    passwordLengthShow.innerText = `(${passwordLength})`;
    validateToPasswordIsSecure();
}
passwordGenerate();

passwordLengthRange.addEventListener('input',(e)=>{
    passwordLength = e.target.value;
    passwordGenerate();
})

passwordGenerateBtn.addEventListener('click',()=>{
    passwordGenerate()
})

passwordNumber.addEventListener('change',()=>{
    passwordGenerate();
})

passwordSymbols.addEventListener('change',()=>{
    passwordGenerate();
})

passwordLowercase.addEventListener('change',()=>{
    passwordGenerate();
})

passwordUppercase.addEventListener('change',()=>{
    passwordGenerate();
})


passwordCopyBtn.addEventListener('click',()=>{
    passwordShow.select()
    document.execCommand("copy")
})
