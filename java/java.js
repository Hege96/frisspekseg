var host;
var vnev;
var knev;
var tszam;
var em;
var mj;
var veznevhossz;
var kernevhossz;
var megjhossz;
function ossz()
{
var veznev=document.getElementById("vezeteknev").value;
var kernev=document.getElementById("keresztnev").value;
var telhossz=document.getElementById("telefonszam").value;
var hossz= telhossz.length;
var megj=document.getElementById("megjegyzes").value;

host=document.getElementById("email").value;
emailell=host.indexOf("@");
if(emailell==-1)
{
document.getElementById("el").innerHTML="<font color='red'>Nem megfelelő e-mail!</font>";

}
if (emailell>0)
{
document.getElementById("el").innerHTML="<font color='green'>Megfelelő e-mail!</font>";

}
if(hossz>11)
{
document.getElementById("ell").innerHTML="<font color='red'>Nem megfelelő telefonszám!</font>";

}
if(hossz<11)
{
document.getElementById("ell").innerHTML="<font color='red'>Nem megfelelő telefonszám!</font>";

}
if(hossz==11)
{
document.getElementById("ell").innerHTML="<font color='green'>Megfelelő telefonszám!</font>";

}
if(veznev=="")
{
document.getElementById("elll").innerHTML="<font color='red'>Nem megfelelő Vezetéknév!</font>";

}
if(veznev!="")
{
document.getElementById("elll").innerHTML="<font color='green'>Megfelelő Vezetéknév!</font>";

}
if(kernev=="")
{
document.getElementById("ellll").innerHTML="<font color='red'>Nem megfelelő Keresztnév!</font>";

}
if(kernev!="")
{
document.getElementById("ellll").innerHTML="<font color='green'>Megfelelő Keresztnév!</font>";

}
if(megj=="")
{
document.getElementById("elllll").innerHTML="<font color='red'>Nem megfelelő Megjegyzés!</font>";

}
if(megj!="")
{
document.getElementById("elllll").innerHTML="<font color='green'>Megfelelő Megjegyzés!</font>";

}
}