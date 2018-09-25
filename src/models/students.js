'use strict';

import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: { type:String, required:true },
  gradeLevel: { type:String, min:1, max:12, required:true },
  isPassing: { type:Boolean, required:true },
  createdOn: { type:Date, default:Date.now() },
});

export default mongoose.model('students', studentSchema);