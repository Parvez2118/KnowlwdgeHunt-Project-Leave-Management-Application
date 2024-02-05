const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const wardenschema = mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,   
    }
})
wardenschema.pre('save' ,async function(next){
    if(this.isModified('password'))
    {
        this.password= await bcrypt.hash(this.password,12);
    }
    next();
});

const warden = mongoose.model('Wardendata', wardenschema)

module.exports=warden;