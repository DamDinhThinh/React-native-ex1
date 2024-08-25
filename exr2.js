// test data 1
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

// test data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

// tính toán data 1
let markBMI1 = markWeight1 / (markHeight1 * markHeight1);
let johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// tính toán data 2
let markBMI2 = markWeight2 / (markHeight2 * markHeight2);
let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);


function compareBMI(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        console.log(`BMI của Mark(${markBMI.toFixed(2)}) cao hơn của John (${johnBMI.toFixed(2)})!`);
    } else if (johnBMI > markBMI) {
        console.log(`BMI của John (${johnBMI.toFixed(2)}) cao hơn của Mark (${markBMI.toFixed(2)})!`);
    } else {
        console.log(`Mark và John có cùng chỉ số BMI (${markBMI.toFixed(2)})!`);
    }
}


compareBMI(markBMI1, johnBMI1);
compareBMI(markBMI2, johnBMI2);
