let mongoose = require("mongoose");
let bcrypt = require("bcryptjs");

// MOdel creation and validation
let UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be blank"]
    },
    email: {
      type: String,
      required: [true, "Email cannot be blank"],
      unique: [true, "Email is already registered"]
    },
    password: {
      type: String,
      required: [true, "Password cannot be blank"]
    },

    // this will need to be changed *******************************************
    bikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: " Bike"
      }
    ]
  },
  { timestamps: true }
);

//Password hash and encypting
UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
});

// Compare Passwords returns boolean
UserSchema.methods.authenticate = function(password) {
  return bcrypt.compareSync(password, this.password);
};
mongoose.model("User", UserSchema);
