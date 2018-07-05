const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs');

let UserSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        image: Buffer,
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)

// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.saveUser = function () {
    this.password = this.generateHash(this.password);
    console.log(this);
    return this.save()
}

UserSchema.methods.follow = function (user_id) {
    if (this.following.indexOf(user_id) === -1) {
        this.following.push(user_id)        
    }
    return this.save()
}
UserSchema.methods.addFollower = function (fs) {
    this.followers.push(fs)        
}

module.exports = mongoose.model('User', UserSchema)