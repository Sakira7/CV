function start(){
    var pic = document.createElement("img");
    var name  = document.createElement("p");
    var header = document.getElementById("header");
    
    
   
    pic.setAttribute("src","sara_rund.png");
    pic.setAttribute("id","profile-pic");
   
    name.setAttribute("id","name");
    name.innerHTML="Sara Elofsson";
   
    header.appendChild(pic);
    header.appendChild(name);
   
    //start animations
    pic.style.animation="slide-in 2400ms 1s ease-in forwards";
    name.style.animation="fade 2400ms 1s ease-in forwards";
    header.style.animation="relax 1400ms 2800ms forwards";
   
    //create buttons
    var home_btn = document.createElement("input");
    home_btn.setAttribute("type","button");
    home_btn.setAttribute("value","Hem");
    home_btn.setAttribute("id","home_btn");
    home_btn.setAttribute("class","btn");
    home_btn.setAttribute("onclick","home()");
    
    var work_btn = document.createElement("input");
    work_btn.setAttribute("type","button");
    work_btn.setAttribute("value","Arbeten");
    work_btn.setAttribute("id","work_btn");
    work_btn.setAttribute("class","btn");
    work_btn.setAttribute("onclick","work()");
    
    var studies_btn = document.createElement("input");
    studies_btn.setAttribute("type","button");
    studies_btn.setAttribute("value","Studier");
    studies_btn.setAttribute("id","studies_btn");
    studies_btn.setAttribute("class","btn");
    studies_btn.setAttribute("onclick","studies()");
    
    var misc_btn = document.createElement("input");
    misc_btn.setAttribute("type","button");
    misc_btn.setAttribute("value","Övrigt");
    misc_btn.setAttribute("id","misc_btn");
    misc_btn.setAttribute("class","btn");
    misc_btn.setAttribute("onclick","misc()");
    
    var contact_btn = document.createElement("input");
    contact_btn.setAttribute("type","button");
    contact_btn.setAttribute("value","Kontakt");
    contact_btn.setAttribute("id","contact_btn");
    contact_btn.setAttribute("class","btn");
    contact_btn.setAttribute("onclick","contact()");
    
    header.appendChild(home_btn);
    header.appendChild(work_btn);
    header.appendChild(studies_btn);
    header.appendChild(misc_btn);
    header.appendChild(contact_btn);
    
    //animate buttons
    home_btn.style.animation="pop-in 600ms 3600ms forwards";
    work_btn.style.animation="pop-in 600ms 3800ms forwards";
    studies_btn.style.animation="pop-in 600ms 4000ms forwards";
    misc_btn.style.animation="pop-in 600ms 4200ms forwards";
    contact_btn.style.animation="pop-in 600ms 4400ms forwards";
    
    
    var bubble = document.createElement("div");
    bubble.setAttribute("class","bubble");
    bubble.setAttribute("id","disc_bubble");
    bubble.innerHTML="<div class='bubble_txt'>"+" "+"</div>";
    
    var homeCon = document.getElementById("home_cont");
    
    homeCon.appendChild(bubble);
    
    window.setTimeout(function(){
        $("#home_cont").fadeIn(1000);
    },4400);
    $("#content").css("padding","2.3vw");
    $("#home_head").siblings().hide();
    $("#home_btn").addClass("selected");
    

}
var alternate = setInterval(function() { 
$(".bubble_txt").delay(2000).fadeOut(1000,function(){
$(this).html("INFP-T"+"<br>"+"<span style='font-size:3vw'>Myers-Briggs</span>");
}).fadeIn(1000).delay(2000).fadeOut(1000,function(){
$(this).html("Blå/Grön"+"<br>"+"<span style='font-size:3vw'>Disc</span>");
}).fadeIn(1000);
},600);
                            

function home(){ 
    $("#content").css("padding","2.3vw");
    $("#home_head").show();
    $("#home_head").siblings().hide();
    $("#home_cont").show();
    $("#home_btn").addClass("selected");
    $("#home_btn").siblings().removeClass("selected");
}
function work(){
    $("#content").scrollTop(0);
    $("#work_head").show();
    $("#work_head").siblings().hide();
    $("#work_cont").show();
    $("#work_head").html(
        "<img src='header_bg.png' class='paint'>Arbetslivserfarenhet"
    );
    $("#work_cont").html(
        
"<h2 class='head2'><span class='bold'>Biografvärd</span> på Svea Bio, Söderhamn</h2><span class='bold'>april 2019 - november 2019</span><br><br><span class='des'>Städning, försäljning, kundkontakt och en del tekniska arbetsuppgifter.</span><br><br><br><h2 class='head2'><span class='bold'>Croupier</span> på FC Casino, Söderhamn.</h2><span class='bold'>april 2019 – mars 2020</span><br><br><span class='des'>Utbildad croupier. Blackjack-dealer på Winchester i Söderhamn.</span><br><br><br><h2 class='head2'><span class='bold'>Bingovärdinna</span> på Konsultbingo, Söderhamn.</h2><span class='bold'>juli 2005 – december 2019</span><br><br><span class='des'>Arbetsuppgifterna inkluderade bl.a. försäljning, vinstutdelning och en hel del administrativt arbete.</span><br><br><br><h2 class='head2'><span class='bold'>Städare</span> på IDP i Hemsedal, Norge.</h2><span class='bold'>december 2011 - januari 2012.</span><br><br><span class='des'>Arbetsuppgiften var att städa fjällstugor. Blev bara kvar en månad på grund av att ekonomin inte gick ihop då jag inte fick jobba så mycket som jag skulle ha velat.</span><br><br><br><h2 class='head2'><span class='bold'>Resursare</span> på Resurscentrum, Söderhamn.</h2><span class='bold'>april 2012 - november 2013</span><br><br><span class='des'>På Resurscentrum fick jag åka ut och klippa gräs och hjälpa till med diverse runt om i staden. Det var genom resurs som jag fick jobb på Förvaltningshuset och på Verkstäderna.</span><br><br><br><h2 class='head2'><span class='bold'>Assistent</span> på Förvaltningshuset, Söderhamn.</h2><span class='bold'>maj 2012 - augusti 2012</span><br><br><span class='des'>Jag hjälpte till med det administrativa under oljesaneringen. Jobbade även på ekonomiavdelningen på E-centralen en månad där jag fick hantera fakturor.</span><br><br><br><h2 class='head2'><span class='bold'>Ungdomsledare</span> på Verkstäderna, Söderhamn.</h2><span class='bold'>augusti 2012 - januari 2014</span><br><br><span class='des'>Som ungdomsledare fick jag hjälpa till att anordna aktiviteter för ungdomarna samt lösa konflikter mellan dem och lyssna om det var någon som ville prata.</span><br><br><br><h2 class='head2'><span class='bold'>Bingovärdinna</span> på Bingoringen, Söderhamn</h2><span class='bold'>januari 2020 - </span><br><br><span class='des'>Jobbar som bingovärdinna på bingoringen som tog över efter konsultbingo 2020. Försäljning (café, triss och bingobrickor), vinstutdelning, tekniskt och administrativt arbete.</span><br><br><br><h2 class='head2'><span class='bold'>Croupier</span> på Cherry Spelglädje AB, Söderhamn</h2><span class='bold'>september 2021 -</span><br><br><span class='des'>Nyligen anställd hos Cherry där jag främst kommer jobba i Söderhamn men även har möjlighet att arbeta i Hudiksvall, Sundsvall och Gävle.</span><br><br>"
    );
    
    
    
    $("#work_btn").addClass("selected");
    $("#work_btn").siblings().removeClass("selected");
    
}
function studies(){
    $("#content").scrollTop(0);
    $("#studies_head").show();
    $("#studies_head").siblings().hide();
    $("#studies_cont").show();
    
    $("#studies_head").html(
        "<img src='header_bg.png' class='paint'>Studier"
    );
    $("#studies_cont").html(
"<h2 class='head2'><span class='bold'>Medieprogrammet</span> på Staffanskolan i Söderhamn.</h2><span class='bold'>augusti 2005 - juni 2008.</span><br><br><span class='des'>Jag gick inriktning Rörlig bild där jag fick lära mig studioproduktion, olika kameratekniker och videoredigering. Jag läste även foto, text, grafisk design och ljud.</span><br><br><br><h2 class='head2'><span class='bold'>Engelska</span> på EF International Language School i London.</h2><span class='bold'>januari 2011 - augusti 2011.</span><br><br><span class='des'>Jag läste engelska i olika former och hamnade till slut i den högsta nivån där jag också har ett certifikat. Jag läste även spin-kurser som drama, art history, filmstudies och filmmaking.</span><br><br><br><h2 class='head2'><span class='bold'>Webbdesigner</span> på Högskolan Väst.</h2><span class='bold'>augusti 2017 - juni 2018.</span><br><br><span class='des'>Kurspaket, 60hp. 100% på distans.<br><br><span class='bold'>Kurser:</span><br>Webbutveckling med HTML och CSS,<br>Digital Grafik,<br>UX-design,<br>Grundläggande programmering med ett objektorienterat språk,<br>Webbprogrammering,<br>Avancerad webbutveckling med HTML och CSS,<br>Utveckling av mobila webbapplikationer,<br>Tillämpad webbutveckling.</span><br><br><h2 class='head2'><span class='bold'>Programmering/Systemutveckling</span> på Lexicon.</h2><span class='bold'>september 2021 -</span><br><br>"
    );
    $("#studies_btn").addClass("selected");
    $("#studies_btn").siblings().removeClass("selected");
}
function misc(){
    $("#misc_head").show();
    $("#misc_head").siblings().hide();
    $("#misc_cont").show();
    
    $("#misc_head").html(
        "<img src='header_bg.png' class='paint'>Övrig kompetens"
    );
    $("#misc_cont").html(
"<h2 class='head2'><span class='bold'>IT-kompetens:</span></h2><span class='des'>HTML/CSS/JavaScript/jQuery/PHP/SQL/ASP.net<br>Angular/Node.js/Cordova/Bootstrap/Git<br>Access/Excel/Word/PowerPoint<br>Photoshop/InDesign/Illustrator/XD<br>Visual Studio/Android Studio<br>Blender/Unity</span><br><br><br><span class='bold'>Körkort:</span> B<br><span class='bold'>Språk:</span> svenska (modersmål), engelska (flytande i både tal och skrift)"
    );
    $("#misc_btn").addClass("selected");
    $("#misc_btn").siblings().removeClass("selected");
}
function contact(){
    $("#contact_head").show();
    $("#contact_head").siblings().hide();
    $("#contact_cont").show();
    
    $("#contact_head").html(
        "<img src='header_bg.png' class='paint'>Kontakta mig"
    );
    $("#contact_cont").html(
"<img src='mail.png' class='icons'><h2 class='head2'>saraelofsson7@gmail.com</h2><br><br><img src='phone.png' class='icons'><h2 class='head2'>073-070 66 76</h2><br><br><img src='location.png' class='icons'><h2 class='head2'>Brolinsvägen 10C<br>826 60, Söderhamn</h2>"
    );
    $("#contact_btn").addClass("selected");
    $("#contact_btn").siblings().removeClass("selected");
}