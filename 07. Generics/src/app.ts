// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// promise.then(data => {
//     const arr = data.split(' ');
//     console.log(arr);
// });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// console.log(merge({name: 'Mash'}, {age: 30}));

// const mergedObj = merge({name:'Max'}, {age: 30});

// interface Lengthy {
//     length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//     let desc = 'Got no Value.';
//     if(element.length === 1) {
//         desc = 'Got 1 element';
//     } else if (element.length > 1) {
//         desc = 'Got ' + element.length + ' elements.';
//     }
//     return [element, desc];
// }

// console.log(countAndDescribe('Hi There!'));

// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//   return 'Value: ' + obj[key];
// }

// extractAndConvert({name: "Mash"}, "name");

// class DataStorage<T> {
//     private data:T[] = [];

//     addItem(item:T) {
//         this.data.push(item);
//     }

//     removeItem(item:T){
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems(){
//         return [...this.data];
//     }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Mash');
// textStorage.addItem('Ray');
// console.log(textStorage.getItems());
// textStorage.removeItem('Ray');
// console.log(textStorage.getItems());

// const numStorage = new DataStorage<number>();
// numStorage.addItem(10);
// numStorage.addItem(20);
// numStorage.addItem(30);
// console.log(numStorage.getItems());
// numStorage.removeItem(30);
// console.log(numStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name:'Mash', age: 30});
// objStorage.addItem({name:'Ray', age: 30});
// console.log(objStorage.getItems());
// objStorage.removeItem({name:'Ray', age: 30});
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date; 
}

function createCourseGoal(title:string, description:string, date:Date): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// const names: Readonly<string[]> =['Mash', 'Ray'];
// names.push('Ovi');
// names.pop();