import { MongoClient, ServerApiVersion  } from 'mongodb';

export default  async  function connectDB (req,res)  {

    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
    );
    try{
       
        await client.connect();
        const mark  = client.db('mydatabase').collection('Marks');
     
        const ans  = await mark.find({},{}).toArray();


        return( res.status(200).json({ans  , message: 'Get bill success', success: true}))


    }


    
    catch(err){
        console.log(err)
    }
}