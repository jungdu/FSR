const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/dev.js');
const SeedDb = require('./seedDb');
const siteRoutes = require('./routes/sites');
const app = express();

mongoose.connect(config.DB_URI, {useNewUrlParser: true}).then(() => {
    console.log("db connected");
    // const seedDb = new SeedDb();
    // seedDb.seed();
});
app.use(bodyParser.json());
const appPath = path.join(__dirname, '..', 'build');
app.use(express.static(appPath));
const resFiles = path.join(__dirname,'resFiles');
app.use('/api/v1/sites', siteRoutes);

app.use('/api/v1/pngfiles/:fileName', (req,res)=>{
    const targetFile = path.join(resFiles, req.params.fileName+'.PNG');
    res.sendFile(targetFile);
});

app.use('/api/v1/jpgfiles/:fileName', (req,res)=>{
    const targetFile = path.join(resFiles, req.params.fileName+'.jpg');
    res.sendFile(targetFile);
});

app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });

const PORT = 80;
app.listen(PORT, function(){
    console.log('App is running!');
});