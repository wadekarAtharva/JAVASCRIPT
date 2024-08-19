// destructure

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor  ---->to access


const {courseInstructor:instructor}=course

// console.log(courseInstructor);
console.log(instructor);

// ============ APIS ============

// {
    // string:string
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }