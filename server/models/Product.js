const mongoose = require("mongoose");

// User Schema:
const ProductSchema = new mongoose.Schema({

  type: {
    type: String,
    required: true

  },

  title: {
    type: String,
    required: true,
    minlength: [2, 'Category must be at least 1 character long!']
  },

  price: {
    type: String,
    required: true,
    minlength: [2, 'Category must be at least 1 character long!']
    // Regex for checking price
    
  },

  imgUrl: {
    type: String,
    minlength: [2, 'Category must be at least 1 character long!'],
    required: true
    // Regex Check for valid URL:
    // match: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ // No space at beginning or end
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  comments: [{
    // type: [
      // {
        author: String,
        comment: String,
        timestamp: {
          type: Date,
          default: Date.now
        }
      // }
    // ],

  }]

});

const Product = module.exports = mongoose.model("Product", ProductSchema);