// console.log(score)

// score =90
// var score;

// console.log(score)

// const arr = [1,2,3]
// arr.forEach(console.log)

// {
//     var foo = 10;
// }

// console.log(foo)

// outer : for(var i = 0 ; i < 3; i++) {
//     for (var j =0 ; j <3; j++){
//         if(i+j === 3) break outer;
//         console.log(`inner [${i},${j}]`)
//     }
// }

// console.log("Done!")

// var animal = false && "Dog"
// console.log(animal)

// switch(3){
//     case 1:
//         console.log("1")
//     case 2:
//         console.log("2")
//     case 3:
//         console.log("3")
// }

// function String (number) {
//     this.i = number
// }
// var number = new String(1)

// console.log(number)

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car('Eagle', 'Talon TSi', 1993);
// console.log(car1)

// var person = {
// 	name : "lee",
//     age : 20,
//     Hi : function(){
//     console.log(`Hi my name is ${this.name}`)
//     }
// }

// person.Hi()

// const arr = [1,2,3]
// const [selectno , setSelectNo] = useState(0)

// const changeColor = (no) =>{
//     setSelectNo(no)
// }

// {arr.map((no)=>{
//     return <div className="part" onMouseOver={() => changeColor(no)}>
//         <div className="one">첫번째 요소입니다</div>
//         <div className="two">두번째 요소입니다</div>
//         </div>
// })}

// var a = {
//     x : {y : 1}
// }

// var copy = {...a}
// console.log(a, copy)

// copy.x = 3
// console.log(a)
// console.log(copy)

// copy.x.y = 5

// console.log(a)
// console.log(copy)

// copy.x = 3
// console.log(a)
// console.log(copy)

// a.x.y = 10
// console.log(a, copy)

// var f = function add(x,y){
//     console.log(x+y)
// }

// add(2,3)
// console.log(add)
// console.log(sub)

// function add(x,y){
//     return x+y
// }

// var sub = function (x,y){
//     return x-y
// }

// let sayHi = function foo(who){
//     if(who){
//         console.log(`hello ${who}`)
//     } else {
//         foo('guest')
//     }
// }

// const welcome = sayHi

// sayHi = null
// welcome()

// let num = 100

// const chageVal = (x)=>{
//     x += 100
//     return x
// }

// let num2 = chageVal(num)

// console.log(num,num2)

// var result = ((x,y) => {return x+y})(2,4)
// console.log(result)

// var count = 0
// var increase = ()=>{
//     return ++count
// }

// var show = increase()
// num = 5
// console.log(count,show,num)

// const func = () => {
//     var x = "hello";
//   console.log(x);

//   var y = "hi";
//   const func2 = () => {
//     console.log(x)
//     console.log(y);
//   };
//   func2();
// };

// func();

// const foo = ()=>{
//     console.log("im global foo")
// }

// const boo = () =>{

//     const foo =()=>{
//         console.log("im local foo")
//     }

//     foo()
// }
// foo()
// boo()

// let x = 1

// if (true) {
//     let x = 10
//     console.log(x) // 10
// }

// console.log(x) // 1

// var x = "global"
// console.log(foo)

// var foo = function () {
//     console.log("x")
// }

// var Counter = (function () {
//   var num = 0;

//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     },
//   };
// })();

// console.log(Counter.increase());
// console.log(Counter.increase())

// console.log(foo)

// Object 생성자 함수

// const person = new Object

// person.name = "woony"
// person.age = 26

// console.log(person)

// const str = new String('woony')
// const str2 = "jenny"
// const str3 = String("honey")
// str.name = "mungyerg"
// console.log(str.name)
// console.log(typeof str)
// console.log(typeof str2)
// console.log(typeof str3)

// const newPerson = new Object();
// newPerson.name = "woony"
// newPerson.age = 26
// newPerson.sayHello = function () {
//     console.log(`Hi, I'm ${this.name} ${this.age}`)
// }

// newPerson.sayHello()

// console.log(str2.length)

// const circle1 = {
//   radius: 5,
//   getDiameter: function () {
//     return 2 * this.radius;
//   }
// };

// console.log(circle1.getDiameter()); // 10

// function Circle (radius) {
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius
//   }
// }

// const circle1 = new Circle(5)
// const circle2 = new Circle(10)

// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());

// const circle3 = Circle(15)
// console.log(circle3)
// console.log(radius)


// const increase = function (num) {
//   return ++num
// }
// const obj = {increase ,b:2}

// function square(num){
//   return num*num
// }

// console.dir(square)

// function sum () {
//   let res = 0;
//   console.log(res)
//   for(let i = 0; i <arguments.length; i++) {
//       res += arguments[i]
//   }
  
//   return res;
// }

// console.log(sum())
// console.log(sum(1,2))
// console.log(sum(1,2,3))
// console.log(res)

// const circle = {
//   radius : 5, // 반지름
//   getDiameter() {
//     return 2 * this.radius
//   },
  
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// };

// console.log(circle);
// console.log(circle.getArea());

// function Circle (radius) {

//   this.radius = radius;
//   this.Area = function () {
//     return Math.PI * this.radius ** 2
//   }
// }

// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };  

// const circle1 = new Circle(5) //반지름이 5인 인스턴스 생성
// const circle2 = new Circle(10) //반지름이 10인 인스턴스 생성

// // Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// // 프로토타입 Cricle.prototype으로부터 getArea 메서드를 상속받는다.
// // 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.

// console.log(circle1.getArea === circle2.getArea); //true 
// //이제는 같은 메서드를 공유한다.

// console.log(circle1.Area()); 
// console.log(circle2.Area());

// console.log(x)
// console.log(y)

// function foo () {
//   // console.log(x)
//   console.log(y)
//   var y = 20
//   x = 10
// }

// foo()

// console.log(x)
// // console.log(y)
console.log(x)
var x = 'global';

function foo () {
    console.log(x); // ? => undefined
    var x = 'local'
}

foo();
console.log(x); // global
