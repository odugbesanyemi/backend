import multer from 'multer'

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../files')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "-" + file.originalname)
    }
})    

export const upload = multer({storage:storage});  