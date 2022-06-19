// 論理演算子の本当の意味をしろう

const flag1 = true;
const flag2 = false;

// if (flag1 || flag2){
//   console.log('1か2はtrueになります')
// }

// if (flag1 && flag2){
//   console.log('1も2もtureになります')
// }

// ||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何かが設定されました";
console.log(fee2);
