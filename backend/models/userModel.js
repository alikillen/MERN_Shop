import Mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  isSubscriber: {
    type: Boolean,
    required: true,
    default: false
  },
  orderHistory: {
    type: Array,
    required: false,
  }
}, {
  timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}
// matching entered password from post req with password from user schema

userSchema.pre("save", async function(next) {
  if(!this.isModified("password")){
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = Mongoose.model("user", userSchema)

export default User