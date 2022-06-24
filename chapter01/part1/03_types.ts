/*
number
string
boolean
字面量
any
unknown
void
never
object
array
tuple
enum
*/

// 直接使用字面量进行类型声明
namespace TS3{
  let a:10;
  a = 10;
  let b:'male'|'female';
  b="male";
  b="female";
  // b="hello"; //此处会报错
  let c:boolean|string;
  c=true;
  c="true";
// any:表示任意类型，一个变量设置为any后相当于关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// 声明变量不指定类型，则TS解析器会自动判断变量的类型为any（隐式any）
  let d:any;

  // unknown
  let e:unknown;
  e = 10;
  e = "hello";

  let s:string
  // d的类型为any，它可以赋值给任意值
  s=d;
  //不能将类型“unknown”分配给类型“string”
  // s=e;
  // unknown 实际上是一个类型安全的any；
  // unknown 类型的变量，不能直接赋值给其他变量
  if(typeof e === "string"){
    s=e;
  }
  // 类型断言,告诉解析器变量的实际类型
  /*
  * 语法：
  *   变量 as 类型
  *   <类型>变量
   */
  s = e as string;
  s = <string>e;

  // void 用来表示空，函数无返回值；也是函数返回值默认类型
  function fn(n: number){
    if(n>1){
      return true;
    }else{
      return 123;
    }
  }
  // 返回值类型为、 true | 123

  // never 表示永远不会返回结果;不能是任何值；空也不行
  function fn1():never{
    throw new Error("error");
  }
}
