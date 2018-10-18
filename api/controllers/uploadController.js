exports.upload_file = function (req, res) {
  if (req.file) {
    res.json({code:0,url:'http://127.0.0.1:8081/myapp/uploads/'+req.file.filename})
  }
}