    <!--
    //you can assign the initial color of the background here
    startDisco=false;
    r=255;
    g=255;
    b=255;
    flag=0;
    t=new Array;
    o=new Array;
    d=new Array;
    
    function hex(a,c)
    {
        t[a]=Math.floor(c/16)
        o[a]=c%16
        switch (t[a])
        {
        case 10:
            t[a]='A';
            break;
        case 11:
            t[a]='B';
            break;
        case 12:
            t[a]='C';
            break;
        case 13:
            t[a]='D';
            break;
        case 14:
            t[a]='E';
            break;
        case 15:
            t[a]='F';
            break;
        default:
            break;
        }
        switch (o[a])
        {
        case 10:
            o[a]='A';
            break;
        case 11:
            o[a]='B';
            break;
        case 12:
            o[a]='C';
            break;
        case 13:
            o[a]='D';
            break;
        case 14:
            o[a]='E';
            break;
        case 15:
            o[a]='F';
            break;
        default:
            break;
        }
    }
    
    function ran(a,c)
    {
        if ((Math.random()>2/3||c==0)&&c<255)
        {
            c++
            d[a]=2;
        }
        else
        {
            if ((Math.random()<=1/2||c==255)&&c>0)
            {
                c--
                d[a]=1; 
            }
            else d[a]=0;
        }
        return c
    }
    function do_it(a,c)
        {
        if ((d[a]==2&&c<255)||c==0)
        {
            c++
            d[a]=2
        }
        else
            if ((d[a]==1&&c>0)||c==255)
            {
                c--;
                d[a]=1;
            }
            if (a==3)
            {
                if (d[1]==0&&d[2]==0&&d[3]==0)
                flag=1
            }
        return c
    }
    function disco()
    {
        if (flag==0)
        {
            r=ran(1, r);
            g=ran(2, g);
            b=ran(3, b);
            hex(1,r)
            hex(2,g)
            hex(3,b)
            document.body.style.background="#"+t[1]+o[1]+t[2]+o[2]+t[3]+o[3]
            flag=50
        }
        else
        {
            r=do_it(1, r)
            g=do_it(2,g)
            b=do_it(3,b)
            hex(1,r)
            hex(2,g)
            hex(3,b)
            document.body.style.background="#"+t[1]+o[1]+t[2]+o[2]+t[3]+o[3]
            flag--
    } if(startDisco)setTimeout('disco()',1)
}
//-->
//=============================================
//***************Cookie Verwaltung*************
//=============================================
var createCookie = function(name, value, days){
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

function removeCookie(c_name){
    document.cookie = c_name +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//=============================================
//***************Colorchanger******************
//=============================================
function changeColor(first) {
  var colors = ["#2F2F2F", "black", "#003", "#103352", "#04266A", "#004225", "#4F1212", "#222222"];
  var colorIndex = 0;
  var color = getCookie("colorIndex")
  //console.log(color)
  if (color!=""){
	colorIndex = color;  
  }
  var col = document.getElementById("body");
  if( colorIndex >= colors.length ) {
    colorIndex = 0;
  }
    if (!first){
        colorIndex++;
    }
    if(!first && colorIndex >= colors.length){
        colorIndex=0;
    }
    col.style.backgroundColor = colors[colorIndex];
    createCookie("colorIndex",colorIndex,1000);
    createCookie("color",colors[colorIndex],1000);
    console.log("[Theme]Loaded ThemeNr.: "+colors[colorIndex]);
}

//=============================================
//***************Schnee Funktionalität*********
//=============================================
var forceSnow = false;
var debug = false;
var allowBrowserLocation = true;
var mode = getCookie("snowMode");
if (mode==""){
	mode = "auto"
}
function checkWeather(){
  if (!forceSnow){
      //console.log(navigator.geolocation);
	  if (allowBrowserLocation && navigator.geolocation) {
	    //console.log("Location via Browser");
			  navigator.geolocation.getCurrentPosition(function(position) {
			     var api = "https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=9a867d2c692f4b4a9e60e558bad2da7d&units=metric&lang=de";			
				  var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() {
						 if (this.readyState == 4 && this.status == 200) {
							//console.log(xhttp.response)
              // Typical action to be performed when the document is ready:       
								var weatherJson = JSON.parse(xhttp.responseText);
								//console.log(weatherJson);
								var weatherType = weatherJson.weather[0].main
								var weather = weatherType.toLowerCase();
								if ( weather == "snow"){
										 //document.getElementById("wettertext").innerHTML = "Es schneit in "+weatherJson.name+"!!!";         
									 snowStorm.toggleSnow();
								}else{
									//document.getElementById("wettertext").innerHTML = "Kein Schnee sondern "+weatherJson.weather[0].description + " in "+ weatherJson.name;
									console.log("Kein Schnee sondern "+weatherJson.weather[0].description + " in "+ weatherJson.name);
									//document.getElementById("wettertext").innerHTML = "Kein Schnee sondern "+weatherJson.weather[0].description + " in "+ weatherJson.name;
									if (snowStorm.active){
										snowStorm.stop();
										snowStorm.freeze();
										snowStorm.active = !snowStorm.active
									}
								}
						 }
					}
					xhttp.open("GET", api);
					xhttp.send();
				});
			  
		 } else {  
			//console.log("Location via IP");
			var locationApi = "https://ipinfo.io/geo";
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				 if (this.readyState == 4 && this.status == 200) {
					 // Typical action to be performed when the document is ready:       
					 var locationJson = JSON.parse(xhttp.responseText.replace("%3F(","").replace(")",""));                       
					 var city = locationJson.city;
					 var country = locationJson.country;         
					 if (debug){
						  city = "Buffalo"
						  country = "US"    
					 }
					 //console.log(city+","+country);
					 var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=9a867d2c692f4b4a9e60e558bad2da7d&units=metric&lang=de"
					 var weatherCall = new XMLHttpRequest();
					  weatherCall.onreadystatechange = function() {
							if (this.readyState == 4 && this.status == 200) {
								// Typical action to be performed when the document is ready:       
								var weatherJson = JSON.parse(weatherCall.responseText);
								//console.log(weatherJson);
								var weatherType = weatherJson.weather[0].main
								var weather = weatherType.toLowerCase();
								if ( weather == "snow"){
										 //document.getElementById("wettertext").innerHTML = "Es schneit in "+weatherJson.name+"!!!";         
									 snowStorm.toggleSnow();
								}else{
									//document.getElementById("wettertext").innerHTML = "Kein Schnee sondern "+weatherJson.weather[0].description + " in "+ weatherJson.name;
									console.log("Kein Schnee sondern "+weatherJson.weather[0].description + " in "+ weatherJson.name);
									//document.getElementById("wettertext").innerHTML = "Kein Schnee sondern "+weatherJson.weather[0].description + " in "+ weatherJson.name;
									if (snowStorm.active){
										snowStorm.stop();
										snowStorm.freeze();
										snowStorm.active = !snowStorm.active
									}
								}
							}
					  };
					  weatherCall.open("GET", weatherApi);
					  weatherCall.send();
				 }
			};
			xhttp.open("GET", locationApi);
			xhttp.send();
		}
  }else{
      snowStorm.toggleSnow();
  }
}
function snowChooser(){
  var date = new Date();
	var months = parseInt(date.getMonth().toString())+1;  
  if (months>=11 || months <=3){
    document.getElementById("snowChooser").style.display=""
    document.getElementById("snowChooser").value = mode;
    if (mode == "auto"){    	
        forceSnow=false;   
    	checkWeather();    
    }else if (mode == "force"){
       forceSnow=true;      
    	checkWeather();    
    }else{    	
    }
  }else{
    document.getElementById("snowChooser").style.display="none"
  }
  //console.log(months);
}
function toggleSnowChooser(){	
  var e = document.getElementById("snowChooser");
  var strUser = e.options[e.selectedIndex].value;   
  //console.log(strUser);
  if (strUser != mode){
  	if (strUser=="force"){
      mode = "force";
      forceSnow = true;    
      createCookie("snowMode","force",1000);
      checkWeather();
    }else if(strUser=="auto"){
      mode = "auto";
      forceSnow = false;    
      createCookie("snowMode","auto",1000);
      checkWeather();
    }else{
    	mode = "off";    
      if (snowStorm.active){
        snowStorm.stop();
        snowStorm.freeze();
        snowStorm.active = !snowStorm.active
      }
      createCookie("snowMode","off",1000);
    }
  }
}




//=============================================
//******Für ein und Ausblenden Top10 Liste*****
//=============================================
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
