let number = Number(prompt('숫자를 입력하세요'));

/* 50보다 크거나 같은 "크다"라고 clg, 아니면 "작다" clg */
// if (number >= 50) {
//     console.log('크다');
//     document.write('크다');
// } else {
//     console.log('작다');
//     document.write('작다');
// }

let msg = (number >= 50) ? "크다" : "작다";
console.log(msg);
