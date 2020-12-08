var control = 1;
var zoom = 100;
var augme = 75;
function surt() {
    contanidor = "<img src='' alt=''>";
    document.getElementById("visor").innerHTML=contanidor;
    document.getElementById("visor").hidden=true;
}
function img1() {
    control = 1;
    visual();
}
function img2() {
    control = 2;
    visual();
}
function img3() {
    control = 3;
    visual();
}
function img4() {
    control = 4;
    visual();
}
function img5() {
    control = 5;
    visual();
}
function img6() {
    control = 6;
    visual();
}
function img7() {
    control = 7;
    visual();
}
function img8() {
    control = 8;
    visual();
}
function img9() {
    control = 9;
    visual();
}
function img10() {
    control = 10;
    visual();
}
function img11() {
    control = 11;
    visual();
}
function img12() {
    control = 12;
    visual();
}
function img13() {
    control = 13;
    visual();
}
function img14() {
    control = 14;
    visual();
}
function img15() {
    control = 15;
    visual();
}
function enrerre() {
    if (control > 1) control -= 1;
    visual();
}
function endavant() {
    if (control < 15) control += 1;
    visual();
}
function augment() {
    if (zoom < 150) zoom += 10;
    if (augme < 130) augme += 10;
    visual();
}
function dismin() {
    if (zoom > 80) zoom -= 10;
    if (augme > 60) augme -= 10;
    visual();
}
function visual() {
    document.getElementById("visor").hidden=false;
    contanidor = '<div id="botons"><a id="con1" onclick="dismin()"><img src="img/lup1.png" height="60" alt=""/></a><a id="con2" onclick="augment()"><img src="img/lup2.png" height="60" alt=""/></a><a id="con1" onclick="enrerre()"><img src="img/enrer.png" height="60" alt=""/></a><a id="con2" onclick="endavant()"><img src="img/endav.png" height="60" alt=""/></a><a id="sor" onclick="surt()"><img src="img/Sortir.png" height="60" alt=""/></a></div>';
    if (control==2 || control==3) contanidor += "<img src='img/0"+control+".png' width='"+augme+"%' alt=''>";
    else if (control==4) contanidor += "<img src='img/0"+control+".bmp' width='"+augme+"%' alt=''>";
    else if (control==1 || (control>4 && control<10)) contanidor += "<img src='img/0"+control+".jpg' width='"+zoom+"%' alt=''>";
    else if (control==14) contanidor += "<img src='img/"+control+".gif' width='"+augme+"%' alt=''>";
    else contanidor += "<img src='img/"+control+".jpg' width='"+augme+"%' alt=''>";
    if (control==1) contanidor += "<p style='font-size:20px;'><b>Mapa polític de Catalunya</b>, distribució territorial per comarques i municipis.</p>";
    if (control==2) contanidor += "<p style='font-size:20px;'><b>Mapa medieval s. IX al XI</b>, territoris dels comptats catalans a l'edat mitja.</p>";
    if (control==3) contanidor += "<p style='font-size:20px;'><b>Comptats Catalans s. XII</b>, fronteres medievals des del s. IX al XII.</p>";
    if (control==4) contanidor += "<p style='font-size:20px;'><b>Mapa dels Països Catalans</b>, distribució provincial del territoris de parla catalana.</p>";
    if (control==5) contanidor += "<p style='font-size:20px;'><b>Països Catalans</b>, Nova distribució comarcal dels territoris de parla catalana.</p>";
    if (control==6) contanidor += "<p style='font-size:20px;'><b>Països Catalans</b>, Densitat de població per comarques en els territoris de parla catalana.</p>";
    if (control==7) contanidor += "<p style='font-size:20px;'><b>Països Catalans</b>, Distribució per comarques dels territoris de parla catalana reals.</p>";
    if (control==8) contanidor += "<p style='font-size:20px;'><b>Països Catalans</b>, comarques dels territoris de parla catalana i Serdenya.</p>";
    if (control==9) contanidor += "<p style='font-size:20px;'><b>Països Catalans</b>, Divisió comarcal dels territoris de parla catalana a l'any 1971.</p>";
    if (control==10) contanidor += "<p style='font-size:20px;'><b>Fronteres Catalanes</b>, diverses fronteres de llengua catalana i territorials al llarc de la història.</p>";
    if (control==11) contanidor += "<p style='font-size:20px;'>Fronteres de diverses llengües a l'estat espanyol actual.</p>";
    if (control==12) contanidor += "<p style='font-size:20px;'><b>Europa medieval</b>, Fronteres de nacions a l'Europa del s.XV al XVIII, guerra de la succeció a la corona.</p>";
    if (control==13) contanidor += "<p style='font-size:20px;'><b>Europa medieval s.XV</b>, Divisió territorial de les nacions ed'Europa a començament del s.XVII.</p>";
    if (control==14) contanidor += "<p style='font-size:20px;'><b>Europa</b>, distribució de les noves nacions en el territori europeu.</p>";
    if (control==15) contanidor += "<p style='font-size:20px;'><b>Mapa Mondial</b>, Estats i nacions del món s.XXI.</p>";    
    document.getElementById("visor").innerHTML=contanidor;
}

