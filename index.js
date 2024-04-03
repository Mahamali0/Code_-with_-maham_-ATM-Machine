import inquirer from 'inquirer';
console.log("Welcome to Code with Maham - ATM Machine");
let Input = await inquirer.prompt([
    {
        name: "userId",
        type: "string",
        message: "Please enter your user id: "
    },
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin: ",
        when(answers) {
            return answers.userId;
        },
    },
    {
        name: "action",
        type: "list",
        choices: ['Fast Withdraw', 'Manual Withdraw', 'Balance Inquiry'],
        message: "What action do you want to perform? ",
        when(answers) {
            return answers.pin;
        },
    },
    {
        name: "amount",
        type: "list",
        choices: ["10000", "20000", "30000", "40000", "50000"],
        message: "Please select withdraw amount: ",
        when(answers) {
            return answers.action == "Fast Withdraw";
        },
    },
    {
        name: "amount",
        type: "number",
        message: "Please enter withdraw amount: ",
        when(answers) {
            return answers.action == "Manual Withdraw";
        },
    }
]);
const { userId, pin, action, amount } = Input;
if (userId && pin) {
    let balance = Math.floor(Math.random() * 10000000);
    if (action == "Balance Inquiry") {
        console.log(`Your available balance is: ${balance}`);
    }
    else if (action == "Fast Withdraw" || action == "Manual Withdraw") {
        if (amount > balance) {
            console.log(`Insufficient Balance : ${balance}`);
        }
        else {
            console.log(`Withdraw amount: ${amount}`);
            console.log(`Balance before withdraw: ${balance}`);
            balance = (balance - amount);
            console.log(`Balance after withdraw: ${balance}`);
        }
    }
}
