'use strict'
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path')
 
app.use(express.json());
// YOUR CODE GOES IN HERE


app.post('/blogs', (req, res) => {
  if(!req.body.title || !req.body.content){
  return res.status(400).json({msg: 'Please include a title and content'})
}else{
  let newBlog = {
    title: req.body.title,
    content : req.body.content
  }
  fs.writeFileSync(path.join(__dirname, '/blogs', `${newBlog.title}.json`), JSON.stringify(newBlog))
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end("Blog is created")
}
})
app.put('/blogs/:title', (req,res) => {
  let newBlog = {
    title: req.body.title,
    content: req.body.content
  }
  if(fs.existsSync(path.join(__dirname,'/blogs',`${newBlog.title}.json`))){
    fs.writeFileSync(path.join(__dirname, '/blogs', `${newBlog.title}.json`), JSON.stringify(newBlog));
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    res.end("Blog is  Updated")
  }
  else{
   return  res.status(400).json({ msg: 'File is not exist'})
  }
})
app.delete('/blogs/:title', (req, res) => {
    let title = req.body.title;
    if (fs.existsSync(path.join(__dirname,'/blogs',`${title}.json`))) { // Add condition here
      fs.unlinkSync(path.join(__dirname, '/blogs', `${title}.json`));
      res.end('ok');
    } else {
      return  res.status(400).json({ msg: 'File is not exist'})
    }
})
app.get('/blogs/:title', (req, res) => {
  let title = req.params.title
    
  if (fs.existsSync(path.join(__dirname,'/blogs',`${title}.json`))){
    const post = fs.readFileSync(path.join(__dirname, '/blogs', `${title}.json`));
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    res.end(post)
    }else{
      return  res.status(400).json({ msg: 'File is not exist'})
    }
  
})

app.listen(3000);