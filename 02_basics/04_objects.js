//const tinderUser = new Object() SINGLETON OBJECT

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "SASA";
tinderUser.isloggedin = "true";

//console.log(tinderUser);

const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Satvik",
      lastname: "Mishra",
    },
  },
};
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "c", 3: "d" };
const obj5 = { 5: "a", 6: "d" };

// const obj3 = Object.assign({}, obj1, obj2, obj5)
const obj3 = { ...obj1, ...obj2, ...obj5 };

// console.log(obj3);


// When we get value from server we get in array form.

const user = [
     {
        id: 1,
        email: "H@gmail.com"
     },
     {
        id: 1,
        email: "H@gmail.com"
     },
     {
        id: 1,
        email: "H@gmail.com"
     },
]

// console.log(user[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('name'));

//Destructure

const course = { 
    coursename: "JS",
    Teacher: "SA",
    Price: "999"
}

// course.coursename instead of using this 
//We can use this so we dont have to delcare everyime like ___.____.____

const {coursename: CN} = course
console.log(CN);


//JSON

/*
    "name": "satvik",
    "age": 19
/*


