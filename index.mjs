

import express from 'express';
import { signUPN } from './signup.mjs';

const app = express()

signUPN();
app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});

