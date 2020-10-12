// 函数
function greeter(person: String) {
  console.log(`Hello ${person}`);
}

console.log(greeter('Jack'));


// 接口
interface Person {
  firstName: string;
  lastName: string;
};

function greeter2 (person: Person) {
  console.log(`Hello ${person.firstName}-${person.lastName}`);
}
let user = {firstName: 'r', lastName: 'zx'};
greeter2(user);

// 类。只要类实例满足接口属性要求即可。
class Student {
  fullName: string;
  // 构造函数中带public，表明该参数也是类中一个属性
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleName + ' ' + lastName;
  }
}

const student = new Student('r', 'z', 'x');
greeter2(student);