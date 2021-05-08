var Form = require('../models/formModel');

exports.addFormData = function(req,res){
    var formdata = req.body
    Form.findOne({ product:formdata.product})
    .then(data=>{
          if(data==null){
            var formObj  = new Form();
            formObj.product = formdata.product
            formObj.price = formdata.price
            formObj.qty = formdata.qty
            formObj.save()
            .then(data=>{
                res.status(200).send({
                    success:true,
                    message:"Product Addded",
                    status:200,
                    stu:data
                })
            })
          }else{
            res.status(409).send({
                success:false,
                message:"Already Exist Product",
                status:409,
                stu:[]
            })
        }               
    }); 
}
exports.getform = function(req,res){
    Form.find().exec()
    .then(data=>{
        res.status(200).send({success:true,message:"Form Data",status:200,data:data})
    })
}