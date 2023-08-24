import "./styles.css";
/**
 * const.let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "letを再宣言不可能";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数は上書き不可";
// console.log(val3);

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトのプロパティは変更が可能
// const val4 = {
//   name: "ken",
//   age: 27,
// };
// val4.name = "karnel";
// val4.address = "tokyo";
// console.log(val4);

// constで定義した配列のプロパティは変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "kenta";
// const age = 27;
// 「私の名前はkentaです。年齢は27歳です。」

//　従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//　テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "kenta",
//   age: 27,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["kenta", 27];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "gest") => console.log(`こんにちは!${name}さん!`);
// sayHello("kenta");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー,結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// arr4をそのまま入れると参照渡しになる。
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "けんた"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です。`));

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "けんた") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtureの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです。" : "falseです。";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formatedNum = typeof num === "number" ? num.toLocaleString() : "数値を宣言してください。";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です。";
// };
// console.log(checkSum(50, 51));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//     console.log("1か2はtureになります");
// }

// if (flag1 && flag2) {
//     console.log("1も2はtureになります");
// }

// || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
