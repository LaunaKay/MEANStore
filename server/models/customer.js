var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  email: { type: String, trim: true },
  password: { type: String, trim: true },
  salt: { type: String, trim: true },
  auth_token: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  orders:
  [{
  	product_id:String,
  	quantity:Number,
  	ordered_at:{type:Date, default:Date.now}
  }]
});

mongoose.model('Customer', CustomerSchema);