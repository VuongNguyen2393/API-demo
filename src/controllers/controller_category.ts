const Category = require('../models/category')

exports.post_category = function(req:any,res:any){
    const post = new Category({
        //category_id : req.body.category_id,
        category_name : req.body.category_name
    })
    post.save((err:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('create successfully')
    })
}

exports.get_category = function(req:any,res:any){
    const id = req.params.id
    Category.findById(id).exec((err:any,result:any) => {
        if (err){
            res.send('Error')
        }
        res.json(result)
    })
}

exports.update_category = function(req:any,res:any){
    const id = req.params.id
    Category.update({_id:id},{$set:req.body},(err:any,result:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('Update successfully')
    })

}

exports.delete_category = function(req:any,res:any){
    const id = req.params.id
    Category.findByIdAndRemove(id,(err:any,result:any) => {
        if (err) {
            res.send('Error')
        }
        res.send('Delete successfully')
    })

}