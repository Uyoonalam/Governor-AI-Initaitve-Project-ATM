#!/usr/bin/env node
import inquirer from "inquirer";
const atm = await inquirer.prompt([
    {
        type: 'input',
        name: 'id',
        message: "Please enter your user ID: "
    },
    {
        type: 'number',
        name: 'pin',
        message: "Please enter your unique four-digit PIN: ",
        mask: false,
        validate: (input) => {
            const four = /^\d{4}$/.test(input);
            if (four) {
                return true;
            }
            else {
                console.log("Invalid PIN code. Please enter a four-digit PIN.");
                return false;
            }
        },
        filter: (input) => {
            return /^\d{4}$/.test(input) ? parseInt(input) : null;
        }
    },
    {
        type: 'list',
        name: 'amount',
        message: "Please write the amount of withdrawal: ",
        choices: ['1000', '5000', '10000', '15000', '20000', '30000', '40000', 'Balance Inquiry']
    },
    {
        type: 'list',
        name: 'slip',
        message: "Would you like a transaction receipt",
        choices: ['yes', 'no']
    }
]);
if (atm.amount === '1000' && atm.slip === 'yes') {
    console.log("Here is Rs. 1000");
    console.log("\n");
    console.log("Balance left: Rs. 49000");
    console.log("Cash Withdrawn: Rs. 1000");
}
else if (atm.amount === '1000 ' && atm.slip === 'no') {
    console.log("Here is Rs. 1000");
}
else { }
if (atm.amount === '5000' && atm.slip === 'yes') {
    console.log("Here is Rs. 5000");
    console.log("\n");
    console.log("Balance left: Rs. 45000");
    console.log("Cash Withdrawn: Rs. 5000");
}
else if (atm.amount === '5000 ' && atm.slip === 'no') {
    console.log("Here is Rs. 5000");
}
else { }
if (atm.amount === '10000' && atm.slip === 'yes') {
    console.log("Here is Rs. 10000");
    console.log("\n");
    console.log("Balance left: Rs. 40000");
    console.log("Cash Withdrawn: Rs. 10000");
}
else if (atm.amount === '10000 ' && atm.slip === 'no') {
    console.log("Here is Rs. 10000");
}
else { }
if (atm.amount === '15000' && atm.slip === 'yes') {
    console.log("Here is Rs. 15000");
    console.log("\n");
    console.log("Balance left: Rs. 35000");
    console.log("Cash Withdrawn: Rs. 15000");
}
else if (atm.amount === '15000 ' && atm.slip === 'no') {
    console.log("Here is Rs. 15000");
}
else { }
if (atm.amount === '20000' && atm.slip === 'yes') {
    console.log("Here is Rs. 20000");
    console.log("\n");
    console.log("Balance left: Rs. 30000");
    console.log("Cash Withdrawn: Rs. 20000");
}
else if (atm.amount === '20000 ' && atm.slip === 'no') {
    console.log("Here is Rs.20000");
}
else { }
if (atm.amount === '30000' && atm.slip === 'yes') {
    console.log("Here is Rs. 30000");
    console.log("\n");
    console.log("Balance left: Rs. 20000");
    console.log("Cash Withdrawn: Rs.30000");
}
else if (atm.amount === '30000 ' && atm.slip === 'no') {
    console.log("Here is Rs. 30000");
}
else { }
if (atm.amount === '40000' && atm.slip === 'yes') {
    console.log("Here is Rs. 40000");
    console.log("\n");
    console.log("Balance left: Rs. 10000");
    console.log("Cash Withdrawn: Rs.40000");
}
else if (atm.amount === '40000 ' && atm.slip === 'no') {
    console.log("Here is Rs. 40000");
}
else { }
const random_num = Math.floor(Math.random() * 10000000);
if (atm.amount === 'Balance Inquiry' && atm.slip === 'yes') {
    console.log("Currnt Balance: 50000");
    console.log("Withdrawal number: " + random_num);
}
else if (atm.amount === 'Balance Inquiry' && atm.slip === 'no') {
    console.log("Currnt Balance: 50000");
}
else { }
console.log("\n");
console.log("Thank you for using our Uyoon Bank Limited");
console.log("\n");
console.log("\n");
// Down below can be commented if required
console.log(atm);
