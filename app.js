const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(express.static('.'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/formBuilder', function (req, res) {
    console.log(req.body)
    res.send(req.body)
  })

app.listen(8080, () => console.log('node express 服务器已启动，监听端口：8080'))

const openDefaultBrowser = function (url) {
  var exec = require('child_process').exec;
  switch (process.platform) {
    case "darwin":
      exec('open ' + url);
      break;
    case "win32":
      exec('start ' + url);
      break;
    default:
      exec('xdg-open', [url]);
  }
}
openDefaultBrowser('http://localhost:8080')
app.use(express.static('../uploads'))
const multer =require('multer')
var storage =multer.diskStorage({
  destination:function (req,file,cb)  { 
   cb(null,'../uploads') 
},
filename:function (req,file ,cb) { 
var fileFormat =(file.originalname).split(".");
cb(null,file.fieldname+'-'+Date.now()+"."+fileFormat[fileFormat.length-1]);
  }}
);
let upload=multer({storage:storage})
app.post('/ipload',upload.single('file'),function(req,res,next){
  var file=req.file;
  console.log("original file name is "+file.originalname)
  console.log("file name is "+file.filename)
  res.json('/'+file.filename);
})