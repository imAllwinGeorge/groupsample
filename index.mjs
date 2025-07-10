

import express from 'express';
import { signUPN } from './signup.mjs';

const app = express()


const name1 = "this is from Rohith"

const name ={name : "Praveen", place: "Malappuram"}


signUPN();
app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});

