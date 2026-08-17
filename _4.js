let student = {
    name: "Manash",
    marks: [85, 78, 92, 88, 75]
};

function calculateTotal(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}

function calculateAverage(marks) {
    let total = calculateTotal(marks);
    return total / marks.length;
}

function getGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let total = calculateTotal(student.marks);
let average = calculateAverage(student.marks);
let grade = getGrade(average);

console.log("Student:", student.name);
console.log("Marks:", student.marks);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);