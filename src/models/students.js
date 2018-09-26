'use strict';

import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: { type:String, required:true },
  gradeLevel: { type:Number, min:1, max:12, required:true },
  isPassing: { type:Boolean, required:true },
  createdOn: { type:Date, default:Date.now() },
  // classes:[{type:mongoose.Schema.Types.ObjectID, ref: 'classes'}],
});

// studentSchema.pre('save', function(next) {
//   let studentiD = this._id;
//   let classId = this.class;
// });

export default mongoose.model('students', studentSchema);

//you can read with just ids coming back, or with documents coming back
//use poplulate to query call populate to identify a specific child document ie ref to classes you can do poplulate classes - it will iterate through array and query the an map opject id to the object document they are referencing - this is similar to joins

//$addToSet: {students: studentID} will push student id into set

