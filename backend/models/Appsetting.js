const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  auth: {
    type: String
  }
});

module.exports = AppSetting = mongoose.model('generalparameter', schema);