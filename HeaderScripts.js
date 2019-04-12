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
  var colors = ["#2F2F2F", "black", "#003", "#103352", "#04266A", "#004225", "#4F1212", "#222222", "#DCDCDC"];
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
//******Für ein und Ausblenden Top10 Liste*****
//=============================================
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
