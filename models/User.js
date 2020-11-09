const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    total_followers: {
        type: Number,
    },
    country: {
        type: String
    },
    type:{
        type: String
    },
    uri:{
        type: String
    },
    saved_albums: [String],
    saved_tracks: [String],
    playlists: [String],
    followed_artists: [String],
    played_tracks: [{
        // track: {
        //     type: String,
        //     required: true
        // },
        uri:{
            type: String
        },
        time_stamp:{
            type: Date
        },
        // artists: [String],
        // id: {
        //     type: String,
        //     required: true
        // }
    }],
    devices: [{
        id: {
            type: String
        },
        is_active: {
            type: Boolean
        },
        is_private_session: {
            type: Boolean
        },
        is_restricted: {
            type: Boolean
        },
        name: {
            type: String
        },
        type: {
            type: String
        },
        volume_percent: {
            type: Number
        }
    }]
})

const User = new mongoose.model("Users", UserSchema);

module.exports = User;