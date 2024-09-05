import inquirer from "inquirer";
class student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
const persons = new person();
const program = async (persons) => {
    console.log("welcome");
    do {
        let answer = await inquirer.prompt([{
                type: "list",
                name: "options",
                message: "select one option",
                choices: ["students", "staff", "exit",]
            }]);
        if (answer.options == "staff") {
            console.log(`you are interacting with the staff feel free to ask questions`);
        }
        else if (answer.options == "students") {
            console.log(`you are interacting with the students`);
            let answer = await inquirer.prompt({
                type: "input",
                name: "name",
                message: "Enter student name you want to interact with",
            });
            let Student = persons.student.find(val => val.name === answer.name);
            if (!Student) {
                const name = new student(answer.name);
                persons.addStudent(name);
                console.log(`New student added`);
                console.log(`Hi ! i am ${name.name} it's nice to meet you.`);
                console.log("current student");
                console.log(persons.student);
            }
            else {
                console.log(`Hi! i am ${Student.name} it's nice to see you again.`);
                console.log("exiting list");
                console.log(persons.student);
            }
        }
        else if (answer.options == "exit") {
            console.log("exiting the program");
            process.exit();
        }
    } while (true);
};
program(persons);
