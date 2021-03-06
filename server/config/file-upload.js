const express = require("express");
const router = express.Router();
const upload = require('../services/file-upload')
const singleUpload = upload.single('image');
router.post('/image-upload',function(req,res){

    singleUpload(req,res,function(err){
        if(err){
            return res.status(422).send({title:'File Upload Error',detail:err.message});
        }
         console.log(req.file)
        return res.json({'imgUrl':req.file.location}
        );
    })
})

module.exports = router;