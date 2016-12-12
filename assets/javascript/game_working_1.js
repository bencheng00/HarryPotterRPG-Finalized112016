
var hedwigstheme = document.createElement('audio');
	       hedwigstheme.setAttribute('src', "assets/images/hedwigs_theme.mp3");

var cometodie = document.createElement('audio');
	       cometodie.setAttribute('src', "assets/images/voldemort_cometodie.mp3");

var snapespeech = document.createElement('audio');
	       snapespeech.setAttribute('src', "assets/images/snape_speech.mp3");

var durmstrang = document.createElement('audio');
	       durmstrang.setAttribute('src', "assets/images/durmstrang.mp3");

var evillaugh = document.createElement('audio');
	       evillaugh.setAttribute('src', "assets/images/evillaugh.mp3");

var evillaugh1 = document.createElement('audio');
	       evillaugh1.setAttribute('src', "assets/images/evillaugh1.mp3");

var finishhim = document.createElement('audio');
	       finishhim.setAttribute('src', "assets/images/finishhim.mp3");

var finishhim1 = document.createElement('audio');
	       finishhim1.setAttribute('src', "assets/images/finishhim1.mp3");

var finishher = document.createElement('audio');
	       finishher.setAttribute('src', "assets/images/finishher.mp3");

var finishher1 = document.createElement('audio');
	       finishher1.setAttribute('src', "assets/images/finishher1.mp3");

var battleofhogwarts = document.createElement('audio');
	       battleofhogwarts.setAttribute('src', "assets/images/battleofhogwarts.mp3");

var excellent = document.createElement('audio');
	       excellent.setAttribute('src', "assets/images/excellent.mp3");

var excellent1 = document.createElement('audio');
	       excellent1.setAttribute('src', "assets/images/excellent1.mp3");

var outstanding = document.createElement('audio');
	       outstanding.setAttribute('src', "assets/images/outstanding.mp3");

var quidditch = document.createElement('audio');
	       quidditch.setAttribute('src', "assets/images/quidditch.mp3");

var round1sound = document.createElement('audio');
	       round1sound.setAttribute('src', "assets/images/round1.mp3");

var round2sound = document.createElement('audio');
	       round2sound.setAttribute('src', "assets/images/round2.mp3");

var round3sound = document.createElement('audio');
	       round3sound.setAttribute('src', "assets/images/round3.mp3");

var round4sound = document.createElement('audio');
	       round4sound.setAttribute('src', "assets/images/round4.mp3");

var round5sound = document.createElement('audio');
	       round5sound.setAttribute('src', "assets/images/round5.mp3");

var harryattack = document.createElement('audio');
	       harryattack.setAttribute('src', "assets/images/harry_attack.mp3");

var hermioneattack = document.createElement('audio');
	       hermioneattack.setAttribute('src', "assets/images/hermione_attack.mp3");

var ronattack = document.createElement('audio');
	       ronattack.setAttribute('src', "assets/images/ron_attack.mp3");

var snapeattack = document.createElement('audio');
	       snapeattack.setAttribute('src', "assets/images/snape_attack.mp3");

var umbridgeattack = document.createElement('audio');
	       umbridgeattack.setAttribute('src', "assets/images/umbridge_attack2.mp3");

var voldemortattack = document.createElement('audio');
	       voldemortattack.setAttribute('src', "assets/images/voldemort_attack.mp3");	

var yousuck = document.createElement('audio');
	       yousuck.setAttribute('src', "assets/images/yousuck.mp3");

var explosion = document.createElement('audio');
	       explosion.setAttribute('src', "assets/images/explosion1.mp3");

var flawless = document.createElement('audio');
	       flawless.setAttribute('src', "assets/images/flawlessvictory1.mp3");

var newking = document.createElement('audio');
	       newking.setAttribute('src', "assets/images/newking.mp3");

var newsurvivor = document.createElement('audio');
	       newsurvivor.setAttribute('src', "assets/images/newsurvivor.mp3");

var thronedefended = document.createElement('audio');
	       thronedefended.setAttribute('src', "assets/images/thronedefended.mp3");

var snapespeech = document.createElement('audio');
	       snapespeech.setAttribute('src', "assets/images/snape_speech.mp3");

var cheater = document.createElement('audio');
	       cheater.setAttribute('src', "assets/images/cheater.mp3");

function playyousuck(){
	yousuck.play();
}

function playsnapespeech(){
	snapespeech.play();
}


$("#startgame").animate({opacity: '0'});
$("#options").animate({opacity: '0'});


function buttonappear(){
	$("#startgame").css("display", "block");
	$("#startgame").css("position", "absolute");
	$("#startgame").css("margin-top", "2%");
	$("#startgame").css("left", "7%");
	$("#startgame").animate({opacity: '1'});
}

function optionsappear(){
	$("#options").css("display", "block");
	$("#options").css("position", "absolute");
	$("#options").css("margin-top", "2%");
	$("#options").css("right", "12%");
	$("#options").animate({opacity: '1'});
}


function strengthx2appear(){
	$("#strengthx2").css("display", "block");
	$("#strengthx2").css("position", "absolute");
	$("#strengthx2").css("margin-top", "10%");
	$("#strengthx2").css("right", "7%");
	$("#strengthx2").animate({opacity: '1'});
}

function strengthx3appear(){
	$("#strengthx3").css("display", "block");
	$("#strengthx3").css("position", "absolute");
	$("#strengthx3").css("margin-top", "15%");
	$("#strengthx3").css("right", "7%");
	$("#strengthx3").animate({opacity: '1'});
}

function strengthx5appear(){
	$("#strengthx5").css("display", "block");
	$("#strengthx5").css("position", "absolute");
	$("#strengthx5").css("margin-top", "20%");
	$("#strengthx5").css("right", "7%");
	$("#strengthx5").animate({opacity: '1'});
}






function startscreen(){
	$("#screen").css("background-image", "url(assets/images/hogwartswithlogo.jpg)"); 
	$("#screen").css("background-size", "100% 100%");
	setTimeout(buttonappear,20000);
	setTimeout(optionsappear,20000);
	hedwigstheme.play();
}


$(document).ready(function(){
	startscreen();

	var fighter="";
	var fighterchosen=false;
	var opponent="";
	var opponentchosen=false;
	var timelapse=3000;
	
	//Defines function to move to Character Selection Screen
	function startgame(){
		console.log("Fighter not yet chosen: "+ !fighterchosen);
		hedwigstheme.pause();
		durmstrang.play();
		durmstrang.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);
		$("#chooseyourfighter").attr("src","assets/images/chooseyourfighter.png");
		$("#chooseyourfighter").css("width","50%");
		$("#chooseyourfighter").css("margin-top","60px");		
		$("#screen").css("background-image", "url(assets/images/hogwartsonfire.jpg)"); 
		$("#screen").css("background-size", "100% 100%");
		$("#image2").attr("src","assets/images/harry.jpg");
		$("#image2").css("width","100%");
		$("#image2").css("border-style","solid");
		$("#image2").css("border-color","white");
		$("#image2").css("border-width","5px");
		$("#image3").attr("src","assets/images/hermione.jpg");
		$("#image3").css("width","100%");
		$("#image3").css("border-style","solid");
		$("#image3").css("border-color","white");
		$("#image3").css("border-width","5px");
		$("#image4").attr("src","assets/images/ron.jpg");
		$("#image4").css("width","100%");
		$("#image4").css("border-style","solid");
		$("#image4").css("border-color","white");
		$("#image4").css("border-width","5px");
		$("#image5").attr("src","assets/images/snape.jpg");
		$("#image5").css("width","100%");
		$("#image5").css("border-style","solid");
		$("#image5").css("border-color","white");
		$("#image5").css("border-width","5px");
		$("#image6").attr("src","assets/images/umbridge.jpg");
		$("#image6").css("width","100%");
		$("#image6").css("border-style","solid");
		$("#image6").css("border-color","white");
		$("#image6").css("border-width","5px");
		$("#image7").attr("src","assets/images/voldemort.jpg");
		$("#image7").css("width","100%");
		$("#image7").css("border-style","solid");
		$("#image7").css("border-color","white");
		$("#image7").css("border-width","5px");
		$("#takingcredit").css("display","none");
		$("#takingcredit").html("");

		$("#image2").on("click",function(){
			fighter="harry"
			$("#chooseyourfighter").animate({opacity: '0'});
			$("#image3").animate({opacity: '0.2'});
			$("#image4").animate({opacity: '0.2'});
			$("#image5").animate({opacity: '0.2'});
			$("#image6").animate({opacity: '0.2'});
			$("#image7").animate({opacity: '0.2'});
			$("#image2").css("pointer-events","none");
			$("#image3").css("pointer-events","none");
			$("#image4").css("pointer-events","none");
			$("#image5").css("pointer-events","none");
			$("#image6").css("pointer-events","none");
			$("#image7").css("pointer-events","none");
			var x=Math.floor(Math.random()*2);
			if (x==1){
			excellent1.play();
			}
			else if (x==0){
			excellent1.play();
			}
			setTimeout(fightscene, 3000);
			fighterchosen=true;
			console.log("Fighter has been chosen: "+fighterchosen);
			console.log("Player chose "+fighter);
		})
		$("#image3").on("click",function(){
			fighter="hermione"
			$("#chooseyourfighter").animate({opacity: '0'});
			$("#image2").animate({opacity: '0.2'});
			$("#image4").animate({opacity: '0.2'});
			$("#image5").animate({opacity: '0.2'});
			$("#image6").animate({opacity: '0.2'});
			$("#image7").animate({opacity: '0.2'});
			$("#image2").css("pointer-events","none");
			$("#image3").css("pointer-events","none");
			$("#image4").css("pointer-events","none");
			$("#image5").css("pointer-events","none");
			$("#image6").css("pointer-events","none");
			$("#image7").css("pointer-events","none");
			var x=Math.floor(Math.random()*2);
			if (x==1){
			excellent1.play();
			}
			else if (x==0){
			excellent1.play();
			}
			setTimeout(fightscene, 3000);
			fighterchosen=true;
			console.log("Fighter has been chosen: "+fighterchosen);
			console.log("Player chose "+fighter);
		});
		$("#image4").on("click",function(){
			fighter="ron"
			$("#chooseyourfighter").animate({opacity: '0'});
			$("#image2").animate({opacity: '0.2'});
			$("#image3").animate({opacity: '0.2'});
			$("#image5").animate({opacity: '0.2'});
			$("#image6").animate({opacity: '0.2'});
			$("#image7").animate({opacity: '0.2'});
			$("#image2").css("pointer-events","none");
			$("#image3").css("pointer-events","none");
			$("#image4").css("pointer-events","none");
			$("#image5").css("pointer-events","none");
			$("#image6").css("pointer-events","none");
			$("#image7").css("pointer-events","none");
			var x=Math.floor(Math.random()*2);
			if (x==1){
			excellent1.play();
			}
			else if (x==0){
			excellent1.play();
			}
			setTimeout(fightscene, 3000);
			fighterchosen=true;
			console.log("Fighter has been chosen: "+fighterchosen);
			console.log("Player chose "+fighter);
		});
		$("#image5").on("click",function(){
			fighter="snape"
			$("#chooseyourfighter").animate({opacity: '0'});
			$("#image2").animate({opacity: '0.2'});
			$("#image3").animate({opacity: '0.2'});
			$("#image4").animate({opacity: '0.2'});
			$("#image6").animate({opacity: '0.2'});
			$("#image7").animate({opacity: '0.2'});
			$("#image2").css("pointer-events","none");
			$("#image3").css("pointer-events","none");
			$("#image4").css("pointer-events","none");
			$("#image5").css("pointer-events","none");
			$("#image6").css("pointer-events","none");
			$("#image7").css("pointer-events","none");
			var x=Math.floor(Math.random()*2);
			if (x==1){
			excellent1.play();
			}
			else if (x==0){
			excellent1.play();
			}
			setTimeout(fightscene, 3000);
			fighterchosen=true;
			console.log("Fighter has been chosen: "+fighterchosen);
			console.log("Player chose "+fighter);
		});
		$("#image6").on("click",function(){
			fighter="umbridge"
			$("#chooseyourfighter").animate({opacity: '0'});
			$("#image2").animate({opacity: '0.2'});
			$("#image3").animate({opacity: '0.2'});
			$("#image4").animate({opacity: '0.2'});
			$("#image5").animate({opacity: '0.2'});
			$("#image7").animate({opacity: '0.2'});
			$("#image2").css("pointer-events","none");
			$("#image3").css("pointer-events","none");
			$("#image4").css("pointer-events","none");
			$("#image5").css("pointer-events","none");
			$("#image6").css("pointer-events","none");
			$("#image7").css("pointer-events","none");
			var x=Math.floor(Math.random()*2);
			if (x==1){
			excellent1.play();
			}
			else if (x==0){
			excellent1.play();
			}
			setTimeout(fightscene, 3000);
			fighterchosen=true;
			console.log("Fighter has been chosen: "+fighterchosen);
			console.log("Player chose "+fighter);
		});
		$("#image7").on("click",function(){
			fighter="voldemort"
			$("#chooseyourfighter").animate({opacity: '0'});
			$("#image2").animate({opacity: '0.2'});
			$("#image3").animate({opacity: '0.2'});
			$("#image4").animate({opacity: '0.2'});
			$("#image5").animate({opacity: '0.2'});
			$("#image6").animate({opacity: '0.2'});
			$("#image2").css("pointer-events","none");
			$("#image3").css("pointer-events","none");
			$("#image4").css("pointer-events","none");
			$("#image5").css("pointer-events","none");
			$("#image6").css("pointer-events","none");
			$("#image7").css("pointer-events","none");
			var x=Math.floor(Math.random()*2);
			if (x==1){
			excellent1.play();
			}
			else if (x==0){
			excellent1.play();
			}
			setTimeout(fightscene, 3000);
			fighterchosen=true;
			console.log("Fighter has been chosen: "+fighterchosen);
			console.log("Player chose "+fighter);
		});

	};
	//End of "startgame" function


		$("#options").on("click",function(){
			$("#options").css("display","none");
			setTimeout(strengthx2appear, 500);
			setTimeout(strengthx3appear, 500);
			setTimeout(strengthx5appear, 500);
		});


		var timer = setTimeout(function() { $("#startgame").click(); }, 35000);
		$("#startgame").on("click",function(){
			clearTimeout(timer);
			$("#startgame").css("display","none");
			$("#options").css("display","none");
			$("#strengthx2").css("display","none");
			$("#strengthx3").css("display","none");
			$("#strengthx5").css("display","none");
			cometodie.play();
			setTimeout(startgame, 4000);
		});


			var playerhealth=1;
			var attackpower=1;
			var opponenthealth=1;
			var counterpower=1;
			var ifhitadd=1;
			var ifmisssubtract=1;
			var cheat=1;

			$("#strengthx2").on("click",function(){
				cheat=2;
				cheater.play();
				$("#strengthx2").css("display","none");
				$("#strengthx3").css("display","none");
				$("#strengthx5").css("display","none");
			});

			$("#strengthx3").on("click",function(){
				cheat=3;
				cheater.play();
				$("#strengthx2").css("display","none");
				$("#strengthx3").css("display","none");
				$("#strengthx5").css("display","none");
			});

			$("#strengthx5").on("click",function(){
				cheat=5;
				cheater.play();
				$("#strengthx2").css("display","none");
				$("#strengthx3").css("display","none");
				$("#strengthx5").css("display","none");
			});


			var harrydead=false;
			var hermionedead=false;
			var rondead=false;
			var snapedead=false;
			var umbridgedead=false;
			var voldemortdead=false;


			var harry={
				health: 850,
				attackpower: 150,
				ifhitadd: 35,
				ifmisssubtract: 8,
				counterpower: 175,
			}

			var hermione={
				health: 750,
				attackpower: 135,
				ifhitadd: 45,
				ifmisssubtract: 8,
				counterpower: 150,
			}

			var ron={
				health: 700,
				attackpower: 125,
				ifhitadd: 35,
				ifmisssubtract: 5,
				counterpower: 140,
			}

			var snape={
				health: 900,
				attackpower: 170,
				ifhitadd: 25,
				ifmisssubtract: 4,
				counterpower: 190,
			}

			var umbridge={
				health: 650,
				attackpower: 135,
				ifhitadd: 30,
				ifmisssubtract: 5,
				counterpower: 150,
			}

			var voldemort={
				health: 1000,
				attackpower: 190,
				ifhitadd: 5,
				ifmisssubtract: 2,
				counterpower: 230,
			}

			$("#playerhealth").css("position","absolute");	
			$("#playerhealth").css("left","5%");	
			$("#playerhealth").css("top","250px");
			$("#playerhealth").html("Health Points: "+playerhealth);
			$("#playerhealth").animate({opacity: '0'});
			$("#attackpower").css("position","absolute");	
			$("#attackpower").css("left","5%");	
			$("#attackpower").css("top","290px");
			$("#attackpower").html("Attack Power: "+attackpower);
			$("#attackpower").animate({opacity: '0'});
			$("#opponenthealth").css("position","absolute");	
			$("#opponenthealth").css("left","83%");	
			$("#opponenthealth").css("top","250px");
			$("#opponenthealth").html("Health Points: "+opponenthealth);
			$("#opponenthealth").animate({opacity: '0'});
			$("#counterpower").css("position","absolute");	
			$("#counterpower").css("left","83%");	
			$("#counterpower").css("top","290px");
			$("#counterpower").html("Counterattack Power: "+counterpower);
			$("#counterpower").animate({opacity: '0'});



		//Defines function to take us to Opponent Selection Screen
		function fightscene(){
			durmstrang.pause();
			battleofhogwarts.play();
			battleofhogwarts.addEventListener('ended', function() {
   			this.currentTime = 0;
    		this.play();
			}, false);
			$("#screen").css("background-image", "url(assets/images/hogwartsbattle2.PNG)"); 
			$("#screen").css("padding-left", "3.5%"); 
			$("#row1").remove();
			$("#row2").remove();
			$("#row3").remove();
			$("#image8").attr("src","assets/images/harry.jpg");
			$("#image8").css("width","15%");
			$("#image8").css("border-style","solid");
			$("#image8").css("border-color","white");
			$("#image8").css("border-width","5px");
			$("#image8").css("margin","2%");
			$("#image8").css("float","left");
			$("#image9").attr("src","assets/images/hermione.jpg");
			$("#image9").css("width","15%");
			$("#image9").css("border-style","solid");
			$("#image9").css("border-color","white");
			$("#image9").css("border-width","5px");
			$("#image9").css("margin","2%");
			$("#image9").css("float","left");
			$("#image10").attr("src","assets/images/ron.jpg");
			$("#image10").css("width","15%");
			$("#image10").css("border-style","solid");
			$("#image10").css("border-color","white");
			$("#image10").css("border-width","5px");
			$("#image10").css("margin","2%");
			$("#image10").css("float","left");
			$("#image11").attr("src","assets/images/snape.jpg");
			$("#image11").css("width","15%");
			$("#image11").css("border-style","solid");
			$("#image11").css("border-color","white");
			$("#image11").css("border-width","5px");
			$("#image11").css("margin","2%");
			$("#image11").css("float","left");
			$("#image12").attr("src","assets/images/umbridge.jpg");
			$("#image12").css("width","15%");
			$("#image12").css("border-style","solid");
			$("#image12").css("border-color","white");
			$("#image12").css("border-width","5px");
			$("#image12").css("margin","2%");
			$("#image12").css("float","left");
			$("#image13").attr("src","assets/images/voldemort.jpg");
			$("#image13").css("width","15%");
			$("#image13").css("border-style","solid");
			$("#image13").css("border-color","white");
			$("#image13").css("border-width","5px");
			$("#image13").css("margin","2%");
			$("#image13").css("float","left");

			$("#pickopponent1").attr("src","assets/images/pickopponent.png");
			$("#pickopponent1").css("position","absolute");
			$("#pickopponent1").css("width","20%");
			$("#pickopponent1").css("right","0%");
			$("#pickopponent1").css("top","5%");
			$("#pickopponent1").animate({opacity: '1'});
			$("#pickopponent1").animate({opacity: '0.2'});
			$("#pickopponent1").animate({opacity: '1'});
			$("#pickopponent1").animate({opacity: '0.2'});
			$("#pickopponent1").animate({opacity: '1'});
			$("#pickopponent1").animate({opacity: '0.2'});
			$("#pickopponent1").animate({opacity: '1'});
			$("#pickopponent1").animate({opacity: '0.2'});
			$("#pickopponent1").animate({opacity: '1'});
			$("#pickopponent1").animate({opacity: '0.2'});
			$("#pickopponent1").animate({opacity: '1'});
			$("#pickopponent1").animate({opacity: '0.2'});
			$("#pickopponent1").animate({opacity: '1'});

			$("#versus").attr("src","assets/images/versus.png");
			$("#versus").css("display","none");	
			$("#versus").animate({opacity: '0'});
			$("#versus").css("position","absolute");	
			$("#versus").css("width","15%");	
			$("#versus").css("left","42.5%");	
			$("#versus").css("bottom","70px");	
			$("#startround1").css("position","absolute");
			$("#startround1").css("left","70px");
			$("#startround1").css("top","50px");
			$("#startround2").css("position","absolute");
			$("#startround2").css("left","70px");
			$("#startround2").css("top","50px");
			$("#startround3").css("position","absolute");
			$("#startround3").css("left","70px");
			$("#startround3").css("top","50px");
			$("#startround4").css("position","absolute");
			$("#startround4").css("left","70px");
			$("#startround4").css("top","50px");
			$("#startround5").css("position","absolute");
			$("#startround5").css("left","70px");
			$("#startround5").css("top","50px");
			$("#attack1").css("position","absolute");
			$("#attack1").css("left","70px");
			$("#attack1").css("top","50px");
			$("#attack1").css("pointer-events","none");
			$("#attack2").css("position","absolute");
			$("#attack2").css("left","70px");
			$("#attack2").css("top","50px");
			$("#attack2").css("pointer-events","none");
			$("#attack3").css("position","absolute");
			$("#attack3").css("left","70px");
			$("#attack3").css("top","50px");
			$("#attack3").css("pointer-events","none");
			$("#attack4").css("position","absolute");
			$("#attack4").css("left","70px");
			$("#attack4").css("top","50px");
			$("#attack4").css("pointer-events","none");
			$("#attack5").css("position","absolute");
			$("#attack5").css("left","70px");
			$("#attack5").css("top","50px");
			$("#attack5").css("pointer-events","none");
			$("#explosion1").attr("src","assets/images/explosion1.gif");
			$("#explosion1").css("display","none");	
			$("#explosion1").animate({opacity: '0'});
			$("#explosion1").css("position","absolute");	
			$("#explosion1").css("width","15%");	
			$("#explosion1").css("left","42%");	
			$("#explosion1").css("bottom","60px");
			$("#explosion2").attr("src","assets/images/explosion2.gif");
			$("#explosion2").css("display","none");	
			$("#explosion2").animate({opacity: '0'});
			$("#explosion2").css("position","absolute");	
			$("#explosion2").css("width","15%");	
			$("#explosion2").css("left","42%");	
			$("#explosion2").css("bottom","70px");
			$("#counterattack").attr("src","assets/images/counterattack.png");
			$("#counterattack").css("display","none");	
			$("#counterattack").animate({opacity: '0'});
			$("#counterattack").css("position","absolute");	
			$("#counterattack").css("width","20%");	
			$("#counterattack").css("right","0%");	
			$("#counterattack").css("top","3%");	
			$("#fight").attr("src","assets/images/fight.png");
			$("#fight").css("display","none");	
			$("#fight").animate({opacity: '0'});
			$("#fight").css("width","50%");
			$("#fight").css("position","absolute");
			$("#fight").css("left","25%");
			$("#fight").css("top","35%");
			$("#directhit").attr("src","assets/images/directhit.png");
			$("#directhit").css("display","none");	
			$("#directhit").animate({opacity: '1'});
			$("#directhit").css("position","absolute");
			$("#directhit").css("width","35%");	
			$("#directhit").css("top","60%");
			$("#directhit").css("left","32%");
			$("#spellmissed").attr("src","assets/images/spellmissed.png");
			$("#spellmissed").css("display","none");	
			$("#spellmissed").animate({opacity: '1'});
			$("#spellmissed").css("position","absolute");
			$("#spellmissed").css("width","35%");	
			$("#spellmissed").css("top","60%");
			$("#spellmissed").css("left","32%");
			$("#youaredead").attr("src","assets/images/youaredead.jpg");
			$("#youaredead").css("display","none");	
			$("#youaredead").animate({opacity: '0'});
			$("#youaredead").css("width","50%");
			$("#youaredead").css("position","absolute");
			$("#youaredead").css("left","25%");
			$("#youaredead").css("top","35%");
			$("#finishhim").attr("src","assets/images/finishhim.png");
			$("#finishhim").css("display","none");	
			$("#finishhim").animate({opacity: '0'});
			$("#finishhim").css("width","50%");
			$("#finishhim").css("position","absolute");
			$("#finishhim").css("left","25%");
			$("#finishhim").css("top","35%");
			$("#finishher").attr("src","assets/images/finishher.gif");
			$("#finishher").css("display","none");	
			$("#finishher").animate({opacity: '0'});
			$("#finishher").css("width","50%");
			$("#finishher").css("position","absolute");
			$("#finishher").css("left","25%");
			$("#finishher").css("top","20%");
			$("#finish").css("position","absolute");
			$("#finish").css("left","70px");
			$("#finish").css("top","50px");
			$("#next").css("position","absolute");
			$("#next").css("left","70px");
			$("#next").css("top","50px");



			if(fighter=="harry"){
				$("#image8").css("position","absolute");
				$("#image8").css("bottom","20px");
				$("#image8").css("left","20px");
				$("#image8").css("width","20%");	
				$("#pickopponent").css("display","none");
				
			}	
			else if(fighter=="hermione"){
				$("#image9").css("position","absolute");
				$("#image9").css("bottom","20px");
				$("#image9").css("left","20px");
				$("#image9").css("width","20%");
				$("#pickopponent").css("display","none");
				
			}	
			else if(fighter=="ron"){
				$("#image10").css("position","absolute");
				$("#image10").css("bottom","20px");
				$("#image10").css("left","20px");
				$("#image10").css("width","20%");
				$("#pickopponent").css("display","none");
				
			}	
			else if(fighter=="snape"){
				$("#image11").css("position","absolute");
				$("#image11").css("bottom","20px");
				$("#image11").css("left","20px");
				$("#image11").css("width","20%");
				$("#pickopponent").css("display","none");
				
			}	
			else if(fighter=="umbridge"){
				$("#image12").css("position","absolute");
				$("#image12").css("bottom","20px");
				$("#image12").css("left","20px");
				$("#image12").css("width","20%");
				$("#pickopponent").css("display","none");
				
			}	
			else if(fighter=="voldemort"){
				$("#image13").css("position","absolute");
				$("#image13").css("bottom","20px");
				$("#image13").css("left","20px");
				$("#image13").css("width","20%");
				$("#pickopponent").css("display","none");
				
			}	

		}
		//End of "fightscene" function


		var opponent1="";
		var opponent2="";
		var opponent3="";
		var opponent4="";
		var opponent5="";
		var opponentid="";

		var round=1;






		$("#image8").on("click",function(){
			if (fighter=="harry"){
				console.log("Harry is already chosen");
			}
			else {
			$("#image8").css("pointer-events","none");
			$("#image9").css("pointer-events","none");
			$("#image10").css("pointer-events","none");
			$("#image11").css("pointer-events","none");
			$("#image12").css("pointer-events","none");
			$("#image13").css("pointer-events","none");
			$("#image8").css("position","absolute");
			$("#image8").css("bottom","20px");
			$("#image8").css("right","20px");
			$("#image8").css("width","20%");
			$("#image8").animate({opacity: '0.2'});
			$("#image8").animate({opacity: '1'});	
			$("#image8").animate({opacity: '0.2'});
			$("#image8").animate({opacity: '1'});	
			$("#image8").animate({opacity: '0.2'});
			$("#image8").animate({opacity: '1'});	
			$("#versus").css("display","block");
			$("#versus").animate({opacity: '1'});
			$("#pickopponent1").css("display","none");	
			if (round==1){
				opponent1="harry";
				console.log("Opponent #1 is "+opponent1);
				setTimeout(round1button,timelapse);
			}
			else if (round==2){
				opponent2="harry";
				console.log("Opponent #2 is "+opponent2);
				setTimeout(round2button,timelapse);
			}
			else if (round==3){
				opponent3="harry";
				console.log("Opponent #3 is "+opponent3);
				setTimeout(round3button,timelapse);
			}
			else if (round==4){
				opponent4="harry";
				console.log("Opponent #4 is "+opponent4);
				setTimeout(round4button,timelapse);
			}
			else if (round==5){
				opponent5="harry";
				console.log("Opponent #5 is "+opponent5);
				setTimeout(round5button,timelapse);
			}
			var x=Math.floor(Math.random()*2);
			if (x==1){
			evillaugh.play();
			}
			else if (x==0){
			evillaugh.play();
			}
		}

		});

		$("#image9").on("click",function(){
			if (fighter=="hermione"){
				console.log("Hermione is already chosen");
			}
			else {
			$("#image8").css("pointer-events","none");
			$("#image9").css("pointer-events","none");
			$("#image10").css("pointer-events","none");
			$("#image11").css("pointer-events","none");
			$("#image12").css("pointer-events","none");
			$("#image13").css("pointer-events","none");
			$("#image9").css("position","absolute");
			$("#image9").css("bottom","20px");
			$("#image9").css("right","20px");
			$("#image9").css("width","20%");	
			$("#image9").animate({opacity: '0.2'});
			$("#image9").animate({opacity: '1'});	
			$("#image9").animate({opacity: '0.2'});
			$("#image9").animate({opacity: '1'});	
			$("#image9").animate({opacity: '0.2'});
			$("#image9").animate({opacity: '1'});	
			$("#versus").css("display","block");
			$("#versus").animate({opacity: '1'});
			$("#pickopponent1").css("display","none");	
			if (round==1){
				opponent1="hermione";
				console.log("Opponent #1 is "+opponent1);
				setTimeout(round1button,timelapse);
			}
			else if (round==2){
				opponent2="hermione";
				console.log("Opponent #2 is "+opponent2);
				setTimeout(round2button,timelapse);
			}
			else if (round==3){
				opponent3="hermione";
				console.log("Opponent #3 is "+opponent3);
				setTimeout(round3button,timelapse);
			}
			else if (round==4){
				opponent4="hermione";
				console.log("Opponent #4 is "+opponent4);
				setTimeout(round4button,timelapse);
			}
			else if (round==5){
				opponent5="hermione";
				console.log("Opponent #5 is "+opponent5);
				setTimeout(round5button,timelapse);
			}
			var x=Math.floor(Math.random()*2);
			if (x==1){
			evillaugh.play();
			}
			else if (x==0){
			evillaugh.play();
			}
		}

		});

		$("#image10").on("click",function(){
			if (fighter=="ron"){
				console.log("Ron is already chosen");
			}
			else {
			$("#image8").css("pointer-events","none");
			$("#image9").css("pointer-events","none");
			$("#image10").css("pointer-events","none");
			$("#image11").css("pointer-events","none");
			$("#image12").css("pointer-events","none");
			$("#image13").css("pointer-events","none");
			$("#image10").css("position","absolute");
			$("#image10").css("bottom","20px");
			$("#image10").css("right","20px");
			$("#image10").css("width","20%");
			$("#image10").animate({opacity: '0.2'});
			$("#image10").animate({opacity: '1'});	
			$("#image10").animate({opacity: '0.2'});
			$("#image10").animate({opacity: '1'});	
			$("#image10").animate({opacity: '0.2'});
			$("#image10").animate({opacity: '1'});		
			$("#versus").css("display","block");
			$("#versus").animate({opacity: '1'});
			$("#pickopponent1").css("display","none");				
			if (round==1){
				opponent1="ron";
				console.log("Opponent #1 is "+opponent1);
				setTimeout(round1button,timelapse);
			}
			else if (round==2){
				opponent2="ron";
				console.log("Opponent #2 is "+opponent2);
				setTimeout(round2button,timelapse);
			}
			else if (round==3){
				opponent3="ron";
				console.log("Opponent #3 is "+opponent3);
				setTimeout(round3button,timelapse);
			}
			else if (round==4){
				opponent4="ron";
				console.log("Opponent #4 is "+opponent4);
				setTimeout(round4button,timelapse);
			}
			else if (round==5){
				opponent5="ron";
				console.log("Opponent #5 is "+opponent5);
				setTimeout(round5button,timelapse);
			}
			var x=Math.floor(Math.random()*2);
			if (x==1){
			evillaugh.play();
			}
			else if (x==0){
			evillaugh.play();
			}
		}

		});

		$("#image11").on("click",function(){
			if (fighter=="snape"){
				console.log("Snape is already chosen");
			}
			else {
			$("#image8").css("pointer-events","none");
			$("#image9").css("pointer-events","none");
			$("#image10").css("pointer-events","none");
			$("#image11").css("pointer-events","none");
			$("#image12").css("pointer-events","none");
			$("#image13").css("pointer-events","none");
			$("#image11").css("position","absolute");
			$("#image11").css("bottom","20px");
			$("#image11").css("right","20px");
			$("#image11").css("width","20%");
			$("#image11").animate({opacity: '0.2'});
			$("#image11").animate({opacity: '1'});	
			$("#image11").animate({opacity: '0.2'});
			$("#image11").animate({opacity: '1'});	
			$("#image11").animate({opacity: '0.2'});
			$("#image11").animate({opacity: '1'});			
			$("#versus").css("display","block");
			$("#versus").animate({opacity: '1'});
			$("#pickopponent1").css("display","none");		
			if (round==1){
				opponent1="snape";
				console.log("Opponent #1 is "+opponent1);
				setTimeout(round1button,timelapse);
			}
			else if (round==2){
				opponent2="snape";
				console.log("Opponent #2 is "+opponent2);
				setTimeout(round2button,timelapse);
			}
			else if (round==3){
				opponent3="snape";
				console.log("Opponent #3 is "+opponent3);
				setTimeout(round3button,timelapse);
			}
			else if (round==4){
				opponent4="snape";
				console.log("Opponent #4 is "+opponent4);
				setTimeout(round4button,timelapse);
			}
			else if (round==5){
				opponent5="snape";
				console.log("Opponent #5 is "+opponent5);
				setTimeout(round5button,timelapse);
			}
			var x=Math.floor(Math.random()*2);
			if (x==1){
			evillaugh.play();
			}
			else if (x==0){
			evillaugh.play();
			}
		}

		});

		$("#image12").on("click",function(){
			if (fighter=="umbridge"){
				console.log("Umbridge is already chosen");
			}
			else {
			$("#image8").css("pointer-events","none");
			$("#image9").css("pointer-events","none");
			$("#image10").css("pointer-events","none");
			$("#image11").css("pointer-events","none");
			$("#image12").css("pointer-events","none");
			$("#image13").css("pointer-events","none");
			$("#image12").css("position","absolute");
			$("#image12").css("bottom","20px");
			$("#image12").css("right","20px");
			$("#image12").css("width","20%");
			$("#image12").animate({opacity: '0.2'});
			$("#image12").animate({opacity: '1'});	
			$("#image12").animate({opacity: '0.2'});
			$("#image12").animate({opacity: '1'});	
			$("#image12").animate({opacity: '0.2'});
			$("#image12").animate({opacity: '1'});		
			$("#versus").css("display","block");
			$("#versus").animate({opacity: '1'});
			$("#pickopponent1").css("display","none");			
			if (round==1){
				opponent1="umbridge";
				console.log("Opponent #1 is "+opponent1);
				setTimeout(round1button,timelapse);
			}
			else if (round==2){
				opponent2="umbridge";
				console.log("Opponent #2 is "+opponent2);
				setTimeout(round2button,timelapse);
			}
			else if (round==3){
				opponent3="umbridge";
				console.log("Opponent #3 is "+opponent3);
				setTimeout(round3button,timelapse);
			}
			else if (round==4){
				opponent4="umbridge";
				console.log("Opponent #4 is "+opponent4);
				setTimeout(round4button,timelapse);
			}
			else if (round==5){
				opponent5="umbridge";
				console.log("Opponent #5 is "+opponent5);
				setTimeout(round5button,timelapse);
			}
			var x=Math.floor(Math.random()*2);
			if (x==1){
			evillaugh.play();
			}
			else if (x==0){
			evillaugh.play();
			}

		}

		});

		$("#image13").on("click",function(){
			if (fighter=="voldemort"){
				console.log("Voldemort is already chosen");
			}
			else {
			$("#image8").css("pointer-events","none");
			$("#image9").css("pointer-events","none");
			$("#image10").css("pointer-events","none");
			$("#image11").css("pointer-events","none");
			$("#image12").css("pointer-events","none");
			$("#image13").css("pointer-events","none");
			$("#image13").css("position","absolute");
			$("#image13").css("bottom","20px");
			$("#image13").css("right","20px");
			$("#image13").css("width","20%");
			$("#image13").animate({opacity: '0.2'});
			$("#image13").animate({opacity: '1'});	
			$("#image13").animate({opacity: '0.2'});
			$("#image13").animate({opacity: '1'});	
			$("#image13").animate({opacity: '0.2'});
			$("#image13").animate({opacity: '1'});		
			$("#versus").css("display","block");
			$("#versus").animate({opacity: '1'});
			$("#pickopponent1").css("display","none");			
			if (round==1){
				opponent1="voldemort";
				console.log("Opponent #1 is "+opponent1);
				setTimeout(round1button,timelapse);
			}
			else if (round==2){
				opponent2="voldemort";
				console.log("Opponent #2 is "+opponent2);
				setTimeout(round2button,timelapse);
			}
			else if (round==3){
				opponent3="voldemort";
				console.log("Opponent #3 is "+opponent3);
				setTimeout(round3button,timelapse);
			}
			else if (round==4){
				opponent4="voldemort";
				console.log("Opponent #4 is "+opponent4);
				setTimeout(round4button,timelapse);
			}
			else if (round==5){
				opponent5="voldemort";
				console.log("Opponent #5 is "+opponent5);
				setTimeout(round5button,timelapse);
			}
			var x=Math.floor(Math.random()*2);
			if (x==1){
			evillaugh.play();
			}
			else if (x==0){
			evillaugh.play();
			}
		}

		});

function gifgone(){
	$("#explosion1").css("display","none");
	$("#explosion2").css("display","none");
	}

function hitormissgone(){
	$("#directhit").css("display","none");
	$("#spellmissed").css("display","none");
}

function skeletongone(){
	$("body").css("background-image", "");
	$("#screen").css("display","block");
	}

function nuketoskeleton(){
	$("body").css("background-image", "url(assets/images/skeleton.gif)");
	$("body").css("background-size", "100% 100%");
}

function currentopponent(){	
	if (round==1){
		opponentid=opponent1;
	}
	else if (round==2){
		opponentid=opponent2;
	}
	else if (round==3){
		opponentid=opponent3;
	}
	else if (round==4){
		opponentid=opponent4;
	}
	else if (round==5){
		opponentid=opponent5;
	}
}

function finishbutton(){
	$("#finish").css("display","block");
}

function round1button(){
	$("#startround1").css("display","block");
}

function round2button(){
	$("#startround2").css("display","block");
}

function round3button(){
	$("#startround3").css("display","block");
}

function round4button(){
	$("#startround4").css("display","block");
}

function round5button(){
	$("#startround5").css("display","block");
}

function playerfires(){
	var a=Math.floor(Math.random()*2);
			if (a==1){
			$("#explosion1").css("display","block");
			$("#explosion1").css("left","4%");
			$("#explosion1").animate({opacity: '1'});
			$("#explosion1").animate({left:"+=75.5%"}, "normal");	
			setTimeout(gifgone, 2000);
			}
			else if (a==0){
			$("#explosion2").css("display","block");
			$("#explosion2").css("left","4%");
			$("#explosion2").animate({opacity: '1'});
			$("#explosion2").animate({left:"+=75%"}, "normal");	
			setTimeout(gifgone, 2000);
			}
			if (fighter=="harry"){
				harryattack.currentTime=0;
				harryattack.play();
			}
			else if (fighter=="hermione"){
				hermioneattack.currentTime=0;
				hermioneattack.play();
			}
			else if (fighter=="ron"){
				ronattack.currentTime=0;
				ronattack.play();
			}
			else if (fighter=="snape"){
				snapeattack.currentTime=0;
				snapeattack.play();
			}
			else if (fighter=="umbridge"){
				umbridgeattack.currentTime=0;
				umbridgeattack.play();
			}
			else if (fighter=="voldemort"){
				voldemortattack.currentTime=0;
				voldemortattack.play();
			}
		var b=Math.floor(Math.random()*2);
		//spell hits
			if (b==1){
				function reduceopponenthealth(){
					opponenthealth=opponenthealth-attackpower;
					if (opponenthealth<1){
						// opponenthealth=0;
						counterpower=0;
						$("#attack1").css("display","none");
						$("#attack2").css("display","none");
						$("#attack3").css("display","none");
						$("#attack4").css("display","none");
						$("#attack5").css("display","none");
						$("#playerhealth").css("display","none");
						$("#attackpower").css("display","none");
						$("#opponenthealth").css("display","none");
						$("#counterpower").css("display","none");
						$("#counterattack").css("display","none");
						setTimeout(finishhim,2000);
					}
					$("#opponenthealth").html("Health Points: "+opponenthealth);
				}
				function increaseattackpower(){
					attackpower=attackpower+ifhitadd;
					$("#attackpower").html("Attack Power: "+attackpower);
				}
				setTimeout(reduceopponenthealth, 2000);
				setTimeout(increaseattackpower, 2000);
				setTimeout(directhit,1500);
			}
		//spell misses
			else if (b==0){
				opponenthealth=opponenthealth;
				function decreaseattackpower(){
					attackpower=attackpower-ifmisssubtract;
					$("#attackpower").html("Attack Power: "+attackpower);
				}
				setTimeout(decreaseattackpower, 2000);
				setTimeout(spellmissed,1500);
		}
}

function opponentfires(){
			if(opponenthealth<1){
				return
			}
	var x=Math.floor(Math.random()*2);
			$("#counterattack").css("display","block");	
			$("#counterattack").animate({opacity: '1'});
			$("#counterattack").animate({opacity: '0'});
			$("#counterattack").animate({opacity: '1'});
			$("#counterattack").animate({opacity: '0'});
			$("#counterattack").animate({opacity: '1'});
			$("#counterattack").animate({opacity: '0'});

			if (x==1){
			$("#explosion1").css("display","block");
			$("#explosion1").css("left","80%");	
			$("#explosion1").animate({opacity: '1'});
			$("#explosion1").animate({left:"-=75.5%"}, "normal");	
			setTimeout(gifgone, 2000);
			}
			else if (x==0){
			$("#explosion2").css("display","block");
			$("#explosion2").css("left","80%");	
			$("#explosion2").animate({opacity: '1'});
			$("#explosion2").animate({left:"-=75%"}, "normal");	
			setTimeout(gifgone, 2000);
			}
			if (opponentid=="harry"){
				harryattack.currentTime=0;
				harryattack.play();
			}
			else if (opponentid=="hermione"){
				hermioneattack.currentTime=0;
				hermioneattack.play();
			}
			else if (opponentid=="ron"){
				ronattack.currentTime=0;
				ronattack.play();
			}
			else if (opponentid=="snape"){
				snapeattack.currentTime=0;
				snapeattack.play();
			}
			else if (opponentid=="umbridge"){
				umbridgeattack.currentTime=0;
				umbridgeattack.play();
			}
			else if (opponentid=="voldemort"){
				voldemortattack.currentTime=0;
				voldemortattack.play();
			}

	var y=Math.floor(Math.random()*2);
			//spell hits
			if (y==1){
				function reduceplayerhealth(){
					playerhealth=playerhealth-counterpower;
					if (playerhealth<1){
						$("#attack1").css("display","none");
						$("#attack2").css("display","none");
						$("#attack3").css("display","none");
						$("#attack4").css("display","none");
						$("#attack5").css("display","none");
						$("#playerhealth").css("display","none");
						$("#attackpower").css("display","none");
						$("#opponenthealth").css("display","none");
						$("#counterpower").css("display","none");
						setTimeout(youaredeadlogo,2000);
					}
					$("#playerhealth").html("Health Points: "+playerhealth);
				}
				setTimeout(reduceplayerhealth, 2000);
				setTimeout(directhit,1500);
			}
			//spell misses
			else if (y==0){
				playerhealth=playerhealth;
				$("#playerhealth").html("Health Points: "+playerhealth);
				setTimeout(spellmissed,1500);
			}
		}


function showpoints(){
	$("#playerhealth").css("display","block");
	$("#playerhealth").animate({opacity: '1'});
	$("#attackpower").css("display","block");
	$("#attackpower").animate({opacity: '1'});
	$("#opponenthealth").css("display","block");
	$("#opponenthealth").animate({opacity: '1'});
	$("#counterpower").css("display","block");
	$("#counterpower").animate({opacity: '1'});	
}

function fightlogoflash(){
	$("#fight").css("display","block");	
	$("#fight").animate({opacity: '1'});
	$("#fight").animate({opacity: '0.2'});
	$("#fight").animate({opacity: '1'});
	$("#fight").animate({opacity: '0.2'});
}

function fightlogofade(){
	$("#fight").css("display","none");	
}

function fightlogo(){
	setTimeout(fightlogoflash, 2000);
	setTimeout(fightlogofade, 3500);
}


function attackbuttonactive(){
	$("#attack1").css("pointer-events","auto");
	$("#attack2").css("pointer-events","auto");
	$("#attack3").css("pointer-events","auto");
	$("#attack4").css("pointer-events","auto");
	$("#attack5").css("pointer-events","auto");
}




$("#startround1").on("click",function(){
	setTimeout(attackbuttonactive, 3000);
	battleofhogwarts.pause();
	round1sound.play();
	fightlogo();
	quidditch.play();
	quidditch.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);	
	$("#startround1").css("display","none");
	$("#versus").css("display","none");
	$("#attack1").css("display","block");
	setTimeout(showpoints, 1000);
	currentopponent();
	console.log("This is Round #"+round);
	console.log("Player is using: "+fighter);
	console.log("Current Opponent: "+opponentid);

	if (fighter=="harry"){
		playerhealth=harry.health*cheat;
		attackpower=harry.attackpower*cheat;
		ifhitadd=harry.ifhitadd;
		ifmisssubtract=harry.ifmisssubtract;
		$("#playerhealth").html("Health Points: "+playerhealth);
		$("#attackpower").html("Attack Power: "+attackpower);
	}
	else if (fighter=="hermione"){
		playerhealth=hermione.health*cheat;
		attackpower=hermione.attackpower*cheat;
		ifhitadd=hermione.ifhitadd;
		ifmisssubtract=hermione.ifmisssubtract;
		$("#playerhealth").html("Health Points: "+playerhealth);
		$("#attackpower").html("Attack Power: "+attackpower);
	}
	else if (fighter=="ron"){
		playerhealth=ron.health*cheat;
		attackpower=ron.attackpower*cheat;
		ifhitadd=ron.ifhitadd;
		ifmisssubtract=ron.ifmisssubtract;
		$("#playerhealth").html("Health Points: "+playerhealth);
		$("#attackpower").html("Attack Power: "+attackpower);
	}
	else if (fighter=="snape"){
		playerhealth=snape.health*cheat;
		attackpower=snape.attackpower*cheat;
		ifhitadd=snape.ifhitadd;
		ifmisssubtract=snape.ifmisssubtract;
		$("#playerhealth").html("Health Points: "+playerhealth);
		$("#attackpower").html("Attack Power: "+attackpower);
	}
	else if (fighter=="umbridge"){
		playerhealth=umbridge.health*cheat;
		attackpower=umbridge.attackpower*cheat;
		ifhitadd=umbridge.ifhitadd;
		ifmisssubtract=umbridge.ifmisssubtract;
		$("#playerhealth").html("Health Points: "+playerhealth);
		$("#attackpower").html("Attack Power: "+attackpower);
	}
	else if (fighter=="voldemort"){
		playerhealth=voldemort.health*cheat;
		attackpower=voldemort.attackpower*cheat;
		ifhitadd=voldemort.ifhitadd;
		ifmisssubtract=voldemort.ifmisssubtract;
		$("#playerhealth").html("Health Points: "+playerhealth);
		$("#attackpower").html("Attack Power: "+attackpower);
	}

	if (opponentid=="harry"){
		opponenthealth=harry.health;
		counterpower=harry.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="hermione"){
		opponenthealth=hermione.health;
		counterpower=hermione.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="ron"){
		opponenthealth=ron.health;
		counterpower=ron.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="snape"){
		opponenthealth=snape.health;
		counterpower=snape.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="umbridge"){
		opponenthealth=umbridge.health;
		counterpower=umbridge.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="voldemort"){
		opponenthealth=voldemort.health;
		counterpower=voldemort.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
$("#attack1").on("click",function(){
	$("#attack1").css("pointer-events","none");
	setTimeout(refreshattack, 6100);
	playerfires();
	setTimeout(opponentfires, 3000);
	function updatehealth(){
	console.log("Player health is now: "+playerhealth);
	console.log("Opponent health is now: "+opponenthealth);
	}
	setTimeout(updatehealth, 6000);
	});
});




function youaredeadlogo(){
	quidditch.pause();
	harryattack.pause();
	hermioneattack.pause();
	ronattack.pause();
	snapeattack.pause();
	umbridgeattack.pause();
	voldemortattack.pause();
	$("#screen").css("background-image", "url(assets/images/youaredead1.jpg)"); 
	$("#screen").animate({opacity: '1'});
	$("#screen").animate({opacity: '0.2'});
	$("#screen").animate({opacity: '1'});
	$("#screen").animate({opacity: '0.2'});
	$("#screen").animate({opacity: '1'});
	$("#screen").animate({opacity: '0.2'});
	$("#screen").animate({opacity: '1'});
	$("#image8").remove();
	$("#image9").remove();
	$("#image10").remove();
	$("#image11").remove();
	$("#image12").remove();
	$("#image13").remove();
	$("#attack1").remove();
	$("#attack2").remove();
	$("#attack3").remove();
	$("#attack4").remove();
	$("#attack5").remove();
	$("#playerhealth").remove();
	$("#attackpower").remove();
	$("#opponenthealth").remove();
	$("#counterpower").remove();
	$("#directhit").remove();
	$("#spellmissed").remove();
	$("#explosion1").remove();
	$("#explosion2").remove();
	yousuck.play();
	}


function finishgone(){
	$("#finishhim").css("display","none");
	$("#finishher").css("display","none");
}

function finishbutton(){
	$("#finish").css("display","block");
}


function finishhim(){
	harryattack.pause();
	hermioneattack.pause();
	ronattack.pause();
	snapeattack.pause();
	umbridgeattack.pause();
	voldemortattack.pause();
	$("#directhit").css("display","none");
	$("#spellmissed").css("display","none");
	$("#explosion1").css("display","none");
	$("#explosion2").css("display","none");
	$("#playerhealth").css("display","none");
	$("#attackpower").css("display","none");
	$("#opponenthealth").css("display","none");
	$("#counterpower").css("display","none");
	$("#playerhealth").animate({opacity: '0'});
	$("#attackpower").animate({opacity: '0'});
	$("#opponenthealth").animate({opacity: '0'});
	$("#counterpower").animate({opacity: '0'});
	$("#attack1").css("display","none");
	$("#attack2").css("display","none");
	$("#attack3").css("display","none");
	$("#attack4").css("display","none");
	$("#attack5").css("display","none");
	if (opponentid=="harry" || opponentid=="snape" || opponentid=="ron" || opponentid=="voldemort"){
		finishhim1.play();
		$("#finishhim").css("display","block");
		$("#finishhim").animate({opacity: '1'});
		$("#finishhim").animate({opacity: '0.2'});
		$("#finishhim").animate({opacity: '1'});
		$("#finishhim").animate({opacity: '0.2'});
		$("#finishhim").animate({opacity: '1'});
		$("#finishhim").animate({opacity: '0.2'});
		$("#finishhim").animate({opacity: '1'});
		setTimeout(finishgone,2000);
		setTimeout(finishbutton,2000);
		$("#finish").html("FINISH HIM!");
	}
	else if (opponentid=="hermione" || opponentid=="umbridge"){
		finishher1.play();
		$("#finishher").css("display","block");
		$("#finishher").animate({opacity: '1'});
		$("#finishher").animate({opacity: '0.2'});
		$("#finishher").animate({opacity: '1'});
		$("#finishher").animate({opacity: '0.2'});
		$("#finishher").animate({opacity: '1'});
		$("#finishher").animate({opacity: '0.2'});
		$("#finishher").animate({opacity: '1'});
		setTimeout(finishgone,1000);
		setTimeout(finishbutton,2000);
		$("#finish").html("FINISH HER!");
	}
}





function directhit(){
	$("#directhit").css("display","block");	
	$("#directhit").animate({opacity: '1'});
	$("#directhit").animate({opacity: '0.2'});
	$("#directhit").animate({opacity: '1.'});
	$("#directhit").animate({opacity: '0.0'});
	setTimeout(hitormissgone,2000);
}

function spellmissed(){
	$("#spellmissed").css("display","block");	
	$("#spellmissed").animate({opacity: '1'});
	$("#spellmissed").animate({opacity: '0.2'});
	$("#spellmissed").animate({opacity: '1'});
	$("#spellmissed").animate({opacity: '0.0'});
	setTimeout(hitormissgone,2000);
}



function restorepointtally(){
	$("#playerhealth").css("display","block");
	$("#attackpower").css("display","block");
	$("#opponenthealth").css("display","block");
	$("#counterpower").css("display","block");
}



$("#finish").on("click",function(){
	explosion.play();
	$("#playerhealth").css("display","none");
	$("#attackpower").css("display","none");
	$("#opponenthealth").css("display","none");
	$("#counterpower").css("display","none");
	$("body").css("background-image", "url(assets/images/nuke1.gif)");
	$("body").css("background-size", "100% 100%");
	$("#finish").css("display","none");
	$("#screen").css("display","none");
	setTimeout(nuketoskeleton, 1000);
	setTimeout(skeletongone, 3500);
	setTimeout(youwin, 3500);
});


function refreshattack(){
	$("#attack1").css("pointer-events","auto");
	$("#attack2").css("pointer-events","auto");
	$("#attack3").css("pointer-events","auto");
	$("#attack4").css("pointer-events","auto");
	$("#attack5").css("pointer-events","auto");
}

function nextbutton(){
	$("#next").css("display","block");
}

function youwin(){
	quidditch.pause();
	$("#screen").css("background-image", "url(assets/images/fatality1.jpg)"); 
	$("#playerhealth").css("display","none");
	$("#attackpower").css("display","none");
	$("#opponenthealth").css("display","none");
	$("#counterpower").css("display","none");
	$("#finish").css("display","none");
	$("#image8").css("display","none");
	$("#image9").css("display","none");
	$("#image10").css("display","none");
	$("#image11").css("display","none");
	$("#image12").css("display","none");
	$("#image13").css("display","none");
	flawless.play();
	console.log("Player Health is now: "+playerhealth)
	if (opponentid=="harry"){
		harrydead=true;
	}
	else if (opponentid=="hermione"){
		hermionedead=true;
	}
	else if (opponentid=="ron"){
		rondead=true;
	}
	else if (opponentid=="snape"){
		snapedead=true;
	}
	else if (opponentid=="umbridge"){
		umbridgedead=true;
	}
	else if (opponentid=="voldemort"){
		voldemortdead=true;
	}
	round=round+1;

	if(round==6){
		setTimeout(payyourrespects,3000)
	}
	else if (round==1 || round ==2 || round==3 || round==4 || round==5){
		setTimeout(nextbutton,3000);
	}
}


$("#next").on("click",function(){
	fightscene();
	battleofhogwarts.currentTime=0;
	console.log("Harry dead:"+harrydead)
	console.log("Hermione dead:"+hermionedead)
	console.log("Ron dead:"+rondead)
	console.log("Snape dead:"+snapedead)
	console.log("Umbridge dead:"+umbridgedead)
	console.log("Voldemort dead:"+voldemortdead)
	$("#next").css("display","none");
	$("#image8").css("display","block");
	$("#image9").css("display","block");
	$("#image10").css("display","block");
	$("#image11").css("display","block");
	$("#image12").css("display","block");
	$("#image13").css("display","block");
	$("#pickopponent1").css("display","block");
	$("#image8").css("pointer-events","auto");
	$("#image9").css("pointer-events","auto");
	$("#image10").css("pointer-events","auto");
	$("#image11").css("pointer-events","auto");
	$("#image12").css("pointer-events","auto");
	$("#image13").css("pointer-events","auto");
	if (harrydead){
		$("#image8").css("display","none");
	}
	if (hermionedead){
		$("#image9").css("display","none");
	}
	if (rondead){
		$("#image10").css("display","none");
	}
	if (snapedead){
		$("#image11").css("display","none");
	}
	if (umbridgedead){
		$("#image12").css("display","none");
	}
	if (voldemortdead){
		$("#image13").css("display","none");
	}

})


$("#startround2").on("click",function(){
	$("#attack2").css("display","block");
	$("#startround2").css("display","none");
	setTimeout(attackbuttonactive, 3000);
	battleofhogwarts.pause();
	round2sound.play();
	fightlogo();
	quidditch.currentTime=0;
	quidditch.play();
	quidditch.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);	
	$("#startround2").css("display","none");
	$("#versus").css("display","none");
	setTimeout(showpoints, 1000);
	currentopponent();
	console.log("This is Round #"+round);
	console.log("Player is using: "+fighter);
	console.log("Current Opponent: "+opponentid);

	if (opponentid=="harry"){
		opponenthealth=harry.health;
		counterpower=harry.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="hermione"){
		opponenthealth=hermione.health;
		counterpower=hermione.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="ron"){
		opponenthealth=ron.health;
		counterpower=ron.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="snape"){
		opponenthealth=snape.health;
		counterpower=snape.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="umbridge"){
		opponenthealth=umbridge.health;
		counterpower=umbridge.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="voldemort"){
		opponenthealth=voldemort.health;
		counterpower=voldemort.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
$("#attack2").on("click",function(){
	$("#attack2").css("pointer-events","none");
	setTimeout(refreshattack, 6100);
	playerfires();
	setTimeout(opponentfires, 3000);
	function updatehealth(){
	console.log("Player health is now: "+playerhealth);
	console.log("Opponent health is now: "+opponenthealth);
	}
	setTimeout(updatehealth, 6000);
	});
});

$("#startround3").on("click",function(){
	$("#attack3").css("display","block");
	$("#startround3").css("display","none");
	setTimeout(attackbuttonactive, 3000);
	battleofhogwarts.pause();
	round3sound.play();
	fightlogo();
	quidditch.currentTime=0;
	quidditch.play();
	quidditch.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);	
	$("#startround3").css("display","none");
	$("#versus").css("display","none");
	setTimeout(showpoints, 1000);
	currentopponent();
	console.log("This is Round #"+round);
	console.log("Player is using: "+fighter);
	console.log("Current Opponent: "+opponentid);

	if (opponentid=="harry"){
		opponenthealth=harry.health;
		counterpower=harry.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="hermione"){
		opponenthealth=hermione.health;
		counterpower=hermione.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="ron"){
		opponenthealth=ron.health;
		counterpower=ron.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="snape"){
		opponenthealth=snape.health;
		counterpower=snape.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="umbridge"){
		opponenthealth=umbridge.health;
		counterpower=umbridge.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="voldemort"){
		opponenthealth=voldemort.health;
		counterpower=voldemort.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
$("#attack3").on("click",function(){
	$("#attack3").css("pointer-events","none");
	setTimeout(refreshattack, 6100);
	playerfires();
	setTimeout(opponentfires, 3000);
	function updatehealth(){
	console.log("Player health is now: "+playerhealth);
	console.log("Opponent health is now: "+opponenthealth);
	}
	setTimeout(updatehealth, 6000);
	});
});


$("#startround4").on("click",function(){
	$("#attack4").css("display","block");
	$("#startround4").css("display","none");
	setTimeout(attackbuttonactive, 3000);
	battleofhogwarts.pause();
	round4sound.play();
	fightlogo();
	quidditch.currentTime=0;
	quidditch.play();
	quidditch.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);	
	$("#startround4").css("display","none");
	$("#versus").css("display","none");
	setTimeout(showpoints, 1000);
	currentopponent();
	console.log("This is Round #"+round);
	console.log("Player is using: "+fighter);
	console.log("Current Opponent: "+opponentid);

	if (opponentid=="harry"){
		opponenthealth=harry.health;
		counterpower=harry.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="hermione"){
		opponenthealth=hermione.health;
		counterpower=hermione.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="ron"){
		opponenthealth=ron.health;
		counterpower=ron.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="snape"){
		opponenthealth=snape.health;
		counterpower=snape.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="umbridge"){
		opponenthealth=umbridge.health;
		counterpower=umbridge.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="voldemort"){
		opponenthealth=voldemort.health;
		counterpower=voldemort.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
$("#attack4").on("click",function(){
	$("#attack4").css("pointer-events","none");
	setTimeout(refreshattack, 6100);
	playerfires();
	setTimeout(opponentfires, 3000);
	function updatehealth(){
	console.log("Player health is now: "+playerhealth);
	console.log("Opponent health is now: "+opponenthealth);
	}
	setTimeout(updatehealth, 6000);
	});
});


$("#startround5").on("click",function(){
	$("#attack5").css("display","block");
	$("#startround5").css("display","none");
	setTimeout(attackbuttonactive, 3000);
	battleofhogwarts.pause();
	round5sound.play();
	fightlogo();
	quidditch.currentTime=0;
	quidditch.play();
	quidditch.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);	
	$("#startround5").css("display","none");
	$("#versus").css("display","none");
	setTimeout(showpoints, 1000);
	currentopponent();
	console.log("This is Round #"+round);
	console.log("Player is using: "+fighter);
	console.log("Current Opponent: "+opponentid);

	if (opponentid=="harry"){
		opponenthealth=harry.health;
		counterpower=harry.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="hermione"){
		opponenthealth=hermione.health;
		counterpower=hermione.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="ron"){
		opponenthealth=ron.health;
		counterpower=ron.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="snape"){
		opponenthealth=snape.health;
		counterpower=snape.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="umbridge"){
		opponenthealth=umbridge.health;
		counterpower=umbridge.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
	else if (opponentid=="voldemort"){
		opponenthealth=voldemort.health;
		counterpower=voldemort.counterpower;
		$("#opponenthealth").html("Health Points: "+opponenthealth);
		$("#counterpower").html("Counterattack Power: "+counterpower);
	}
$("#attack5").on("click",function(){
	$("#attack5").css("pointer-events","none");
	setTimeout(refreshattack, 6100);
	playerfires();
	setTimeout(opponentfires, 3000);
	function updatehealth(){
	console.log("Player health is now: "+playerhealth);
	console.log("Opponent health is now: "+opponenthealth);
	}
	setTimeout(updatehealth, 6000);
	});
});


function payyourrespects(){
	battleofhogwarts.currentTime=0;
	battleofhogwarts.play();
	$("#next").css("display","none");
	setTimeout(playsnapespeech,6000);
	if (fighter=="harry"){
		$("#screen").css("background-image", "url(assets/images/harry_smile.jpg)"); 
		newking.play();
	}
	else if (fighter=="hermione"){
		$("#screen").css("background-image", "url(assets/images/hermione_smile.jpg)"); 
		newsurvivor.play();
	}
	else if (fighter=="ron"){
		$("#screen").css("background-image", "url(assets/images/ron_smile.jpg)"); 
		newking.play();
	}
	else if (fighter=="snape"){
		$("#screen").css("background-image", "url(assets/images/snape_smile.png)"); 
		newking.play();
	}
	else if (fighter=="umbridge"){
		$("#screen").css("background-image", "url(assets/images/umbridge_smile.jpg)"); 
		newsurvivor.play();
	}
	else if (fighter=="voldemort"){
		$("#screen").css("background-image", "url(assets/images/voldemort_smile.jpg)"); 
		thronedefended.play();
	}
}







}); 




// Last Updated September 19, 2016 at 12:21am





