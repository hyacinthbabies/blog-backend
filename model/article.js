/**
 * 文章信息
 */
var mongoose = require('../db.js'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({ 
    // articleId: {type: String},        
    articleName : { type: String },                    //用户账号
    authorName: {type: String},                        //密码
    articleContent: {type: String},                        //年龄
    articleDate : { type: String},
    articleType:{type:String},//最近登录时间
    tag:{type:String},   //标签 
    image:{type:String} //图片
    // comments:{type:Schema.Types.ObjectId,ref:"Comment"},
    // count:{type:Schema.Types.ObjectId,ref:"Count"}   
});

module.exports = mongoose.model('Article',ArticleSchema,'Article');