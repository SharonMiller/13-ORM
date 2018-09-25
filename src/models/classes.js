'use strict';

import mongoose from 'mongoose';

const classesSchema = mongoose.Schema({
  className: {type:String, required:true},
  classPeriod: {type:Number, required:true},
});


export default mongoose.model('classes', classesSchema);
