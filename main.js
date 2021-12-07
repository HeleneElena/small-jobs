let x = ''; // 1 number
let y = ''; // 2 number
let sing = ''; // operation
let finish = false;

const arr1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const arr2 = ['-', '+', 'X', '/'];

// monitor 
const out = document.querySelector('.calc-screen p');

function clearAll() {
    x = '';
    y = ''; 
    sing = ''; 
    finish = false;  
    out.textContent = 0;  
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').addEventListener('click', (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    // нажата ас
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаем нажатую кнопку

    const key = event.target.textContent;

    // нажатa кнопкa 0-9 or .
    if (arr1.includes(key)) {
        if (y === '' &&  sing === '') {
            x += key;
            out.textContent = x;
        } else if (x !== '' && y !== '' && finish) {
            y = key;
            finish = false;
            out.textContent = y;
        } else {
            y += key;
            out.textContent = y;
        }
           console.log(x, y, sing);
           return;

    }
     // нажатa кнопкa + / - / * 
    if (arr2.includes(key)) {
        sing = key;
        out.textContent = sing;
        console.log(x, y, sing);
        return;
    }
     // нажатa кнопкa =
     if (key === '=') {
         if (y === '') {
             y = x;
         }
         switch (sing) {
             case '+':
                 x = (+x) + (+y);
                 break;
             case '-':
                 x = x  - y;
                 break;
             case 'X':
                 x = x * y;
                 break;
             case '%':
                 x = (x * y) * 100;
                 break;
             case '/':
                 if (y === '0') {
                     out.textContent = "Fehler";
                     x = '';
                     y = '';
                     sing = '';
                     return;
                 }
                 x = x / y;
                 break;
         }
         finish = true;
         out.textContent = x;
         console.log(x, y, sing);
     }
// дописать позже для +/-б для дробных чисел и не считается если складываем три числа без равно между ними
});


