// tính điểm trung bình
function tinhDiemTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

// xác định đội thắng cuộc
function xacDinhNguoiThang(diemTB_Dolphins, diemTB_Koalas) {
    if (diemTB_Dolphins > diemTB_Koalas && diemTB_Dolphins >= 100) {
        console.log(`Dolphins thắng với điểm trung bình là ${diemTB_Dolphins.toFixed(2)}!`);
    } else if (diemTB_Koalas > diemTB_Dolphins && diemTB_Koalas >= 100) {
        console.log(`Koalas thắng với điểm trung bình là ${diemTB_Koalas.toFixed(2)}!`);
    } else if (diemTB_Dolphins === diemTB_Koalas && diemTB_Dolphins >= 100 && diemTB_Koalas >= 100) {
        console.log(`Hai đội hòa! Cả hai đội đều có điểm trung bình là ${diemTB_Dolphins.toFixed(2)}.`);
    } else {
        console.log(`Không đội nào thắng cả. Cả hai đội cần có điểm trung bình ít nhất là 100.`);
    }
}

// test data 1
let diemTB_Dolphins1 = tinhDiemTrungBinh(96, 108, 89);
let diemTB_Koalas1 = tinhDiemTrungBinh(88, 91, 110);
xacDinhNguoiThang(diemTB_Dolphins1, diemTB_Koalas1);

// test data 2
let diemTB_DolphinsBonus1 = tinhDiemTrungBinh(97, 112, 101);
let diemTB_KoalasBonus1 = tinhDiemTrungBinh(109, 95, 123);
xacDinhNguoiThang(diemTB_DolphinsBonus1, diemTB_KoalasBonus1);

// test data 3
let diemTB_DolphinsBonus2 = tinhDiemTrungBinh(97, 112, 101);
let diemTB_KoalasBonus2 = tinhDiemTrungBinh(109, 95, 106);
xacDinhNguoiThang(diemTB_DolphinsBonus2, diemTB_KoalasBonus2);
