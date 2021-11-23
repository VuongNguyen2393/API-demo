const Category = require('../models/category')

exports.post_category = async (req:any,res:any) => {
    try{
        const post = new Category({category_name : req.body.category_name})
        post.save()
        res.send('Create sucessfully')
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}
        

exports.find_all = async (req:any,res:any) => {
    try{
        const category = await Category.find()
        if (category){
            res.send(category)
        }
        else{
            res.status(404).send('No category found')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}




exports.get_category = async(req:any,res:any) => {
    try{
        const category = await Category.findById(req.params.id)
        if (category){
            res.send(category)
        }
        else{
            res.status(404).send('Category not found')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
    
}

exports.update_category = async (req:any,res:any) => {
    try{
        const category = await Category.update({_id:req.params.id},{$set:req.body})
        if (category){
            res.send('Update successfully')
        }
        else{
            res.status(404).send('Category not found')
        }
        
        // res.json(category)
    }
    catch (Error:any) {
        res.json(Error.message)
    }

}

exports.delete_category = async (req:any,res:any) => {
    try{
        const category = await Category.findByIdAndRemove(req.params.id)
        if (category){
            res.send('Delete sucessfully')
        }
        else{
            res.status(404).send('Category not found')
        }
    }
    catch (Error:any) {
        res.json(Error.message)
    }
}