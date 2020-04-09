//Q6: Create a class Student with  properties enrollmentNumber and studentName.Write an arrow function display to display the student details.

class Student { 
    enrollmentNumber: string;
    studentName: string;

    constructor(id, name) { 
        this.enrollmentNumber = id;
        this.studentName = name;
    }

    display = () => { 
        console.log(this.enrollmentNumber);
        console.log(this.studentName);
    }
}

var st = new Student('121', 'Shrshti');
st.display();