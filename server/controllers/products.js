const Product = require("../models/Product")
module.exports = {
  findAll: function (req, res) {
    Product.find({}, (err, product) => {
      if (err) {
        // console.log("@@@@@@@@@@");
        res.json({ message: "Error", error: err });
      }
      else {
        // console.log("%%%%%%%%%%%%%%%%%%%%");
        res.json({ message: "Success", data: product });
      }
    })
  },
  createProduct: function (req, res) {
    // console.log("zoinkzoinkzoinkzoinkzoinkzoinkzoink")
    const { type, title, price, imgUrl} = req.body;
    // console.log("16",req.body)
    // console.log('19',req.body.imgUrl)
    // console.log(req.body.image)


    const newProduct = {
      type: type,
      title: title,
      price: price,
      imgUrl: imgUrl
    }

    // Create Route:
    Product.create(newProduct, (err, product) => {
      if (err) {
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        res.json({ message: "Error", error: err });
      }
      else {
        // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        // console.log(product.type);

        // console.log("Product price being saved as: ", product.price);
        res.json({ message: "Success", data: product });
      }
    });

  












  },

  showById: function (req, res) {
    // console.log("showbyid")
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        console.log("if error")
        res.json({ message: "Error", error: err });
      }
      else {
        console.log('no error')
        res.json({ message: "Success", data: product });
      }
    });
  },

  updateProduct: function (req, res) {
    // console.log("updateproduct")
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        res.json({ message: "Error", error: err });
      }
      else {
        // console.log("got to the else")
        product.set(req.body);
        product.save((err) => {
          if (err) {
            res.json({ message: "Error", error: err });
          }
          else {
            res.json({ message: "Success", data: product });
          }
        });
      }
    });
  },

  deleteProduct: function (req, res) {
    Product.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.json({ message: "Error", error: err });
      }
      else {
        res.json({ message: "Success", msg: "Product Destroyed!" });
      }
    });
  },

  postComment: function (req, res) {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        res.json({ message: "Error", error: err });

      }
      else {
        const newComment = {
          author: req.body.author,
          comment: req.body.comment
        }
        // console.log("Created New Comment Of: ", newComment)
        product.comments.unshift(newComment);
        product.save((err) => {
          if (err) {
            res.json({ message: "Error", error: err });
          }
          else {
            res.json({ message: "Success", data: product });
          }
        });
      }
    });
  }
}
