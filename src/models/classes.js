'use strict';

import mongoose from 'mongoose';

const classesSchema = mongoose.Schema({
  className: {type:String, required:true},
  classPeriod: {type:Number, required:true},
  students:[{type:mongoose.Schema.Types.ObjectID, ref: 'students'}],
});


export default mongoose.model('classes', classesSchema);
