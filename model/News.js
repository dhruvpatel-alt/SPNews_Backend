const mongoose = require('mongoose');
const {Schema}=mongoose;
const general = new Schema({
_id:mongoose.Schema.Types.ObjectId,
title:{type:String},
description:{type:String},
image:{type:String},
uid:{type:String},
newsurl:{type:String},
author:{type:String},
time:{type:String},
name:{type:String}
});
module.exports=mongoose.model('general',general)