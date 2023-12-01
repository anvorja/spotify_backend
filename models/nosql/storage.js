const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: Number,
        }
    }
);

module.exports = mongoose.model('Almacenamiento', StorageScheme);
