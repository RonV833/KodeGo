// Date object

let d = new Date (); //d variable is now the the date ibect
document.getElementById("date_object").innerHTML =d;

let month = d.getMonth();
document.getElementById("getmonth").innerHTML =month +1;
//converting the get month number to words
let arraymonth = ["january","february", "march", "april","may","june", "july", "august","september", "october","november","december"]
document.getElementById("monthname").innerHTML =arraymonth[month];

let week =d.getDay ();
document.getElementById("day").innerHTML =week;
let arrayday = [ "Sunday","Monday", "Tuesday", "Wednesdday", "Thursday", "Friday", "Saturday"]
document.getElementById("dayname").innerHTML = "Thank God it's "+arrayday[week]+"!";

let hour =d.getHours(); let min=d.getMinutes();
document.getElementById("hour").innerHTML= hour +min;

//math object methods

var square = Math.sqrt(64);
document.write("Square root of 64 is " +square +"<br>");
var minArr = Math.min(0, 150,30,20,-7,-200);
document.write(minArr +"<br>");
var maxArr =Math.max(0, 150,30,20,-7,-200);
document.write("The max value of 0, 150,30,20,-7,-200 is: "+maxArr +"<br>");
var round =Math.round (2.5);
document.write("Rounding 2.5 is "+round +"<br>");

//string object
var myname = "Ronald";
var length = myname.length;
document.write("length: " +length + "<br>")

var str = "The quick brown fox jumps over the lazy dog"
var word = str.split('');
document.write("Sample of split: " +word +"<br> Sample of splice: " +str.slice(9,21));
document.write (" <br>Sample of slice:" +str.slice(-13));
document.write ("<br>Sample of slice:" +str.slice(31,44));
document.write ("<br> Sample of substring:" +str.substr(30,5));
document.write ("<br>Sample of uppercase: " +str.toUpperCase() +"<br>");

//array
document.write("<br> Array of object<br>");
let fruits = [" Banana", "Apple", "Orange"]; //concatenating the li inside the array
for (let i =0; i<fruits.length; i++) {
    document.write ("<li>" +fruits[i] +"</li>" )
    //document.getElementById("fruit").innerHTML="<li>" +fruits[i] +"</li>";
}
//fruits.unshift("Lemon"); //unshift adds to the first element
//alert(fruits)
//fruits.push ("Kiwi");
//alert(fruits);
//fruits.shift (); ///remove first item
//alert(fruits);
//fruits.pop (); removes last item

//fruits.splice (2,0, "Grapes", "starfruits", "Orange")
//alert (fruits);
/*
let fruits = ["Banana", " Apple", "Orange"]; //concatenating the li inside the array
for (let i =0; i<fruits.length; i++) {
    document.write ("<li>"+fruits[i] +"</li>")
    //document.getElementById("fruit").innerHTML=fruits;

}*/

function maxDate(allDates) { //allDates is the variable
    let maxDt = allDates[0];
    maxDateObj = new Date(allDates[0]);
    allDates.forEach(function (dt,index){ //dt variable used in function
        if (new Date(dt)> maxDateObj) {
            maxDt = dt;
            maxDateObj = new Date (dt);

        }    
    });
    return maxDt;
}
dates = maxDate(["2021/11/12", "2021/11/13", "2021/11/14" ]) //input can also come from the users
//alert(dates);
document.getElementById("maximumdate").innerHTML = dates;
//let maxBDate= maxDate(["1998/11/12", "1996/11/13", "1997/11/14"]); //reusing the function
//alert(maxBDate);

//try

var a = new Date();
var w = a.getDay();
//alert (w);
var arrayweek = [ "Nov 14, 2021","Nov 15, 2021", "Nov 16, 2021", "Nov 17, 2021", "Nov 18, 2021", "Nov 12, 2021", "Nov 13, 2021"]

if (w>=[1] && w<=[5]) {
    alert("this date is a weekday " +arrayweek[w]);
}
else {
    alert ("this is not a weekday " +arrayweek[w]);
}
/*function thisweekend (weekdate) {
    let weekday = weekdate[0]
    weekdayObj = new weekday (weekdate[0]);
    date.forEach(function (weekdate, index) {
        if (new weekday(day)>weekdayObj) {
                weekday = weekdate;
                weekdayObj = new weekday (weekdate)
                
        }
    });
    return weekday
}
weekdate = thisweekend (["Nov 12, 2021", "Nov 13, 2021", "Nov 14, 2021", "Nov 15, 2021"])
alert (date);*/

