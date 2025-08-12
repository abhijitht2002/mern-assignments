function gradeCalculator(){

    alert("Grade Calculator");
    
    const n = 5;
    let sum = 0;

    for(let i = 1; i <= n; i++){
 
        let input = prompt(`Enter the mark of subject${i}:`);
        
        if(input === null){
            return;
        }
        
        let mark = Number(input);

        if(input.trim() === "" || isNaN(mark)){

            alert("OOPS! looks like you've made a mistake");
            i--;
            continue;
        }

        sum += mark;
    }

    let avg = getAvg(sum, n);
    let grade = getGrade(avg);
    
    alert(`your total: ${sum}\nyour average: ${avg}\nyour grade is: ${grade}`);
}

function getAvg(total, noOfSubjects){
    return total/noOfSubjects;
}
    
function getGrade(avg) {
    if(avg >= 90) return "A+"
    else if(avg >= 80) return "A"
    else if(avg >= 70) return "B"
    else if(avg >= 60) return "C"
    else if(avg >= 50) return "D"
    else return "F"
}

gradeCalculator();