const mongoose = require('mongoose');

const AppsettingSchema = new mongoose.Schema({
  auth: {
    type: String,
    required: true
  }

});

module.exports = AppSetting = mongoose.model('GeneralParameters', AppsettingSchema);