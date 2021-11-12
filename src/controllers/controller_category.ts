const Category = require('../models/category')

exports.post_category = function(req:any,res:any){
    const post = new Category({
        //category_id : req.body.category_id,
        category_name : req.body.category_name
    })
    post.save().then(
        res.send('Create successfully')
    )
}

exports.get_category = function(req:any,res:any){
    const id = req.params.id
    Category.findById(id).then((result:any) => {
        res.json(result)
    })
}

exports.update_category = function(req:any,res:any){
    const id = req.params.id
    Category.update({_id:id},{$set:req.body}).then(
        res.send('Update successfully')
    )

}

exports.delete_category = function(req:any,res:any){
    const id = req.params.id
    Category.findByIdAndRemove(id).then(
        res.send('Delete successfully')
    )

}