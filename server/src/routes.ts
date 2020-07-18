import express from 'express';

const routes = express.Router();

routes.get('/',(req,res)=>{

    return res.json({message:'Sucess'});
});

export default routes;