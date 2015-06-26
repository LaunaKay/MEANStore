var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  item: { type: String, trim: true },
  available: Number,
  image:String,
  description:String,
  order: [{order_id:String}]
});

mongoose.model('Product', ProductSchema);