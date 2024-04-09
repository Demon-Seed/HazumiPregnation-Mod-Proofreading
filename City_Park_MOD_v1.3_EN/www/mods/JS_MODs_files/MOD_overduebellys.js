///////////////////////////////////////////////////////////////////////////////////////////////////////
// title: quintuplets & quatruplets bellys + overdue bellys + new/ero clothes + cumflation + Tattoo  //
// Autor: nameless-devs                                                                              //
// version: 3.0                                                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////
function s(id){
       return $gameSwitches._data[id] || 0;
}
function v(id){
    return $gameVariables._data[id] || 0;
}

function NewClothes(){
    return s(520)
}
/*function nakaIndex(){
    const SPERM_IN_UTERUS = $gameVariables._data[13];
    const uterus = (SPERM_IN_UTERUS/1200)
    let naka = ($H.in_seieki.findNum(uterus)).clamp(0,11)
    return naka
}*/
 
ImageManager.loadStand = function(filename, hue) {
    return this.loadBitmap(`img/pictures/${Getprefix()}stand/`, filename, hue, true);  
};

ImageManager.loadCG = function(foldername, filename, hue) {
    return this.loadBitmap(`img/pictures/${Getprefix()}`+foldername+'/', filename, hue, true);
};
function isBareChest(){
    return s(3)
}
function isJusei(){
    return v(42) && !v(43)
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

(function(){

const _Display_CG_upSpriteParts = Display_CG.CGManager.upSpritesParts;
Display_CG.CGManager.upSpritesParts = function(folder, preName, sprite){
    const dir = `img/pictures/${Getprefix()}${folder}/`
    for (const [key, part] of Object.entries(sprite.sprites) ) {
        part.bitmap = ImageManager.loadBitmap(dir, preName + key, null, true)
    }
    
}

const _StandDisplay_stand_getDanmenSize = StandDisplay.stand.prototype.getDanmenSize
StandDisplay.stand.prototype.getDanmenSize = function(preStr){
    _StandDisplay_stand_getDanmenSize.apply(this, arguments)
     const v = (id) => {return $gameVariables._data[id]||0}
        const arr = ['_pregnant_big', '_pregnant_med', '_pregnant_little', '_uterus_implantation', '_uterus_jusei']
        const arrFunc = [isBoteBig(), isBoteMed(), isBoteMin(), isImplantation(), isJusei()]
        let name
        arrFunc.forEach( (val,index) => {
            if(val){
                name = preStr + arr[index]
                return
            }
        })
       if (isJusei() && v(59) <= 0) {
            prostitute.multiBaby();
        }
        switch(true){
            case(isOverdueSingleBaby()):
                name = 'stand_cut_pregnant_big_overdue'
                break;
            case(isMegaOverdueSingleBaby()):
                name = 'stand_cut_pregnant_mega_overdue'
                break;
            case(isSuperOverdueSingleBaby()):
                name = 'stand_cut_pregnant_super_overdue'
                break;
            case(isUltraOverdueSingleBaby()):
                name = 'stand_cut_pregnant_ultra_overdue'
                break;
            case(isMegaOverdueTwinBaby()):
                 name = 'stand_cut_pregnant_twins_overdue'
                 break;
            case(isSuperOverdueTwinBaby()):
                 name = 'stand_cut_pregnant_twins_super_overdue'
                 break;
            case(isUltraOverdueTwinBaby()):
                 name = 'stand_cut_pregnant_twins_ultra_overdue'
                 break;
            case(isSuperOverdueTripleBaby()):
                 name = 'stand_cut_pregnant_triple_super_overdue'
                 break;
            case(isUltraOverdueTripleBaby()):
                 name = 'stand_cut_pregnant_triple_ultra_overdue'
                 break;
            case(isUltraOverdueQuadruBaby()):
                 name = 'stand_cut_pregnant_quadru_ultra_overdue'
                 break;
            case(isOverdueQuintuBaby()):
                 name = 'stand_cut_pregnant_big_quintu'
                 break;
            case(hasMultiBaby() && hasTwinsBaby()):
                name +='_multi'
                break;
            case(hasTriplesOrMore() && hasTriplesBaby()):
                name +='_triple' 
                break;
            case(hasQuadrupletsOrMore() && hasQuadrupletsBaby()):
                name +='_quadru'
                break;
            case(hasQuintupletsOrMore()):
                name +='_quintu'
                break;
        }
    return name || ''
}

const _strBellySize = strBellySize;
strBellySize =function(){
_strBellySize.apply(this, arguments)
    const arr = ['ultra', 'super', 'mega', 'huge', 'big', 'med']
    const arrFunc = [isUltraBelly(), isSuperBelly(), isMegaBelly(), isHugeBelly(), isBigBelly(), isMedBelly()]
    let name
    arrFunc.forEach( (val,index) => {
        if(val){
            name = arr[index]
            return
        }
    })
    switch(true){
            case(isOverdueSingleBaby()):
                name = 'huge'
                break;
            case(isMegaOverdueSingleBaby()):
                name = 'mega'
                break;
            case(isSuperOverdueSingleBaby()):
                name = 'super'
                break;
            case(isUltraOverdueSingleBaby()):
                name = 'ultra'
                break;
            case(isMegaOverdueTwinBaby()):
                 name = 'mega'
                 break;
            case(isSuperOverdueTwinBaby()):
                 name = 'super'
                 break;
            case(isUltraOverdueTwinBaby()):
                 name = 'ultra'
                 break;
            case(isSuperOverdueTripleBaby()):
                 name = 'super'
                 break;
            case(isUltraOverdueTripleBaby()):
                 name = 'ultra'
                 break;
            case(isUltraOverdueQuadruBaby()):
                 name = 'ultra'
                 break;                
        }
    return name || ''
}

const _StandDisplay_stand_setClothName = StandDisplay.stand.prototype.setClothName
StandDisplay.stand.prototype.setClothName = function(){
    _StandDisplay_stand_setClothName.apply(this, arguments)
    var test
    switch(true){
        case(isUltraBelly()):
            if(NewClothes()){
                test = 'shirt_'+v(701)+'_bote_ultra';
                if(checkExistPicture(test)){ return test; }
                break;
            }else{
                test = 'shirt_bote_ultra';
                if(checkExistPicture(test)){ return test; }
                break;
            }    
        case(isSuperBelly()):
            if(NewClothes()){
                test = 'shirt_'+v(701)+'_bote_super';
                if(checkExistPicture(test)){ return test; }
                break;
            }else{
                test = 'shirt_bote_super';
            if(checkExistPicture(test)){ return test; }
            break;
            }
        case(isMegaBelly()):
            if(NewClothes()){
                test = 'shirt_'+v(701)+'_bote_mega';
                if(checkExistPicture(test)){ return test; }
                break;
            }else{
               test = 'shirt_bote_mega';
                if(checkExistPicture(test)){ return test; }
                break; 
            }
            case(isHugeBelly()):
            if(NewClothes()){
                test = 'shirt_'+v(701)+'_bote_huge';
                if(checkExistPicture(test)){ return test; }
                break;
            }else{
               test = 'shirt_bote_huge';
                if(checkExistPicture(test)){ return test; }
                break; 
            }
            case(isBigBelly()):
            if(NewClothes()){
                test = 'shirt_'+v(701)+'_bote_big';
                if(checkExistPicture(test)){ return test; }
                break;
            }else{
               test = 'shirt_bote_big';
                if(checkExistPicture(test)){ return test; }
                break; 
            }      
    }
        if(isBoteBelly()){
            if(NewClothes()){
                return `shirt_`+v(701)+`_bote_${strBellySize()}`
            }else{
                return `shirt_bote_${strBellySize()}`
            }
            
        } else {
            if(NewClothes()){
                if(isBellySaggy()){
                    return 'shirt_'+v(701)+'_bellySaggy'
                }else{
                    return 'shirt_'+v(701)
                }
               
            }else{
               return 'shirt_1' 
            }
            
        }
}

const _StandDisplay_stand_upNaked = StandDisplay.stand.prototype.upNaked
StandDisplay.stand.prototype.upNaked = function(){
    _StandDisplay_stand_upNaked.apply(this, arguments)
    let body, canBlackNipple, bellySize,test;
        if(isBellySaggy() && nakaIndex()<=5){
            body = 'naked_afterPregnant'
            canBlackNipple = true
        } else if (isBoteBelly()){
            bellySize = strBellySize()
            body = `naked_bote_${bellySize}`
            canBlackNipple = true
        } else {
            body = 'naked_1'
            if(nippleisBlack()){
                canBlackNipple = true
            } else {
                canBlackNipple = false
            }
        }
        if(isBareChest()){
            if(NewClothes()){
                if(iseroClothes()){

                }else{
                    body = body.replace(/naked/g, 'bareChest_'+v(701))
                } 
            }else{
                body = body.replace(/naked/g, 'bareChest')
            }
            
        }
        switch(true){
        case(isUltraBelly()):
            test= body
            test = test.replace(bellySize, 'ultra');
            if(checkExistPicture(test)){ body = test; }
            break;
        case(isSuperBelly()):
            test= body
            test = test.replace(bellySize, 'super');
            if(checkExistPicture(test)){ body = test; }
            break;
        case(isMegaBelly()):
            test= body
            test = test.replace(bellySize, 'mega');
            if(checkExistPicture(test)){ body = test; }
            break;
        case(isHugeBelly()):
            test= body
            test = test.replace(bellySize, 'huge');
            if(checkExistPicture(test)){ body = test; }
            break;
        case(isBigBelly()):
            test= body
            test = test.replace(bellySize, 'big');
            if(checkExistPicture(test)){ body = test; }
            break;
    }
        body += strIsNippleBlack(canBlackNipple)
        this._body.bitmap = this.imageLoadBody(body)
        //this._body.bitmap = ImageManager.loadPicture(body)
}

const _StandDisplay_stand_upMaid = StandDisplay.stand.prototype.upMaid
StandDisplay.stand.prototype.upMaid = function(){
    _StandDisplay_stand_upMaid.apply(this, arguments)
    let body, canBlackNipple, bellySize;
        if(isBellySaggy() && nakaIndex()<=5){
            body = 'maid_1'
            canBlackNipple = true
        } else if(isBoteBelly()){
            bellySize = strBellySize()
            body = `maid_bote_${bellySize}`
            canBlackNipple = true
        } else {
            body = 'maid_1'
            if(nippleisBlack()){// 乳首変色するなら
                canBlackNipple = true
            } else {
                canBlackNipple = false
            }
        }
        if(isBareChest()){// はだけ中なら
            body = body.replace(/maid/g, 'bareChestMaid')
            body += strIsNippleBlack(canBlackNipple)
        }
        switch(true){
            case(isUltraBelly()):
                test= body
                test = test.replace(bellySize, 'ultra');
                if(checkExistPicture(test)){ body = test; }
                break;
            case(isSuperBelly()):
                test= body
                test = test.replace(bellySize, 'super');
                if(checkExistPicture(test)){ body = test; }
                break;
            case(isMegaBelly()):
                test= body
                test = test.replace(bellySize, 'mega');
                if(checkExistPicture(test)){ body = test; }
                break;
            case(isHugeBelly()):
                test= body
                test = test.replace(bellySize, 'huge');
                if(checkExistPicture(test)){ body = test; }
                break;
            case(isBigBelly()):
                test= body
                test = test.replace(bellySize, 'big');
                if(checkExistPicture(test)){ body = test; }
                break;
        }
        //return this._body.bitmap = ImageManager.loadPicture(body)
        return this._body.bitmap = this.imageLoadBody(body)
}

const _StandDisplay_stand_upPubic = StandDisplay.stand.prototype.upPubic
StandDisplay.stand.prototype.upPubic = function() {
_StandDisplay_stand_upPubic.apply(this, arguments)
    switch(true){
        case(this.isNakedOrErostat() && isUltraBelly()):
            this._pubic.visible = false
            break;
        case(this.isNakedOrErostat() && isSuperBelly()):
            this._pubic.visible = false
            break;
        case(this.isNakedOrErostat() && !isMegaBelly()):
            this._pubic.visible = $gameVariables.value(69)<=0
            break;
        default:
            this._pubic.visible = false
            break;
    }
}

const _Display_CG_Missionary_makeBase = Display_CG.Missionary.prototype.makeBase
Display_CG.Missionary.prototype.makeBase = function() {
        this.makeBody()

        this._nipple = new Sprite()
        this.addChild(this._nipple)

        this._belly = new Sprite()
        this.addChild(this._belly)

        this._leg = new Sprite()
        this._leg.bitmap = ImageManager.loadPicture('M_CG_body_leg')
        this.addChild(this._leg)

        if(nippleisBlack()){
            this._nipple.bitmap = ImageManager.loadPicture('M_CG_nipple_black')
        } else {
            this._nipple.bitmap = ImageManager.loadPicture('M_CG_nipple')
        }

        if(isBellySaggy()){
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_after')
            this._belly.visible = true
        } else if(isBote()){
            let bellyName = "";
            switch(true){
                case(isUltraBelly()):
                bellyName = 'M_CG_body_bote_ultra'
                break;
                case(isSuperBelly()):
                bellyName = 'M_CG_body_bote_super'
                break;
                case(isMegaBelly()):
                bellyName = 'M_CG_body_bote_mega'
                break;
                case(isHugeBelly()):
                bellyName = 'M_CG_body_bote_big'
                break;
                case(isBigBelly()):
                bellyName = 'M_CG_body_bote'
                break;
                case(isMedBelly()):
                bellyName = 'M_CG_body_bote'
                break;
            }
            this._belly.bitmap = ImageManager.loadPicture(bellyName)
            this._belly.visible = true
        } else {
            this._belly.visible = false
        }
        switch(true){
        case(isOverdueSingleBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_big')
            this._belly.visible = true
            break;
        case(isMegaOverdueSingleBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_mega')
            this._belly.visible = true
            break;
        case(isSuperOverdueSingleBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_super')
            this._belly.visible = true
            break;
        case(isUltraOverdueSingleBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_ultra')
            this._belly.visible = true 
            break;
        case(isMegaOverdueTwinBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_mega')
            this._belly.visible = true
            break;
        case(isSuperOverdueTwinBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_super')
            this._belly.visible = true
            break;
        case(isUltraOverdueTwinBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_ultra')
            this._belly.visible = true
            break;
        case(isSuperOverdueTripleBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_super')
            this._belly.visible = true
            break;
        case(isUltraOverdueTripleBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_ultra')
            this._belly.visible = true
            break;
        case(isUltraOverdueQuadruBaby()):
            this._belly.bitmap = ImageManager.loadPicture('M_CG_body_bote_ultra')
            this._belly.visible = true
            break;
    }
}

const _Display_CG_Cow_makeBote = Display_CG.Cow.prototype.makeBote
Display_CG.Cow.prototype.makeBote = function(){
    //_Display_CG_Cow_makeBote.apply(this, arguments)
        this._bote = new Sprite()
        let bellyName = "";
        switch(true){
                case(isUltraBelly()):
                bellyName = 'C_CG_body_bote_ultra'
                break;
                case(isSuperBelly()):
                bellyName = 'C_CG_body_bote_super'
                break;
                case(isMegaBelly()):
                bellyName = 'C_CG_body_bote_mega'
                break;
                case(isHugeBelly()):
                bellyName = 'C_CG_body_bote_big'
                break;
                case(isBigBelly()):
                bellyName = 'C_CG_body_bote'
                break;
                case(isMedBelly()):
                bellyName = 'C_CG_body_bote'
                break;
            }
        this._bote.bitmap = ImageManager.loadPicture(bellyName)
        this.addChild(this._bote)
        if(isBote() || nakaIndex()>=7){
            this._bote.visible = true//isBote()
        }
        
    switch(true){
         case(isOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_big')
            this._bote.visible = true
            break;
        case(isMegaOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_mega')
            this._bote.visible = true
            break;
        case(isSuperOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_super')
            this._bote.visible = true
            break;
        case(isUltraOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_ultra')
            this._bote.visible = true
            break;
        case(isMegaOverdueTwinBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_mega')
            this._bote.visible = true
            break;
        case(isSuperOverdueTwinBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_super')
            this._bote.visible = true
            break;
        case(isUltraOverdueTwinBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_ultra')
            this._bote.visible = true
            break;
        case(isSuperOverdueTripleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_super')
            this._bote.visible = true
            break;
        case(isUltraOverdueTripleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_ultra')
            this._bote.visible = true
            break;
        case(isUltraOverdueQuadruBaby()):
            this.addChild(this._base)
            this._bote.bitmap = ImageManager.loadPicture('C_CG_body_bote_ultra')
            this._bote.visible = true
            break;
    }   
}

const _Display_CG_Doggy_makeBase = Display_CG.Doggy.prototype.makeBase
Display_CG.Doggy.prototype.makeBase = function(){
   // _Display_CG_Doggy_makeBase.apply(this, arguments)
    this._bodyLower = new Sprite()
        this._bodyLower.bitmap = ImageManager.loadPicture('D_CG_body_lower')
        this.addChild(this._bodyLower)

        this.makeAieki()
            this._bote = new Sprite()
            let bellyName = "";
        switch(true){
            case(isUltraBelly()):
                bellyName = 'D_CG_body_bote_ultra'
                break;
            case(isSuperBelly()):
                bellyName = 'D_CG_body_bote_super'
                break;
            case(isMegaBelly()):
                bellyName = 'D_CG_body_bote_mega'
                break;
            case(isHugeBelly()):
                bellyName = 'D_CG_body_bote_big'
                break;
            case(isBigBelly()):
                bellyName = 'D_CG_body_bote'
                break;
            case(isMedBelly()):
                bellyName = 'D_CG_body_bote'
                break;
        }
            this._bote.bitmap = ImageManager.loadPicture(bellyName)
            this.addChild(this._bote)
        if(isBote()|| nakaIndex()>=7){
            this._bote.visible = true
        }    

        // 上半身
        this._bodyUpper = new Sprite()
        this._bodyUpper.bitmap = ImageManager.loadPicture('D_CG_body_upper')
        this.addChild(this._bodyUpper)
    switch(true){
         case(isOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_big')
            this._bote.visible = true
            break;
        case(isMegaOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_mega')
            this._bote.visible = true
            break;
        case(isSuperOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_super')
            this._bote.visible = true
            break;
        case(isUltraOverdueSingleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_ultra')
            this._bote.visible = true
            break;
        case(isMegaOverdueTwinBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_mega')
            this._bote.visible = true
            break;
        case(isSuperOverdueTwinBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_super')
            this._bote.visible = true
            break;
        case(isUltraOverdueTwinBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_ultra')
            this._bote.visible = true
            break;
        case(isSuperOverdueTripleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_super')
            this._bote.visible = true
            break;
        case(isUltraOverdueTripleBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_ultra')
            this._bote.visible = true
            break;
        case(isUltraOverdueQuadruBaby()):
            this._bote.bitmap = ImageManager.loadPicture('D_CG_body_bote_ultra')
            this._bote.visible = true
            break;
    } 
}
})();