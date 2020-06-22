const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const instituteRoutes = express.Router();

const PORT = 5000;

let Institute = require('./institute.model');
 
app.use(cors());

app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/megaexams', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


instituteRoutes.route('/').get(function(req,res){
    Institute.find(function(err,megaexams){

        if(err){
            console.log(err);
        }
        else {
            res.json(megaexams);
        }

    });
});


instituteRoutes.route('/:id').get(function(req,res){

    let id=req.params.id;

    Institute.findById(id,function(err,megaexam){

        res.json(megaexam);
    });
});


instituteRoutes.route('/add').post(function(req,res){
    let institute = new Institute(req.body);

    institute.save()
             .then(institute => {
                 res.status(200).json({'institute':'institute added successfully'});

             })
             .catch(err => {
                 res.status(400).send('adding new institute failed');
             }); 
});

instituteRoutes.route('/update.:id').post(function(req,res){
    Institute.findById(req.params.id , function(err,institute){

        if(!institute)
              res.status(404).send('data is not found');

        else

        institute.institute_name=req.body.institute_name;
        institute.phone_number=req.body.phone_number;
        institute.email=req.body.email;
        institute.address=req.body.address;
        institute.number_of_students=req.body.number_of_students;


        institute.save().then(institute => {
            res.json('Institute Updated');
        })
        .catch(err => {
             res.status(400).send("Update not possible");
        });

    });
});

app.use('/institute', instituteRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});