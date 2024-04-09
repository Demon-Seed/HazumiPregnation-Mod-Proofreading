function s(id){
       return $gameSwitches._data[id] || 0;
}
function v(id){
    return $gameVariables._data[id] || 0;
}

function nakaIndex(){
    const SPERM_IN_UTERUS = $gameVariables._data[13];
    const uterus = (SPERM_IN_UTERUS/1200)
    let naka = ($H.in_seieki.findNum(uterus)).clamp(0,11)
    //console.log('naka '+naka+' naka2 '+naka2)
    return naka
}

function checkExistAhegao(fileName){
    const url = 'mods/JS_MODs_files/' + fileName + '.js';
    return Mihil_FileExists.checkExist(url, true)
}


// overdue Functions
function isOverdueSingleBaby(){
    return !hasMultiBaby() && !hasTriplesOrMore() && !hasTwinsBaby() && v(43) >=44 && v(43) <=49
}
function isMegaOverdueSingleBaby(){
    return !hasMultiBaby() && !hasTriplesOrMore() && !hasTwinsBaby() && v(43) >=50 && v(43) <=54 
}
function isSuperOverdueSingleBaby(){
    return !hasMultiBaby() && !hasTriplesOrMore() && !hasTwinsBaby() && v(43) >=55 && v(43) <=59
}
function isUltraOverdueSingleBaby(){
    return !hasMultiBaby() && !hasTriplesOrMore() && !hasTwinsBaby() && v(43) >=60
}
function isMegaOverdueTwinBaby(){
    return !hasTriplesOrMore() && hasTwinsBaby() && v(43) >=44 && v(43) <=49
}
function isSuperOverdueTwinBaby(){
    return !hasTriplesOrMore() && hasTwinsBaby() && v(43) >=50 && v(43) <=54
}
function isUltraOverdueTwinBaby(){
    return !hasTriplesOrMore() && hasTwinsBaby() && v(43) >=55
}
function isSuperOverdueTripleBaby(){
    return hasTriplesOrMore() && !hasQuadrupletsBaby() && !hasQuintupletsOrMore() && !hasTwinsBaby() && v(43) >=44 && v(43) <=49
}
function isUltraOverdueTripleBaby(){
    return hasTriplesOrMore() && !hasQuadrupletsBaby() && !hasQuintupletsOrMore() && !hasTwinsBaby() && v(43) >=50
}
function isUltraOverdueQuadruBaby(){
    return hasTriplesOrMore() && hasQuadrupletsBaby() && !hasQuintupletsOrMore() && !hasTwinsBaby() && v(43) >=44
}
function isOverdueQuintuBaby(){
    return hasTriplesOrMore() && !hasQuadrupletsBaby() && hasQuintupletsOrMore() && !hasTwinsBaby() && v(43) >=44
}

function hasMultiBaby(){
    return v(59)>=2
}
function hasTwinsBaby(){
    return v(59)===2
}
function hasTriplesOrMore(){
    return v(59)>=3
}
function hasTriplesBaby(){
    return v(59)===3
}

function hasQuadrupletsOrMore(){
    return v(59)>=4
}
function hasQuadrupletsBaby(){
    return v(59)===4
}
function hasQuintupletsOrMore(){
    return v(59)>=5
}
function hasQuintupletsBaby(){
    return v(59)===5
}
function progBirth(){
    return v(71)
}
function progBirthTwins(){
    return v(443)
}
function progBirthTriplesOrMore(){
    return v(444)
}

//trimestres

function isBote(){
    return v(43)>=v(45)
}
function isBoteLast(){
    return v(43)>=v(44)
}
function isBoteBig(){
    return v(43)>=v(46) || isBoteLast()
}
function isBoteMed(){
    return isBote() &&  !isBoteBig()
}
function isBoteMin(){
    return !isBote() && v(43)>=7 
}
function isBoteBelly(){
    return nakaIndex()>=6 || isBote() || isBoteMultiMin() || isBoteTripleMin() || isBoteQuadrupletsMin() || isBoteQuintupletsMin()
}
//sizes
function isBoteMulti(){
    return isBote() && hasMultiBaby()
}
//sigle sizes
function isBoteSingleBig(){//full terms single baby
    return isBoteBig() && !hasMultiBaby()
}
function isBoteSingleMed(){//2trimester single baby
    return isBoteMed() && !hasMultiBaby()
}
//twins sizes
function isBoteMultiBig(){//full terms twins baby
    return isBoteBig() && hasMultiBaby() && !hasTriplesOrMore()
}
function isBoteMultiMed(){//2trimester twins baby
    return isBoteMed() && hasMultiBaby() && !hasTriplesOrMore()
}
function isBoteMultiMin(){//1trimester twins baby
    return isBoteMin() && hasMultiBaby() && !hasTriplesOrMore()
}
//triple sizes
function isBoteTripleBig(){
    return isBoteBig() && hasTriplesOrMore() && hasTriplesBaby() && !hasQuadrupletsOrMore();
}
function isBoteTripleMed(){
    return isBoteMed() && hasTriplesOrMore() && hasTriplesBaby() && !hasQuadrupletsOrMore(); 
}
function isBoteTripleMin(){
    return isBoteMin() && hasTriplesOrMore() && hasTriplesBaby() && !hasQuadrupletsOrMore();
}

//fourt sizes
function isBoteQuadrupletsBig(){
    return isBoteBig() && hasQuadrupletsOrMore() && !hasTriplesBaby() && !hasQuintupletsOrMore();
}
function isBoteQuadrupletsMed(){
    return isBoteMed() && hasQuadrupletsOrMore() && !hasTriplesBaby() && !hasQuintupletsOrMore();
}
function isBoteQuadrupletsMin(){
    return isBoteMin() && hasQuadrupletsOrMore() && !hasTriplesBaby() && !hasQuintupletsOrMore()
}
//quintu sizes
function isBoteQuintupletsBig(){
    return isBoteBig() && hasQuintupletsOrMore() && !hasQuadrupletsBaby();
}
function isBoteQuintupletsMed(){
    return isBoteMed() && hasQuintupletsOrMore() && !hasQuadrupletsBaby();
}
function isBoteQuintupletsMin(){
    return isBoteMin() && hasQuintupletsOrMore() && !hasQuadrupletsBaby();
}
//bellysizes
function isUltraBelly(){
    return nakaIndex()==11 || isBoteQuintupletsBig() || isUltraOverdueTripleBaby() || isUltraOverdueTwinBaby() || isUltraOverdueSingleBaby() || isUltraOverdueQuadruBaby() || isOverdueQuintuBaby();
}
function isSuperBelly(){
    return nakaIndex()==10 || isBoteQuadrupletsBig() || isSuperOverdueTripleBaby() || isSuperOverdueTwinBaby() || isSuperOverdueSingleBaby() || isBoteQuintupletsMed();
}
function isMegaBelly(){
    return nakaIndex()==9 || isMegaOverdueSingleBaby() || isMegaOverdueTwinBaby() || isBoteTripleBig() || isBoteQuadrupletsMed() || isBoteQuintupletsMin();
}
function isHugeBelly(){
    return nakaIndex()==8 || isOverdueSingleBaby() || isBoteMultiBig() || isBoteTripleMed() || isBoteQuadrupletsMin() ;
}
function isBigBellyOrMore(){
    return nakaIndex()>=7 || isBigBelly() || isHugeBelly() || isMegaBelly() || isSuperBelly() || isUltraBelly();
}
function isBigBelly(){
    return nakaIndex()==7 || isBoteSingleBig() || isBoteMultiMed() || isBoteTripleMin() 
}
function isMedBelly(){
    return nakaIndex()==6 || isBoteSingleMed() || isBoteMultiMin()
}