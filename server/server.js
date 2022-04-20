// express.json() Demo Example

// Importing the express module
var express = require('express');
var cors = require('cors')

/**
 * SECRET = {
 *  secret: string,
 *  maxOfViews: number,
 *  countOfViews: number
 * }
 */
SECRETS ={}

function isKeyExists(obj,key){
    if( obj[key] == undefined ){
        return false;
    }else{
        return true;
    }
}

// Initializing the express and port number
var app = express();
var PORT = 4000;

// Calling the express.json() method for parsing
app.use(express.json());
app.use(cors())

// Reading content-type
app.get('/secrets/:hash', (req, res) => {
    try {
        const hash =  req.params.hash
        if (hash) {
            if (isKeyExists(SECRETS,hash)) {
                if (SECRETS[hash].countOfViews <= SECRETS[hash].maxOfViews) {
                    const secret =  SECRETS[hash].secret;
                    SECRETS[hash].countOfViews += 1;
                    console.log(SECRETS[hash])
                    res.status(200).send({message:secret})
                    
                } else {
                    res.status(400).send({message: "Secret already expired"})
                }
            }else{
                res.status(400).send({message: "There's not a secret with that hash"})
            }
        } else {
            res.status(400).send({message: "hash is missing. Can not found a secret without secret's hash"})
        }
    } catch (error) {
        res.status(400).send({message: error})
    }
})

app.post('/secrets', (req,res) =>{
    try {
        const secret = req.body.secret;
        const maxOfViews = req.body.maxOfViews
        const date = new Date()
        const hash = date.getTime()
        if(secret !== "" && maxOfViews){
            secretData = {
                secret,
                maxOfViews,
                countOfViews: 0
            }
            SECRETS[hash] = secretData;
            res.status(200).send({url: `http://localhost:3000/secrets/${hash}`})
        }else{
            res.status(400).send({message: "Missing params to save secret"})
        }
    } catch (error) {
        res.status(400).send({message: error})
    }

})

// Listening to the port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});