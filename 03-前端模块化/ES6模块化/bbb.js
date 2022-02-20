// 1.导入{}中定义的变量
import { sum } from "./aaa.js"
var name = 'Ming'
var flag = false

console.log(sum(100,200));

// 2.直接导入export定义的变量
import { num1, height } from "./aaa.js";
console.log(num1);
console.log(height);
 
// 3.导入export的funciton
import { mul ,Person} from "./aaa.js";
console.log(mul(30,50));
const p = new Person();
p.name = '李佳欣';
p.run();

// 4.导入export default (名字可以自定义)
import myFunc from "./aaa.js";
myFunc(); 

// 5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.height);
