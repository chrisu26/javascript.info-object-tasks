let user = {};
user["name"] = "John";
user["surname"] = "Smith";

user["name"] = "Pete";
delete user["name"];

console.log(user);

function isEmpty(obj) {

    for (let prop in obj) {

        if(Object.hasOwn(obj , prop)) {

            return false;
        }


    }
    return true;
}


let schedule = {};

console.log(isEmpty(schedule));

schedule["8.30"] = "get up";

console.log(isEmpty(schedule));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(obj) {

salarySum = 0;

    for (let nameSalary in obj) {
        
        let salaryIndi = obj[nameSalary];
        if (salaryIndi > 0) {
            salarySum += salaryIndi; 
        } else {
            salarySum = 0;
            break;            
        }


    }
return salarySum;
}


console.log(sumSalaries(salaries));



function multiplyNumeric(obj) {



    for (let prop in obj){
        if (typeof obj[prop] == "number"){
            let doubleValue = obj[prop] * 2;
            obj[prop] = doubleValue;

        } else {
            let sameValue = obj[prop];
            obj[prop] = sameValue;
        }
    }

return obj;

}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));
