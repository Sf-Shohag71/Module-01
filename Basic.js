var user = {
    firstName : "Shakh Farid",
    lastName : "Shohag",
    role : "Programmer",
    loginCount : 32,
    facebookSignIn : true,
    courseList : [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled total ${this.courseList.length} courses`
    },
};
user.buyCourse("JavaScript");
//console.log(user.getCourseCount());
//console.log(user);

var city = [
    "Dhaka",
    "Cumilla",
    "Rangpur",
    "Dinajpur",
    "Bogura",
    1997,
    "Shylet"
];
for(let i=0; i < city.length; i++){
    if (typeof city[i] === 'string') {
        break;
    }
    console.log(city[i]);
}