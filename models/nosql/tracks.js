const mongoose = require('mongoose');

const TracksScheme = new mongoose.Schema(
    {
        name: {type: String},
        album: {type: String},
        cover: {
            type: String,
            validate: {
                validator: function(value) {
                    return value.startsWith('http');
                },
                message: '{VALUE} no es una URL válida'
            }
        },
        artist: {
            name: {type: String},
            nickname: {type: String},
            nationality: {type: String},
        },
        duration: {
            start: {type: Number},
            end: {type: Number},
            mediaId: {type: mongoose.Schema.Types.ObjectId},
        }
    }
)
module.exports = mongoose.model('Canciones', TracksScheme);
