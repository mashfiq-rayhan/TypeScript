"use strict";
// const names: Array<string> = [];
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// const names: Readonly<string[]> =['Mash', 'Ray'];
// names.push('Ovi');
// names.pop();
