const { response } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const cors = require('cors');
const jsonParser = express.json();
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const bodyParser = require("body-parser");
const port = 4000;
const urlencodedParser = bodyParser.urlencoded({extended: false});
let dbClient;
mongoose.connect("mongodb://localhost:27017/QuestionsServer", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(port, function(){
        console.log("Сервер ожидает подключения...");
    });
});
app.use(cors());

const userScheme = new Schema({
    login: String,
    typeUser: String
});

const activeTestScheme = new Schema({
    idUser: String,
    idTest: Number
});

const testScheme = new Schema({
    idUser: String,
    idTest: Number,
    nameTest: String,
    description: String,
    timeLimits: Number,
    countAttempts: Number,
    testCheck: Boolean,
    showRigthAnswerAfterTest: Boolean,
    showRigthAnswerAfterQuestion: Boolean,
    questions: [{
        type: String,
        textQuestion: String,
        answers: [String],
        correctAnswers: [String],
        countAttempts: Number,
        countPoint: Number
    }],
    userAnwsers: Array,
    status: String
}, { typeKey: '$type' });


const resultScheme = new Schema({
    idUser: String,
    idTest: Number,
    questions: [{
        type: String,
        textQuestion: String,
        answers: [String],
        correctAnswers: [String],
        countAttempts: Number,
        countPoint: Number
    }],
    answersUser: [[String]],
    countPoint: Number,
    countPointUser: Number
})
const User = mongoose.model("User", userScheme);
const Test = mongoose.model("Test", testScheme);
const ActiveTest  = mongoose.model("Activetest", activeTestScheme);
const Result = mongoose.model("Result", resultScheme);

const user = new User({
    login : "1",
    typeUser: "2"
})

/*app.listen(port, function(){
    console.log("жду");
})*/

console.log("OK");
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    response.set('Access-Control-Allow-Origin', '*');
    // отправляем ответ
    response.send("OKO");
});

// создаем запись с результатами
app.post("/createResult", jsonParser, (req, res) => {
    Result.create(req.body, (err, doc) => {
        if (err) return console.log(err);
        res.sendStatus(200);
    });
});
//обновляем результаты после ответа
app.post("/updateAnswers", jsonParser,(req, res) => {
    Result.updateOne({idUser: req.body.idUser, idTest: req.body.idTest},
         {answersUser : req.body.answersUser}, (err, result) => {
            if (err) return console.log(err);
            res.sendStatus(200);
         })
});

app.post("/endTest", jsonParser,(req, res) => {
    Result.updateOne({idUser: req.body.idUser, idTest: req.body.idTest},
         req.body, (err, result) => {
            if (err) return console.log(err);
            res.sendStatus(200);
         });
});

// получение результатов тестов
app.post("/results", jsonParser, (req, res) => {
    Result.find({idUser: req.body.idUser}, (err, docs) => {
        if (err) return console.log(err);
        res.send(docs);
    });
});
//получение теста на редактирование
app.post("/getTest",jsonParser, (req, res) =>{
    Test.findOne({idUser: req.body.idUser, idTest: req.body.idTest}, (err, doc) =>{
        if (err) return err;
        res.send(doc);
    })
    Test.updateOne({idUser: req.body.idUser, idTest: req.body.idTest},
        {status : "redacted"}, (err, result) => {
        if (err) return err;
        console.log(result);
    })
} )

app.post("/activeTest", jsonParser, (req, res) =>{
    console.log(req.body.idUser);
    Test.updateOne({idUser: req.body.idUser, idTest: req.body.idTest},
        {status : "active"}, (err, result) => {
        if (err) return err;
        res.sendStatus(200);
        console.log(result);
    })
})

app.post("/doTest", jsonParser, (req, res) => {
    Test.findOne({idUser: req.body.idUser, status: req.body.status}, (err, doc)=>{
        if (err) return console.log(err);
        console.log(doc);
        res.send(doc);
    })
})

app.post("/users", jsonParser,  (req, res) => {
    //res.set('Access-Control-Allow-Origin', '*');
    console.log(req.body.login);
    //let data = req.body;
    User.find({login: req.body.login}, (err, docs) => {
        if (err) return console.log(err);
        console.log(docs);
        if (docs.length > 0)
            return res.send("NO");
        return res.send("OK");
    })
})

app.post("/editorTest", jsonParser, (req, res) =>{
    console.log(req.body.questions);
    Test.updateOne({idUser: req.body.idUser, idTest: req.body.idTest}, req.body, (err, result) => {
        if (err) return console.log(err);
        //console.log(result);
    })
})

app.post("/createTest", jsonParser, (req, res) =>{
    //console.log(req.body);
    //console.log("OK");
    Test.create(req.body, (err, doc) => {
        if (err) return console.log(err);
        //console.log(doc);
    })
})

app.post("/allTests", jsonParser, (req, res) => {
    Test.find({idUser: req.body.idUser}, (err, docs) => {
        if (err) return console.log(err);
        res.send(docs);
    })
});

app.post("/tests", jsonParser, (req, res) =>{
    console.log(req.body.idUser);
    console.log(req.body.idTest);
    Test.findOne({idUser: req.body.idUser, idTest: req.body.idTest}, (err, doc) => {
        if (err) return console.log(err);
        console.log(doc);
        if (doc != null)
            return res.send("NO")
        return res.send("OK");
    })
});

app.post("/testId",  jsonParser, (req, res) =>{
    //console.log(req.body);
    Test.find({idUser: req.body.idUser}, (err, docs) => {
        if (err) return console.log(err);
        //console.log(docs);
        res.send(docs);
    });
});
// начинаем прослушивать подключения на 3000 порту
