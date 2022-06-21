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
}
