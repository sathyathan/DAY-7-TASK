//get all countries from asia continent/region using filter function

/*const request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data=request.response;
    var result=JSON.parse(data);
    //console.log(result);
    //var res  =result.filter((ele) => ele.region==="Asia");
    //var final=res.map((ele)=>console.log(ele.name.common));
}*/

//get all countries with a population less than 2 lakhs using filter function
/*const request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data=request.response;
    var result=JSON.parse(data);
    //console.log(result);
    var populate=result.filter((ele)=>ele.population<200000);
    console.log(populate);

}*/

//print following details name,capital,flag using foreach function

/*const request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data=request.response;
    var result=JSON.parse(data);
    //console.log(result);
    var details=result.forEach((ele) => console.log(ele.name,ele.capital,ele.flag));
}*/

//print total population using reduce function

/*const request=new XMLHttpRequest;
/*request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data=request.response;
    var result=JSON.parse(data);
    //console.log(result);
    var population=result.reduce((sum,i)=>{ 
        return sum+i.population
    },0)
    console.log(population);
    }*/

  //print countries using us dollar as currency
/*const request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data=request.response;
    var result=JSON.parse(data);
    //console.log(result);
var current=result.filter((ele)=>ele.currencies && ele.currencies.USD);
var final=current.forEach((ele) => console.log(ele.name.common));
}*/


