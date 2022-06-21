/*
let a;

a=10;
a='hello';
ts给变量指定类型，变为静态类型的语言
let a ：number;
a=10;
a的类型设置为number，在以后的使用中a的值只能是数字
a='hello'; 会报错
*/
let a:number;
a=10;
// a='hello';

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测；
let b:boolean = true;

function sum(a: number,b: number):number{
  return a+b;
}
let result = sum(123,456);
console.log(result);