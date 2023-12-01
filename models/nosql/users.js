const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: ["user", "admin"],
            required: true,
            default: 'user'
        }
    }
);

module.exports = mongoose.model('Usuarios', UserScheme);
