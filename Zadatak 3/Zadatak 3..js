let pozadinska_boja_teksta = ["black","blue"];
let tekst = document.getElementById("tekst");
n = 0;
function f1(){
    tekst.style.backgroundColor = pozadinska_boja_teksta[n];
    n = (n + 1) % pozadinska_boja_teksta.length
}
