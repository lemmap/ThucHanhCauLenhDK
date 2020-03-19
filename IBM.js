let weight=parseInt(prompt("Nhap vao can nang"));
let height=parseInt(prompt("nhao vao chieu cao"));
let bmi=weight/height;
if (bmi>=30) {
    alert("obese");
}else if (25<=bmi<30) {
    alert("overweight");
}else if (18.5<=bmi<25) {
    alert("normal");
}else {
    alert("underweight");
}
