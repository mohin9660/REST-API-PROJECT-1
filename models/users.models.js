

const {v4: uuidv4} = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "Rubel Ahmed",
        email: "rubelahmed@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Mahin Ahmed",
        email: "mahinahmed@gmail.com"
    },
    // {
    //     id: uuidv4(),
    //     username: "Najim Uddin",
    //     email: "najimuddinsanku3@gmail.com"
    // },
    // {
    //     id: uuidv4(),
    //     username: "Emad Uddin",
    //     email: "emaduddinsanku3@gmail.com"
    // },
    // {
    //     id: uuidv4(),
    //     username: "Bodrul Amin",
    //     email: "bodrulaminsanku3@gmail.com"
    // }
];

module.exports = users;