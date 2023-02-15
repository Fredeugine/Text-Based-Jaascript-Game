const inventory = [];

function showInstructions() {
    console.log("Student Escape Text Adventure Game\n" +
        "Collect 6 items to win the game or remain hostage at the kidnapper's house\n" +
        "Move commands: South, North, East, West\n" +
        "To take an item: get 'item name'\n" +
        "\n");
}
let room_commands = {
    'Storage Room': ['West', 'South', 'East'],
    'Gym Room': ['West', 'North', 'get Shoes'],
    'Play Room': ['East', 'North', 'get Drawing tools'],
    'Library Room': ['East', 'South', 'North', 'get Books'],
    'Living Room': ['West', 'South', 'North', 'get Money'],
    'Laundry Room': ['East', 'South', 'get Uniform'],
    'Kitchen room': ['South', 'West', 'get Snack']
};

// Function for everything that occurs at the Gym Room
function gymRoom() {
    // What to print whenever the user enters this room
    console.log("You are in the Gym room");
    console.log("Valid commands in this room:", room_commands["Gym Room"]);
    console.log("Inventory:", inventory);
    let userInput = prompt("Enter your move\n");
    // A while loop for invalid commands
    while (!room_commands["Gym Room"].includes(userInput)) {
        console.log("Command is invalid")
        console.log("Valid commands in this room:" , room_commands["Gym Room"]);
        userInput = prompt("Enter your move\n");
    }
    //  A while loop when user retrieves an item, leaves this room and comes back again to take the already retrieved item
    while (
        userInput === room_commands["Gym Room"][2] &&
        inventory.includes("Shoes")
        ) {
        console.log("You have already taken your snack");
        userInput = prompt("Enter a command\n");
        while (!room_commands["Gym Room"].includes(userInput)) {
            console.log('Command is invalid\n' + 'Valid commands in this room:' ,  room_commands['Gym Room']);
            userInput = prompt("Enter your move\n");
        }
    }
    // A while loop when user wants to retrieve an item
    while (
        userInput === room_commands["Gym Room"][2] &&
        !inventory.includes("Shoes")
        ) {
        console.log('Shoes retrieved!');
        inventory.push("Shoes");
        console.log("Your inventory now:", inventory);
        if (inventory.length === 6) {
            console.log(
                "Congratulations! You have collected all items and escaped the kidnapper! Thanks for playing the game. Hope you enjoyed it."
            );
            break;
        }
        userInput = prompt("Enter your move\n");
        while (userInput === room_commands["Gym Room"][2]) {
            console.log("You have already taken your shoes");
            userInput = prompt("Enter a different command\n");
        }
        while (!room_commands["Gym Room"].includes(userInput)) {
            console.log("Command is invalid");
            console.log("Valid commands in this room:", room_commands["Gym Room"]);
            userInput = prompt("Enter your move\n");
            while (userInput === room_commands["Gym Room"][2]) {
                console.log("You have already taken your shoes");
                userInput = prompt("Enter a different command\n");
            }
        }
    }
    // If-statements, when user makes a move command
    if (userInput === room_commands["Gym Room"][1]) {
        livingRoom();
    } else if (userInput === room_commands["Gym Room"][0]) {
        playroom();
    }
}

// Function for everything that occurs at the Play room
function playroom() {
    // What to print whenever the user enters this room
    console.log('You are in the Playroom\n' + 'Valid commands in this room:', room_commands['Play Room']);
    console.log('Inventory:', inventory);
    let user_input = prompt('Enter your move\n');
    // A while loop for invalid commands
    while (!room_commands['Play Room'].includes(user_input)) {
        console.log('Command is invalid\n' + 'Valid commands in this room:', room_commands['Play Room']);
        user_input = prompt('Enter your move\n');
    }

    // A while loop when user retrieves and item, leaves this room and comes back again to take the already retrieved item
    while (user_input === room_commands['Play Room'][2] && inventory.includes('Drawing tools')) {
        console.log('You have already taken your Drawing tools');
        user_input = prompt('Enter a command\n');
        while (!room_commands['Play Room'].includes(user_input)) {
            console.log('Command is invalid' + 'Valid commands in this room:', room_commands['Play Room']);
            user_input = prompt('Enter your move\n');
        }
    }
    // A while loop when user wants to retrieve an item
    while (user_input === room_commands['Play Room'][2] && !inventory.includes('Drawing tools')) {
        console.log('Drawing tools retrieved!');
        inventory.push('Drawing tools');
        inventory.sort();
        console.log('Your inventory now:', inventory);
        // An if statement when user collects the last item in this room
        if (inventory.length === 6) {
            console.log('Congratulations! You have collected all items and escaped the kidnapper! Thanks for playing the game. Hope you enjoyed it.');
            break;
        }
        user_input = prompt('Enter your move\n');
        while (user_input === room_commands['Play Room'][2]) {
            console.log('You have already taken your drawing tools ');
            user_input = prompt('Enter a different command\n');
        }
        while (!room_commands['Play Room'].includes(user_input)) {
            console.log('Command is invalid' + 'Valid commands in this room:', room_commands['Play Room'])
            user_input = prompt('Enter your move\n');
            while (user_input === room_commands['Play Room'][2]) {
                console.log('You have already taken your Drawing tools ');
                user_input = prompt('Enter a different command\n');
            }
        }
    }

    // If statements, when user makes a move command
    if (user_input === room_commands['Play Room'][1]) {
        libraryRoom();
    } else if (user_input === room_commands['Play Room'][0]) {
        gymRoom();
    }
}


// Function for everything that occurs at the Library room
function libraryRoom() {
    // What to print whenever the user enters this room
    console.log('You are in the Library room' + 'Valid commands in this room:', room_commands['Library Room']);
    console.log('Inventory:', inventory);
    let user_input = prompt('Enter a command\n');
    // A while loop for invalid commands
    while (!room_commands['Library Room'].includes(user_input)) {
        console.log('Command is invalid\n' + 'Valid commands in this room:', room_commands['Library Room']);
        user_input = prompt('Enter a different command\n');
    }
    // A while loop when user retrieves and item, leaves this room and comes back again to take the already retrieved item
    while (user_input === room_commands['Library Room'][3] && inventory.includes('Books')) {
        console.log('You have already taken your Books');
        user_input = prompt('Enter a command\n');
        while (!room_commands['Library Room'].includes(user_input)) {
            console.log('Command is invalid' + 'Valid commands in this room:', room_commands['Library Room']);
            user_input = prompt('Enter a different command\n');
        }
    }
    // A while loop when user wants to retrieve an item
    while (user_input === room_commands['Library Room'][3] && !inventory.includes('Books')) {
        console.log('Books retrieved!');
        inventory.push('Books');
        console.log('Your inventory now:', inventory);
        // An if statement when user collects the last item in this room
        if (inventory.length === 6) {
            console.log('Congratulations! You have collected all items and escaped the kidnapper! Thanks for playing the game. Hope you enjoyed it.');
            break;
        }
        user_input = prompt('Enter a command\n');
        while (user_input === room_commands['Library Room'][3]) {
            console.log('You have already taken your books');
            user_input = prompt('Enter a different command\n');
        }
        while (!room_commands['Library Room'].includes(user_input)) {
            console.log('Command is invalid\n' + 'Valid commands in this room:', room_commands['Library Room']);
            user_input = prompt('Enter your move\n');
            while (user_input === room_commands['Library Room'][3]) {
                console.log('You have already taken your books');
                user_input = prompt('Enter a different command\n');
            }
        }
    }
    // If statements, when user makes a move command
    if (user_input === room_commands['Library Room'][2]) {
        laundry_room();
    } else if (user_input === room_commands['Library Room'][1]) {
        playroom();
    } else if (user_input === room_commands['Library Room'][0]) {
        console.log('You have awaken the kidnapper. Game over!. Thanks for playing the game. Hope you enjoyed it.');
    }
}

// Function for everything that occurs at the Kitchen
function kitchen() {
    // What to print whenever the user enters this room
    console.log("You are in the Kitchen");
    console.log("Valid commands in this room:", room_commands["Kitchen room"]);
    console.log("Inventory:", inventory);
    let user_input = prompt("Enter a command\n");

    // A while loop for invalid commands
    while (!room_commands["Kitchen room"].includes(user_input)) {
        console.log("Command is invalid");
        console.log("Valid commands in this room:", room_commands["Kitchen room"]);
        user_input = prompt("Enter a different command\n");
    }

    // A while loop when user retrieves and item, leaves this room and comes back again to take the already retrieved item
    while (
        user_input === room_commands["Kitchen room"][2] &&
        inventory.includes("Snack")
        ) {
        console.log("You have already taken your snack");
        user_input = prompt("Enter a command\n");

        while (!room_commands["Kitchen room"].includes(user_input)) {
            console.log("Command is invalid");
            console.log("Valid commands in this room:", room_commands["Kitchen room"]);
            user_input = prompt("Enter your move\n");
        }
    }

    // A while loop when user wants to retrieve an item
    while (
        user_input === room_commands["Kitchen room"][2] &&
        !inventory.includes("Snack")
        ) {
        console.log("Snack retrieved!");
        inventory.push("Snack");
        console.log("Your inventory now:", inventory);

        // An if statement when user collects the last item in this room
        if (inventory.length === 6) {
            console.log(
                "Congratulations! You have collected all items and escaped the kidnapper! Thanks for playing the game. Hope you enjoyed it."
            );
            break;
        }
        user_input = prompt("Enter a command\n");

        while (user_input === room_commands["Kitchen room"][2]) {
            console.log("You have already taken your snack");
            user_input = prompt("Enter a different command\n");
        }

        while (!room_commands["Kitchen room"].includes(user_input)) {
            console.log("Command is invalid");
            console.log("Valid commands in this room:");
            console.log(room_commands["Kitchen room"]);
            user_input = prompt("Enter your move\n");

            while (user_input === room_commands["Kitchen room"][2]) {
                console.log("You have already taken your snack");
                user_input = prompt("Enter a different command\n");
            }
        }
    }
    // If statements, when user makes a move command
    if (user_input === room_commands["Kitchen room"][1]) {
        main();
    } else if (user_input === room_commands["Kitchen room"][0]) {
        livingRoom();
    }
}
// Function for everything that occurs in the Living room
function livingRoom() {
    //What to print whenever the user enters this room
    console.log("You are in the Living room");
    console.log("Valid commands in this room:", room_commands["Living Room"]);
    console.log("Inventory:", inventory);
    let userInput = prompt("Enter a command\n");
    // A while loop for invalid commands
    while (!room_commands["Living Room"].includes(userInput)) {
        console.log("Command is invalid");
        console.log("Valid commands in this room:", room_commands["Living Room"]);
        userInput = prompt("Enter a different command\n");
    }
    // A while loop when user retrieves and item, leaves this room and comes back again to take the already retrieved item
    while (userInput === room_commands["Living Room"][3] && inventory.includes("Money")) {
        console.log("You have already taken your Money");
        userInput = prompt("Enter a command\n");
        while (!room_commands["Living Room"].includes(userInput)) {
            console.log("Command is invalid");
            console.log("Valid commands in this room:", room_commands["Living Room"]);
            userInput = prompt("Enter a different command\n");
        }
    }
    //  A while loop when user wants to retrieve an item
    while (userInput === room_commands["Living Room"][3] && !inventory.includes("Money")) {
        console.log("Money retrieved!");
        inventory.push("Money");
        console.log("Your inventory now:", inventory);
        if (inventory.length === 6) {
            console.log("Congratulations! You have collected all items and escaped the kidnapper! Thanks for playing the game. Hope you enjoyed it.");
            break;
        }
        userInput = prompt("Enter a command\n");
        while (userInput === room_commands["Living Room"][3]) {
            console.log("You have already taken some money ");
            userInput = prompt("Enter a different command\n");
        }
        while (!room_commands["Living Room"].includes(userInput)) {
            console.log("Command is invalid");
            console.log("Valid commands in this room:", room_commands["Living Room"]);
            userInput = prompt("Enter your move\n");
            while (userInput === room_commands["Living Room"][3]) {
                console.log("You have already taken some money ");
                userInput = prompt("Enter a different command\n");
            }
        }
    }
    // If statements, when user makes a move command
    if (userInput === room_commands["Living Room"][2]) {
        kitchen();
    } else if (userInput === room_commands["Living Room"][1]) {
        gymRoom();
    } else if (userInput === room_commands["Living Room"][0]) {
        console.log("You have awaken the kidnapper. Game Over!. Thanks for playing the game. Hope you enjoyed it.");
    }
}

// Function for everything that occurs at the Laundry room
function laundry_room() {
    // What to print whenever the user enters this room
    console.log("You are in the Laundry room");
    console.log("Valid commands in this room:", room_commands["Laundry Room"]);
    console.log("Inventory:", inventory);
    let user_input = prompt("Enter a command\n");
    // A while loop for invalid commands
    while (!room_commands["Laundry Room"].includes(user_input)) {
        console.log("Command is invalid");
        console.log("Valid commands in this room:", room_commands["Laundry Room"]);
        user_input = prompt("Enter a different command\n");
    }
    // A while loop when user retrieves and item, leaves this room and comes back again to take the already retrieved
    // item
    while (
        user_input === room_commands["Laundry Room"][2] &&
        inventory.includes("Uniform")
        ) {
        console.log("You have already taken your Uniform");
        user_input = prompt("Enter a command\n");
        while (!room_commands["Laundry Room"].includes(user_input)) {
            console.log("Command is invalid");
            console.log("Valid commands in this room:", room_commands["Laundry Room"]);
            user_input = prompt("Enter a different command\n");
        }
    }
    // A while loop when user wants to retrieve an item
    while (
        user_input === room_commands["Laundry Room"][2] &&
        !inventory.includes("Uniform")
        ) {
        console.log("Uniform retrieved!");
        inventory.push("Uniform");
        console.log("Your inventory now:", inventory);
        // An if statement when user collects the last item in this room
        if (inventory.length === 6) {
            console.log(
                "Congratulations! You have collected all items and escaped the kidnapper! Thanks for playing the game. Hope you enjoyed it."
            );
            break;
        }
        user_input = prompt("Enter a command\n");
        while (user_input === room_commands["Laundry Room"][2]) {
            console.log("You have already taken your uniform.");
            user_input = prompt("Enter a different command\n");
        }
        while (!room_commands["Laundry Room"].includes(user_input)) {
            console.log("Command is invalid");
            console.log("Valid commands in this room:", room_commands["Laundry Room"]);
            user_input = prompt("Enter your move\n");
            while (user_input === room_commands["Laundry Room"][2]) {
                console.log("You have already taken your uniform.");
                user_input = prompt("Enter a different command\n");
            }
        }
    }
    // If statements, when user makes a move command
    if (user_input === room_commands["Laundry Room"][0]) {
        main();
    } else if (user_input === room_commands["Laundry Room"][1]) {
        libraryRoom()
    }
}


// The main function
function main() {
    console.log('You are in the Storage room');
    console.log('Valid commands in this room:', room_commands['Storage Room']);
    console.log('Inventory:', inventory);
    let user_input = prompt("Enter a command\n");

    // A while loop for invalid commands
    while (!room_commands['Storage Room'].includes(user_input)) {
        console.log('Command is invalid');
        console.log('Valid commands in this room:', room_commands['Storage Room']);
        user_input = prompt('Enter a different command\n');
    }

    // If statements, when user makes a move command
    if (user_input === room_commands['Storage Room'][0]) {
        laundry_room();
    } else if (user_input === room_commands['Storage Room'][2]) {
        kitchen();
    }
    // elif statement, when user awakens the kidnapper
    else if (user_input === room_commands['Storage Room'][1]) {
        console.log('You have awaken the kidnapper. Game over!.  Thanks for playing the game. Hope you enjoyed it.');
    }
}
showInstructions();
main()