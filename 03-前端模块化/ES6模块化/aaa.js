var name = 'Mike'
var age = 18
var flag = true

function sum (num1 , num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(10,20));
}

// 导出方式一：
export {
    flag , sum
}

// 导出方式二:
export var num1 = 1000;
export var height = 1.88;

// 导出函数、类
export function mul(num1 , num2) {
    return num1 * num2
}

export class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    run() {
        console.log(this.name + '在奔跑');
    }
}

// export default
// 一个模块只能有一个default
export default function (argument) {
    console.log('测试default');
} 