function s(id){
    return $gameSwitches._data[id] || 0;
}

function v(id){
    return $gameVariables._data[id] || 0;
}

function isGom() {
    return $gameSwitches.value(86)
}

function ismasturbating(){
    return $gameSwitches.value(551)
}

function isPiston(){
    return $gameTemp.isPiston
}

function isShasei(){
    return $gameTemp.isShasei;
}

function isPulling(){
    return $gameTemp.isPulling
}

function isOralSex(){
    return !!$gameTemp.isOralSex
}

function isPaizuriSex(){
    return !!$gameTemp.isPaizuriSex
}

function isFingerSex(){
    return !!$gameTemp.isfingerSex
}

function isLickSex(){
    return !!$gameTemp.islickSex
}


function getFace(){
    return v(1)
}

function isEmote(){
    return v(20)
}

function isJusei(){
    return v(42) && !v(43)
}

function isPubic(){ // 変数が0のときtrueなので注意
    return v(69)<=0
}

function currentNail(){
    return v(70);
}

function cumInside(){// 中出し選択
    return v(328) == 1 && isShasei()
}

function donePaiShasei(){
    return v(353) >= 1
}

function doneOralShasei(){
    return v(353) >= 1
}

function donePaizuriShasei(){
    return v(756) >= 1
}


function isBareChest(){
    return s(3)
}

function isNure(){
    return s(54)
}

function isworkingMaid(){
    return s(80)
}

function isSonyu(){
    return s(85);
}

function isPennisCoveredSperm(){
    return s(87)
}

function isXray(){
    return s(300)
}

function isDanmen(){
    return s(300);
}

function isXrayAlways(){
    return s(301)
}

function doneOrgasm(){
    return s(303)
}

function isComa(){
    return s(304)
}

function NewClothes(){
    return s(520)
}

function iseroClothes(){
    return s(521)
}

function isMaidOutfit(){
    return s(522)
}

function newhair(){
    return s(523);
}

function isMimi(){
    return s(548)
}

function isTattoo(){
    return s(550)
}

function isPiercing(){
    return s(549)
}

function isParkEvts(){
     return s(996)//ocult man in sex scenes
}

function isOrgyVaginalMouth(){
    return s(998)
}

function isOrgyVaginalBreast(){
    return s(997)
}


function changeswitch(){
    if(iseroClothes() && NewClothes()){
        if(isworkingMaid()){
            $gameSwitches._data[2] = false
        }else{
            //$gameSwitches._data[3] = false
            $gameSwitches._data[2] = true
        }
            
    }
}

function nakaIndex(){
    const SPERM_IN_UTERUS = $gameVariables._data[13];
    const uterus = (SPERM_IN_UTERUS/1200)
    let naka = ($H.in_seieki.findNum(uterus)).clamp(0,11)
    //console.log('naka '+naka+' naka2 '+naka2)
    return naka
}

function sotoIndex(){
    const soto = ($H.out_seieki.findNum(v(76))-0 ).clamp(0,4)
    return soto
}

function tareIndex(){
    const naka = ($H.in_seieki.findNum(v(77))-0 ).clamp(0,4)
    return naka
}

function checkExistAhegao(fileName){
    const url = 'mods/JS_MODs_files/' + fileName + '.js';
    return Mihil_FileExists.checkExist(url, true)
}

function checkExistDildo(fileName){
    const url = 'mods/JS_MODs_files/' + fileName + '.js';
    return Mihil_FileExists.checkExist(url, true)
}
 
ImageManager.loadStand = function(filename, hue) {
    return this.loadBitmap(`img/pictures/${Getprefix()}stand/`, filename, hue, true);  
}

ImageManager.loadCG = function(foldername, filename, hue) {
    return this.loadBitmap(`img/pictures/${Getprefix()}`+foldername+'/', filename, hue, true);
}

function strIsNippleBlack(canBlackNipple){
    if(!isWhite() && !!canBlackNipple){
        if(!isBigBellyOrMore() && isBustSaggy()){
            return '_saggy_black'
        } else {
            return '_black'
        }
    }
    return ''
}


