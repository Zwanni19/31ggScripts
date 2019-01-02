//============================================= | ALTE ID 5573543
//***********Ehrenmann Counter Kram************
//============================================= | NEUE ID 5597336
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function ehrenmannCounter(){
  var fhs = document.createElement('script');
  var fhs_id = "5597336";

  var ref = (''+document.referrer+'');
  var pn =  window.location;var w_h = window.screen.width + " x " + window.screen.height;

  fhs.src = "//freehostedscripts.net/ocounter.php?site="+fhs_id+"&e1=Ehrenmann anwesend!&e2=Ehrenmänner anwesend!&r="+ref+"&wh="+w_h+"&a=1&pn="+pn+"";

  document.head.appendChild(fhs);
  var spanElem=document.getElementById("o_5597336");
  //console.log(spanElem)
  if (spanElem != null){
    //console.log("Remove")
  	document.getElementById("o_5597336").remove();
  }else{
    document.getElementById("lable").innerText=" Laden..."
  }
  var parent = document.getElementsByClassName("credit")[0];
  //console.log(parent)
  var newSpan = document.createElement("span")  
  newSpan.id="o_"+fhs_id
  newSpan.style="display:none"
  parent.append(newSpan);
  window.setTimeout(function(){
      var userCount = document.getElementById("o_"+fhs_id).innerText.substr(0,document.getElementById("o_"+fhs_id).innerText.indexOf(" "));
    console.log("[Ehrenmänner]"+userCount);
    document.getElementById("counter").innerHTML = userCount
    //console.log("Breite: " + document.body.clientWidth);
    if(userCount!=1 && document.body.clientWidth >= 455){
    	document.getElementById("lable").innerText=" Ehrenmänner anwesend!"
    }else if (userCount==1 && document.body.clientWidth >= 455){
    	document.getElementById("lable").innerText=" Ehrenmann anwesend!"
    }else{
    	document.getElementById("lable").innerText=" User On!"
    }
  },1000)
}

//=============================================
//******Javascript Funktionen werden gestartet*
//=============================================
ehrenmannCounter();
window.setInterval(ehrenmannCounter,3000);
changeColor(true);
document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("ContentLoaded");
    addPlayer();
    snowChooser();
    getArticleLink();
    var d = new Date();
    console.log(d.getMonth())
    if ((d.getMonth()==0||d.getMonth()==11) && (d.getDate()==1||d.getDate()==31) && (d.getHours() == 0||d.getHours() >=19)){checkFireworks();
    }else{
        console.log(""+d.getMonth() + d.getDate() + d.getHours());
    }
    document.getElementById("snowChooser").onchange = function(){
    	toggleSnowChooser();
    }
});

//=============================================
//=============================================
function addPlayer(){
	var colors = ["#2F2F2F", "black", "#003", "#103352", "#04266A", "#004225", "#4F1212", "#222222"];
	var colorIndex = 0;
	var color = getCookie("color")
	//console.log(color)
	if (color==""){
		color="default"
	}
	
	console.log("Appending Player");
	var musicPlayer = document.createElement('script');
	musicPlayer.setAttribute('src','https://www.wikplayer.com/code.js');
	var skin = "skins/wikmini/funkyMiniBlue/skin.css"
	switch(color){
		case "#4F1212":
			skin = "skins/wikmini/funkyMiniGreen/skin.css"
			break;
		default:
			console.log("No Color");
			
	}
	musicPlayer.setAttribute("data-config","{'skin':'"+skin+"','volume':62,'autoplay':false,'shuffle':false,'repeat':1,'showcomment':false,'marqueetexton':true,'placement':'mini','showplaylist':false,'playlist':[{'title':'0%20%5BSNIPPET%5D%20Kianush%20-%20Szenario','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1fuIaiJZ2EQ'},{'title':'0%20%5BSNIPPET%5D%20SSIO%20-%200%2C9','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpafLSIFm0OU'},{'title':'100s%20-%20Ten%20Freaky%20Hoes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFChOINNixMg'},{'title':'18%20Karat%20-%20FSK18%20BRUTAL','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxfA94HQWMeg'},{'title':'2%20Chainz%20-%20Fork%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjVhMt26F7gA'},{'title':'2Pac%20-%20Do%20For%20Love','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dyre5nBXAxyk'},{'title':'2Pac%20-%20Hail%20Mary','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1OR1Plc5Qv8'},{'title':'2Pac%20-%20Hit%20%27Em%20Up','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D41qC3w3UUkU'},{'title':'2Pac%20-%20Road%20To%20Glory%20%2F%2F%20Unreleased','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBlTe8VUf_Ug'},{'title':'2Pac%20ft.%20Big%20Stalks%2C%20DJ%20Ak%2C%20Snoop%20Dogg%20%26%20Dr.Dre%20-%20Takin%27%20Over%20(D-Ace%20Mix)%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2jnUZUl054Y'},{'title':'2Pac%2C%20Nate%20Dogg%2C%20Outlawz%20%26%20Top%20Dogg%20-%20All%20About%20U','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D73hVXL_-oQw'},{'title':'50%20Cent%20-%20We%20Up%20ft.%20Kendrick%20Lamar','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-6jhuhsG-7w'},{'title':'A%24AP%20Rocky%20Feat.%20Drake%2C%202%20Chainz%20%26%20Kendrick%20Lamar%20-%20Fuckin%27%20Problems','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnAQVGx1vzrk'},{'title':'A-Trak%20-%20We%20all%20fall%20down','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D34kNQXkz2MM'},{'title':'AI-TIEM%20-%20All%20Das%20Mag%20Ich','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpF44fBKjY8c'},{'title':'ASD%20(Afrob%20%26%20Samy%20Deluxe)%20-%20Antihaltung','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds_jtWU7jxcg'},{'title':'ASD%20(Afrob%20%26%20Samy%20Deluxe)%20-%20Legend%C3%A4r%2FPopul%C3%A4r','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZXUmcj93CVY'},{'title':'ATTAKAN%20-%20Hand%20vorm%20Gesicht','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DY1NWjeZ7Eks'},{'title':'AZ%20-%20The%20Come%20Up%20(Prod.%20By%20DJ%20Premier)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuXzJkhtlKHE'},{'title':'AZ%20-%20The%20Format%20(prod.%20dj%20premier)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_YZuCdS5_t0'},{'title':'AchtVier%20ft.%20PTK%20-%20Kneipentresen','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJxxmhAUptTA'},{'title':'Aero%20Chord%20-%20Ctrl%20Alt%20Destruction','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4CEjay8qCIc'},{'title':'Aero%20Chord%20-%20Surface','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBrCKvKXvN2c'},{'title':'Aero%20Chord%20x%20GAWTBASS%20-%20Secret','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DK8zLhQ8r0NQ'},{'title':'AlunaGeorge%20-%20Best%20Be%20Believing%20(Shadow%20Child%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmZPJfU4ZiQY'},{'title':'Arman%20Cekin%20-%20Worth%20(feat.%20Y.A.S)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DViL9I09AKuw'},{'title':'Arsonists%20%26%20Non%20Phixion%20-%2014%20Years%20Of%20Rap%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DE3NWMri2JFs'},{'title':'Artifacts%20-%20Wrong%20Side%20Of%20Da%20Tracks','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGM92f-BUoow'},{'title':'Automatikk%20-%20GHETTOPR%C3%84SIDENT%203','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCHp8R62M51E%26index%3D87'},{'title':'Azizi%20Gibson%20-%20%22Dj%20Khaled%22%20prod.%20Millz%20Douglas','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiukS5oiqBV4'},{'title':'AzudemSK%20-%20Back%20to%20Drama%20feat.%20Posti%2C%20Firstar%20%26%20Krey','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUfL8BgzYdNg'},{'title':'AzudemSK%20-%20Classic%20Shid%20%2F%20Neue%20Welt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Durp2X-qgqUU'},{'title':'AzudemSK%20-%20Eine%20Liebe','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DofBogvVVWHg'},{'title':'AzudemSK%20-%20Eine%20Liebe%20pt%20II','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbC16LWPu6jg'},{'title':'AzudemSK%20-%20Hoffnung','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoKIppaF3nsU'},{'title':'AzudemSK%20-%20Immernoch%20banal%20aber%20fresh','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DExaGO6SYbqo'},{'title':'AzudemSK%20-%20Mad%20Flavour','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtUqkkzVXLQA'},{'title':'AzudemSK%20-%20NEUE%20WELT','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIzyXrlmbSok'},{'title':'AzudemSK%20feat.%20Slowy%20-%20Turn%20Me%20Up','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DindEeMiLuu4'},{'title':'AzudemSK%20feat.%20Slowy%20-%20Turn%20Me%20Up','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DindEeMiLuu4'},{'title':'B-Real%2C%20Coolio%2C%20Method%20Man%2C%20LL%20Cool%20J%20And%20Busta%20Rhymes%20-%20Hit%20Em%20High%20(The%20Monstars%27%20Anthem)%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DewOzi5-AZXU'},{'title':'BUSTA%20RHYMES%20-%20GIMME%20SOME%20MORE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVeCpfWNKh9s'},{'title':'Baba%20Saad%20-%20Silber%20oder%20Blei%20(feat.%20Pa%20Sports%20%26%20Kianush)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dr6u0ww9jlI0'},{'title':'Bakyl%20-%20Gringo','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5nEEfLP4MdA'},{'title':'Beatfabrik%20-%20Bonny%27s%20Ranch%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsoJsLMiVKzM'},{'title':'Beatfabrik%20-%20Bonnys%20Ranch','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGUutH8ZWM7A'},{'title':'Beatfabrik%20MOR%20-%20Was%20ihr%20wollt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlMYkGKXBszE'},{'title':'Beatnuts%20-%20Watch%20Out%20Now','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFPwkHtul62o'},{'title':'Blackstreet%20-%20No%20Diggity%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1ymZLKz7mac'},{'title':'Blaq%20Poet%20-%20We%20Gon%27%20Ill%20%5BProd.%20By%20DJ%20Premier%5D%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0o0TVlrNiK0'},{'title':'Blokkmonsta%20%26%20Uzi%20-%20Fick%20die%20Polizei%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7Qoj_OAOXl4'},{'title':'Bloods%20%26%20Crips%20-%20Damu%20Ridaz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DriDRPt0xE_c'},{'title':'Bloods%20%26%20Crips%20-%20I%20Wish%20You%20Were%20Here','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGEkxBhoQea0'},{'title':'Bloods%20%26%20Crips%20-%20Nationwide%20R.I.P.%20Ridaz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJzCmt220lgQ'},{'title':'Bloods%20%26%20Crips%20-%20Piru%20Love','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnPkpJels9Qc'},{'title':'Bloods%20%26%20Crips%20-%20Steady%20Dippin%27','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWt2t9__l2oE'},{'title':'Blut%20%26%20Kasse%20-%20Alles%20Egal','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9O_MbN7VnrE'},{'title':'Blut%20%26%20Kasse%20-%20Anti%20Industrie','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DD2R-LE8NlOE'},{'title':'Blut%20%26%20Kasse%20-%20Hunger%20wie%20ein%20B%C3%A4r','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkMj8Le_i3vE'},{'title':'Blut%20%26%20Kasse%20-%20Sei%20Ehrlich','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXTxw4bgMV1M'},{'title':'Blut%20%26%20Kasse%20-%20ZOFD%20RaptorRMX','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUo1UNkG6BC4'},{'title':'Blut%20%26%20Kasse%20feat.%20MoTrip%20-%20Nie%20Besser','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOBiJTzVL1BQ'},{'title':'Blut%26Kasse%20-%20Immer%20in%20Bewegung','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqtxeuXyKF6k'},{'title':'Booba%20-%204G','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DufDsQaAXmVs'},{'title':'Booba%20feat%20Kaaris%20-%20Kalash','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoBbHo8b4FDc'},{'title':'Booba%20feat.%20Benash%20-%20Valid%C3%A9e','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIWftfp5cLCk'},{'title':'Bushido%20%26%20Shindy%20-%20Classic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5-S1k9SM8DY'},{'title':'Bushido%20-%20H.E.N.G.Z.T','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dgl_S1-AGKiQ'},{'title':'Bushido%20-%20Leben%20und%20Tod%20des%20Kenneth%20Gl%C3%B6ckler','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuT-hBZXTwEI'},{'title':'Bushido%20feat.%20Eko%20Fresh%20-%20Flerr%C3%A4ter','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBdVrU5RlkXw'},{'title':'Busta%20Rhymes%20-%20Dangerous','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUJUk45l4h8c'},{'title':'Busta%20Rhymes%20-%20What%20It%20Is','url':'http%3A%2F%2Fwww.dailymotion.com%2Fvideo%2Fxw9og_busta-rhymes-what-it-is_music'},{'title':'Busta%20Rhymes%20-%20What%20It%20Is','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSTCUwEkt8-k'},{'title':'Busta%20Rhymes%20Feat%20Eminem%20-%20I%27ll%20Hurt%20You','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWgEtUuEK-to'},{'title':'CAPITAL%20-%20HALT%20DIE%20FRESSE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dxke_rtMfADc'},{'title':'Candice%20Alley%20-%20Falling','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCKKKpY7FoRA'},{'title':'Capone-N-Noreaga%20-%20Invincible','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOeqdsOd_ZUM'},{'title':'Capone-n-Noreaga%20-%20Blood%20Money','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSLr-L2pmpAA'},{'title':'Capone-n-noreaga%20-%20Y%27all%20Don%27t%20Wanna%20Fuck%20Wit%20Us%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjB3RUrt0gKo'},{'title':'Casper%2C%20Favorite%20%26%20Kollegah%20-%20Mittelfinger%20hoch','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMm2gXHC6J2U'},{'title':'Celo%20%26%20Abdi%20-%20PARALLELEN%20ft.%20Haftbefehl','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3ctIO8CwJsk'},{'title':'Chaker%20-%20CITYCODE%20feat.%20Haftbefehl%2C%20Celo%20%26%20Abdi','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxwSgnzbeuE8'},{'title':'Chakuza%20feat.%20Bushido%20-%20Eure%20Kinder','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzEbnJ9uG9dk'},{'title':'Chamillionaire%20-%20Ridin%27%20ft.%20Krayzie%20Bone','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCtwJvgPJ9xw'},{'title':'Compton%27s%20Most%20Wanted%20-%20Hood%20Took%20Me%20Under%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRl2rCOFN43E'},{'title':'Coolio-%20Gangster%27s%20Paradise','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN6voHeEa3ig'},{'title':'Cr7z%20feat%20Jamer%24on%20-%20Manitis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYqVWawSb0E4'},{'title':'DCVDNS%20-%20Mein%20Mercedes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwWQGlLQB4VA'},{'title':'DJ%20Premier%2C%20Rakim%2C%20Nas%20%26%20Krs-One%20-%20Classic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dryfr6YTNeho'},{'title':'DJ%20SWAP%20%26%20PFUND%20500%20-%20Chabos%20Wissen%20Wer%20Der%20Babo%20Ist%20(Trap%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D25NYHVfB150'},{'title':'DMX%20-%20Ain%27t%20No%20Sunshine','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoXl28Sf2O4A'},{'title':'De%20La%20Soul%20Feat.%20Chaka%20Khan%20-%20All%20Good','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPA_NP0k-G3o'},{'title':'Deficio%20-%20Ares','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxhjnIcHQEpQ'},{'title':'Deorro%20%26%20Steve%20Aoki%20-%20ID','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7rWsGFFjqAY'},{'title':'Deorro%20%26%20Zoofunktion%20-%20Hype%20(Garmiani%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjND0w3d_ozM'},{'title':'Der%20Plusmacher%20feat.%20Karate%20Andi%20-%20Bockwurst','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyN5RnowED4U'},{'title':'Deso%20Dogg%20-%20Wilkommen%20In%20Meiner%20Welt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBBWae-86Q1E'},{'title':'Dillon%20Cooper%20-%20Kung%20Foo%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DA70wOPWNFeA'},{'title':'Dillon%20Cooper%20-%20Survival%20of%20the%20Fittest','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpVLqxb4Be6A'},{'title':'Dillon%20Francis%2C%20DJ%20Snake%20-%20Get%20Low%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D12CeaxLiMgE'},{'title':'DopeX%20-%20Mafia%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DouLs_uZlH10'},{'title':'Dr.%20Surabi%20-%20Du%20verlierst','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D13poMxtKmSA'},{'title':'Dr.%20Surabi%20-%20Ich%20mach%20das%20nur','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFI-VEsVljk4'},{'title':'DrDre%20feat.Knoc%20Turn%27al%20-%20Bad%20Intentions','url':'http%3A%2F%2Fwww.dailymotion.com%2Fvideo%2Fx1f2qo_drdre-feat-knoc-turn-al-bad-intenti_music'},{'title':'Drake%20-%20Worst%20Behavior','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCccnAvfLPvE'},{'title':'Eazy%20E%20ft.%202Pac%20-%20Real%20Thugs','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmHfS6LRgtqI'},{'title':'Eiffel%2065%20-%20Blue%20(KNY%20Factory%20Trap%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZ2FygEp8Q2Q'},{'title':'Eko%20Fresh%20-%201000%20Bars','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqaTF-fl-jSg'},{'title':'Eko%20Fresh%20-%20700%20Bars','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpCrLVSR-jl4'},{'title':'Eko%20Fresh%20-%20Die%20Abrechnung','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvJtvlml4BIU'},{'title':'Eko%20Fresh%20-%20Dr%C3%BCck%20auf%20play%20feat.%20Kool%20Savas','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSgr5X4szoJo'},{'title':'Eko%20Fresh%20-%20Ein%20Rhyme%20feat.%20Martin%20B%20%26%20Kool%20Savas','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkD3liN3XzGI'},{'title':'Eko%20Fresh%20-%20Hartz%207%20(700%20Bars)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dd9f1doWH8S8'},{'title':'Eko%20Fresh%20-%20Ihr%20seid%20die%20Besten%20feat.%20Lenny','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dw7EjJZwpaC0'},{'title':'Eko%20Fresh%20-%20Komm%20her','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxDlBinRk4Do'},{'title':'Eko%20Fresh%20-%20Mund%20auf%20ich%20Komme%20(prod.%20by%20Isy%20B)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVNRQB6tj9aw'},{'title':'Eko%20Fresh%20-%20S.A.D.I.','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoNwmfre3TTw'},{'title':'Elliphant%20-%20Only%20Getting%20Younger%20ft.%20Skrillex','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbw5pi9nUGJ8'},{'title':'Elliphant%20-%20Revolusion','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQTRGx6kv3ps'},{'title':'Eminem%20-%201%20Shot%202%20Shot','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDKAb4YD0Euc'},{'title':'Eminem%20-%20Business','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIdS3WVYr834'},{'title':'Eminem%20-%20Lose%20Yourself','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_Yhyp-_hX2s'},{'title':'Eminem%20-%20My%20Name%20Is','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLDj8kkVwisY'},{'title':'Eminem%20-%20Rain%20Man','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DalYmtv3MhIQ'},{'title':'Eminem%20-%20The%20Real%20Slim%20Shady','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dqp6mXmHNPlg'},{'title':'Eminem%20feat.%20Cashis%2C%2050%20Cent%2C%20Lloyd%20Banks%20-%20U%20dont%20know','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnkpRd9TSFgA'},{'title':'Eurogang%20feat.%20Kollegah%20-%20Soldiers','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dj7vVZRISOcA'},{'title':'FLER%20-%20PHEROMONE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgSORlWKSox0'},{'title':'Fard%20-%20SEINE%20GESCHICHTE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8frOUg3RHOM'},{'title':'Feinkost%20Paranoia%20-%2031ger','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM_9iUzwvio0'},{'title':'Feinkost%20Paranoia%20-%20Auf%20Alle%20Vier','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DR97QJKsLIQk'},{'title':'Feinkost%20Paranoia%20-%20Bombenteppich','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoC-yL1p6Ewc'},{'title':'Feinkost%20Paranoia%20-%20B%C3%BCck%20dich','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZpAnDGTHmpQ'},{'title':'Feinkost%20Paranoia%20-%20Der%20Wolf%20in%20dir','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJTS2URae088'},{'title':'Feinkost%20Paranoia%20-%20Die%20Fittesten!','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dx4cnaPt_HUU'},{'title':'Feinkost%20Paranoia%20-%20Finstar%20Symphonie%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWk42vlNBypk'},{'title':'Feinkost%20Paranoia%20-%20Freaks%20%26%20Fraggles%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTrjlgG3sFrQ'},{'title':'Feinkost%20Paranoia%20-%20Ich%20dachte%20du%20gehst%20aus%20mit%20mir','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DR1R7wh53xX0'},{'title':'Feinkost%20Paranoia%20-%20Jamer%24on%20-%20Es%20war%20einmal','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcEUeqGaEuno'},{'title':'Feinkost%20Paranoia%20-%20Neptun%20harpoon%20cypha%20session','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjN8A6Z9uck8'},{'title':'Feinkost%20Paranoia%20-%20Neuer%20flavor','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSnLS_g1CjI8'},{'title':'Feinkost%20Paranoia%20-%20SamstagNachmittag','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3UONefXciDc'},{'title':'Feinkost%20Paranoia%20-%20Schnall%20dich%20an','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX3YpdJBBP3U'},{'title':'Feinkost%20Paranoia%20-%20So%20leicht!','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di8J-c9rqjcM'},{'title':'Feinkost%20Paranoia%20-%20So%20oder%20So','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvJqWrM6EhSk'},{'title':'Feinkost%20Paranoia%20-%20S%C3%BCsse%20kleine%20Maus','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnbFRIvzcfgw'},{'title':'Feinkost%20Paranoia%20-%20Traumfrau','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGxFilC_qhi0'},{'title':'Feinkost%20Paranoia%20-%20Wanderimpuls','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D23ZjFs-ChlQ'},{'title':'Feinkost%20Paranoia%20-%20Wie%20wir...','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOurZd6Cq_4c'},{'title':'Foxy%20Brown%20Feat.%20Jay-Z%20-%20Ill%20Be%20Good','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dd1oCsn39kKk'},{'title':'Frauenarzt%20-%20Porno%20Party','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D36xK-Xi6UOg'},{'title':'Fresh%20Polakke%20-%20Sporttasche','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DugkN8gFLj0Q'},{'title':'Frucht%20Max%20x%20Hugo%20Nameless%20-%20Juckt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaoRWjmaj2nE'},{'title':'Frucht%20Max%20x%20Hugo%20Nameless%20x%20Juicy%20Gay%20%7C%20WKM%24N%24HG%3F!%20(prod.%20101)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzffuqKx9C0A'},{'title':'Future%20-%20Where%20Ya%20At%20ft.%20Drake','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dlw3Or6eqIpI'},{'title':'G-Eazy%20-%20Achievement','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqKldIZsrg1Y'},{'title':'G-Eazy%20-%20Acting%20Up%20ft%20Devon%20Baldwin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaxgTTuL7DVg'},{'title':'G-Eazy%20-%20Dear%20Ms.%20Rose','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVr1qz93xDCY'},{'title':'G-Eazy%20-%20Endless%20Summer%20ft.%20Erika%20Flowers','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFb5qybFOSKA'},{'title':'G-Eazy%20-%20Fire%20In%20The%20Booth','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX-omAENOYQg'},{'title':'G-Eazy%20-%20Fried%20Rice','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDCQ44b02Anc'},{'title':'G-Eazy%20-%20Friend%20Zone','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIeoEBorFWFs'},{'title':'G-Eazy%20-%20Lady%20Killers%20II','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2LDhyuwzeeU'},{'title':'G-Eazy%20-%20Mad%20ft.%20Devon%20Baldwin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ddu3yE6Sn20Q'},{'title':'G-Eazy%20-%20Marilyn%20ft.%20Dominique%20LeJeune','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmlAll9o4O7Y'},{'title':'G-Eazy%20-%20Must%20Be%20Nice','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVJfp7BFBQME'},{'title':'G-Eazy%20-%20Plastic%20Dreams%20ft.%20Johanna%20Fay','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di2s6JiVYpwM'},{'title':'G-Eazy%20-%20Rebel','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8gXlk2OpZN8'},{'title':'G-Eazy%20-%20Running','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyWU6bVnqL_E'},{'title':'G-Eazy%20-%20Say%20So','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiaU9-ELaGqs'},{'title':'G-Eazy%20-%20Stay%20High%20(feat.%20Mod%20Sun)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyXf_heXW0fg'},{'title':'G-Eazy%20-%20The%20Coolest%20Job','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dym105ro1EM0'},{'title':'G-Eazy%20-%20The%20Day%20It%20All%20Changed','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOs2WjZIyEuI'},{'title':'G-Eazy%20-%20The%20Outsider','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D45JG7pgRGCQ'},{'title':'G-Eazy%20-%20Waspy','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dcdkj9La_97c'},{'title':'G-Eazy%20feat.%20Bebe%20Rexha%20-%20Me%2C%20Myself%20%26%20I','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTfs5GOQK4dU'},{'title':'G-Eazy%20feat.%20Remo%20-%20I%20Mean%20It','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dh2vkUozM3OM'},{'title':'G-Unit%20-%20Bad%20News%20(50%20Cent%2C%20Lloyd%20Banks%2C%20Tony%20Yayo)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4HTaXC8CmgQ'},{'title':'GENETIKK%20-%20W%C3%BCnsch%20dir%20was','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5FS8RIH7BpI'},{'title':'Gang%20Starr%20-%20Full%20Clip','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dau1S0i2HFHY'},{'title':'Gang%20Starr%20-%20Moment%20Of%20Truth','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnBadu4K-QkI'},{'title':'Gang%20Starr%20-%20Skills','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3D9Md01gjyY'},{'title':'Gang%20Starr%20-%20You%20Know%20My%20Steez','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMWja8kE_TB4'},{'title':'Garmiani%20-%20Nomad','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt8QWynW_9PQ'},{'title':'Genetikk%20-%20Caput%20Mundis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZm4IiywAZr8'},{'title':'Genetikk%20-%20Yes%20Sir','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dume7luVVGRk'},{'title':'Genetikk%20feat.%20SSIO%20-%20Jungs%20ausm%20Barrio','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8b2MWZKslwU'},{'title':'Get%20Lost%20by%20Niklas%20Gustavsson%20-%20%5BElectro%20Music%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzUoQ-5qcYl4'},{'title':'Godsilla%20feat.%20She-Raw%20und%20Hengzt%20-%20Du%20bist%201%20Hurensohn','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dz7y9DFWPqSs'},{'title':'Grits%20-%20My%20Life%20Be%20Like%2FOhh%20Ahh%20(Remix%20ft.%202Pac%20%26%20Xzibit%20-%20Tokyo%20Drift%20video%20version)%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3shMD13Y2uU'},{'title':'Haftbefehl%20-%20Aus%20Gramm%20mach%20ich%20Pfund','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZzrw44REyyQ'},{'title':'Haftbefehl%20-%20Cheech%20%26%20Chong%20ft.%20Jan%20Delay','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DH7NPeBtF7Go'},{'title':'Haftbefehl%20-%20CopKKKilla','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAdLiqQQWdks'},{'title':'Haftbefehl%20-%20Gilette%20ft.%20Chaker','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dc8QSRRIhvHA'},{'title':'Haftbefehl%20-%20Hass%20Schmerz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiwTB9fpcXI0'},{'title':'Haftbefehl%20-%20Jeden%20Tag%20Wochenende','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DExINpaqee5s'},{'title':'Haftbefehl%20-%20Rotlicht%20ft.%20Farid%20Bang%20%26%20Kollegah','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpuhRm4xpKV8'},{'title':'Haftbefehl%20-%20Rotterdam%20(feat.%20Celo%20%26%20Abdi%20%26%20Veysel)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D41OhmO_WEfU'},{'title':'Haftbefehl%20-%20Von%20Bezirk%20zu%20Bezirk%20ft.%20Azad%20%26%20Jeyz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPIHJYmSaJq0'},{'title':'Haftbefehl%20feat.%20Capo%20-%20Julius%20Cesar','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX48HQ_FdL_E'},{'title':'Haftbefehl%20feat.%20Farid%20Bang%20-%20Thug%20Life%20-%20Lass%20Rauchen%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4xzobug0spo'},{'title':'Haiyti%20-%2001%20Intro%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZTpo54Kut6c'},{'title':'Haiyti%20-%2002%20Szeneviertel%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dyhw-3pSBiXU'},{'title':'Haiyti%20-%2003%20Teenage%20Rehab%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5Y9j-TqfFm8'},{'title':'Haiyti%20-%2004%20Kein%20Paris%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyG9UIMH73dE'},{'title':'Haiyti%20-%2005%20C%27est%20la%20Vie%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq7fseXB9s7w'},{'title':'Haiyti%20-%2006%20Atillerie%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DS3M1qqoDij4'},{'title':'Haiyti%20-%2007%20Cosmopolitan%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNpjieCdPTFw'},{'title':'Haiyti%20-%2008%20Havarie%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DotX7m-aGYY8'},{'title':'Haiyti%20-%2009%20Speedleiche%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DG59l_iNPBvM'},{'title':'Haiyti%20-%2010%20Clubhai%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dm3Ycb9GZugg'},{'title':'Haiyti%20-%2011%20Treibsand%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhBOiMX9OL1U'},{'title':'Haiyti%20-%2012%20Gucci%20Over%20All%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbzxFn-SMILg'},{'title':'Haiyti%20-%2013%20Luftkuss%20aus%20Maybach%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqCWkutVBFRk'},{'title':'Haiyti%20-%2014%20Atlantis%20-%20%5BHavarie%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVQ6qwbkrtO0'},{'title':'Hardwell%20feat.%20Amba%20Shepherd%20-%20United%20We%20Are','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dw98B_zsQW2w'},{'title':'Havoc%20-%20Get%20Busy','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMtwTgQNdY80'},{'title':'Herzog%20(feat.%20Dr.%20Surabi)%20-%20Keine%20Nacht%20ohne%20Drogen','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-2Ht7zSDHRw'},{'title':'Herzog%20(feat.%20King%20Orgasmus%20One%20und%20Tayler)%20-%20Alarmstufe%20Koks','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDVbgZ5tKysc'},{'title':'Herzog%20-%20D.R.E.A.M.','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D33PuXYCFwZg'},{'title':'Herzog%20-%20Das%20hab%20ich%20mir%20erlaubt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7lyo5F49m6c'},{'title':'Herzog%20-%20Ein%20Herz%20f%C3%BCr%20Drogen','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCWrNSj5k1Os'},{'title':'Herzog%20-%20Gott%20sei%20Junk','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlO7R6FWqBJs'},{'title':'Herzog%20-%20Von%20Berlin%20bis%20Prag','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHVnVMoJTjHY'},{'title':'High%20and%20Mighty%20Ft%20Mos%20Def%20%26%20Skillz%20-%20B-%20boy%20document','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXDJCQAHeF3Q'},{'title':'Hirntot%20Records%20-%20Ruhe%20in%20Pisse','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7LNQlWj-rrk'},{'title':'Honka%20-%20Milano','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnuXnZmjnE_s'},{'title':'Hopsin%20-%20FLY','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5MitZ-C0tgQ'},{'title':'Hopsin%20-%20Hop%20Is%20Back','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXmmXQlkg4Lg'},{'title':'Hopsin%20-%20I%20Need%20Help','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbIGRV9RPJiM'},{'title':'Hopsin%20-%20Ill%20Mind%20Of%20Hopsin%204','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbULBnef6w6k'},{'title':'Hopsin%20-%20Ill%20Mind%20Of%20Hopsin%205','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhRVOOwFNp5U'},{'title':'Hopsin%20-%20Sag%20My%20Pants','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dgtfd69DfOak'},{'title':'IMBISS%20BRONKO%20-%2036%20GRAD','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6Iag5M1pYok'},{'title':'INGLEBIRDS%20-%20Wadadadang','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3De895k_zwQtM'},{'title':'Ice%20Cube%20-%20Click%2C%20Clack%20-%20Get%20Back','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DB-m2AkQ1PD8'},{'title':'Ice%20Cube%20-%20Gangsta%20Rap%20Made%20Me%20Do%20It','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9klnhyVe0ns'},{'title':'Ice%20Cube%20-%20I%20Rep%20That%20West','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4gyt9yqDMdA'},{'title':'Ice%20Cube%20-%20No%20Vaseline','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSoNQ8oJ9xaQ'},{'title':'Ice%20Cube%20-%20Once%20Upon%20A%20Time%20In%20The%20Projects%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQUgt_AOi9wA'},{'title':'Ice%20Cube%20-%20Smoke%20Some%20Weed','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt7hL0LrmBj8'},{'title':'Ice%20Cube%20feat.%20Dr.%20Dre%20-%20Hello','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DShWDx9g7zbg'},{'title':'Imajin%20feat.%20The%20Game%20-%20Can%27t%20Forget%20(Mario%20Winans%20remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsG-mSBOYEQ4'},{'title':'InI%20-%20Center%20of%20Attention','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfFEVxpJtPm8'},{'title':'Indila%20-%20Derni%C3%A8re%20Danse','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DK5KAc5CoCuk'},{'title':'Insan3Lik3%20-%20We%20Are%20The%20Robots%20(feat.%20Temu)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Doe443Gl4Skk'},{'title':'JAW%20-%20Arztbesuch%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKEJDy2U7h90'},{'title':'JAW%20-%20Behindertes%20Kind','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyUswSuSIj5Y'},{'title':'JAW%20-%20Bierliebe%20-%20PCP','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHomlaeK8hIw'},{'title':'JAW%20-%20Jung%20und%20dumm','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4CI9aHCK0DY'},{'title':'JAW%20-%20Meine%20Fans','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D719uzFKbU2w'},{'title':'JAW%20-%20Optimist%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOyQtQmFtZ6g'},{'title':'JAW%20feat.%20Hollywoodsfinest%20-%20Parental%20Advisory%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkYgxyJGh7Vw'},{'title':'Ja%20Rule%20-%20Murder%20Reigns','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DslLCOvmKMd0'},{'title':'John%20Webber%20%26%20Juri%20feat.%20Automatikk%20%E2%96%BA%20BUSINESSCLASS%20%E2%97%84','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuhoLhixe2kQ'},{'title':'Juicy%20J%20-%20Bounce%20It%20%20ft.%20Wale%2C%20Trey%20Songz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlgSH3LPfo6g'},{'title':'K-391%20-%20Brimleik%202013%20ft.%20Gjermund%20Olstad','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXaqyh-G2rSA'},{'title':'K-391%20-%20Windows','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dj-4AtYxyn6A'},{'title':'K.I.Z%20-%20Rosenbusch','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhLYzJ04c3GQ'},{'title':'K.I.Z%20-%20Walpurgisnacht','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEsaB34dEq0k'},{'title':'K.I.Z.%20-%20Sonnenbrille','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-cshNnNxl98'},{'title':'KALIM%20feat.%20SSIO%20-%20Nein%2C%20leider%20niemals!','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSzrID1SPMWY'},{'title':'KING%20EAZY%20-%20ALLES%20EAZY','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDQai3T1fKL0'},{'title':'KING%20EAZY%20-%20HALT%20DIE%20FRESSE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFR9hszgPRws'},{'title':'KIZ%20-%20Los%20gehts','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D54X1TzgZz5Y'},{'title':'KIZ%20Gl%C3%BCckskeks','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0uXQWrxFnY8'},{'title':'Kaaris%20-%2063','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3s0Zzh722BA'},{'title':'Kaaris%20-%2080%20ZETREI','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmbamEauMMsY'},{'title':'Kaaris%20-%20A%20L%27Heure','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOM1-PjnvZwc'},{'title':'Kaaris%20-%20C%27est%20la%20base%20ft.%20XV%20Barbar','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN0VCgCbuAJw'},{'title':'Kaaris%20-%20Charg%C3%A9%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLPKcaidKqT8'},{'title':'Kaaris%20-%20Crystal%20ft.%20Future','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkN09y8oiTrA'},{'title':'Kaaris%20-%20Kadirov','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkP-athZfgyc'},{'title':'Kaaris%20-%20Les%20Mains%20Dans%20Le%20Dos','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Db1qAJnrre_U'},{'title':'Kaaris%20-%20Magnum','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7TdnkvR2nCo'},{'title':'Kaaris%20-%20Mauvais%20Djo%20ft.%20Ixzo%2C%20Worms%20T%2C%20Solo%20Le%20Mythe','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHZ4lPXI-S7I'},{'title':'Kaaris%20-%20Or%20Noir','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dm8LnqCSqNe4'},{'title':'Kaaris%20-%20S.E.V.R.A.N','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DO7iWorzvlKE'},{'title':'Kaaris%20-%20Se-vrak','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1cRQ8pS21-4'},{'title':'Kaaris%20-%20Sombre','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDTgRTnJ_v48'},{'title':'Kaaris%20-%20Terrain','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGwui8GSP0IY'},{'title':'Kaaris%20-%20Zoo%20-%20Clip%20officiel','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxX4Pxiwti4E'},{'title':'Karate%20Andi%20-%20Generation%20Andi','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dr5qO89J2UYg'},{'title':'Kendrick%20Lamar%20-%20Swimming%20Pools%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8-ejyHzz3XE%26index%3D67'},{'title':'Kid%20Ink%20-%20I%20just%20want%20it%20all','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEWesI0husPY'},{'title':'KinG%20Eazy%20-%20A.%24.A.P.','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8LiDCeSaCDE'},{'title':'King%20Orgasmus%20One%20-%20Fick%20Die%20Ex%20II','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dr3ynkEuicAo'},{'title':'Knoc-turn%27al%20Feat.%20Snoop%20Dogg%20-%20The%20Way%20I%20Am','url':'%20https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dv9muWMN1Nsk'},{'title':'Kny%20Factory%20-%20Peanut%20Butter%20Jelly','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYSboz9yGCok'},{'title':'Kollegah%20-%2044er%20Bizeps','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKTOghXh7-T8%26list%3DPL9E66C3FFA14AD199%26index%3D27'},{'title':'Kollegah%20-%20Armageddon','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJAE0KtU0tuc'},{'title':'Kollegah%20-%20Bosshafte%20Weihnachten','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8GGVOJYU-RA%26index%3D31%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Bosshafte%20Weihnachten%202015','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAViFpRenot0'},{'title':'Kollegah%20-%20Briatore','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRqttcQICe0U%26index%3D19%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Cold%20Turkey','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSIyJ5y9BB1s%26list%3DPL9E66C3FFA14AD199%26index%3D21'},{'title':'Kollegah%20-%20Discospeed%20feat.%20Favorite','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhLzmyiTSP0I%26index%3D7%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Drogenfachchinesisch','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlCMOYec2Zms%26index%3D18%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Fanboy','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM2QDQ4QP7Jw%26index%3D2%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Fanpost','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7P5apXqGMoY'},{'title':'Kollegah%20-%20Frank%20Miller','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLNejwxxX3TE%26index%3D11%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20G-Punkt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3De2EkuOnsPLU'},{'title':'Kollegah%20-%20Gigolos%20feat.%20Prinz%20Harry','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da4rNQZnIuZ0%26index%3D13%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Hagelk%C3%B6rner','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DS6MTzjBABNc%26list%3DPL9E66C3FFA14AD199%26index%3D17'},{'title':'Kollegah%20-%20Hotelsuite','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCQqsWnTjUcU%26index%3D5%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Ich%20bin%20King','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DesxxvuW3RKk'},{'title':'Kollegah%20-%20Intro','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDWL2cU2Duew%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Koksh%C3%A4ndlerbusiness','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKGBlL2D4JZY%26list%3DPL9E66C3FFA14AD199%26index%3D3'},{'title':'Kollegah%20-%20Meine%20Lady','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbvplGLLgrfk%26list%3DPL9E66C3FFA14AD199%26index%3D22'},{'title':'Kollegah%20-%20Monte%20Carlo%20Kokasession','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5zKRqZ0_EA8%26index%3D6%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Nachmittag','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKGBlL2D4JZY%26list%3DPL9E66C3FFA14AD199%26index%3D3'},{'title':'Kollegah%20-%20Nightclub','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DByvSUthDdJA%26list%3DPL9E66C3FFA14AD199%26index%3D12'},{'title':'Kollegah%20-%20Ostblocknutten%20feat.%20Haftbefehl','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DITJ3SM7DVCQ'},{'title':'Kollegah%20-%20Powerschwanz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0lZQSCwecMA%26list%3DPL9E66C3FFA14AD199%26index%3D24'},{'title':'Kollegah%20-%20Ridermusic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgHvs2xBWjXs%26list%3DPL9E66C3FFA14AD199%26index%3D20'},{'title':'Kollegah%20-%20Sch%C3%A4delbasisbrecher','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMcDEISUtf4c'},{'title':'Kollegah%20-%20Sohnemann','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dn-XT7rmjEvE%26list%3DPL9E66C3FFA14AD199%26index%3D29'},{'title':'Kollegah%20-%20Taiwan','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvBQHNhodEXI%26list%3DPL9E66C3FFA14AD199%26index%3D25'},{'title':'Kollegah%20-%20Taj%20Mahal%20Kokasession','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvM5QeS50_LA%26index%3D30%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20Testomusic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOkRwUzDjk_o%26list%3DPL9E66C3FFA14AD199%26index%3D28'},{'title':'Kollegah%20-%20Untertreiberrap','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTF5HfTcQREM'},{'title':'Kollegah%20-%20Vorbei','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqRsTjUB22Oc%26list%3DPL9E66C3FFA14AD199%26index%3D8'},{'title':'Kollegah%20-%20Warnsch%C3%BCsse','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DysHtQH02ge0'},{'title':'Kollegah%20-%20%C3%9Cberfall','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOTBbuH22mgg%26index%3D14%26list%3DPL9E66C3FFA14AD199'},{'title':'Kollegah%20-%20%C3%9Cberfall%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DljxX3zkAXO0%26list%3DPL9E66C3FFA14AD199%26index%3D26'},{'title':'Kollegah%20Pushergene','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvkcCaLKWVro'},{'title':'Kollegah%20feat.%20Favorite%20-%20Selfmade%20Endbosse','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7V7gcEj6_lQ'},{'title':'Kool%20Savas%20%26%20Azad%20-%20Monstershit','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8yH2MiDnTno'},{'title':'Kool%20Savas%20-%20Brainwash%20feat.%20KAAS%20%26%20Sizzlac','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DE72OobR2VeE'},{'title':'Kool%20Savas%20-%20Das%20Urteil','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfLll2lD4iE4'},{'title':'Kool%20Savas%20-%20Hotel%20(ft.%20Eko%20Fresh%20%26%20Valezka)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4jAwGCDcdyc'},{'title':'Kool%20Savas%20-%20Immer%20wenn%20ich%20rhyme%20feat.%20Olli%20Banjo%2C%20Azad%20%26%20Moe%20Mitchell','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAV-_fgwMnb8'},{'title':'Kool%20Savas%20-%20King%20of%20Rap','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZycuVFdCsjQ'},{'title':'Kool%20Savas%20-%20Krone%20feat.%20Franky%20Kubrick%2C%20Moe%20Mitchell%20%26%20Amaris','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy9iYqpdUoM0'},{'title':'Kool%20Savas%20-%20Matrix','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOx3pDfJ37No'},{'title':'Kool%20Savas%20-%20M%C3%A4rtyrer','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAVOjenmD9jU'},{'title':'Kool%20Savas%20-%20Pimplegion%C3%A4r','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8T8InPGt9WA'},{'title':'Kool%20Savas%20-%20Wieso%3F','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTT4UomqHvuA'},{'title':'Kool%20Savas%20feat%20Eko%20Fresh%20-Noch%20lange%20nicht%20Dre','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DljJAXJcUCLk'},{'title':'Krept%20%26%20Konan%20-%20Freak%20Of%20The%20Week','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DewGY9Umxj5g'},{'title':'Kurdo%20-%20ABU%20DHABI%20LIFESTYLE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBKiYS3wJvVM'},{'title':'Kurdo%20-%20Meine%20Welt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dm1U99y5OIsY'},{'title':'Kurdo%20-%20Nike%20Kappe%20umgekehrt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8E48VSegL54'},{'title':'Kwabs%20-%20Walk','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTW9uj83Vq-0'},{'title':'LGoony%20-%20Lobby%20(feat.%20Young%20Kira)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrVf5a8KR4oc'},{'title':'LL%20Cool%20J%20%26%20Total%3A%20Loungin%27','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJodY-LQJ_rQ'},{'title':'LL%20Cool%20J%20-%20Doin%27%20It','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPFjYNJiOXtA'},{'title':'LL%20Cool%20J%20-%20Phenomenon','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSQsd7y5YbZw'},{'title':'LL%20Cool%20J%2CDMX%2CRedman%2CMethodman-4-3-2-1','url':'http%3A%2F%2Fwww.dailymotion.com%2Fvideo%2Fx1slvn_ll-cool-j-dmx-redman-methodman-4-3_music'},{'title':'LX%20%26%20Maxwell%20feat.%20Gzuz%20-%20HaifischNikez','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-AJoJ-ggiKI'},{'title':'La%20Fouine%20-%20la%20f%C3%AAte%20des%20m%C3%A8res','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVIVekJTrKMo'},{'title':'Lacrim%20-%20Brasse%20au%20max','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DivBZxGlSyOY'},{'title':'Lacrim%20-%20Sablier','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIm9ReKhoN4o'},{'title':'Lil%20Wayne%20-%20A%20Milli%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DO8Uhn-dU3Gg'},{'title':'Lil%20Wayne%20-%20Mr.%20Carter%20(Featuring%20Jay-Z)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3Yt2DKs5JNE'},{'title':'Lil%20Wayne%20-%20Where%20Ya%20At','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DI69ofMHrDb0'},{'title':'Logic%20-%20Ballin%20(ft%20Castro)%20(Prod%20by%20Arthur%20McArthur)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWTP1Q6B2mz8'},{'title':'Ludacris%20Feat%20Nate%20Dogg%20-%20Area%20Code%20-%20Tribute%3F%3F','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DK3jy4um8y78'},{'title':'Lunatic%20-%20La%20lettre','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9crNSLZfYuU'},{'title':'Luniz%20-%20I%20got%205%20on%20it','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHSC9cgvtkRs'},{'title':'MACKLEMORE%20%26%20RYAN%20LEWIS%20-%20THRIFT%20SHOP%20FEAT.%20WANZ','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQK8mJJJvaes'},{'title':'MOR-%20Bei%20Mir','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNtQySZIBceE'},{'title':'MachOne%20-%20NVDW','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkEHntTg4ZS0'},{'title':'Maestro%20Harrell%20-%20Olympus%20(Gaius%20Trap%20Edit','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxU9xyNg8SMs%26index%3D19'},{'title':'Manuellsen%20-%20Intro%20%2F%20Ger%C3%BCchte%202.0','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DysIC3xbI7RQ'},{'title':'Marco%20Polo%20feat.%20Masta%20Ace%20-%20Nostalgia','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPPZ2-FVcM3M'},{'title':'Max%20Herre%20-%20Rap%20Ist%20(Extended)%20feat.%20MoTrip%2C%20Afrob%2C%20Samy%20Deluxe%20%26%20Megaloh','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYXiEGUJKNrQ'},{'title':'Mc%20Eiht%20-%20Straight%20Up%20Menace%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1-pLVRQ1xkU'},{'title':'Method%20Man%20%26%20Red%20Man%20-%20Rite','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiHWqI55KvwE'},{'title':'Method%20Man%20-%20Uh%20Huh','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLJFe9pP7_go'},{'title':'Method%20Man%20and%20Redman%20-%20How%20High%20Part%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DC3h1ahpxeB0'},{'title':'Mike%20Jones%20Feat.%20Slim%20Thug%20%26%20Paul%20Wall%20-%20Still%20Tippin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWYTBsN-KeNE'},{'title':'MoTrip%20-%20Mathematik','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dci2TnSI6TiY'},{'title':'Money%20Boy%20%26%20Young%20Kira%20-%20Work','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxIt0tjo3LKs'},{'title':'Mos%20Def%20-%20Im%20Leaving','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlMTZa82UVqE'},{'title':'N.O.R.E%20-%20R.E.A.L%20(Starring%20Styles%20P)%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfF8dpCzUtaE'},{'title':'N.O.R.E%20-%20Scared%20Money%20ft.%20Pusha%20T%20%26%20Meek%20Mill','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiyTOZ2mS0sQ'},{'title':'N.W.A.%20-%20chin%20check','url':'http%3A%2F%2Fwww.dailymotion.com%2Fvideo%2Fx70cfc_n-w-a-chin-check_music'},{'title':'NATE57%20-%20BLAULICHT','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1dIDNyFdRkk'},{'title':'NATE57%20-%20FICK%20DIE%20WELT','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZAvs-92vAiI'},{'title':'NATE57%20-%20WAFFENFREIEZONE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkufK98jYBDk'},{'title':'NAZAR%20-%20ABRAKADABRA','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkqlSVz_0D40'},{'title':'NAZAR%20HALT%20DIE%20FRESSE%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCL7qOyyUcG8'},{'title':'NAZAR%20feat.%20FALCO%20-%20Zwischen%20Zeit%20%26%20Raum','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5OiNv9z8V6o'},{'title':'Nadia%20Ali%20-%20Triangle%20(Myon%20%26%20Shane%2054%20Dub)%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKOwuvJuLi30'},{'title':'Narco%20Theme%20Song%20ft%20Rodrigo%20Amarante','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTfP1isJ1sxw'},{'title':'Nas%20-%20Nas%20Is%20Like','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVC4ORS5n9Hg'},{'title':'Nate%20Dogg%2CMissy%20Elliott%2CXzibit%2CLil%20Mo%2CKnocturnal%20-%20Keep%20it','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpFtRq0tbA6A'},{'title':'Nate57%20-%20Mit%20der%20Basy','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8wEASlI8H3g'},{'title':'Nate57%20-%20Nie%20Stille','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWsZt8vTJbCA'},{'title':'Naughty%20By%20Nature%20-%20Hip%20Hop%20Hooray%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqA2_-eQ26tY'},{'title':'Nazar%20-%20Simsalabim','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dwcw2P5iL3BU'},{'title':'Nelly%20-%20Ride%20Wit%20Me%20ft.%20St.%20Lunatics','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRtSDWq6HsJE'},{'title':'Night%20Lovell%20-%20Still%20Cold%20%2F%20Pathway%20Private','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwIJWIEWRK_I'},{'title':'Nimo%20-%20Ausnahme%20OCB%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlL2XJkKvfUM'},{'title':'Nimo%20-%20ID%C3%89AL%20(prod.%20von%20SOTT)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF_PPdS-PB14'},{'title':'Niska%20-%20Fly%20Emirates','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSg6KiZ40ksA'},{'title':'Niska%20-%20Ma%C3%AEtre%20Chien','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMFOCHBOQlsI'},{'title':'Niska%20Feat.%20La%20B%20%26%20Trafiquint%C3%A9%20-%20Freestyle%20PSG','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp-Ylj6ZUmtE'},{'title':'Non%20Phixion%20ft.%20DJ%20Premier%20-%20Rock%20Stars%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUc2xESpxO2s'},{'title':'Notorious%20B.I.G.%20-%20Juicy','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DR677vZLimPQ'},{'title':'Notorious%20B.I.G.%20ft.%20Method%20Man%20-%20The%20What%20(Phoniks%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dhuz14h_ueik'},{'title':'O.C.%20-%20My%20World%20(prod.%20by%20DJ%20Premier)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2lkHFWkM53s'},{'title':'OVERWERK%20-%20Control%20ft.%20Nick%20Nikon','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJux8iFM0Bew'},{'title':'Olexesh%20-%20BLOCK%2013%20(ft.%20Aslan)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmlVc5E_lvzg'},{'title':'Olexesh%20-%20DEJA%20VU','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9RTZB7bFg0o'},{'title':'Olexesh%20-%20HALT%20DEN%20BALL%20FLACH','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dc9w80WcVlAI'},{'title':'Olexesh%20-%20HALT%20DIE%20FRESSE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCb1Mgx7O1k0'},{'title':'Olexesh%20-%20HIGH','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFafV71xcY8w'},{'title':'Olexesh%20-%20HOKUS%20POKUS%20feat.%20Abdi','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dh3PY5huMoo8'},{'title':'Olexesh%20-%20MEINE%20STADT','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDWKffcret1E'},{'title':'Olexesh%20-%20MIAMI%20VICE%20STYLE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7ilL9BZLH6w'},{'title':'Olexesh%20-%20MONEY%20MONEY%20MONEY','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D20nCYMA6cBk'},{'title':'Olexesh%20-%20SAG%20MIR%20AUF%20WAS%20STEHST%20DU%3F%3F','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhqtAoVM8Rfk'},{'title':'Olexesh%20-%20SPOTLIGHT','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPiNOPigYmsk'},{'title':'Olexesh%20-%20TREFFPUNKT%20METROPOL','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8Qm0nL7PUKE'},{'title':'Olexesh%20-%20VORSTADT%20S%C3%9CD%20(ft.%20Azro)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdEGvhwZncFE'},{'title':'Olexesh%20-%20WAS%20F%C3%9CR%20BROOKLYN%3F%3F','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dzy3YJNfz-CY'},{'title':'Onyx%20-%20Slam','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7ADgCeYJMN4'},{'title':'Orgi69%20%26%20Blokkmonsta%20-%20120%20Tage%20von%20Berlin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN54DO3OLqWw'},{'title':'Orgi69%20%26%20Smoke%20M%20-%20Crystal%20und%20Crackpipes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1rlJtZJ1fxo'},{'title':'Orgi69%20-%20Battle%20dies%20und%20Das','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdNqfGpn3P4g'},{'title':'Orgi69%20-%20Bauchtanzparty','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvemUI3eBTRo'},{'title':'Orgi69%20-%20Bon%20Voyage','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnjeAX2YNLrg'},{'title':'Orgi69%20-%20Das%20Regt%20mich%20auf','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_wGATvs7iQw'},{'title':'Orgi69%20-%20Dr.%20Porno%20und%20seine%20Untergrundmedizin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Df7AY3_xiRgU'},{'title':'Orgi69%20-%20Du%20nichts%20ich%20Mann','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoNWxxmTRzGg'},{'title':'Orgi69%20-%20Es%20ist%20Sommer','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLa86je5lWFw'},{'title':'Orgi69%20-%20Es%20ist%20vorbei','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dwcmlo3sSBgY'},{'title':'Orgi69%20-%20Fick%20Die%20Ex%20II','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dr3ynkEuicAo'},{'title':'Orgi69%20-%20Fick%20mich%20colabro','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGJM4QOrOUwY'},{'title':'Orgi69%20-%20Fick%20mich%20und%20halt%20dien%20maul','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZi7ZoesFmk8'},{'title':'Orgi69%20-%20Gl%C3%BCckspilz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEd_D9dcevdw'},{'title':'Orgi69%20-%20H%C3%BChnerflash%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvFtVmcbroEg'},{'title':'Orgi69%20-%20Ich%20liebe%20deine%20Muttah%20ft.%20Blokkmonsta%20und%20Schwartz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF5U12FT7mr0'},{'title':'Orgi69%20-%20Ich%20und%20meine%20Weihnachtsatzen','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4IRii5xjaNs'},{'title':'Orgi69%20-%20Komm%20und%20tanz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2xOg7xkkpUI'},{'title':'Orgi69%20-%20Lasst%20uns%20Chillen%20Schlampen%20Feat.%20Rhymin%20Simon','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dwl9OT3hZBVQ'},{'title':'Orgi69%20-%20Liebe%20ist%20sch%C3%B6n','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUI3Ohidmb88'},{'title':'Orgi69%20-%20M.I.L.F%20(AMOK)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deybr7PduC9U'},{'title':'Orgi69%20-%20MOTHERS%20I%20LIKE%20TO','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D12p3UFz-tEM'},{'title':'Orgi69%20-%20Mein%20Kampf','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyBUHnBEaAKM'},{'title':'Orgi69%20-%20Mein%20Schmerz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DndAvNS_0ElY'},{'title':'Orgi69%20-%20Mein%20gold%20feat%20vero','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DS7-DM_LWdio'},{'title':'Orgi69%20-%20Myra%20Sophie','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dn0gl2P8oJOA'},{'title':'Orgi69%20-%20Naiv','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHjVoNUxb9TU'},{'title':'Orgi69%20-%20Oldschool','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSEJKIJzULlY'},{'title':'Orgi69%20-%20Rattatta%20Peng%20(feat.%20Farid%20Bang%20%26%20Bass%20Sultan%20Hengzt)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgNhUxqcrLc0'},{'title':'Orgi69%20-%20Sexk%C3%B6nig','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq33z5W5uk1k'},{'title':'Orgi69%20-%20Sexurlaub','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhBaEJ6bbggo'},{'title':'Orgi69%20-%20Trennung','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt5iPw_LIGGc'},{'title':'Orgi69%20-%20Wir%20Klatschen','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyEQQIg8wFWQ'},{'title':'Orgi69%20feat.%20BC%20Allstars','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZBqw2UDDWJY'},{'title':'Orgi69%20feat.%20GPC%20-%20Piss%20Orgien','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deq2tHznIQbc'},{'title':'Orgi69%20feat.%20Zahni%20-%20Mein%20Schmerz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DL9rFv_7NZDo'},{'title':'Orgi69%2C%20Frauenarzt%20-%20skrupellos%20und%20stark%20verwahrlost','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnEjf90oSOYA'},{'title':'Ost%20Kollegah%20Billionaire%27s%20Club%20(feat.%20SunDiego)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPe6uHX4pbj0%26index%3D14%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Bossaura','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8MbMWTLICI8%26index%3D9%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Business%20Paris%20(feat.%20Ol%20Kainry)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6NIFmkwv87o%26index%3D16%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Das%20Licht','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7WiMVaFwrQo%26index%3D4%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Drugs%20in%20den%20Jeans','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNQX7_OOgQV8%26index%3D19%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Entertainment','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNgDfacjuIFM%26index%3D2%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Flex%2C%20Sluts%2C%20Rock%20%27n%20Roll','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dem4ezHE3VFM%26list%3DPL6C518668F229D006%26index%3D11'},{'title':'Ost%20Kollegah%20F%C3%BCr%20Immer','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnHnQwJjM2wc%26index%3D20%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20H%20%26%20F','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyypflLi8E68%26index%3D5%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Internationaler%20Player%20Reloaded','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWWTrReT1hNc%26index%3D3%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Jetlag','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKS3RpVE2slI%26index%3D17%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Kobrakopf%20(feat.%20Farid%20Bang%20%26%20Haftbefehl)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmxxpM6vfGpE%26list%3DPL6C518668F229D006%26index%3D12'},{'title':'Ost%20Kollegah%20Mondfinsternis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPEZecj36GTw%26list%3DPL6C518668F229D006%26index%3D15'},{'title':'Ost%20Kollegah%20Money','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBbZ6nD4SCV8%26index%3D6%26list%3DPL6C518668F229D006'},{'title':'Ost%20Kollegah%20Undercover','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIxkzkkrTxuk%26index%3D7%26list%3DPL6C518668F229D006'},{'title':'P.%20Diddy%20-%20Bad%20Boys%20For%20Life','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3Yd4GG3bed0'},{'title':'PLUSMACHER%20-%20BRUSTHAARE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlSIme7sYo6M'},{'title':'PLUSMACHER%20-%20ERNTE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdDfRq1eQ9KA'},{'title':'PLUSMACHER%20-%20Lachen','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiKJ3quO8QRc'},{'title':'PLUSMACHER%20-%20Sterolife','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0lNnlBA68ow'},{'title':'PLUSMACHER%20-%20TASCHENRECHNER','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2yl-Xqgb7c8'},{'title':'PSO%20Thug%20-%20Finition','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3De_mQomnT0hs'},{'title':'PTK%20-%20ANTI%20TURISTA','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Du9XYCHWVmGM'},{'title':'PTK%20-%20ANTI%20TURISTA%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNFQd1h4RlIE'},{'title':'PTK%20-%20Deutscher%20als%20du%20glaubst','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRe2dddKyA8k'},{'title':'PTK%20-%20Eine%20Runde%20%2F%20Ghettomodus%202.0','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_gslC9mOOrU'},{'title':'PTK%20-%20Ghettomodus%203.0','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKp_mfg4pHXc'},{'title':'PTK%203.6.1%20-%20Ghettomodus','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCRe0_JXtUsI'},{'title':'Panz%20Dominanz%20-%20Bunkerhunde%20(feat.%20Justus%20Jonas)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3CB6ZNdn9Zg'},{'title':'Pedaz%20%26%20Blut%26Kasse%20-%20100%25%20Macher','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQPe2vddzFDo'},{'title':'Pedaz%20und%20Blut%20%26%20Kasse%20-%20Tr%C3%A4um%20weiter','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DravL-PGlIU4'},{'title':'Pedaz%20und%20Blut%20%26%20Kasse%20-%20Urlaub%20woanders%20(feat.%20Macloud)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DItdqi1NPJ4A'},{'title':'Phlex%20-%20Light%20Me%20Up%20(feat.%20Caitlin%20Gare)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhKitZEncwro'},{'title':'Porno%20Mafia%20-%20Komm%20Nutte%20Komm','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDmfQqAyZVdY'},{'title':'Porno%20Mafia%20-%20Kopf%20runter%20Arsch%20hoch','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6JPJLqCCnLI'},{'title':'Porno%20Mafia%20-%20Lange%20N%C3%A4chte','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFQoPRwGiwI4'},{'title':'Porno%20Mafia%20-%20Pornoduo','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DytA16duTrxo'},{'title':'Porno%20Mafia%20-%20Pump%20den%20Bass','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZQT7sdopzoE'},{'title':'Porno%20Mafia%20-%20Sado%20Maso','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_PWTwZKDsvA'},{'title':'Prodigy%20Ft.%20Sheek%20Louch%2C%20Styles%20P%2C%20Havoc%20%26%20Jadakiss%20-%20All%20A%20Dream','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DctzAjZkdpl0'},{'title':'RZA%20-%20We%20Pop%20Remix%20ft.%20E-40%20%26%20Method%20Man%20%26%20Crooked%20I%20%26%20Jayo%20Felony%20%26%20WC','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvcFH8O0bpGc'},{'title':'Rakim%20-%20Guess%20Who%27s%20Back','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6nXdbB_tvNk'},{'title':'Rakim%20-%20When%20I%20B%20On%20Tha%20Mic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM34OelgSlKI'},{'title':'Ras%20Kass%20-%20Golden%20Child%20(prod.%20by%20DJ%20Premier)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpRc2P9ayFcs'},{'title':'Regulators%20x%20SaneBeats%20-%20Tipping%20Point','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do4-KVktBozs'},{'title':'Rim%27K%20-%20Parloir%20Fant%C3%B4me%20(feat.%20Sefyu)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFrJwitJZsho'},{'title':'Rocko%20-%20U.O.E.N.O.%20Ft.%20Future%2C%20Rick%20Ross%2C%20A%24AP%20Rocky%2C%20Wiz%20Khalifa%20%26%202%20Chainz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQ7GX9PRvf_M'},{'title':'Ruff%20Endz%20-%20No%20More','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIl23MW9Alnc'},{'title':'Ruhrpott%20AG%20(RAG)%20-%20KopfSteinPflaster%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCHZ0lASOEls'},{'title':'SCNDL%20-%20The%20Munsta','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DShHMCG9lXr0'},{'title':'SIDO%20-%20SCHLECHTES%20VORBILD','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9jjvlT78pU4'},{'title':'SIDO%20feat.%20Dillon%20Cooper%20-%20Ackan','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTXBPBatJlPo'},{'title':'SIDO%20ft.%20Haftbefehl%20-%202010','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBI2F1sLts40'},{'title':'SILLA%20-%20100%20Killa%20Bars','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dl8ZTQsgbzBQ'},{'title':'SSIO%20-%20Alles%20Routine','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJNuQxBi38LI'},{'title':'SSIO%20-%20B(e)reit%3F','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNaW5wtkruUA'},{'title':'SSIO%20-%20Nullkommaneun','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSlei8n08Cqk'},{'title':'SSIO%20-%20Nutt%C3%B6%C3%B6%C3%B6','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUdcYjlESrow'},{'title':'SSIO%20-%20SIM-Karte','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWubC91-Wv9Q'},{'title':'SSIO%20-%20Unbekannter%20Titel','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeO5U9qb2M9A'},{'title':'SSIO%20-%20Vorspiel','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZwUxGH3IoJU'},{'title':'Said%20-%20So%20einfach','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5g2FrXbd5uM'},{'title':'Samy%20Deluxe%20feat.%20Mr.%20Schnabel%20-%20Eimsbush%20Stylee','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqaIosBgAoys'},{'title':'San%20Holo%20-%20Hiding%20(ft.%20The%20Nicholas)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DI1spDIsGEOs'},{'title':'Sefyu%20-%205%20minutes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAUGGctaA2T0'},{'title':'Shindy%20-%20Alkoholisierte%20P%C3%A4dophile','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBoEVhdAYXEs'},{'title':'Showtek%20-%20We%20Like%20To%20Party','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQLoUH6LN9lk'},{'title':'Showtek%20-%20We%20Like%20To%20Party%20(Slander%20%26%20NGHTMRE%20Festival%20Trap%20Edit)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvCHivjWsSr0'},{'title':'Sido%20-%2030-11-80','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dj1z_gb7ngLQ'},{'title':'Sido%20-%20Frohe%20Weinachten','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYVQVOw2tYKs'},{'title':'Skrillex%20and%20Diplo%20-%20Where%20Are%20%C3%9C%20Now','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNL7HA4gkbvM'},{'title':'Skyper%20-%20The%20Flight','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dx0F7xfeRKtY%26index%3D76'},{'title':'Sniper%20Feat%20Sexion%20d%27assaut%20-%20Blood%20Diamondz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEzvFZgb64zI'},{'title':'Snoop%20%26%20Dr.%20Dre%20%26%20Nate%20Dogg%20%3A%20Lay%20low%20(2007)','url':'http%3A%2F%2Fwww.dailymotion.com%2Fvideo%2Fxhn413_snoop-dr-dre-nate-dogg-lay-low-2007_music'},{'title':'Snoop%20Dogg%20-%20Gin%20%26%20Juice','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDI3yXg-sX5c'},{'title':'Snoop%20Dogg%20-%20Vato%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUXWFqxKU2qA'},{'title':'Snoop%20Dogg%20-%20Whats%20my%20Name','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-hIjgofcuWU'},{'title':'Snoop%20Dogg%20f.%20Wiz%20Khalifa%20-%20That%20Good','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWJq2drq17Q8'},{'title':'South%20Central%20Cartel%20%26%202Pac%20-%20Gangsta%20Life','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEFpm31_YvUc'},{'title':'South%20Central%20Cartel%20-%20Papa%20Was%20a%20Rolling%20Stone','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvmZ7rgWiQog'},{'title':'South%20Central%20Cartel%20-%20Ya%20Getz%20Clowned','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dqge3SfHzmvk'},{'title':'Spice%201%20-%20Ain%27t%20No%20Love%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX92XXPYGVo4'},{'title':'Spice%201%20-%20Face%20Of%20A%20Desperate%20Man','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNoNuQoxb7g8'},{'title':'Spice%201%20-%20Trigga%20Gots%20No%20Heart','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp2U-KXDTt9o'},{'title':'Spice%201%20-%20Welcome%20To%20The%20Ghetto%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DS8K31tTV554'},{'title':'Stieber%20Twins%20-%20Samy%20Deluxe%20-%20Maximilian%20-%20Malaria','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBErkbkvjQLE'},{'title':'Summer%20Cem%20-%20Seid%20ihr%20mit%20mir','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGJjt_XlSi7w'},{'title':'Summer%20Cem%20-%20Tam%20Korrekt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCsK5-vR7KaU'},{'title':'Summer%20Cem%20-%20Wolke%207','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRKY8JVahoj0'},{'title':'Summer%20Cem%20feat.%20MoTrip%20-%20Immer%20noch%20hier','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9yKBQIPtxsw'},{'title':'TAKTLOSS%20%26%20ABSTRACT%20RUDE%20%26%20JUSTUS%20%26%20Z%20-%20BEATZ%20ILL','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUeDVxXSymDI'},{'title':'TAKTLOSS%20%26%20JACK%20ORSEN%20-%20BOOYAKA','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuIjpKQjQHb4'},{'title':'TAKTLOSS%20%26%20JACK%20ORSEN%20-%20Direkt%20aus%20dem%20Knast','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDd8WIHUiRcU'},{'title':'TAKTLOSS%20%26%20JUSTUS%20-%20TEUFELSKREIS%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwBjEJDJXoZ0'},{'title':'TAKTLOSS%20%26%20JUSTUS%20-%20VERNICHTEND%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzGFCyIhI0bw'},{'title':'TAKTLOSS%20%26%20MC%20BASSTARD%20-%20HORRORCLOWNS','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do88A5rKkXsQ'},{'title':'TAKTLOSS%20-%20Ich%20gebe%20mein%20wissen%20weita','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7SqlnUVsb2A'},{'title':'TAKTLOSS%20-%20WELTREKORD%2F%20IMMER%20WIE%20DER','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrLLdAopMsTc'},{'title':'TAKTLOSS%20-%20WER%20IST','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlcaeRgStIPs'},{'title':'TeamSpeak%203%20Remix%20%7C%20Yachostry%20%26%20Skyper%20-%20Hey!%20Wake%20Up!','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5a8OChnGVOk%26index%3D77'},{'title':'Tha%20Trickaz%20-%20Robbery%20Song%20(Trinix%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2-LBkQef7yc%26index%3D26'},{'title':'The%20Fugees-%20Ooh%20La%20La%20La','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqKPz79iuZ7Y'},{'title':'The%20Game%20-%20Ali%20Bomaye%20ft.%202%20Chainz%2C%20Rick%20Ross','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeU4ZvfkmOck'},{'title':'The%20Game%20ft%20Drake%20-%20100%20MUSIC%20VIDEO%20HD','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9khcU9FdgJk'},{'title':'The%20LOX%20-%20Money%2C%20Power%2C%20Respect%20(feat.%20Lil%20Kim%20%26%20DMX)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCuBvSE_CGKw'},{'title':'The%20Notorious%20B.I.G.%20-%20Big%20Poppa%20(Phoniks%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUnwfruCudmM'},{'title':'The%20Notorious%20B.I.G.%20-%20Everyday%20Struggle%20(L%27Ind%C3%A9cis%20Remix)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcE36pyqkRbU'},{'title':'The%20Weeknd%20-%20Acquainted%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwkqsFQOOOQE'},{'title':'The%20Weeknd%20-%20Earned%20It','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwaU75jdUnYw%26index%3D70'},{'title':'The%20Weeknd%20-%20Low%20Life%20ft%20Future%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dk6m4wblXiis'},{'title':'The%20Weeknd%20-%20The%20Hills','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyzTuBuRdAyA'},{'title':'Tilos%20-%20M%C3%BCnchner%20Respekt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D76I20Oqc5oI'},{'title':'Timeflies%20-%20We%20Found%20Love','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwBYvgpRyFmU'},{'title':'Timeflies%20Tuesday%3A%20Alcohol','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DD7NOaZ9xDco'},{'title':'Toni%20C.%20-%20Comeback','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuSBROBgabXA'},{'title':'Too%20Short%20-%20The%20Ghetto%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQKgsuGurM4I'},{'title':'Tupac%20-%20How%20Do%20You%20Want%20The%20Sunlight%20%5BEngelwood%20Mashup%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dk5l7SCM6AWg'},{'title':'Tyga%20-%20Switch%20Lanes%20feat.%20The%20Game','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDdCH6q5cNTk'},{'title':'Ummet%20Ozcan%20-%20Raise%20Your%20Hands','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dgc0SJozzt9U'},{'title':'VEGA%20-%20K%C3%96NIG%20OHNE%20KRONE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLoeEGxNREEY'},{'title':'VINAI%20-%20Legend','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoPVTuCt2NF0'},{'title':'Vega%20%26%20Bosca%20-%20AntiCops','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGv0Fx3t7NUA'},{'title':'Vega%20-%20Schwere%20Zeit%20feat.%20Olson%20Rough','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3r0UQzb7y1w'},{'title':'Vega%20-%20Winter%20Johnny%20Pepp%20Remix','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsSFKWV02zKQ'},{'title':'Vybz%20Kartel%20-%20Fast%20Life','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJmgj-J-7G_s'},{'title':'Waka%20Flocka%20-%20For%20My%20Dawgs%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRPmIn0iD_mA'},{'title':'Waka%20Flocka%20-%20Luv%20Dem%20Gun%20Sounds','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnkfU-ozCNco'},{'title':'Waka%20Flocka%20-%20Real%20Quick%20(0%20to%20100)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKwLvKRTpLX4'},{'title':'Westside%20Connection%20-%20Just%20Clownin%27','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSyGy_rp820s'},{'title':'Westside%20connection%20-%20gangsta%20nation','url':'http%3A%2F%2Fwww.dailymotion.com%2Fvideo%2Fx9cdj_westside-connection-gangsta-nation_news'},{'title':'Wiz%20Khalifa%20-%20No%20Sleep','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKuVAeTHqijk'},{'title':'Wiz%20Khalifa%20-%20We%20Dem%20Boyz%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvKzwbsI7ISQ'},{'title':'Wiz%20Khalifa%20-%20Work%20Hard%20Play%20Hard','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dv_x2FIpI40k'},{'title':'Wiz%20khalifa%20ft.%20Snoop%20Lion%20-%20French%20Inhale','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP6Sei28qapU'},{'title':'XATAR%20-%20INTERPOL.COM','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjIzHhNglQP8'},{'title':'XATAR%20-%20IZ%20DA','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D60pc_H4GlJ4'},{'title':'XATAR%20-%20ORIGINAL','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0EypHT72_yA'},{'title':'XATAR%20feat.%20Nate57%20-%20Meine%20Welt','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMhJFL9QACYQ'},{'title':'Xzibit%20-%20Get%20Your%20Walk%20On','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMNXpQQGbadE'},{'title':'Xzibit%20-%20alkoholik','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dvxny_7fycbk'},{'title':'Young%20Kira%20%26%20LEROY%20-%20DEJA%20VU%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmbrTQG4HodE'},{'title':'Young%20Thug%20-%20OD','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXQaEJ9pO6II'},{'title':'Young%20Thug%20-%20Power','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_-QxSh19nDI'},{'title':'Young%20Thug%20-%20Some%20More','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkaMoFbvep3E'},{'title':'Yung%20Lean%20-%20Ghosttown%20(feat.%20Travis%20Scott)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoC-LjcnSuTE'},{'title':'%5BAlbum%5D%20213%20-%20The%20Hard%20Way','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF6AmqxSQ07Q'},{'title':'%5BAlbum%5D%202Pac-%20All%20Eyez%20On%20Me','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7gXWTvRhmFY'},{'title':'%5BAlbum%5D%202pac%20-%20The%20Don%20Killuminati','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJS09U73gib4'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%205%20Murders%20by%20Numbers%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Days85jmwS9E'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%20Brain%20Splattered%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DL-mI1-27y2E'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%20Forever%20King%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DI4DXY_Wyoms'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%20Guess%20Whos%20Back%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5pHx7I1T8tQ'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%20The%20Kanan%20Tape%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dw71wmUzEl68'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%20The%20Lost%20Tape%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0k7b_oOUM60'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%20The%20Return%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmBXyMYBYty4'},{'title':'%5BAlbum%5D%2050%20Cent%20%E2%80%93%20War%20Angel%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D15-dg-1IRU0'},{'title':'%5BAlbum%5D%20ABN%20(Asshole%20By%20Nature)%20It%20Is%20What%20It%20Is','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5udZd0i-VgM'},{'title':'%5BAlbum%5D%20Above%20The%20Law%20Livin%27%20Like%20Hustlers','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DK4Pts9IM0NQ'},{'title':'%5BAlbum%5D%20Afu-Ra%20-%20Body%20of%20the%20Life%20Force','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeZHop4jupB0'},{'title':'%5BAlbum%5D%20Apathy%20%E2%80%93%20Connecticut%20Casual%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPVS-q2oNL6c'},{'title':'%5BAlbum%5D%20Artifacts%20-%20Between%20A%20Rock%20And%20A%20Hard%20Place','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeLjXHrjV924'},{'title':'%5BAlbum%5D%20AzudemSK%20-%20Classic%20EP%20Prelude','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUzzoQlsiF2k'},{'title':'%5BAlbum%5D%20B-Real%20-%20The%20Prescription','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSxKqjImAqHY'},{'title':'%5BAlbum%5D%20B-Real%20x%20Dr%20Greenthumb%20-%20The%20Prescription%20(Full%202015%20Mixtape)%20Ft%20Snoop%20Dogg%2C%20A%24AP%20Ferg%2C%20Demrick','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiZbHVN7yZ9s'},{'title':'%5BAlbum%5D%20BIG%20L%20-%20Children%20of%20the%20Corn%20-%20Bootleg%20Vinyl%20EP','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCH_B5S6zxJU'},{'title':'%5BAlbum%5D%20BIG%20L%20-%20Corleone','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfLBoIGbNHBk'},{'title':'%5BAlbum%5D%20BIG%20L%20-%20Harlem%27s%20finest%20vol%201%20%26%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfPiUrrRO3Ng'},{'title':'%5BAlbum%5D%20BIG%20L%20-%20THE%20BIG%20PICTURE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJeDeuFZlTAo'},{'title':'%5BAlbum%5D%20BIG%20L%20-%20The%20best%20of%20the%20rest','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dls63elvj6sA'},{'title':'%5BAlbum%5D%20BIG%20L%20-139%20%26%20Lenox','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5kP-o76dzEI'},{'title':'%5BAlbum%5D%20BIG%20L%20-Return%20of%20The%20Devils','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNEk5HnFR77Y'},{'title':'%5BAlbum%5D%20Babas%20Barbies%20Bargeld%20-%20Summer%20Cem','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOtkAiyIT_hM'},{'title':'%5BAlbum%5D%20Berner%20%26%20B-Real%20-%20Prohibition','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DB_i2bwTaanM'},{'title':'%5BAlbum%5D%20Best%20of%20Gramatik','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do4_1hS1aIC8'},{'title':'%5BAlbum%5D%20Big%20Ed%20-%20The%20Assassin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNJyiXKer1DM'},{'title':'%5BAlbum%5D%20Binary%20Star%20-%20Masters%20of%20The%20Universe','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di_lryQvImwk'},{'title':'%5BAlbum%5D%20Birdman%20x%20Rick%20Ross-%20The%20H','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1cP9i-Q1PPc'},{'title':'%5BAlbum%5D%20Blac%20Monks%20-%20Secrets%20of%20the%20Hidden%20Temple','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do-mo5WIfG9Q'},{'title':'%5BAlbum%5D%20Black%20Moon%20-%20Enta%20Da%20Stage','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcUbfSHKp9Os'},{'title':'%5BAlbum%5D%20Black%20Moon%20-%20Enta%20Da%20Stage','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcUbfSHKp9Os'},{'title':'%5BAlbum%5D%20Bone%20Thugs%20-%20E.1999%20Eternal','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dk43N05HXvH0'},{'title':'%5BAlbum%5D%20Brother%20Ali%20-%20Shadows%20On%20The%20Sun','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9nukLWQ9GBs%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D3'},{'title':'%5BAlbum%5D%20Bushido%20-%20Demotape%20%2799','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-uevQC6FDEo'},{'title':'%5BAlbum%5D%20Bushido%20-%20Electro%20Ghetto','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DREGY924Wf7U'},{'title':'%5BAlbum%5D%20Bushido%20-%20King%20of%20Kingz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxfduaJGA-P8'},{'title':'%5BAlbum%5D%20Bushido%20-%20Sonny%20Black','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dl-vNH45yb1Q'},{'title':'%5BAlbum%5D%20Bushido%20-%20Vom%20Bordstein%20zur%20Skyline','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DS8SuRkZhP48'},{'title':'%5BAlbum%5D%20Busta%20Rhymes%20-%20The%20Coming','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5hfdG69c0hU'},{'title':'%5BAlbum%5D%20Busta%20Rhymes%20When%20Disaster%20Strikes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DilujdpeWfDk'},{'title':'%5BAlbum%5D%20Cali%20Agents%20-%20How%20the%20West%20Was%20One','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da_Pz7TMwin8'},{'title':'%5BAlbum%5D%20Capone-N-Noreaga%20-%20The%20War%20Report','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-iIvm5qFYnU'},{'title':'%5BAlbum%5D%20Celph%20Titled%20%26%20Buckwild%20-%20Nineteen%20Ninety%20Now','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8fC3ZhL8Ldo'},{'title':'%5BAlbum%5D%20Clawfinger%20-%20Use%20Your%20Brain','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHt855V_DGnE'},{'title':'%5BAlbum%5D%20Cory%20Gunz%20-%20Datz%20WTF%20I%27m%20Talkin%20Bout','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0lZ7Tc6XTPg'},{'title':'%5BAlbum%5D%20Criminal%20Minded','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Df1OhaXQ0Tcc'},{'title':'%5BAlbum%5D%20CyHi%20The%20Prynce%20-%20Black%20Hystori%20Project','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmjT21Zfw1X8'},{'title':'%5BAlbum%5D%20D-BLOCK%20-%20NO%20SECURITY','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7AbyZlg-bO4'},{'title':'%5BAlbum%5D%20DMX%20-%20Flesh%20of%20My%20Flesh%2C%20Blood%20of%20My%20Blood%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnLHiRdW5xm8'},{'title':'%5BAlbum%5D%20DMX%20-%20UNDISPUTED','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlF2SsLI39yw'},{'title':'%5BAlbum%5D%20Das%20EFX%20-%20Dead%20serious','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-1_bbC4F0Ho'},{'title':'%5BAlbum%5D%20Das%20EFX%20-%20Generation%20EFX','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dqc19Av69_4I'},{'title':'%5BAlbum%5D%20Das%20EFX%20-%20Hold%20It%20Down%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPzIjhamDc4s'},{'title':'%5BAlbum%5D%20Das%20EFX%20-%20Straight%20Up%20Sewaside','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxkqdAqX28u0'},{'title':'%5BAlbum%5D%20Das%20EFX%20-%20The%20Best%20of%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIzFBEqTEvHs'},{'title':'%5BAlbum%5D%20Daz%20Dillinger%20-%20Retaliation%2C%20Revenge%20and%20Get%20Back','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFgoHfCVr9o0'},{'title':'%5BAlbum%5D%20Daz%20Dillinger%20-%20Retaliation%2C%20Revenge%20and%20Get%20Back','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFgoHfCVr9o0'},{'title':'%5BAlbum%5D%20De%20La%20Soul%20-%20Buhloone%20Mindstate','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjaJR5H7Y1ss'},{'title':'%5BAlbum%5D%20Defari%20-%20Focused%20Daily','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D72pdt9GDyUo'},{'title':'%5BAlbum%5D%20Deltron%203030%20-%20Deltron%203030','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dv6YJjkO7F5A'},{'title':'%5BAlbum%5D%20Deso%20Dogg%20-%20Alle%20Augen%20auf%20mich','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHHEdJvdbs0g'},{'title':'%5BAlbum%5D%20Digger%20Dance%20-%20The%20Diggest','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWtC3i3Edx_4%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D12'},{'title':'%5BAlbum%5D%20Dillon%20Cooper%20X%3AXX','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJgks6C35yuM'},{'title':'%5BAlbum%5D%20Dj%20Muggs%20vs%20Ill%20Bill%20-%20Kill%20Devil%20Hills','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dd35npekNhWo'},{'title':'%5BAlbum%5D%20Do%20Or%20Die%20-%20Picture%20This','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDKVI0G_6u-M'},{'title':'%5BAlbum%5D%20Dr.%20Dre%20-%20The%20Chronic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqfIx-w0ufAo'},{'title':'%5BAlbum%5D%20Drake%20-%20Comeback%20Season','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtNrDnohTkNg'},{'title':'%5BAlbum%5D%20Dresta%20%26%20B.G.%20Knocc%20Out-%20Real%20Brotha%27s','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWFwmPgPyKvs'},{'title':'%5BAlbum%5D%20Duck%20Down%20Presents...','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D57CGT_oGKbY'},{'title':'%5BAlbum%5D%20E-Dubble%20-%20hip%20hop%20is%20good','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRpTcIjrnyo0'},{'title':'%5BAlbum%5D%20EPMD%20-%20Strictly%20Business','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt0lIHyqyhDs'},{'title':'%5BAlbum%5D%20ERIC%20B.%20%26%20RAKIM%20-%20Follow%20The%20Leader','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dg5pjkQGAU-w'},{'title':'%5BAlbum%5D%20Eazy-E%20-%20Impact%20of%20a%20Legend','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7JZFnScCmm8'},{'title':'%5BAlbum%5D%20Eazy-E%20-%20It%27s%20On%20(Dr.%20Dre)%20187um%20Killa','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6MiN4BjvnnU'},{'title':'%5BAlbum%5D%20Eazy-E%20-%20Protege','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXwq39fGx7iI'},{'title':'%5BAlbum%5D%20Eminem%20-%20Shady%20XV','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_YcZTq2VNCI'},{'title':'%5BAlbum%5D%20Eminem-Infinite','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4s9epKCKbec'},{'title':'%5BAlbum%5D%20Eric%20B%20%26%20Rakim%20-%20Paid%20in%20Full','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do8Ot0jDQpYY'},{'title':'%5BAlbum%5D%20F.A.B.%20-%20Erich%20Privat','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DINTIgS6dXJY%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D6'},{'title':'%5BAlbum%5D%20Farid%20Bang%20-%20Asphalt%20Massaka%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnHgcQZu1jtU'},{'title':'%5BAlbum%5D%20Farid%20Bang%20-%20Asphalt%20Massaka%203','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DU773v2eMJPg'},{'title':'%5BAlbum%5D%20Farid%20Bang%20-%20Killa','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX8vj7d6KyFA'},{'title':'%5BAlbum%5D%20Fat%20Joe%20-%20Jealous%20One%27s%20Envy','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDEkRBCyHzjw'},{'title':'%5BAlbum%5D%20Fela%20Kuti%20Vs.%20De%20La%20Soul%20-%20Fela%20Soul','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8PDg8YyFzMw%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D8'},{'title':'%5BAlbum%5D%20Fiend%20-%20Street%20Life','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2o-JEfJw8zM'},{'title':'%5BAlbum%5D%20Flatbush%20Zombies%20-%20D.R.U.G.S.','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUoOSoflCcXc'},{'title':'%5BAlbum%5D%20G-Eazy%20-%20It%27s%20Dark%20Out','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZw1SUk5YzNQ'},{'title':'%5BAlbum%5D%20G-Eazy%20-%20When%20Its%20Dark%20Out','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsszzGD2Efuw'},{'title':'%5BAlbum%5D%20Game%20-%20OKE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1hBeDE8lLgs'},{'title':'%5BAlbum%5D%20Gang%20Starr%20-%20Step%20In%20The%20Arena','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcmlwkQZRNbQ'},{'title':'%5BAlbum%5D%20Gang%20Starr%20-%20The%20Ownerz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjHMls3adgKo'},{'title':'%5BAlbum%5D%20Geto%20Boys-The%20Geto%20Boys','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXbKThf3aS-Q'},{'title':'%5BAlbum%5D%20Ghostface%20Killah%20-%20The%20Brown%20Tape','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfAtvGQEvwfk'},{'title':'%5BAlbum%5D%20Gramatik%20-%20Coffee%20Shop%20Selection','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do-fyQI4n_tk'},{'title':'%5BAlbum%5D%20Gramatik%20-%20Street%20Bangerz%20Vol.%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-yhxwEMzNOc'},{'title':'%5BAlbum%5D%20Gramatik%20-%20Street%20Bangerz%20Vol.%203','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFijBkSvN6N8'},{'title':'%5BAlbum%5D%20Grand%20Puba%20-%20Reel%20To%20Reel','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsqxM5BHhQ8s'},{'title':'%5BAlbum%5D%20Haftbefehl%20-%20Russisch%20Roulette','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_E8weDfPuCY'},{'title':'%5BAlbum%5D%20Havoc%20of%20Mobb%20Deep%20-%2013','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dww-DGF8hSAg'},{'title':'%5BAlbum%5D%20Hieroglyphics%20-%203rd%20Eye%20Vision','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1jokzz1EvTw'},{'title':'%5BAlbum%5D%20Hieroglyphics%20-%20Full%20Circle','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DePHE1JCpME4'},{'title':'%5BAlbum%5D%20Hirntot%20Records%20Best%20of%20-%20Dr.%20Faustus','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQsd0NtyqHJ0'},{'title':'%5BAlbum%5D%20Hollywood%20Hank%20-%20Soziopath','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWCWhHaPtEn4'},{'title':'%5BAlbum%5D%20Hopsin%20-%20Emurge','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dqb9h6wLY5KU'},{'title':'%5BAlbum%5D%20Hopsin%20-%20Knock%20Madness','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBl7ikHnAc0o'},{'title':'%5BAlbum%5D%20Hopsin%20-%20RAW','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM2VMWxwF3sA'},{'title':'%5BAlbum%5D%20House%20of%20Pain%20-%20House%20of%20Pain','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmsMdVnngB9c'},{'title':'%5BAlbum%5D%20ILL%20BILL%20%26%20VINNIE%20PAZ%20-%20HEAVY%20METAL%20KINGS','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D65nBoZ5NfMY'},{'title':'%5BAlbum%5D%20ILL%20BILL%20-%20Whats%20Wrong%20With%20Bill%3F','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dv0ay8yO03Gw'},{'title':'%5BAlbum%5D%20Ice%20Cube%20-%20I%20Am%20The%20West','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJbc3hvp_PDc'},{'title':'%5BAlbum%5D%20Ice%20Cube%20-%20Lethal%20injection','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dysc-nkdznjk'},{'title':'%5BAlbum%5D%20Ice%20Cube%20-%20Raw%20Footage','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJnyPJqYqpis'},{'title':'%5BAlbum%5D%20Ice%20Cube%20AmeriKKKA%27S%20MOST%20WANTED','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DblrwIyzPL-M'},{'title':'%5BAlbum%5D%20Ill%20Bill%20-%20Howie%20Made%20Me%20Do%20It%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0nvi5ZoFmJ4'},{'title':'%5BAlbum%5D%20Ill%20Bill%20-%20The%20Grimy%20Awards','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DI05UCe_gMfU'},{'title':'%5BAlbum%5D%20Ill%20Bill%20-%20The%20Hour%20of%20Reprisal','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXQG2asp3Uls'},{'title':'%5BAlbum%5D%20Ill%20Bill%20Is%20The%20Future%20Vol%202%3A%20I%27m%20a%20Goon','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dsesjau-r8PY'},{'title':'%5BAlbum%5D%20Immortal%20Technique%20-%20Revolutionary%20Vol.%202%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCH3HnokBh8g'},{'title':'%5BAlbum%5D%20Immortal%20Technique%20-%20The%203rd%20World','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBrQ1jsRYXtU'},{'title':'%5BAlbum%5D%20JAW%20-%20T%C3%A4ter-Opfer-Ausgleich','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyoYtYJdeKCE'},{'title':'%5BAlbum%5D%20JEDI%20MIND%20TRICKS%20-%20Violence%20Begets%20Violence','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt-f0IHGrJgQ'},{'title':'%5BAlbum%5D%20Jadakiss%20%2B%20DJ%20Drama%20-%20Consignment','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3xz6m1CNT1c'},{'title':'%5BAlbum%5D%20Jedi%20Mind%20Tricks%20-%20The%20Thief%20and%20the%20Fallen','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYB3dmRTECps'},{'title':'%5BAlbum%5D%20Jeru%20The%20Damaja%20-%20Divine%20Design','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhApUi1fSlmA'},{'title':'%5BAlbum%5D%20Johnny%20Rakete%20-%20Per%20Anhalter%20Durch%20Die%20Galaxis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhyWpv58bALk%26index%3D15%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM'},{'title':'%5BAlbum%5D%20Juvenile%20-%20Juvie%20Tuesdays','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVPQwtkfQE_k'},{'title':'%5BAlbum%5D%20Kaaris%20-%20Or%20Noir','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBqN_7xa8P3g'},{'title':'%5BAlbum%5D%20Kaaris%20-%20ZERO','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPCENmdm7qdg'},{'title':'%5BAlbum%5D%20Kendrick%20Lamar%20-%20Section.80','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUW-qcsDLxUY'},{'title':'%5BAlbum%5D%20Kendrick%20Lamar%20-%20Unreleased','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNGGLOFFjsT4'},{'title':'%5BAlbum%5D%20King%20Tee%20-%20IV%20Life','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbrinmUxB3Ao'},{'title':'%5BAlbum%5D%20Kollegah%20%26%20Farid%20Nase%20-%20Jung%20Brutal%20Gutaussehend%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUFAkJ730O1A'},{'title':'%5BAlbum%5D%20Kollegah%20%26%20Farid%20Nase%20-%20Jung%20Brutal%20Gutaussehend%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DY5CihGIiFRo'},{'title':'%5BAlbum%5D%20Kollegah%20-%20Alphagene','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoC9BqgpVLgA'},{'title':'%5BAlbum%5D%20Kollegah%20-%20Boss%20der%20Bosse','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqxnYA06Ry6c'},{'title':'%5BAlbum%5D%20Kollegah%20-%20KOLLEGAH','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1sOKjflaXoo'},{'title':'%5BAlbum%5D%20Kollegah%20-%20Zuh%C3%A4ltertape','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDl8GaULVxkk'},{'title':'%5BAlbum%5D%20Kollegah%20-%20Zuh%C3%A4ltertape%203','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DohbSO2o1AkA'},{'title':'%5BAlbum%5D%20Kollegah%20-%20Zuh%C3%A4ltertape%204','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVPPWOcgMD84'},{'title':'%5BAlbum%5D%20Kool%20G%20Rap%20%26%20DJ%20Polo%20-%20Road%20To%20The%20Riches%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DD65e8KtR-_k'},{'title':'%5BAlbum%5D%20Kool%20G%20Rap%20-%20Roots%20Of%20Evil','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUrF-ERhVWLc'},{'title':'%5BAlbum%5D%20Kurupt%20-%20Space%20Boogie%20Smoke%20Oddessey','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-VGFMmXy2YA'},{'title':'%5BAlbum%5D%20Kurupt%20-%20Tha%20Streetz%20Iz%20a%20Mutha','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFgwWjzs-1dU'},{'title':'%5BAlbum%5D%20LA%20COKA%20NOSTRA%20-%20A%20BRAND%20YOU%20CAN%20TRUST','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRvDR93Lh1X4'},{'title':'%5BAlbum%5D%20La%20Coka%20Nostra%20-%20Masters%20Of%20The%20Dark%20Arts','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTzN4cko9duM'},{'title':'%5BAlbum%5D%20La%20Coka%20Nostra%20-%20The%20Height%20Of%20Power','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DH9IyvkPJq0Y'},{'title':'%5BAlbum%5D%20La%20Coka%20Nostra%20-%20To%20Thine%20Own%20Self%20Be%20True','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMtGcKOsN6d8'},{'title':'%5BAlbum%5D%20Lakmann%20-%20All-In','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_An0OR8Z3Os'},{'title':'%5BAlbum%5D%20Lil%20Cease%20%26%20Mafia%20Dons%20Riding%20For%20The%20King','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBsTXKb8Uots'},{'title':'%5BAlbum%5D%20Lil%20Wayne%20-%20Tha%20Carter%20V','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbcDkQT7N9Ug'},{'title':'%5BAlbum%5D%20Lil%20Wayne%20-%20The%20Suffix','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2-WY5pMdE30'},{'title':'%5BAlbum%5D%20Little%20Brother%20-%20The%20Listening','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHY4OhodJ9dM%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D11'},{'title':'%5BAlbum%5D%20Lloyd%20Banks%20-%20Cold%20Corner%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dqihc-OSAyIU'},{'title':'%5BAlbum%5D%20Logic%20-%20Welcome%20to%20forever','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-D_ReXcRlXw'},{'title':'%5BAlbum%5D%20Logic%20-%20Young%2C%20Broke%20%26%20Infamous','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-hQe3KxGwMg'},{'title':'%5BAlbum%5D%20Lord%20Finesse%20-%20The%20Awakening','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbKVawIY0ydA'},{'title':'%5BAlbum%5D%20Lords%20of%20The%20Underground%20-%20Keepers%20Of%20The%20Funk','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUmNblPnsZFI'},{'title':'%5BAlbum%5D%20Ludacris%20-%20%23IDGAF','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ddm0nbWypegU'},{'title':'%5BAlbum%5D%20Lupe%20Fiasco%20-%20The%20Cool','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLYZrJQXIcc8'},{'title':'%5BAlbum%5D%20MASKULIN%20MIXTAPE%20VOL.%203%20(Mixed%20by%20DJ%20Gan-G','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DECJlke7kA7k'},{'title':'%5BAlbum%5D%20MASKULIN%20MIXTAPE%20VOL.%204%20(STASSENTR%C3%84UMER-JIHAD%20EDITION)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJ0Nkm8_7xaI'},{'title':'%5BAlbum%5D%20MC%20Ren%20-%20The%20Villain%20is%20Black','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqGNc7IYqbT8'},{'title':'%5BAlbum%5D%20MJG%20-%20Too%20Pimpin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3IhwKmASMXk'},{'title':'%5BAlbum%5D%20MMG%20-%20Self%20Made%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGGQnTHpscgg'},{'title':'%5BAlbum%5D%20MMG%20-%20Self%20Made%203','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnErbLogIQq4'},{'title':'%5BAlbum%5D%20Mac%20Mall%20-%20Untouchable','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7CpImMdYUoc'},{'title':'%5BAlbum%5D%20Mad%20Cj%20Mac%20-%20True%20Game','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfBFbbL-zUC4'},{'title':'%5BAlbum%5D%20Marco%20Polo%20-%20Port%20Authority%202%3A%20The%20Director%27s%20Cut','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DL4b851_PiWQ'},{'title':'%5BAlbum%5D%20Masta%20Ace%20-%20A%20Long%20Hot%20Summer','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7fVrouSYqRQ'},{'title':'%5BAlbum%5D%20Masta%20Ace%20-%20Disposable%20Arts','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5xeSLUb4uMc'},{'title':'%5BAlbum%5D%20Masta%20Ace%20-%20Incorporated','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZDyLDMO3k9Y'},{'title':'%5BAlbum%5D%20Masta%20Ace%20-%20Sittin%27%20on%20Chrome','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da_Sb4MDy86U'},{'title':'%5BAlbum%5D%20Masta%20Ace%20-%20SlaughtaHouse','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmO6K42O2nDU'},{'title':'%5BAlbum%5D%20Masta%20Ace%20-%20Take%20A%20Look%20Around','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOvULvhZ5CXk'},{'title':'%5BAlbum%5D%20Master%20P%20-%20Famous%20Again','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq6OnnKei4aM'},{'title':'%5BAlbum%5D%20Master%20P%20-%20Ghetto%20D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTpKMHp3Uv2k'},{'title':'%5BAlbum%5D%20Meek%20Mill%20-%20Dreamchasers%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQZlTFmHq0is'},{'title':'%5BAlbum%5D%20Meek%20Mill%20-%20Dreamchasers%203','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYUY6T1SPx_c'},{'title':'%5BAlbum%5D%20Meek%20Mill%20-%20Dreamschasers%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1G6tRN0fIPo'},{'title':'%5BAlbum%5D%20Mr.%20Scarface%20Is%20Back','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dc9lK62b4zzI'},{'title':'%5BAlbum%5D%20N.O.R.E.','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDgkN9yyqJjk'},{'title':'%5BAlbum%5D%20N.W.A%20-%20Straight%20Outta%20Compton','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcBq3-C3fleg'},{'title':'%5BAlbum%5D%20N.W.A.%20AND%20THE%20POSSE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBmFJtq89B14'},{'title':'%5BAlbum%5D%20Nate%20Dogg%20-%20Music%20%26%20Me','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYySNqwmWEvY'},{'title':'%5BAlbum%5D%20Nate%20Dogg%20-%20Nate%20Dogg','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvckCXn3Vk-4'},{'title':'%5BAlbum%5D%20Necro%20-%20Death%20Rap','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhpfeNNibs0c'},{'title':'%5BAlbum%5D%20Necro%20-%20Gory%20Days','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPIC_TaLk_PY'},{'title':'%5BAlbum%5D%20Necro%20-%20I%20Need%20Drugs','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsOpKRCabC9g'},{'title':'%5BAlbum%5D%20Necro%20-%20The%20Murder%20Murder%20Kill%20Kill%20EP','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDKKJ5gjlbXc'},{'title':'%5BAlbum%5D%20Necro%20-%20The%20pre%20fix%20for%20death','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3De29MZ92mtl4'},{'title':'%5BAlbum%5D%20Necro%20-DIE!','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJeqGsEBu6jI'},{'title':'%5BAlbum%5D%20Non%20Phixion%20-Green%20CD','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhfDAlL8p3LU'},{'title':'%5BAlbum%5D%20Notorious%20B.I.G.%20-%20B.I.G.%20Over%20Illmatic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2Q8ZpgraacM'},{'title':'%5BAlbum%5D%20Notorious%20B.I.G.%20-%20Born%20Again','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DT35LywrHJpA'},{'title':'%5BAlbum%5D%20Notorious%20B.I.G.%20-%20Life%20After%20Death','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVn3KHzYo2Hk'},{'title':'%5BAlbum%5D%20Notorious%20B.I.G.%20-%20Ready%20To%20Die','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DinOi7qnn3T0'},{'title':'%5BAlbum%5D%20Notorious%20B.I.G.%20-%20Ready%20To%20Die%20(OG%20Edition)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHpODGdH47-c'},{'title':'%5BAlbum%5D%20Odd%20Job%20-%20Preset','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPWgTiFlEdEI%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D5'},{'title':'%5BAlbum%5D%20Ol%27%20Dirty%20Bastard%20-%20Osirus','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTMhm7s2pfHY'},{'title':'%5BAlbum%5D%20Ol%27%20Dirty%20Bastard%20-%20Return%20to%20the%2036%20Chambers','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRHnsDSh8-8w'},{'title':'%5BAlbum%5D%20Olli%20Banjo%20-%20Sparring','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM4248huMUcg'},{'title':'%5BAlbum%5D%20Onyx%20-%20Shut%20%27Em%20Down','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWf-k2qP3cNM'},{'title':'%5BAlbum%5D%20Orgi69%20-%20Porno%20Rap','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQ8CVJ9IzEJs'},{'title':'%5BAlbum%5D%20PA%20Sports%20-%20Eiskalter%20Engel','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcxrWXR5WTiA'},{'title':'%5BAlbum%5D%20Pete%20Rock%20%26%20C.L.%20Smooth%20%E2%80%8E%E2%80%93%20Mecca%20And%20The%20Soul%20Brother','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuLkjZXpPYYU'},{'title':'%5BAlbum%5D%20Pete%20Rock%20-%20Lost%20%26%20Found%3A%20Hip%20Hop%20Underground%20Soul%20Classics','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbQ0G7o0AEL8'},{'title':'%5BAlbum%5D%20Pete%20Rock%20-%20Soul%20Survivor%20II','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdtYGUdRRTxs'},{'title':'%5BAlbum%5D%20Pharoahe%20Monch%20-%20PTSD','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9v0vVbHus-g'},{'title':'%5BAlbum%5D%20Prodigy%20%26%20Alchemist-Albert%20Einstein','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-OSBNRlcqKE'},{'title':'%5BAlbum%5D%20R%20A%20The%20Rugged%20Man%20-%20Legendary%20Classics%20Volume%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmczTdHl3SEg'},{'title':'%5BAlbum%5D%20RAG%20-%20Unter%20Tage','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DefiyYJneu-g%26index%3D4%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM'},{'title':'%5BAlbum%5D%20Redman%20-%20Muddy%20Waters%202%20(The%20Prelude)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DV7A3Nq_zjpk'},{'title':'%5BAlbum%5D%20Redman%20-%20Mudface','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmhNb9Vxn-rU'},{'title':'%5BAlbum%5D%20Redman%20-%20Welcome%202%20Reggie%20Noble','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM3lnZHfQkSc'},{'title':'%5BAlbum%5D%20Rick%20Ross%20-%20Black%20Dollar','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8avDURuBiEY'},{'title':'%5BAlbum%5D%20STITCHES%20-%20For%20Drug%20Dealers%20Only','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp5i4C07u2AM'},{'title':'%5BAlbum%5D%20STYLES%20P%20-%20GHOST%20IN%20THE%20SHELL','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DECuCI00mS24'},{'title':'%5BAlbum%5D%20STYLES%20P%20-%20MASTER%20OF%20CEREMONIES','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DimSGsjK6Cto'},{'title':'%5BAlbum%5D%20Samy%20Deluxe%20-%20Big%20Baus%20of%20the%20Nauf','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dx2oj6MDRG6U'},{'title':'%5BAlbum%5D%20Saukrates%20-%20The%20Underground%20Tapes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtkJYFTQZ0mo'},{'title':'%5BAlbum%5D%20Scarface%20-%20MADE','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZGfRXS5kpFM'},{'title':'%5BAlbum%5D%20Scarface%20The%20Untouchable','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0vmlEiM_leM'},{'title':'%5BAlbum%5D%20Sean%20Price%20-%20Land%20Of%20The%20Crooks','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdsmVMM6qIzw'},{'title':'%5BAlbum%5D%20Sean%20Price%20-%20Monkey%20Barz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJyYtVOzAj6w'},{'title':'%5BAlbum%5D%20Sean%20Price%20-%20The%20Price%20is%20Right','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DU8QzVLrarEU'},{'title':'%5BAlbum%5D%20Sefyu%20-%20Oui%20Je%20Le%20Suis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DI7LHl1CHB4Y'},{'title':'%5BAlbum%5D%20Sefyu%20-%20Suis-Je%20Le%20Gardien%20De%20Mon%20Fr%C3%A8re%3F%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8LPbLwBumq4'},{'title':'%5BAlbum%5D%20Sefyu%20%7C%20Oui%20Je%20Le%20Suis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DI7LHl1CHB4Y'},{'title':'%5BAlbum%5D%20Selfmade%20-%20Chronik%20III','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgAv4jKObtCU'},{'title':'%5BAlbum%5D%20Serial%20Killers%20-%20Serial%20Killers%20Vol%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYwL8VMiJ110'},{'title':'%5BAlbum%5D%20Shindy%20-%20FBGM','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dj-NZto3B4Ws'},{'title':'%5BAlbum%5D%20Shindy%20-%20NWA%202.0','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DE7g4Fs8thJo'},{'title':'%5BAlbum%5D%20Slaine%20%E2%80%93%20The%20Boston%20Project','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9tecfb56b3g'},{'title':'%5BAlbum%5D%20Slim%20Shady%20EP','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdbqS-1Q9c8k'},{'title':'%5BAlbum%5D%20Slim%20Thug%20-%20Boss%20Life','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D70Ss4jPwNJE'},{'title':'%5BAlbum%5D%20Smif-N-Wessun%20-%20Reloaded','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2onl3TZ1um0'},{'title':'%5BAlbum%5D%20Smif-n-Wessun%20-%20Dah%20Shinin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCPAKaXqWvWQ'},{'title':'%5BAlbum%5D%20Snaga%20%26%20Pillath%20-%20Aus%20Liebe%20zum%20Spiel','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFSGCQ_RN6tI'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20-%20Dead%20Man%20Walkin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3De8GIA6pjOMA'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20-%20Doggystyle','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dvm5xqHFCIAI'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20-%20Tha%20Doggfather','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQIvUEKN7-2Y'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20-%20That%27s%20My%20Work%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbwOKAKr2jbI'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20-%20That%27s%20My%20Work%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNpZx0tKzRSQ'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20-%20That%27s%20My%20Work%203','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DryQQ95GPFNs'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20-%20That%27s%20My%20Work%204','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIY8SiElL704'},{'title':'%5BAlbum%5D%20Snoop%20Dogg%20Presents%3A%20Best%20of%20UNDERGROUND%20HEAT%20-%20Episode%2052','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnIJfw_v67c0'},{'title':'%5BAlbum%5D%20Snoop%20Doggy%20Dogg%20-%20Murder%20Was%20the%20Case%20Soundtrack','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DU9RhJGwveO4'},{'title':'%5BAlbum%5D%20Snow%20Tha%20Product%20-%20Good%20Nights%20Bad%20Mornings%202%20T','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQ_krujWEiIk'},{'title':'%5BAlbum%5D%20Snow%20Tha%20Product%20-%20The%20Rest%20Comes%20Later','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds5xGq8-f8I8'},{'title':'%5BAlbum%5D%20Sonny%20Black%20%26%20Frank%20White%20-%20CCN','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTDkWf9eJfvw'},{'title':'%5BAlbum%5D%20Stieber%20Twins%20-%20Fenster%20zum%20Hof','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do6jcwo1dOD0%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D2'},{'title':'%5BAlbum%5D%20Summer%20Cem%20-%20Cemesis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6uEH1FmO6AI'},{'title':'%5BAlbum%5D%20Surreal%20%26%20DJ%20Balance%20-%20Future%20Classic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEMPA8-MP5Dw'},{'title':'%5BAlbum%5D%20T.I.%20-%20Urban%20Legend','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhkqTjTtY3II'},{'title':'%5BAlbum%5D%20THE%20LOX%20-%20MONEY%2C%20POWER%20%26%20RESPECT','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_K4lZBxGTnM'},{'title':'%5BAlbum%5D%20Tech%20N9ne%20-%20Special%20Effects','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxgPK6avpZkA'},{'title':'%5BAlbum%5D%20Tha%20Dogg%20Pound-%20Dogg%20Food','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxDGqq705yo4'},{'title':'%5BAlbum%5D%20Tha%20Eastsidaz%20-%20Snoop%20Dogg%20Presents%20Tha%20Eastsidaz','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt4_SIQrWa9o'},{'title':'%5BAlbum%5D%20The%20Brand%20New%20Heavies%20-%20Heavy%20Rhyme%20Experience%3A%20Vol.%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP7GywyTdjyw%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D1'},{'title':'%5BAlbum%5D%20The%20Circle%20of%20Tyrants%20(%20Necro%20%2C%20Ill%20Bill%20%2C%20Goretex%20%2C%20Mr.%20Hyde)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbvAbPBUcpmU'},{'title':'%5BAlbum%5D%20The%20D.O.C.%20-%20Deuce','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyBbwitwQCrI'},{'title':'%5BAlbum%5D%20The%20D.O.C.%20-%20No%20one%20Can%20Do%20It%20Better','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFJNuhywO3Is'},{'title':'%5BAlbum%5D%20The%20Game%20-%20Stop%20Snitchin%20Stop%20Lyin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt-4XIwdnAW8'},{'title':'%5BAlbum%5D%20The%20Game%20-%20The%20Documentary%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM-8lWAQO1rs'},{'title':'%5BAlbum%5D%20The%20Game%20-%20The%20Documentary%202.5','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7FVOtrPfeWE'},{'title':'%5BAlbum%5D%20The%20Great%20Adventures%20Of%20Slick%20Rick','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DV47Hp7EyhHg'},{'title':'%5BAlbum%5D%20The%20Notorious%20B.I.G.%20-%20Life%20after%20death','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1uoFQoEP7LA'},{'title':'%5BAlbum%5D%20The%20Notorious%20B.I.G.%20-%20Ready%20To%20Die','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Df2RdaHh0U-s'},{'title':'%5BAlbum%5D%20The%20Pharcyde%20-%20Bizarre%20Ride%20II%20The%20Pharcyde','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9GRPcvFTY4c%26list%3DPLVTTUfFyFyVeSZ2i5s6VukoAKegnGxcRM%26index%3D9'},{'title':'%5BAlbum%5D%20The%20Pharcyde%20-%20Labcabincalifornia','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPJAsMo-A_q0'},{'title':'%5BAlbum%5D%20The%20Roots%20-%20Dilla%20Joints','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1ppwnd8Up60'},{'title':'%5BAlbum%5D%20Twista%20-%20Adrenaline%20Rush','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dg7P64lclf7Y'},{'title':'%5BAlbum%5D%20Ugly%20Heroes%20-%20Ugly%20Heroes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0ZqfAJ05WmE'},{'title':'%5BAlbum%5D%20Vinnie%20Paz%20-%20Carry%20On%20Tradition%20EP','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfH2dIKlLAqE'},{'title':'%5BAlbum%5D%20Vinnie%20Paz%20-%20God%20Of%20The%20Serengeti','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7vHYEwv-EWI'},{'title':'%5BAlbum%5D%20Vinnie%20Paz%20-%20Season%20of%20the%20Assassin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJjuvkQNqLDA'},{'title':'%5BAlbum%5D%20Warren%20G%20-%20I%20Want%20It%20All','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKAv5rsZizYA'},{'title':'%5BAlbum%5D%20Warren%20G%20-%20Regulate...%20G%20Funk%20Era%2C%20Pt.%20II%20-%20EP','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNo-FnA73SEY'},{'title':'%5BAlbum%5D%20Westberlin%20Maskulin%20-%20Hoes%2C%20Flows%2C%20Moneytoes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrGa8Tgn5ve4'},{'title':'%5BAlbum%5D%20Westside%20Connection%20-%20Bow%20Down','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdJzUL6SfXNM'},{'title':'%5BAlbum%5D%20Wu-Tang%20Clan%20-%20The%20Swarm','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2AsNw54zIMI'},{'title':'%5BAlbum%5D%20Xzibit%20-%20Napalm','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQzqt-6_t_sQ'},{'title':'%5BAlbum%5D%20YUNG%20HURN%20-%2022','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_oVGM2xbtMc'},{'title':'%5BAlbum%5D%20Yo%20Gotti%20-%20Concealed','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW6lYZX3GO8g'},{'title':'%5BAlbum%5D%20Young%20Buck%20-%20Buck%20Mentality','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsGOGI6jCALE'},{'title':'%5BAlbum%5D%20Young%20Roddy%20-%20Route%20The%20Ruler','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1hSK-NAKCvA'},{'title':'%5BAlbum%5D%20Young%20Thug%20%26%20Gucci%20Mane%20-%20LA%20Flare','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXxA27tMTYz8'},{'title':'%5BAlbum%5D%20Young%20Thug%20%26%20Rich%20Homie%20Quan%20-%20Rich%20Gang%3A%20The%20Tour','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DybdvT0p_Bzk'},{'title':'%5BAlbum%5D%20Young%20Thug%20-%201017%20Thug','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJurJjDEFadw'},{'title':'%5BAlbum%5D%20Young%20Thug%20-%20Slime%20Season','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5lwuwNQoZNo'},{'title':'%5BAlbum%5D%20Young%20Thug%20-%20Slime%20Season%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-N7vXLR2bRU'},{'title':'%5BAlbum%5D%20Young%20Thug%20-%20Stoner','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlvMcj-7BaTU'},{'title':'%5BAlbum%5D%20Young%20Thug%20-%20Tha%20Carter%206','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJ2Z5nsWSru4'},{'title':'%5BAlbum%5D%20Young%20Thug%20-%20Unreleased','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dz19vamCSXTg'},{'title':'%5BAlbum%5D%20Z%20Ro%20-%20Tripolar','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2tfeeKcyrZA'},{'title':'%5BAlbum%5D%20Z-Ro%20-%20Angel%20Dust','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXCgd72UyWc8'},{'title':'%5BAlbum%5D%20Z-Ro%20-%20Meth','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-tfldKRBpZU'},{'title':'%5BAlbum%5D%20Z-Ro%20-%20The%20Crown','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOf4xbB1v8z8'},{'title':'%5BAlbum%5D%20Z-Ro%20-%20The%20Life%20of%20Joseph%20W%20McVey','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYMxTAm3HTg4'},{'title':'%5BAlbum%5D%20Zro%20-%20Life','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2R4Cc2SsKtA'},{'title':'%5BAlbum%5D%20la%20coka%20nostra%20-%20The%20maple%20leaf%20massacre','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdpP4Fp474fU'},{'title':'%5BCHILLOUT%5D%20Cafe%20Americaine%20-%20music%20from%20the%20sea','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcZco4RaptL4'},{'title':'%5BCHILLOUT%5D%20DJ%20Maretimo%20-%20Jazz%20Loungebar%20Vol.3','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DA4lwAkxTGzQ'},{'title':'%5BCHILLOUT%5D%20DJ%20Maretimo%20-%20The%20Sounds%20Of%20Asia%20Vol.1','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGVtjoYo_dBQ'},{'title':'%5BCHILLOUT%5D%20DJ%20Maretimo%20-%20Winter%20Chillout%20Lounge%202014','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnhmIoLdGjqg'},{'title':'%5BCHILLOUT%5D%20MALDIVES%20Relaxing%20Chill-Out%20Luxury%20Lounge','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJiPkDbjbN8w'},{'title':'%5BCHILLOUT%5D%20The%20Big%20Winter%20Chillout%20Mix','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-UP78U-nrok'},{'title':'%5BCountry%5D%20Elvis%20Presley%20-%20The%20Anthology','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJNUCf1F9BqQ'},{'title':'%5BCountry%5D%20Johnny%20Cash%20-%20I%20Walk%20The%20Line%201958%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxObSJWIWui0'},{'title':'%5BCountry%5D%20Johnny%20Cash%20-%20Live%20At%20Manhattan%20Center','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3RJehnopgR0'},{'title':'%5BCountry%5D%20Johnny%20Cash%20-%20Ring%20Of%20Fire','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsPVyODTThn0'},{'title':'%5BCountry%5D%20Johnny%20Cash%20-%20Storyteller%20-%2044%20Original%20Recordings','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLqldNgzZ2NY'},{'title':'%5BCountry%5D%20Johnny%20Cash%20-%20The%20Sun%20Singles%20Collection','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dg3MumK98UHE'},{'title':'%5BCountry%5D%20Johnny%20Cash%20greatest%20hits%20-%20The%20best%20of%20Johnny%20Cash%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DA7erP-daXYc'},{'title':'%5BDnB%5D%20Jazz%20%26%20Bass%20-%20Liquid%20Drum%20%26%20Bass%20Mix%202013','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeieeuZT7XFc'},{'title':'%5BDnB%5D%20Liquid%20Drum%20and%20Bass%20Mix%202013','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbPOtkQkTq7M'},{'title':'%5BDnB%5D%20The%20Journey','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DR8MWKsheHxk'},{'title':'%5BHARD%5D%20Bass-D%20%26%20King%20Matthew%20Feat%20XD%20-%20Like%20A%20Dream','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEaWn_DLUjBI'},{'title':'%5BHOUSE%5D%20Best%20of%20Kygo%20%7C%20Summer%20Mix','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEzjX0QE_l8U'},{'title':'%5BHOUSE%5D%20Kygo%20Mix%202015%20Part%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyQVxUICOCWA'},{'title':'%5BHOUSE%5D%20Kygo%20Mix%202015%20Part%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcDMR-XulBPI'},{'title':'%5BHOUSE%5D%20Tropical%20%26%20Chill%20Out%20Music','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrV6btNxRRWU'},{'title':'%5BHOUSE%5D%20Tropical%20House%20Music','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzDt20KEiWcw'},{'title':'%5BHOUSE%5D%20Tropical%20House%20Summer%20Mix','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmWIK1SHZn2w'},{'title':'%5BINST%5D%202%20Pac%20-%20All%20Eyez%20On%20Me','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy-dr8Sx86fs'},{'title':'%5BINST%5D%202%20Pac%20-%20Hail%20Mary','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxHrqTdJEEUs'},{'title':'%5BINST%5D%202%20Pac%20-%20Hit%20Em%20Up','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9iNlAT9BLzo'},{'title':'%5BINST%5D%20Big%20L%20%26%20Jay-Z%20-%201995%20Freestyle','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3TBcXxGRywk'},{'title':'%5BINST%5D%20Big%20L%20-%20Uptown%20Connection','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEWItDkTYaQc'},{'title':'%5BINST%5D%20Big%20Pun%20-%20You%20Aint%20A%20Killer','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGpxIzuC4fLM'},{'title':'%5BINST%5D%20Craig%20Mack%20-%20Flava%20In%20Ya%20Ear','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJ0N52BROILw'},{'title':'%5BINST%5D%20Dr.%20Dre%20%26%20Snoop%20Dogg%20-%20Nuthin%27%20But%20A%20G%20Thang','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPmWOWmjVTvE'},{'title':'%5BINST%5D%20Fugees%20-%20Ready%20or%20not','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLJ6g6pmN6Yo'},{'title':'%5BINST%5D%20Gang%20Starr%20-%20Mass%20Appeal','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYGc6CTrIxIY'},{'title':'%5BINST%5D%20Jay-Z%20-%20Dead%20Presidents','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIt5gYHcyJqo'},{'title':'%5BINST%5D%20Mobb%20Deep%20-%20Shook%20Ones%20Pt.%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLdInAweNti0'},{'title':'%5BINST%5D%20Mobb%20Deep%20-%20Survival%20Of%20The%20Fittest','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt9pc6Qr946g'},{'title':'%5BINST%5D%20NAS%20-%20Affirmative%20Action','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D742s-DXQGPc'},{'title':'%5BINST%5D%20Necro%20-%20Underground','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYPnC4cFhGz4'},{'title':'%5BINST%5D%20Non%20Phixion%20-%20Refuse%20to%20Lose','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHsUjBw_auZw'},{'title':'%5BINST%5D%20Notorious%20B.I.G.%20-%2010%20Crack%20Commandments','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN0twl1DfXr0'},{'title':'%5BINST%5D%20Notorious%20B.I.G.%20-%20Juicy','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp_4QVidbKkg'},{'title':'%5BINST%5D%20Notorious%20B.I.G.%20-%20Kick%20In%20The%20Door','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBhHqieEmbe0'},{'title':'%5BINST%5D%20Rakim%20-%20Guess%20Who%27s%20Back','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_r4OCUS1Gg4'},{'title':'%5BINST%5D%20Wu-Tang%20Clan%20C.R.E.A.M.','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIRDr-lAmYLM'},{'title':'%5BLIVE%20%7C%20RAP%5D%20The%20Up%20In%20Smoke%20Tour%202000','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoSMDFQLTNb8'},{'title':'%5BNW%5D%20Devendra%20Banhart%20-%20Mala%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D04dL5DVNYqc'},{'title':'%5BNW%5D%20Nouvelle%20Vague%20-%20Nouvelle%20Vague%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcfvIMTlM4sY'},{'title':'%5BPSY-MIX%20Love%20is%20the%20Key%20-%20Psytrance%20Full%20On%20Mix%202014%20%E0%A5%90','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLAg8HByKEvU'},{'title':'%5BPSY-MIX%5D%20ASTRAL%20PROJECTION%20%7C%20TIP%20Records%20Series%20Vol.%202','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7qlnFYefBP0'},{'title':'%5BPSY-MIX%5D%20Ace%20Ventura%20-%20Live%20Set%2008%20(Agosto)%202014','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dqt7zxMQFANU'},{'title':'%5BPSY-MIX%5D%20Astral%20Projection%20vs%20MFG%20-%20Nintrance','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHJjtwnyWgXE'},{'title':'%5BPSY-MIX%5D%20Dream%20Frequency%20(Progressive%20Psytrance%20Mix)%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYMRqF1UMPhs'},{'title':'%5BPSY-MIX%5D%20HypoGeo%20Live%20%40%20Boom%20Festival%202012','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRJYz9hB-1Qw'},{'title':'%5BPSY-MIX%5D%20INTERSTELLAR','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4lYc1EBD1co'},{'title':'%5BPSY-MIX%5D%20Krumelur%20-%20Live%20Set%20-%20O.Z.O.R.A.%202014','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF4Wy_i1Syq4'},{'title':'%5BPSY-MIX%5D%20LOUD%20live%20%40%20Boom%20Festival%202014','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHxbnlpX9U0Y'},{'title':'%5BPSY-MIX%5D%20Logic%20Bomb%20%E2%80%8E%E2%80%93%20Unlimited','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnF8jQV-6JPw'},{'title':'%5BPSY-MIX%5D%20Loopstep%20-%20Live%20Set%20-%20S.U.N.%20Festival%202014%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMmpI6WGl9QU'},{'title':'%5BPSY-MIX%5D%20Progressive%20Full%20On%20Psy%20Mix%202%202012','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DziH2yE3NdO4'},{'title':'%5BPSY-MIX%5D%20Progressive%20Psychedelic%20Trance%20Mix%202013%20III','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpUbSMdyKloE'},{'title':'%5BPSY-MIX%5D%20Progressive%20Psytrance%20%26%20Offbeat%20Top%2020%20Marts%202015','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnGQZYfcTe4k'},{'title':'%5BPSY-MIX%5D%20Progressive%20Psytrance%20d(~%E0%A5%90~)b%20Goa%20Mix%201%202015','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DskmvbMrVfnQ'},{'title':'%5BPSY-MIX%5D%20Progressive%20Psytrance%20to%20fullon%20mix%20%20Positive%20Psynergy%20%20by%20Zenrah%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DG3VFeMSC-2c'},{'title':'%5BPSY-MIX%5D%20Psy%20Trance%20Night%20FullOn%20GOA%202014%20%5C%20Acid%20Test%20%5C%20Twilight%20Midnight%20Edition','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZSjs11wHEH4'},{'title':'%5BPSY-MIX%5D%20PsyFiction-%20Dark%20Full-On%20Psytrance%20Mix%20September%202013%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWOpgAt8UIek'},{'title':'%5BPSY-MIX%5D%20Psychedelic%20Trance%202014%20%2F%202015%20Mix%20part%201','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvNVp5IwQcYc'},{'title':'%5BPSY-MIX%5D%20Psykovsky%20Set%20-%20Da%20Budet%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEZH5ruUnqxo'},{'title':'%5BPop%5D%20Frank%20Sinatra%20-%20Three%20Original%20Hit%20Recordings','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D07EXZLitisw'},{'title':'%5BPop%5D%20The%20Beatles%20-%20Abbey%20Road','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOPthowh3CIs'},{'title':'%5BPop%5D%20The%20Beatles%20-%20Magical%20Mystery%20Tour','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpPSec0OCxmo'},{'title':'%5BPop%5D%20The%20Beatles%20-%20Sgt.%20Pepper%27s%20Lonely%20Hearts%20Club%20Band%20Part%201%20Soundtrack%20Full%20Album%20Vinyl','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqaYDLU37qGI'},{'title':'%5BPop%5D%20The%20Beatles%20-%20Sgt.%20Pepper%27s%20Lonely%20Hearts%20Club%20Band%20Part%202%20Soundtrack%20Full%20Album%20Vinyl','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ddkz6BqwnsNc'},{'title':'%5BROCK%5D%20Biohazard%20-%20State%20Of%20The%20World%20Address','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5IdKzoVRzhM'},{'title':'%5BROCK%5D%20Foo%20Fighters%20-%20Everlong','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeBG7P-K-r1Y'},{'title':'%5BROCK%5D%20Foo%20Fighters%20-%20The%20Pretender','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSBjQ9tuuTJQ'},{'title':'%5BROCK%5D%20Foo%20Fighters%20-%20Wasting%20Light%20Live%20from%20606','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXnmzins2Uow'},{'title':'%5BROCK%5D%20Heiliger%20Krieg%20-%20Bekenntnis','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DywBOvj04bvc'},{'title':'%5BROCK%5D%20Linkin%20Park%20-%20A%20Thousand%20Suns','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeAi861jPzMA'},{'title':'%5BROCK%5D%20Linkin%20Park%20-%20Living%20Things','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpXsOrOYoIdo'},{'title':'%5BROCK%5D%20Linkin%20Park%20-%20Minutes%20To%20Midnight','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaoJxzR-8NOc'},{'title':'%5BROCK%5D%20Linkin%20Park%20-%20Reanimation','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPzYH3DNIE_8'},{'title':'%5BROCK%5D%20Linkin%20Park%20-%20The%20Hunting%20Party','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmgGzqRZYw1Q'},{'title':'%5BROCK%5D%20Nirvana%20-%20Bleach','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpMLre9Jed_4'},{'title':'%5BROCK%5D%20Nirvana%20-%20Incesticide','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSEX6itRSXm4'},{'title':'%5BROCK%5D%20Nirvana%20-%20Nevermind%20Live','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4fEDV4pE6YE'},{'title':'%5BROCK%5D%20Nirvana%20Greatest%20Hits','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq4uCoE6B8YY'},{'title':'%5BROCK%5D%20Rammstein%20-%20Amerika','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRr8ljRgcJNM'},{'title':'%5BROCK%5D%20Rammstein%20-%20Benzin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dz0wK6s-6cbo'},{'title':'%5BROCK%5D%20Rammstein%20-%20Best%20Of%20%7C%2036%20Greatest%20Hits','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFBfMGQC_gAo'},{'title':'%5BROCK%5D%20Rammstein%20-%20Keine%20Lust','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1M4ADcMn3dA'},{'title':'%5BROCK%5D%20Rammstein%20-%20Moskau','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D64vDOJlDOWQ'},{'title':'%5BROCK%5D%20Rammstein%20-%20Ohne%20Dich','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLIPc1cfS-oQ'},{'title':'%5BROCK%5D%20Rammstein%20-%20Rosenrot','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Daf59U2BRRAU'},{'title':'%5BROCK%5D%20The%20Doors%20-%20Greatest%20Hits','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN3bKJGasdV0'},{'title':'%5BROCK%5D%20The%20Monks%20-%20Bad%20Habits','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3oYr2QcWw28'},{'title':'%5BReggae%5D%20Bob%20Marley%20%22Mother%20B%27s%20Bedroom%20Tapes%22%20(Complete%20Tape)%20-%20(Reel%201%20%2B%20Reel%202)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6Tn1zCpTnQs'},{'title':'%5BReggae%5D%20Bob%20Marley%20%26%20The%20Wailers%20%5BLove%20the%20Lion%20Bootleg%201973%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvTcchsNqYhE'},{'title':'%5BReggae%5D%20Bob%20Marley%20-%20African%20Herbsman','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DG25Qo5KV8d4'},{'title':'%5BReggae%5D%20Bob%20Marley%20-%20Live%20in%20Santa%20Barbara','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DG3jtfsJdy8s'},{'title':'%5BReggae%5D%20Bob%20Marley%20-%20Still%20Talking%20(CD%201)','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6f7fsNjPi_k'},{'title':'%5BReggae%5D%20Bob%20Marley%20-%20The%20Uncut%20Studio%20Rehersals','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP1TbWkC-aSY'},{'title':'%5BReggae%5D%20Bob%20Marley%20-%20the%20legend%20live','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvWmi2CLao7k'},{'title':'%5BReggae%5D%20Bob%20Marley%20Tuff%20Gong%20Studio%20Rehearsal','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaXIDAd68ThI'},{'title':'%5BReggae%5D%20Bob%20Marley%20and%20the%20Wailers%20-%20Let%20The%20Saints%20Through%20(%20Eleanor%20Rigby%20Tape%20)%20-%20Rare%20Acoustic%20Album','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQChNR_IL9E0'},{'title':'%5BReggae%5D%20Fat%20Freddys%20Drop%20-%20Based%20On%20A%20True%20Story','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DY7QQS5V3cnI'},{'title':'%5BReggae%5D%20Groundation%20-%20Tribute%20To%20Bob%20Marley%20%222015%22','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D84fONEB2zWw'},{'title':'%5BReggae%5D%20Reggae%20Therapy%20With%20Bob%20Marley%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDJWsS8VuFNA'},{'title':'%5BTECH%5D%20Conor%20-%20Arrivals%20%2F%20unmastered','url':'https%3A%2F%2Fsoundcloud.com%2Fconorofficial%2Farrivals'},{'title':'%5BTECH%5D%20Conor%20-%20Feel%20Good','url':'https%3A%2F%2Fsoundcloud.com%2Fconorofficial%2Ffeel-good'},{'title':'%5BTECH%5D%20Conor%20-%20Komme%20so%20fresh%20RMX%20%2F%20unmastered','url':'https%3A%2F%2Fsoundcloud.com%2Fconorofficial%2Fkomme-so-fresh-rmx'},{'title':'%5BTECH%5D%20Conor%20-%20Nova%20%2F%20unmastered','url':'https%3A%2F%2Fsoundcloud.com%2Fconorofficial%2Fnova'},{'title':'%5BTECH%5D%20Conor%20-%20X','url':'https%3A%2F%2Fsoundcloud.com%2Fconorofficial%2Fx-1'},{'title':'%5BTECH%5D%20Dj%20Rush%20%26%20Zombie%20Nation%20live%20%40%20Hafentunnel%202001','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiG-RdeuvKUM'},{'title':'%5BTECH%5D%20Dj%20Rush%20%40%20Tresor%20Closing%20Party%20%5B13.04.2005%5D','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DshU8ELxAwQM'},{'title':'%5BTECH%5D%20Dj%20Rush%20Live%20%40%20As%20You%20Like%20It','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTsSSSIs5qMg'},{'title':'%5BTECH%5D%20Dj%20Rush%20live%20%40%20FUSE%20(2002)%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQYz-2KEarq8'},{'title':'%5BTECH%5D%20Lounge%20Beats%20-%20Deep%20Jazzy%20House','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds34zjI77_TQ'},{'title':'%5BTECH%5D%20Minimal%2FMinimaltechno%20Mix%202015%20February','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNL6JHjlaqKA'},{'title':'%5BTECH%5D%20Silaz%20%7C%20Minimal%20Sound%20Therapy%20%233','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsF4juszs2Kw'},{'title':'%5BTECH%5D%20Tok%20Tok%20-%20Live%20%40%20Stammheim%20Closing%20Party%2023.02.2002%20','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTiWo-QkTn-k'}]}");
	document.body.appendChild(musicPlayer);
	console.log("Player Appended");
}
//=============================================
//******Konami Code****************************
//=============================================
$("body").keyup(function(event){
    codeTmp.push(event.which);
    if(codeTmp[codeTmp.length-1] == code[codeTmp.length-1]){
        console.log(codeTmp[codeTmp.length-1]);
    }else{
        console.log("emptied");
        codeTmp = [];
    }
    if (codeTmp.length == code.length){
        console.log("Konami Code");
        startDisco = !startDisco;
        if (startDisco) {
            RestartConfetti();
            disco();
            //nomify();
            //loop();
            codeTmp = [];
        }else{
            setTimeout(function(){
                $("body").removeAttr("style")
                DeactivateConfetti();
                changeColor(true);    
                codeTmp = [];
            },10)
        }
        codeTmp = [];
    }
})
$( window ).scroll(function(){
    //console.log($(window).scrollTop())
    $( "canvas" ).offset({top:$(window).scrollTop()});
});



function checkFireworks(){
    var fireworks = false;
    setInterval(function(){
        var d = new Date();
        if (d.getMonth()==0 && d.getDate()==1 && d.getHours() == 0 && !fireworks){
            loop();
            fireworks = true;
            console.log("Ab gehts")
            $("#countdown").html("Frohes Neues Jahr " + d.getFullYear())
        }else if (d.getMonth()==11 && d.getDate()==31 && d.getHours() == 23 && d.getMinutes() == 59 && d.getSeconds() >= 50){
            console.log(60-d.getSeconds())
            $("#countdown").html(60-d.getSeconds())
        }else if (d.getMonth()==0 && d.getDate()==1 && d.getHours() == 0 && fireworks){
            $("#countdown").html("Frohes Neues Jahr " + d.getFullYear())
        }else{
            console.log(""+d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds())
            $("#countdown").html("");
        }    
    },1000)
    
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


/** @license
 * DHTML Snowstorm! JavaScript-based snow for web pages
 * Making it snow on the internets since 2003. You're welcome.
 * -----------------------------------------------------------
 * Version 1.44.20131208 (Previous rev: 1.44.20131125)
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License
 * http://schillmania.com/projects/snowstorm/license.txt
 */

/*jslint nomen: true, plusplus: true, sloppy: true, vars: true, white: true */
/*global window, document, navigator, clearInterval, setInterval */

var snowStorm = (function(window, document) {

  // --- common properties ---

  this.autoStart = false;          // Whether the snow should start automatically or not.
  this.excludeMobile = false;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) Enable at your own risk.
  this.flakesMax = 128;           // Limit total amount of snow made (falling + sticking)
  this.flakesMaxActive = 64;      // Limit amount of snow falling at once (less = lower CPU use)
  this.animationInterval = 50;    // Theoretical "miliseconds per frame" measurement. 20 = fast + smooth, but high CPU use. 50 = more conservative, but slower
  this.useGPU = true;             // Enable transform-based hardware acceleration, reduce CPU load.
  this.className = null;          // CSS class name for further customization on snow elements
  this.excludeMobile = true;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) By default, be nice.
  this.flakeBottom = null;        // Integer for Y axis snow limit, 0 or null for "full-screen" snow effect
  this.followMouse = false;        // Snow movement can respond to the user's mouse
  this.snowColor = '#fff';        // Don't eat (or use?) yellow snow.
  this.snowCharacter = '&bull;';  // &bull; = bullet, &middot; is square on some systems etc.
  this.snowStick = true;          // Whether or not snow should "stick" at the bottom. When off, will never collect.
  this.targetElement = null;      // element which snow will be appended to (null = document.body) - can be an element ID eg. 'myDiv', or a DOM node reference
  this.useMeltEffect = true;      // When recycling fallen snow (or rarely, when falling), have it "melt" and fade out if browser supports it
  this.useTwinkleEffect = true;  // Allow snow to randomly "flicker" in and out of view while falling
  this.usePositionFixed = false;  // true = snow does not shift vertically when scrolling. May increase CPU load, disabled by default - if enabled, used only where supported
  this.usePixelPosition = true;  // Whether to use pixel values for snow top/left vs. percentages. Auto-enabled if body is position:relative or targetElement is specified.

  // --- less-used bits ---

  this.freezeOnBlur = false;       // Only snow when the window is in focus (foreground.) Saves CPU.
  this.flakeLeftOffset = 0;       // Left margin/gutter space on edge of container (eg. browser window.) Bump up these values if seeing horizontal scrollbars.
  this.flakeRightOffset = 0;      // Right margin/gutter space on edge of container
  this.flakeWidth = 8;            // Max pixel width reserved for snow element
  this.flakeHeight = 8;           // Max pixel height reserved for snow element
  this.vMaxX = 5;                 // Maximum X velocity range for snow
  this.vMaxY = 4;                 // Maximum Y velocity range for snow
  this.zIndex = 0;                // CSS stacking order applied to each snowflake

  // --- "No user-serviceable parts inside" past this point, yadda yadda ---

  var storm = this,
  features,
  // UA sniffing and backCompat rendering mode checks for fixed position, etc.
  isIE = navigator.userAgent.match(/msie/i),
  isIE6 = navigator.userAgent.match(/msie 6/i),
  isMobile = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
  isBackCompatIE = (isIE && document.compatMode === 'BackCompat'),
  noFixed = (isBackCompatIE || isIE6),
  screenX = null, screenX2 = null, screenY = null, scrollY = null, docHeight = null, vRndX = null, vRndY = null,
  windOffset = 1,
  windMultiplier = 2,
  flakeTypes = 6,
  fixedForEverything = false,
  targetElementIsRelative = false,
  opacitySupported = (function(){
    try {
      document.createElement('div').style.opacity = '0.5';
    } catch(e) {
      return false;
    }
    return true;
  }()),
  didInit = false,
  docFrag = document.createDocumentFragment();

  features = (function() {

    var getAnimationFrame;

    /**
     * hat tip: paul irish
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     * https://gist.github.com/838785
     */

    function timeoutShim(callback) {
      window.setTimeout(callback, 1000/(storm.animationInterval || 20));
    }

    var _animationFrame = (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        timeoutShim);

    // apply to window, avoid "illegal invocation" errors in Chrome
    getAnimationFrame = _animationFrame ? function() {
      return _animationFrame.apply(window, arguments);
    } : null;

    var testDiv;

    testDiv = document.createElement('div');

    function has(prop) {

      // test for feature support
      var result = testDiv.style[prop];
      return (result !== undefined ? prop : null);

    }

    // note local scope.
    var localFeatures = {

      transform: {
        ie:  has('-ms-transform'),
        moz: has('MozTransform'),
        opera: has('OTransform'),
        webkit: has('webkitTransform'),
        w3: has('transform'),
        prop: null // the normalized property value
      },

      getAnimationFrame: getAnimationFrame

    };

    localFeatures.transform.prop = (
      localFeatures.transform.w3 || 
      localFeatures.transform.moz ||
      localFeatures.transform.webkit ||
      localFeatures.transform.ie ||
      localFeatures.transform.opera
    );

    testDiv = null;

    return localFeatures;

  }());

  this.timer = null;
  this.flakes = [];
  this.disabled = false;
  this.active = false;
  this.meltFrameCount = 20;
  this.meltFrames = [];

  this.setXY = function(o, x, y) {

    if (!o) {
      return false;
    }

    if (storm.usePixelPosition || targetElementIsRelative) {

      o.style.left = (x - storm.flakeWidth) + 'px';
      o.style.top = (y - storm.flakeHeight) + 'px';

    } else if (noFixed) {

      o.style.right = (100-(x/screenX*100)) + '%';
      // avoid creating vertical scrollbars
      o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

    } else {

      if (!storm.flakeBottom) {

        // if not using a fixed bottom coordinate...
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.bottom = (100-(y/screenY*100)) + '%';

      } else {

        // absolute top.
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

      }

    }

  };

  this.events = (function() {

    var old = (!window.addEventListener && window.attachEvent), slice = Array.prototype.slice,
    evt = {
      add: (old?'attachEvent':'addEventListener'),
      remove: (old?'detachEvent':'removeEventListener')
    };

    function getArgs(oArgs) {
      var args = slice.call(oArgs), len = args.length;
      if (old) {
        args[1] = 'on' + args[1]; // prefix
        if (len > 3) {
          args.pop(); // no capture
        }
      } else if (len === 3) {
        args.push(false);
      }
      return args;
    }

    function apply(args, sType) {
      var element = args.shift(),
          method = [evt[sType]];
      if (old) {
        element[method](args[0], args[1]);
      } else {
        element[method].apply(element, args);
      }
    }

    function addEvent() {
      apply(getArgs(arguments), 'add');
    }

    function removeEvent() {
      apply(getArgs(arguments), 'remove');
    }

    return {
      add: addEvent,
      remove: removeEvent
    };

  }());

  function rnd(n,min) {
    if (isNaN(min)) {
      min = 0;
    }
    return (Math.random()*n)+min;
  }

  function plusMinus(n) {
    return (parseInt(rnd(2),10)===1?n*-1:n);
  }

  this.randomizeWind = function() {
    var i;
    vRndX = plusMinus(rnd(storm.vMaxX,0.2));
    vRndY = rnd(storm.vMaxY,0.2);
    if (this.flakes) {
      for (i=0; i<this.flakes.length; i++) {
        if (this.flakes[i].active) {
          this.flakes[i].setVelocities();
        }
      }
    }
  };

  this.scrollHandler = function() {
    var i;
    // "attach" snowflakes to bottom of window if no absolute bottom value was given
    scrollY = (storm.flakeBottom ? 0 : parseInt(window.scrollY || document.documentElement.scrollTop || (noFixed ? document.body.scrollTop : 0), 10));
    if (isNaN(scrollY)) {
      scrollY = 0; // Netscape 6 scroll fix
    }
    if (!fixedForEverything && !storm.flakeBottom && storm.flakes) {
      for (i=0; i<storm.flakes.length; i++) {
        if (storm.flakes[i].active === 0) {
          storm.flakes[i].stick();
        }
      }
    }
  };

  this.resizeHandler = function() {
    if (window.innerWidth || window.innerHeight) {
      screenX = window.innerWidth - 16 - storm.flakeRightOffset;
      screenY = (storm.flakeBottom || window.innerHeight);
    } else {
      screenX = (document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth) - (!isIE ? 8 : 0) - storm.flakeRightOffset;
      screenY = storm.flakeBottom || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
    }
    docHeight = document.body.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
  };

  this.resizeHandlerAlt = function() {
    screenX = storm.targetElement.offsetWidth - storm.flakeRightOffset;
    screenY = storm.flakeBottom || storm.targetElement.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
    docHeight = document.body.offsetHeight;
  };

  this.freeze = function() {
    // pause animation
    if (!storm.disabled) {
      storm.disabled = 1;
    } else {
      return false;
    }
    storm.timer = null;
  };

  this.resume = function() {
    if (storm.disabled) {
       storm.disabled = 0;
    } else {
      return false;
    }
    storm.timerInit();
  };

  this.toggleSnow = function() {
    if (!storm.flakes.length) {
      // first run
      storm.start();
    } else {
      storm.active = !storm.active;
      if (storm.active) {
        storm.show();
        storm.resume();
      } else {
        storm.stop();
        storm.freeze();
      }
    }
  };

  this.stop = function() {
    var i;
    this.freeze();
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'none';
    }
    storm.events.remove(window,'scroll',storm.scrollHandler);
    storm.events.remove(window,'resize',storm.resizeHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.remove(document,'focusout',storm.freeze);
        storm.events.remove(document,'focusin',storm.resume);
      } else {
        storm.events.remove(window,'blur',storm.freeze);
        storm.events.remove(window,'focus',storm.resume);
      }
    }
  };

  this.show = function() {
    var i;
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'block';
    }
  };

  this.SnowFlake = function(type,x,y) {
    var s = this;
    this.type = type;
    this.x = x||parseInt(rnd(screenX-20),10);
    this.y = (!isNaN(y)?y:-rnd(screenY)-12);
    this.vX = null;
    this.vY = null;
    this.vAmpTypes = [1,1.2,1.4,1.6,1.8]; // "amplification" for vX/vY (based on flake size/type)
    this.vAmp = this.vAmpTypes[this.type] || 1;
    this.melting = false;
    this.meltFrameCount = storm.meltFrameCount;
    this.meltFrames = storm.meltFrames;
    this.meltFrame = 0;
    this.twinkleFrame = 0;
    this.active = 1;
    this.fontSize = (10+(this.type/5)*10);
    this.o = document.createElement('div');
    this.o.innerHTML = storm.snowCharacter;
    if (storm.className) {
      this.o.setAttribute('class', storm.className);
    }
    this.o.style.color = storm.snowColor;
    this.o.style.position = (fixedForEverything?'fixed':'absolute');
    if (storm.useGPU && features.transform.prop) {
      // GPU-accelerated snow.
      this.o.style[features.transform.prop] = 'translate3d(0px, 0px, 0px)';
    }
    this.o.style.width = storm.flakeWidth+'px';
    this.o.style.height = storm.flakeHeight+'px';
    this.o.style.fontFamily = 'arial,verdana';
    this.o.style.cursor = 'default';
    this.o.style.overflow = 'hidden';
    this.o.style.fontWeight = 'normal';
    this.o.style.zIndex = storm.zIndex;
    docFrag.appendChild(this.o);

    this.refresh = function() {
      if (isNaN(s.x) || isNaN(s.y)) {
        // safety check
        return false;
      }
      storm.setXY(s.o, s.x, s.y);
    };

    this.stick = function() {
      if (noFixed || (storm.targetElement !== document.documentElement && storm.targetElement !== document.body)) {
        s.o.style.top = (screenY+scrollY-storm.flakeHeight)+'px';
      } else if (storm.flakeBottom) {
        s.o.style.top = storm.flakeBottom+'px';
      } else {
        s.o.style.display = 'none';
        s.o.style.bottom = '0%';
        s.o.style.position = 'fixed';
        s.o.style.display = 'block';
      }
    };

    this.vCheck = function() {
      if (s.vX>=0 && s.vX<0.2) {
        s.vX = 0.2;
      } else if (s.vX<0 && s.vX>-0.2) {
        s.vX = -0.2;
      }
      if (s.vY>=0 && s.vY<0.2) {
        s.vY = 0.2;
      }
    };

    this.move = function() {
      var vX = s.vX*windOffset, yDiff;
      s.x += vX;
      s.y += (s.vY*s.vAmp);
      if (s.x >= screenX || screenX-s.x < storm.flakeWidth) { // X-axis scroll check
        s.x = 0;
      } else if (vX < 0 && s.x-storm.flakeLeftOffset < -storm.flakeWidth) {
        s.x = screenX-storm.flakeWidth-1; // flakeWidth;
      }
      s.refresh();
      yDiff = screenY+scrollY-s.y+storm.flakeHeight;
      if (yDiff<storm.flakeHeight) {
        s.active = 0;
        if (storm.snowStick) {
          s.stick();
        } else {
          s.recycle();
        }
      } else {
        if (storm.useMeltEffect && s.active && s.type < 3 && !s.melting && Math.random()>0.998) {
          // ~1/1000 chance of melting mid-air, with each frame
          s.melting = true;
          s.melt();
          // only incrementally melt one frame
          // s.melting = false;
        }
        if (storm.useTwinkleEffect) {
          if (s.twinkleFrame < 0) {
            if (Math.random() > 0.97) {
              s.twinkleFrame = parseInt(Math.random() * 8, 10);
            }
          } else {
            s.twinkleFrame--;
            if (!opacitySupported) {
              s.o.style.visibility = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 'hidden' : 'visible');
            } else {
              s.o.style.opacity = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 0 : 1);
            }
          }
        }
      }
    };

    this.animate = function() {
      // main animation loop
      // move, check status, die etc.
      s.move();
    };

    this.setVelocities = function() {
      s.vX = vRndX+rnd(storm.vMaxX*0.12,0.1);
      s.vY = vRndY+rnd(storm.vMaxY*0.12,0.1);
    };

    this.setOpacity = function(o,opacity) {
      if (!opacitySupported) {
        return false;
      }
      o.style.opacity = opacity;
    };

    this.melt = function() {
      if (!storm.useMeltEffect || !s.melting) {
        s.recycle();
      } else {
        if (s.meltFrame < s.meltFrameCount) {
          s.setOpacity(s.o,s.meltFrames[s.meltFrame]);
          s.o.style.fontSize = s.fontSize-(s.fontSize*(s.meltFrame/s.meltFrameCount))+'px';
          s.o.style.lineHeight = storm.flakeHeight+2+(storm.flakeHeight*0.75*(s.meltFrame/s.meltFrameCount))+'px';
          s.meltFrame++;
        } else {
          s.recycle();
        }
      }
    };

    this.recycle = function() {
      s.o.style.display = 'none';
      s.o.style.position = (fixedForEverything?'fixed':'absolute');
      s.o.style.bottom = 'auto';
      s.setVelocities();
      s.vCheck();
      s.meltFrame = 0;
      s.melting = false;
      s.setOpacity(s.o,1);
      s.o.style.padding = '0px';
      s.o.style.margin = '0px';
      s.o.style.fontSize = s.fontSize+'px';
      s.o.style.lineHeight = (storm.flakeHeight+2)+'px';
      s.o.style.textAlign = 'center';
      s.o.style.verticalAlign = 'baseline';
      s.x = parseInt(rnd(screenX-storm.flakeWidth-20),10);
      s.y = parseInt(rnd(screenY)*-1,10)-storm.flakeHeight;
      s.refresh();
      s.o.style.display = 'block';
      s.active = 1;
    };

    this.recycle(); // set up x/y coords etc.
    this.refresh();

  };

  this.snow = function() {
    var active = 0, flake = null, i, j;
    for (i=0, j=storm.flakes.length; i<j; i++) {
      if (storm.flakes[i].active === 1) {
        storm.flakes[i].move();
        active++;
      }
      if (storm.flakes[i].melting) {
        storm.flakes[i].melt();
      }
    }
    if (active<storm.flakesMaxActive) {
      flake = storm.flakes[parseInt(rnd(storm.flakes.length),10)];
      if (flake.active === 0) {
        flake.melting = true;
      }
    }
    if (storm.timer) {
      features.getAnimationFrame(storm.snow);
    }
  };

  this.mouseMove = function(e) {
    if (!storm.followMouse) {
      return true;
    }
    var x = parseInt(e.clientX,10);
    if (x<screenX2) {
      windOffset = -windMultiplier+(x/screenX2*windMultiplier);
    } else {
      x -= screenX2;
      windOffset = (x/screenX2)*windMultiplier;
    }
  };

  this.createSnow = function(limit,allowInactive) {
    var i;
    for (i=0; i<limit; i++) {
      storm.flakes[storm.flakes.length] = new storm.SnowFlake(parseInt(rnd(flakeTypes),10));
      if (allowInactive || i>storm.flakesMaxActive) {
        storm.flakes[storm.flakes.length-1].active = -1;
      }
    }
    storm.targetElement.appendChild(docFrag);
  };

  this.timerInit = function() {
    storm.timer = true;
    storm.snow();
  };

  this.init = function() {
    var i;
    for (i=0; i<storm.meltFrameCount; i++) {
      storm.meltFrames.push(1-(i/storm.meltFrameCount));
    }
    storm.randomizeWind();
    storm.createSnow(storm.flakesMax); // create initial batch
    storm.events.add(window,'resize',storm.resizeHandler);
    storm.events.add(window,'scroll',storm.scrollHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.add(document,'focusout',storm.freeze);
        storm.events.add(document,'focusin',storm.resume);
      } else {
        storm.events.add(window,'blur',storm.freeze);
        storm.events.add(window,'focus',storm.resume);
      }
    }
    storm.resizeHandler();
    storm.scrollHandler();
    if (storm.followMouse) {
      storm.events.add(isIE?document:window,'mousemove',storm.mouseMove);
    }
    storm.animationInterval = Math.max(20,storm.animationInterval);
    storm.timerInit();
  };

  this.start = function(bFromOnLoad) {
    if (!didInit) {
      didInit = true;
    } else if (bFromOnLoad) {
      // already loaded and running
      return true;
    }
    if (typeof storm.targetElement === 'string') {
      var targetID = storm.targetElement;
      storm.targetElement = document.getElementById(targetID);
      if (!storm.targetElement) {
        throw new Error('Snowstorm: Unable to get targetElement "'+targetID+'"');
      }
    }
    if (!storm.targetElement) {
      storm.targetElement = (document.body || document.documentElement);
    }
    if (storm.targetElement !== document.documentElement && storm.targetElement !== document.body) {
      // re-map handler to get element instead of screen dimensions
      storm.resizeHandler = storm.resizeHandlerAlt;
      //and force-enable pixel positioning
      storm.usePixelPosition = true;
    }
    storm.resizeHandler(); // get bounding box elements
    storm.usePositionFixed = (storm.usePositionFixed && !noFixed && !storm.flakeBottom); // whether or not position:fixed is to be used
    if (window.getComputedStyle) {
      // attempt to determine if body or user-specified snow parent element is relatlively-positioned.
      try {
        targetElementIsRelative = (window.getComputedStyle(storm.targetElement, null).getPropertyValue('position') === 'relative');
      } catch(e) {
        // oh well
        targetElementIsRelative = false;
      }
    }
    fixedForEverything = storm.usePositionFixed;
    if (screenX && screenY && !storm.disabled) {
      storm.init();
      storm.active = true;
    }
  };

  function doDelayedStart() {
    window.setTimeout(function() {
      storm.start(true);
    }, 20);
    // event cleanup
    storm.events.remove(isIE?document:window,'mousemove',doDelayedStart);
  }

  function doStart() {
    if (!storm.excludeMobile || !isMobile) {
      doDelayedStart();
    }
    // event cleanup
    storm.events.remove(window, 'load', doStart);
  }

  // hooks for starting the snow
  if (storm.autoStart) {
    storm.events.add(window, 'load', doStart, false);
  }

  return this;

}(window, document));






function getArticleLink(){
    //console.log("getArticleLink");
    /*r xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(response.responseText,"text/xml");
        var links = [];
        var docs = xmlDoc.getElementsByTagName("entry");
        for (var i=0; i < docs.length; i++){
            links.push(docs[i].getElementsByTagName("link")[0].href);
        }
        console.log(links);
        getArticle(links);
      }
      else{
        console.log(this.readyState +" "+ this.status);
      }
    }
    xhttp.open("GET", "https://www.deinupdate.de/?feed=atom", true);
    xhttp.send();*/
     /*$.ajax({
            url: "https://www.deinupdate.de/?feed=atom",
            type: "GET",
            crossDomain: true,
            success: function (response) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(response.responseText,"text/xml");
                var links = [];
                var docs = xmlDoc.getElementsByTagName("item");
                for (var i=0; i < docs.length; i++){
                    links.push(docs[i].getElementsByTagName("link")[0].innerHTML);
                }
                console.log(links);
                getArticle(links);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });*/
        
        var xhttp = createCORSRequest("GET","https://www.deinupdate.de/?feed=atom" )
        xhttp.onload = function() {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
            var links = [];
            //console.log(xmlDoc);
            var docs = xmlDoc.getElementsByTagName("entry");
            for (var i=0; i < docs.length; i++){
                links.push(docs[i].getElementsByTagName("link")[0].getAttribute('href'));
            }
            //console.log(links);
            getArticle(links);
        };
        xhttp.onerror = function() {
            //console.log('Woops, there was an error making the request.');
        };
        xhttp.send();
}

function getArticle(links){
    //console.log("getArticles");
    for (var i=0;i<links.length;i++){
        //console.log(links[i])
        /*var xhttp = createCORSRequest("GET",links[i])
        xhttp.onload = function() {
            console.log("Loaded Link");
            console.log(xhttp.responseText);
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(xhttp.responseText,"text/html");
            //console.log(htmlDoc.getElementsByTagName("article"));
            //var link = xmlDoc.getElementsByTagName("item")[0].getElementsByTagName("link")[0].innerHTML;
            createDiv(htmlDoc);
        };
        xhttp.onerror = function() {
            console.log('Woops, there was an error making the request.');
        };
        xhttp.send();*/
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                    var parser = new DOMParser();
                    var htmlDoc = parser.parseFromString(this.responseText,"text/html");
                    //console.log(htmlDoc.getElementsByTagName("article"));
                    //var link = xmlDoc.getElementsByTagName("item")[0].getElementsByTagName("link")[0].innerHTML;
                    createDiv(htmlDoc);
          }
        };
        xhttp.open("GET", links[i], true);
        xhttp.send();
    }
}
function createDiv(article){
    //console.log("CreateDiv");
    //console.log(article);
    var header = article.getElementsByTagName("h2")[0].getElementsByTagName("a")[0].innerHTML;
    var textTree = article.getElementsByClassName("rhonda-full-entry")[0];
    var scripts = textTree.getElementsByTagName("script");
    var remScripts = [];
    for (var i = 0;i<scripts.length;i++){
        if(textTree.getElementsByTagName("script")[i].src == "" || textTree.getElementsByTagName("script")[i].src == undefined){
            remScripts.push(i);
        }
    }

    //console.log(remScripts)
    for (var j=0;j<remScripts.length;j++){
        var index = remScripts-j;
        textTree.getElementsByTagName("script")[index].remove();
    }
   //console.log("Check image Src");
    for (var k = 0; k<textTree.getElementsByTagName("img").length;k++){
        //console.log(textTree.getElementsByTagName("img")[k].src+": "+textTree.getElementsByTagName("img")[k].src.indexOf("deinupdate"));
        if (textTree.getElementsByTagName("img")[k].src.indexOf("deinupdate")>-1){
            textTree.getElementsByTagName("img")[k].src = textTree.getElementsByTagName("img")[k].src.replace("http:","https:");
            textTree.getElementsByTagName("img")[k].srcset = textTree.getElementsByTagName("img")[k].srcset.replace("http:","https:");
        }
    }
    //textTree.getElementById("vc-feelback-main").remove();
    var text = textTree.innerHTML;
    //console.log(header);
    //console.log(textTree);
    var container;
    if (!$("#articleContainer").length){
        container = document.createElement("details")
        container.id="articleContainer";
        container.innerHTML += "<summary style='margin-top:20px;margin-bottom:20px'>DeinUpdate Artikel</summary>";
        //container.style = "display:none";
        var foo = $("#foo");
        foo.after(container);
        //addButton();
    }else{
        container = $("#articleContainer")
    }
    var articleDetails = document.createElement("details");
    articleDetails.classList.add("articleDetails");
    articleDetails.innerHTML = "<summary style='font-weight: bold;margin-bottom:20px'>"+header+"</summary>"
    articleDetails.innerHTML += text
    container.append(articleDetails);
    var spacer = document.createElement("hr");
    container.append(spacer);

}

function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);
    
      } else if (typeof XDomainRequest != "undefined") {
    
        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    
      } else {
    
        // Otherwise, CORS is not supported by the browser.
        xhr = null;
    
      }
      return xhr;
    }

//==================================================
//Konfetti
// globals
var canvas;
var ctx;
var W;
var H;
var mp = 150; //max particles
var particles = [];
var angle = 0;
var tiltAngle = 0;
var confettiActive = true;
var animationComplete = true;
var deactivationTimerHandler;
var reactivationTimerHandler;
var animationHandler;

// objects
var particleColors = {
    colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
    colorIndex: 0,
    colorIncrementer: 0,
    colorThreshold: 10,
    getColor: function () {
        if (this.colorIncrementer >= 10) {
            this.colorIncrementer = 0;
            this.colorIndex++;
            if (this.colorIndex >= this.colorOptions.length) {
                this.colorIndex = 0;
            }
        }
        this.colorIncrementer++;
        return this.colorOptions[this.colorIndex];
    }
}

function confettiParticle(color) {
    this.x = Math.random() * W; // x-coordinate
    this.y = (Math.random() * H) - H; //y-coordinate
    this.r = RandomFromTo(10, 30); //radius;
    this.d = (Math.random() * mp) + 10; //density;
    this.color = color;
    this.tilt = Math.floor(Math.random() * 10) - 10;
    this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
    this.tiltAngle = 0;

    this.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = this.r / 2;
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
        ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
        return ctx.stroke();
    }
}

$(document).ready(function () {
    SetGlobals();
    //InitializeButton();
    //InitializeConfetti();

    $(window).resize(function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    });

});

function InitializeButton() {
    $('#stopButton').click(DeactivateConfetti);
    $('#startButton').click(RestartConfetti);
}

function SetGlobals() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
}

function InitializeConfetti() {
    particles = [];
    animationComplete = false;
    for (var i = 0; i < mp; i++) {
        var particleColor = particleColors.getColor();
        particles.push(new confettiParticle(particleColor));
    }
    StartConfetti();
}

function Draw() {
    ctx.clearRect(0, 0, W, H);
    var results = [];
    for (var i = 0; i < mp; i++) {
        (function (j) {
            results.push(particles[j].draw());
        })(i);
    }
    Update();

    return results;
}

function RandomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}


function Update() {
    var remainingFlakes = 0;
    var particle;
    angle += 0.01;
    tiltAngle += 0.1;

    for (var i = 0; i < mp; i++) {
        particle = particles[i];
        if (animationComplete) return;

        if (!confettiActive && particle.y < -15) {
            particle.y = H + 100;
            continue;
        }

        stepParticle(particle, i);

        if (particle.y <= H) {
            remainingFlakes++;
        }
        CheckForReposition(particle, i);
    }

    if (remainingFlakes === 0) {
        StopConfetti();
    }
}

function CheckForReposition(particle, index) {
    if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
        if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
        {
            repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
        } else {
            if (Math.sin(angle) > 0) {
                //Enter from the left
                repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
            } else {
                //Enter from the right
                repositionParticle(particle, W + 20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
            }
        }
    }
}
function stepParticle(particle, particleIndex) {
    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
    particle.x += Math.sin(angle);
    particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
}

function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
    particle.x = xCoordinate;
    particle.y = yCoordinate;
    particle.tilt = tilt;
}

function StartConfetti() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    (function animloop() {
        if (animationComplete) return null;
        animationHandler = requestAnimFrame(animloop);
        return Draw();
    })();
}

function ClearTimers() {
    clearTimeout(reactivationTimerHandler);
    clearTimeout(animationHandler);
}

function DeactivateConfetti() {
    confettiActive = false;
    ClearTimers();
}

function StopConfetti() {
    animationComplete = true;
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
}

function RestartConfetti() {
    ClearTimers();
    StopConfetti();
    reactivationTimerHandler = setTimeout(function () {
        confettiActive = true;
        animationComplete = false;
        InitializeConfetti();
    }, 100);

}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.oRequestAnimationFrame || 
    window.msRequestAnimationFrame || 
    function (callback) {
        return window.setTimeout(callback, 1000 / 60);
    };
})();



function nomify(){
    var shapes={"w_rect":["tumblr_mohxt1V6a91svhqpoo1_500.gif","tumblr_md0q05wMJb1rxis0k.gif","tumblr_ml0nmjWpX41snjjivo1_500.gif","CastDance_322x183.gif", "CookieDawn_322x183.gif", "Painting_322x183.gif"],"t_rect":["CookieMonster-Sitting.jpg","487961_10150955894571587_1215263686_n.jpg","534767_10151516100086587_1790492047_n.jpg","Static.jpg"],"square":["cookie_monster.jpg","935823_10151502554911587_1547641144_n.jpg","902502_10151355606796587_45192127_o.jpg","cookie-monster.jpg","Cookie_250x250.gif"]},
    img_path="https://downloads.cdn.sesame.org/sw/OmNomNomify/";
    function chooseImg(shape){
        return img_path+shapes[shape][Math.floor(Math.random()*shapes[shape].length)]
    }
    function getShape(h,w){
        return h===w?"square":h>w?"t_rect":"w_rect"
    }
    var iframeArr = document.getElementsByTagName('iframe');
    for (var x = 0; x < iframeArr.length;x++){
        
        if ($(iframeArr[x]).attr("id")!=undefined && $(iframeArr[x]).attr("id").indexOf("dsq")>-1){
            iframe = iframeArr[x];
        }
    }
    //console.log(iframe)
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    console.log(iframeDocument);
    var imgs=iframeDocument.getElementsByTagName("img"),img,h,w,shape;
    for(var i=0,len=imgs.length;i<len;i++){
        img=imgs[i],h=img.height,w=img.width,s=getShape(h,w);img.setAttribute("height",h);img.setAttribute("width",w);img.src=chooseImg(s);
        return void 0;
    }
}
//$('iframeSelector').contents()
var code = ["38","38","40","40","37","39","37","39","66","65"];
var codeTmp = []
var iframe;
var searchIframe = setInterval(function(){
    var iframeArr = document.getElementsByTagName('iframe');
    console.log("Searching iframe");
    for (var x = 0; x < iframeArr.length;x++){
        if ($(iframeArr[x]).attr("id")!=undefined && $(iframeArr[x]).attr("id").indexOf("dsq")>-1){
            iframe = iframeArr[x];
            clearInterval(searchIframe);
            console.log("Found iframe");
            setTimeout(function(){
                console.log($(iframe).contents());
                $(iframe).contents().find('body').keyup(function(event){
                    console.log("Iframe Keyup");
                });
            },1000)
            
        }
    }
    //console.log(iframe)
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
},1000);



// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
		// firework collection
		fireworks = [],
		// particle collection
		particles = [],
		// starting hue
		hue = 120,
		// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
		limiterTotal = 5,
		limiterTick = 0,
		// this will time the auto launches of fireworks, one launch per 80 loop ticks
		timerTotal = 80,
		timerTick = 0,
		mousedown = false,
		// mouse x coordinate,
		mx,
		// mouse y coordinate
		my;
		
// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

// calculate the distance between two points
function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// create firework
function Firework( sx, sy, tx, ty ) {
	// actual coordinates
	this.x = sx;
	this.y = sy;
	// starting coordinates
	this.sx = sx;
	this.sy = sy;
	// target coordinates
	this.tx = tx;
	this.ty = ty;
	// distance from starting point to target
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	// track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 3;
	// populate initial coordinate collection with the current coordinates
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 2;
	this.acceleration = 1.05;
	this.brightness = random( 50, 70 );
	// circle target indicator radius
	this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	
	// cycle the circle target indicator radius
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	// speed up the firework
	this.speed *= this.acceleration;
	
	// get the current velocities based on angle and speed
	var vx = Math.cos( this.angle ) * this.speed,
			vy = Math.sin( this.angle ) * this.speed;
	// how far will the firework have traveled with velocities applied?
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	// if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		// remove the firework, use the index passed into the update function to determine which to remove
		fireworks.splice( index, 1 );
	} else {
		// target not reached, keep traveling
		this.x += vx;
		this.y += vy;
	}
}

// draw firework
Firework.prototype.draw = function() {
	ctx.beginPath();
	// move to the last tracked coordinate in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
	ctx.stroke();
	
	ctx.beginPath();
	// draw the target for this firework with a pulsing circle
	ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

// create particle
function Particle( x, y ) {
	this.x = x;
	this.y = y;
	// track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 5;
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	// set a random angle in all possible directions, in radians
	this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 10 );
	// friction will slow the particle down
	this.friction = 0.95;
	// gravity will be applied and pull the particle down
	this.gravity = 1;
	// set the hue to a random number +-50 of the overall hue variable
	this.hue = random( hue - 50, hue + 50 );
	this.brightness = random( 50, 80 );
	this.alpha = 1;
	// set how fast the particle fades out
	this.decay = random( 0.015, 0.03 );
}

// update particle
Particle.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	// slow down the particle
	this.speed *= this.friction;
	// apply velocity
	this.x += Math.cos( this.angle ) * this.speed;
	this.y += Math.sin( this.angle ) * this.speed + this.gravity;
	// fade out the particle
	this.alpha -= this.decay;
	
	// remove the particle once the alpha is low enough, based on the passed in index
	if( this.alpha <= this.decay ) {
		particles.splice( index, 1 );
	}
}

// draw particle
Particle.prototype.draw = function() {
	ctx. beginPath();
	// move to the last tracked coordinates in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

// create particle group/explosion
function createParticles( x, y ) {
	// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
	var particleCount = 30;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}

// main demo loop
function loop() {
	// this function will run endlessly with requestAnimationFrame
	requestAnimFrame( loop );
	
	// increase the hue to get different colored fireworks over time
	//hue += 0.5;
  
  // create random color
  hue= random(0, 360 );
	
	// normally, clearRect() would be used to clear the canvas
	// we want to create a trailing effect though
	// setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
	ctx.globalCompositeOperation = 'destination-out';
	// decrease the alpha property to create more prominent trails
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	// change the composite operation back to our main mode
	// lighter creates bright highlight points as the fireworks and particles overlap each other
	ctx.globalCompositeOperation = 'lighter';
	
	// loop over each firework, draw it, update it
	var i = fireworks.length;
	while( i-- ) {
		fireworks[ i ].draw();
		fireworks[ i ].update( i );
	}
	
	// loop over each particle, draw it, update it
	var i = particles.length;
	while( i-- ) {
		particles[ i ].draw();
		particles[ i ].update( i );
	}
	
	// launch fireworks automatically to random coordinates, when the mouse isn't down
	if( timerTick >= timerTotal ) {
		if( !mousedown ) {
			// start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
			fireworks.push( new Firework( cw / 2, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
			timerTick = 0;
		}
	} else {
		timerTick++;
	}
	
	// limit the rate at which fireworks get launched when mouse is down
	if( limiterTick >= limiterTotal ) {
		if( mousedown ) {
			// start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
			fireworks.push( new Firework( cw / 2, ch, mx, my ) );
			limiterTick = 0;
		}
	} else {
		limiterTick++;
	}
}

// mouse event bindings
// update the mouse coordinates on mousemove
canvas.addEventListener( 'mousemove', function( e ) {
	mx = e.pageX - canvas.offsetLeft;
	my = e.pageY - canvas.offsetTop;
});

// toggle mousedown state and prevent canvas from being selected
canvas.addEventListener( 'mousedown', function( e ) {
	e.preventDefault();
	mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
	e.preventDefault();
	mousedown = false;
});
