

import express from 'express';
import { signUP } from './signup.mjs';
const app = express()

signUP();
app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});

