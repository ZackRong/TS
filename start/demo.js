// 函数
function greeter(person) {
    console.log("Hello " + person);
}
console.log(greeter('Jack'));
;
function greeter2(person) {
    console.log("Hello " + person.firstName + "-" + person.lastName);
}
var user = { firstName: 'r', lastName: 'zx' };
greeter2(user);
// 类。只要类实例满足接口属性要求即可。
var Student = /** @class */ (function () {
    // 构造函数中带public，表明该参数也是类中一个属性
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return Student;
}());
var student = new Student('r', 'z', 'x');
greeter2(student);
