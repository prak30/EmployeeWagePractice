//UC6
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;
let totalEmpHours = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck){
    switch(empCheck){
    case IS_PART_TIME:
    return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
while(totalEmpHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHours += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHours);
console.log("Daily wage in array:" +empDailyWageArr);
console.log("Total Days:"+totalWorkingDays+"Total hours:"+totalEmpHours+"Emp Wage:" +empWage);