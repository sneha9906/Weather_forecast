/*
var inputval=document.querySelector('#cityinput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var des=document.querySelector('#description');

var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
apik="3045dd712ffe6e702e3245525ac7fa38";

function conversion(val){
	return(val-273).toFixed(2);
}

btn.addEventListener('click', function(){

	fetch('https"://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
	.then(res =>res.json())
	.then(data=>{


		console.log(data);
		var nameval=data['name']
		var descrip=data['weather'] ['0'] ['description']
		var temp=data['main'] ['temp']
		var wndspd=data ['wind'] ['speed']
		city.innerText=nameval;
		temp.innerText=conversion(temper);
		des.innerText=descrip;
		wind.innerText=wndspd;


	})
	.catch(err=>alert("Wrong City"))

});*/











var inputval=document.querySelector('#cityinput');
var btn =document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var des=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');

apik = "af86b865690e32c2ef21fe0ca02a90e3";


function convertion(val){
    return (val-273).toFixed(2)

}
btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik).then(res => res.json())
    //.then(data=>console.log(data))
    .then(data =>{
        console.log(data);
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var temper=data['main']['temp']
        var wndspd=data['wind']['speed']

        city.innerText=nameval;
        temp.innerText=convertion(temper);
        des.innerText=descrip;
        wind.innerText=wndspd;
    })
    
    
    .catch(err=>alert("Wrong City"))
});