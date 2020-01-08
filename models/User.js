const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');
const UserSchema = new Schema({

email:{
  type: String,
  required: true, unique:true
}
})

UserSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', UserSchema);
