const mongoose = require("mongoose");

const msgSchema = mongoose.Schema({
  dm: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Msg', msgSchema);