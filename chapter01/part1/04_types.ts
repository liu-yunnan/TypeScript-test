namespace TS4{
// object 一个js对象
let a:object;
a={};
a=function(){};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 属性名后面加上？，表示属性是可选的
let b:{name:string,age?:number};
b={name:'xxx'};

// [propName:string]:any 表示任意类型的属性
let c:{name:string,[propName:string]:any};
c={name:'xxx',age:18,gender:'女'};

// 设置函数结构的类型声明：
// 语法：(形参:类型,形参:类型...) => 返回值
let d:(a:string,b:string)=>string
d= function(a:string,b:string):string{
  return a+b;
}

// 数组类型声明
//  1.类型[]
//  2.Array<类型>
// string[]：表示字符串类型数组
let e:string[];
let f:number[];
let g:Array<number>;
g = [1,2,3];

// tuple:元组就是固定长度的数组
// 语法：[类型，类型，类型]
let h:[string,string];
h=['a','b'];

// enum 枚举
enum Gender{
  Male = 0,
  Female = 1
}
let i:{name:string,gender:Gender};
i={
  name:'xxx',
  gender:Gender.Male //'male'
}
// console.log(i.gender === Gender.Male);

// &表示同时
let j:{name:string}&{age:number};
j = {name:'xxx',age:18}

// 类型的别名
type myType = 1|2|3|4|5;
let k:myType;
let l:myType;
k=1;
l=2;
}