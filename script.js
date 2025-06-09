let pickedS = "";
let forms=document.getElementById("forms");
let musictitle=document.getElementById("musictitle");
let played;

forms.addEventListener("submit", (event) => {
    //pickedS=document.getElementById("pickedSong").value;
    let pickedS = localStorage.getItem("utolso") || "";
    //localStorage.setItem("utolso", pickedS);
    event.preventDefault();
    pickedS=document.getElementById("pickedSong").value;

    if(pickedS == "felho" || pickedS == "felhő" || pickedS == "Felhő"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("felho").style.display= "unset";
        played=document.getElementById("felho");
    }else if(pickedS == "grund" || pickedS == "Grund" || pickedS == "mi vagyunk a grund"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("grund").style.display= "unset";
        played=document.getElementById("grund");
    }else if(pickedS == "szolosbe" || pickedS == "szőlősbe" || pickedS == "Szőlősbe"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("szolosbe").style.display= "unset";
        played=document.getElementById("szolosbe");
    }else if(pickedS == "robinson" || pickedS == "Robinson"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("robinson").style.display= "unset";
        played=document.getElementById("robinson");
    }else if(pickedS == "marti" || pickedS == "márti" || pickedS == "Márti" || pickedS == "márti dala"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("marti").style.display= "unset";
        played=document.getElementById("marti");
    }else if(pickedS == "kapu" || pickedS == "Kapu"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kapu").style.display= "unset";
        played=document.getElementById("kapu");
    }else if(pickedS == "olyan o" || pickedS == "Olyan o" || pickedS == "olyan ő"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("o").style.display= "unset";
        played=document.getElementById("o");
    }else if(pickedS == "jovok" || pickedS == "jövök" || pickedS == "Jövök" || pickedS == "visszajövök"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("jovok").style.display= "unset";
        played=document.getElementById("jovok");
    }else if(pickedS == "napok" || pickedS == "Napok"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("napok").style.display= "unset";
        played=document.getElementById("napok");
    }else if(pickedS == "kerek" || pickedS == "Kerek" || pickedS == "kerek egész"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kerek").style.display= "unset";
        played=document.getElementById("kerek");
    }else if(pickedS == "lehetsz" || pickedS == "Lehetsz" || pickedS == "lehetsz király"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("lehetsz").style.display= "unset";
        played=document.getElementById("lehetsz");
    }else if(pickedS == "boros" || pickedS == "Boros" || pickedS == "mesélek a bornak"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("boros").style.display= "unset";
        played=document.getElementById("boros");
    }else if(pickedS == "minden" || pickedS == "Minden" || pickedS == "minden rendben"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("minden").style.display= "unset";
        played=document.getElementById("minden");
    }else if(pickedS == "te vagy" || pickedS == "Te vagy" || pickedS == "te vagy a jel"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("tevagy").style.display= "unset";
        played=document.getElementById("tevagy");
    }else if(pickedS == "kezenfogsz" || pickedS == "kézenfogsz" || pickedS == "Kézenfogsz" || pickedS == "te majd kézenfogsz"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kezenfogsz").style.display= "unset";
        played=document.getElementById("kezenfogsz");
    }else if(pickedS == "lehetne" || pickedS == "Lehetne" || pickedS == "lehetne újra február"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("lehetne").style.display= "unset";
        played=document.getElementById("lehetne");
    }else if(pickedS == "balladaja" || pickedS == "Balladaja" || pickedS == "balladája" || pickedS == "a felszarvazottak balladája"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("balladaja").style.display= "unset";
        played=document.getElementById("balladaja");
    }else if(pickedS == "nelkuled" || pickedS == "Nelkuled" || pickedS == "nélküled" || pickedS == "hogyan tudnék élni nélküled"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("nelkuled").style.display= "unset";
        played=document.getElementById("nelkuled");
    }else if(pickedS == "tinedzser" || pickedS == "Tinedzser" || pickedS == "tinédzser" || pickedS == "tinédzser dal"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("tinedzser").style.display= "unset";
        played=document.getElementById("tinedzser");
    }else if(pickedS == "lany" || pickedS == "Lany" || pickedS == "lány" || pickedS == "hol van az a lány"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("lany").style.display= "unset";
        played=document.getElementById("lany");
    }else if(pickedS == "pofonofon" || pickedS == "Pofonofon" || pickedS == "beindul a pofonofon"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("pofonofon").style.display= "unset";
        played=document.getElementById("pofonofon");
    }else if(pickedS == "vilag" || pickedS == "Vilag" || pickedS == "világ" || pickedS == "álmodtam egy világot"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("vilag").style.display= "unset";
        played=document.getElementById("vilag");
    }else if(pickedS == "voltam" || pickedS == "Voltam" || pickedS == "kölyköd voltam"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("voltam").style.display= "unset";
        played=document.getElementById("voltam");
    }else if(pickedS == "kozepen" || pickedS == "Kozepen" || pickedS == "Közepén" || pickedS == "kör közepén"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kozepen").style.display= "unset";
        played=document.getElementById("kozepen");
    }else if(pickedS == "vallomas" || pickedS == "Vallomas" || pickedS == "Vallomás" || pickedS == "angyali vallomás"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("vallomas").style.display= "unset";
        played=document.getElementById("vallomas");
    }else if(pickedS == "szaz" || pickedS == "Szaz" || pickedS == "száz út" || pickedS == "Száz út"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("szaz").style.display= "unset";
        played=document.getElementById("szaz");
    }else if(pickedS == "szonyeg" || pickedS == "Szonyeg" || pickedS == "csavard fel a szőnyeg" || pickedS == "Csavaed fel a szőnyeget"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("szonyeg").style.display= "unset";
        played=document.getElementById("szonyeg");
    }else if(pickedS == "seholse" || pickedS == "Seholse"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("seholse").style.display= "unset";
        played=document.getElementById("seholse");
    }else if(pickedS == "mizu" || pickedS == "Mizu"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("mizu").style.display= "unset";
        played=document.getElementById("mizu");
    }else if(pickedS == "mondta" || pickedS == "Mondta" || pickedS == "anyám mondta" || pickedS == "Anyám mondta"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("mondta").style.display= "unset";
        played=document.getElementById("mondta");
    }else if(pickedS == "senki" || pickedS == "Senki" || pickedS == "Nem tudja senki" || pickedS == "nem tudja senki"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("senki").style.display= "unset";
        played=document.getElementById("senki");
    }else if(pickedS == "volna" || pickedS == "Volna" || pickedS == "élnünk kellett volna" || pickedS == "Élnünk kellett volna"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("volna").style.display= "unset";
        played=document.getElementById("volna");
    }else if(pickedS == "biciklim" || pickedS == "Biciklim" || pickedS == "ellopták a biciklim" || pickedS == "Ellopták a biciklim"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("biciklim").style.display= "unset";
        played=document.getElementById("biciklim");
    }else if(pickedS == "asszony" || pickedS == "Asszony" || pickedS == "Hosszúlábú asszony" || pickedS == "hosszúlábú asszony"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("asszony").style.display= "unset";
        played=document.getElementById("asszony");
    }else if(pickedS == "kiralylany" || pickedS == "Kiralylany" || pickedS == "Királylány" || pickedS == "királylány"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kiralylany").style.display= "unset";
        played=document.getElementById("kiralylany");
    }else if(pickedS == "meggyfa" || pickedS == "Meggyfa"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("meggyfa").style.display= "unset";
        played=document.getElementById("meggyfa");
    }else if(pickedS == "csokkiraly" || pickedS == "Csókkirály" || pickedS == "csókkirály"){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("csokkiraly").style.display= "unset";
        played=document.getElementById("csokkiraly");
    }
})
//event.preventDefault()
function back(){
    document.getElementById("picker").style.visibility= "visible";
    played.style.display = "none";
}
//console.log(pickedS);
//document.getElementById('Vissza').addEventListener('click', back());

// audio.currentTime=localStorage.getItem("jelenlegiido");



// music.addEventListener('timeupdate',function(){
//     var currentTimeMs = audio.currentTime*1000;
//     audio.currentTime=localStorage.setItem("jelenlegiido", currentTimeMs);
// },false);