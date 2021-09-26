const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
  name: { type: String, uppercase: true, required: true },
  email: { type: String, lowercase: true, required: true },
  adress: String,
  Age: Number,
  created: { type: Date, default: Date.now() },
}
)

module.exports = User=mongoose.model("user", userSchema);
