//function definition
function calculateGrade(marks= 33){
//testing the conditions    
    if (marks >= 80 && marks <=100){
        return 'A';
    }else if(marks >=60 && marks <79){
        return 'B';
    }else if(marks >=50 && marks <= 59){
        return 'C';
    }else if(marks <=40 && marks >= 49){
        return 'D';
    }else if(marks > 0 && marks < 39){
        return 'E';
    }else{
        return 'Out 0f range';
    }
}
//assigning student's marks
let studentMarks = 33;
//checks the student's grade
let studentGrade = calculateGrade(studentMarks);
//displaying the student's marks
console.log(`Student marks: ${studentMarks}`);
//displaying the studen'ts grade
console.log(`Student grade: ${studentGrade}`);