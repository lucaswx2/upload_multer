const express = require('express');
const {uuid} = require('uuidv4');
const path = require('path');
const multer = require('multer');
const app = express();

const uploadsFolder = path.resolve(__dirname, './uploads');

const upload = multer({
  storage: multer.diskStorage({
    destination: uploadsFolder,
    filename: (req,file,callback)=> callback(null, uuid() + path.extname(file.originalname) )
  })
})


app.use('/arquivo', express.static(uploadsFolder));



app.post('/file',upload.single('imagem'),(req,res)=>{
  res.send('Tudo numa boa');
})


app.listen(3333);