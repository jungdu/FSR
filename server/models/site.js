const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siteSchema = new Schema({
    siteKind: {type:String, required: 'Put siteKind'},
    siteName: {type:String, required: 'Put siteName'},
    siteDescription: {type:String, required: 'Put siteDescription'},
    createAt: {type:Date, default: Date.now},
    siteUrl: {type:String, required: 'Put siteUrl'},
    siteImgUrl: {type:String, required: 'Put ImgUrl'}
});

module.exports = mongoose.model('Site', siteSchema);