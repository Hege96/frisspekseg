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
var veznevhossz= veznev.lenght;
var kernevhossz= kernev.lenght;
var megjhossz= megj.lenght;

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
if(veznev.leght==null)
{
document.getElementById("elll").innerHTML=veznev;

}
if(veznev.leght>0)
{
document.getElementById("elll").innerHTML=veznev;

}
if(veznev.leght==null)
{
document.getElementById("ellll").innerHTML="<font color='red'>Nem megfelelő Keresztnév!</font>";

}
if(veznev.leght>0)
{
document.getElementById("ellll").innerHTML="<font color='green'>Megfelelő Keresztnév!</font>";

}
if(megjhossz==null)
{
document.getElementById("elllll").innerHTML="<font color='red'>Nem megfelelő Megjegyzés!</font>";

}
if(megjhossz>0)
{
document.getElementById("elllll").innerHTML="<font color='green'>Megfelelő Megjegyzés!</font>";

}
}