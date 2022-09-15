const express = require("express");
var bodyParser = require('body-parser');
const app = express();
var items =["Buy Food","Cook Food","Eat food"];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("Public"))

app.get("/", function (req, res) {
    
    var today = new Date();
    var options = {weekday:"long",day:"numeric",month:"long"};
    var day = today.toLocaleDateString("en-UN",options);
    res.render("list",{
        listtitle:day,
        newListitem:items
       
    });
    // var currentday = today.getDay();
    // day = "";
    // weekDay = "";
    // switch(currentday){
    //     case 0:
    //         day = "Sunday";
    //     case 1:
    //         day = "Monday";
    //     case 2:
    //         day = "tuesday";
    //     case 3:
    //         day = "wednesday";
    //     case 4:
    //         day = "Thursday";
    //     case 5:
    //         day = "Friday";
    //     case 6:
    //         day = "Saturday";
    //     default:
    //         console.log("Opps its error"+currentday);
    // }

});


app.get("/work",function(req,res){
 res.render("list",{
    listtitle:"Work",
    newListitem:workItems
 })
})

// app.post("/work",function(req,res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work")
// });
app.get("/about",function(req,res){
    res.render("about");
})


app.post("/",function(req,res){
  item =  req.body.newItem;

  if(req.body.list ==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");

  }
});

app.listen(3000, function () {

    console.log("Yayyyy !!!!!Server Started Suri.")
});



























// var today = new Date();
//     var currentday = today.getDate();
//     var day = "";
//     if (currentday === 6 || currentday === 0) {
//         res.send("yayy!! its Weekend:-)");

//     } else {
//         res.send("Opps indeed i need to work:-(");
//     }