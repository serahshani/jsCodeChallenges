function calculateGrade(marks= 33){
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
const studentMarks = 33;
const studentGrade = calculateGrade(studentMarks);

console.log(`Student marks: ${studentMarks}`);
console.log(`Student grade: ${studentGrade}`);