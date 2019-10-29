
const products = require("../controllers/products")
const Product = require("../models/Product")


// *NOTE* All routes have /api/products  in front of them: Example:  /create, is actually, api/product/create

module.exports = function(app){



  // Test route:
app.get("/test", (req,res) => {
  res.json({ message: "Success", data: "API WORKS!" });
})

// Index Route: Get all Products
app.get("/getProducts", (req, res) => {
  // console.log("retrieving all products")
  products.findAll(req, res);
});

// Create Product Route:
app.post("/create", (req, res) => {
  
  // console.log("req.product.type")
  // console.log(req.body)
  // console.log(req)
  // console.log(res)
  products.createProduct(req,res);
}),

// Show Product by ID Route:
app.get("/:id", (req, res) => {
  // console.log("got here");
  products.showById(req, res);
});

// Update/change product by ID Route:
app.put("/:id", (req, res) => {
  // console.log("id of what we're updating", req.params.id);
  products.updateProduct(req, res);
});

// Delete route:
app.delete("/:id/delete", (req, res) => {
  products.deleteProduct(req, res);
});

// Post a comment:
app.post("/:id/comment", (req, res) => {
  products.postComment(req,res);
});


}