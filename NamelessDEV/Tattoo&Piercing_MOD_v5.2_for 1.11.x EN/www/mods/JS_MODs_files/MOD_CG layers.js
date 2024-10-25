function s(id){
    return $gameSwitches._data[id] || 0;
}
function v(id){
    return $gameVariables._data[id] || 0
}

function sotoIndex(){
    const soto = ($H.out_seieki.findNum(v(76))-0 ).clamp(0,4)
    return soto
}
function tareIndex(){
    const naka = ($H.in_seieki.findNum(v(77))-0 ).clamp(0,4)
    return naka
}

//cg layers for 1.11.1 v2

(function () {
    //laters for missionary

    const _makeCGMissionary = Display_CG.Missionary.prototype.makeCG;
    Display_CG.Missionary.prototype.makeCG = function(){

        try{
            this.makeBackHair()
        }catch(err){
            console.log('this is not the version 1.11.1')
        }
        try{
            this.makeMimiTailM()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        this.makeBase()
        this.makeKupa()
        this.makePubic()
        this.makeAieki()
        this.makeAse()
        this.makeFace()
        try{
            this.makeMimiM()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        try{
            this.makeTattooM()
            this.makePiercingM()
        }catch(err){
            console.log('Tattoo Mod is not installed')
        }
        try{
            this.makeMaskM()
            this.makeGogglesM()
            this.makeSpareMaskM()
        }catch(err){
            console.log('Mask Mod is not installed')
        }
        this.makeShasei()
        this.makeSao()
        this.makeSotoSeieki()
        try{
            this.makeFella()
        }catch(err){
            console.log('Park mod is not installed')
        }
        this.makeDanmen()
        try{
            this.makeFinger()
            this.makePaizuriM()
        }catch(err){
            console.log('Park mod is not installed')
        }
        
    }

    const _updateCGMissionary = Display_CG.Missionary.prototype.update;
    Display_CG.Missionary.prototype.update = function(){
        try{
            this.upPaizuriM()
            this.upFinger()
        }catch(err){
            console.log('Park mod is not installed')
        }
        try{
            this.upMimiTailM()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        this.upBase()
        this.upKupa()
        this.upPubic()
        this.upAieki()
        this.upAse()
        this.upFace()
        try{
            this.upMimiM()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        try{
            this.upTattooM()
            this.upPiercingM()
        }catch(err){
            console.log('Tattoo Mod is not installed')
        }
        try{
            this.upMaskM()
            this.upGogglesM()
            this.upSpareMaskM()
        }catch(err){
           console.log('Mask Mod is not installed')
        }
        this.upSao()
        this.upShasei()
        this.upSotoSeieki()

        this.upDanmen()
        
        try{
            this.upFella()
        }catch(err){
            console.log('Park mod is not installed')
        }
    }

    //CG layers for cow

    const _makeCGCow = Display_CG.Cow.prototype.makeCG;
    Display_CG.Cow.prototype.makeCG = function(){
        $gameTemp._cutCount = 0
        try{
            this.makeMimiTailC()
        }catch(err){
            console.log('mimi mod is not installed')
        }
        this.makeSao()
        this.makeShasei()
        this.makeLeg()
        this.makeBase()
        this.makeBote()
        try {
            this.makeTattooC()
            this.makePiercingC()
        } catch (err){
            console.log('Tattoo Mod is not installed')
        }
        this.makeNail()
        this.makeBust()
        this.makeHead()
        this.makeFace()
        try{
            this.makePaizuriC();  
        }catch(err){
            console.log('Park mod is not installed')
        }
        
        try{
            this.makeMimiC();
        }catch(err){
            console.log('mimi mod is not installed')   
        }
        try{
            this.makeMaskC()
            this.makeGogglesC()
            this.makeSpareMaskC()
        }catch(err){
            console.log('Mask Mod is not installed')
        }

        this.makeCut()
        this.makeCutSao()
        this.makeCutShasei()
        this.makeCutSiri()
        this.makeCutSaoSoto()
        try{
            this.MakeMimiTailXrayC()
        }catch(err){
            console.log('mimi mod is not installed')
        }
        try{
            this.makeFella();
        }catch(err){
            console.log('Park mod is not installed')
        }   
    }

    const _updateCGCow = Display_CG.Cow.prototype.update
    Display_CG.Cow.prototype.update = function(){
        $gameTemp._cutCount += 1
        nakaIndex()
        tareIndex()
        try{
            this.upMimiTailC();
        }catch(err){
             console.log('Mimi Mod is not installed')
        }
        this.upBase()
        this.upBote()
        try{
            this.upTattooC()
            this.upPiercingC()
        }catch(err){
            console.log('Tattoo Mod is not installed')
        }
        this.upNail()
        this.upSao()
        this.upShasei()
        this.upFace()
        try{
            this.upPaizuriC()
        }catch(err){
            console.log('Park mod is not installed')
        }
        
        try{
            this.upMimiC()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        
        try{
            this.upMaskC()
            this.upGogglesC()
            this.upSpareMaskC()
        }catch(err){
           console.log('Mask Mod is not installed')
        }
        try{
            this.upCut()
        }catch(err){
            console.log('Cumflation Mod is not installed')
        }
        this.upCutSao()
        this.upCutShasei()
        this.upCutSiri()
        this.upCutSaoSoto()
        this.upCutSotoSeieki()
        try{
            this.upMimiTailXrayC()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        try{
            this.upFella() 
        }catch(err){
            console.log('park mod is not installed')
        }
        
    }

    //CG layers Doggy

    const _makeCGDoggy = Display_CG.Doggy.prototype.makeCG;
    Display_CG.Doggy.prototype.makeCG = function(){
        
        this.makeSao()
        this.makeBase()
        try{
         this.makeMimiTailD()
        }catch(err){
            console.log('mimi mod is not installed')
        }
        this.makeSaoHand()
        this.makeBote()
        this.makeAse()
        this.makeShasei()
        this.makeHead()
        this.makeFace()
        try{
            this.makeMimiD()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        try{
            this.makeSpareMaskD()
        }catch(err){
            console.log('Mask Mod is not installed')
        }
        
        try{
            this.makeFella()
            this.makePaizuriD()
            
        }catch(err){

        }
        this.makeDanmen()
        try{
            this.makeFinger()
        }catch(err){
            console.log('park mod is not installed')
        }
        
    }

    const _Display_CG_Doggy_update = Display_CG.Doggy.prototype.update
    Display_CG.Doggy.prototype.update = function(){
        $gameMessage.setChoicePositionType(0)
        
        this.upSao()//
        try{
            this.upMimiTailD()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        this.upAieki()
        this.upAse()
        this.upShasei() 
        this.upHead()
        this.upFace()
        try{
            this.upMimiD()
        }catch(err){
             console.log('Mimi Mod is not installed')
        }
        try{
            this.upSpareMaskD()
        }catch(err){
            console.log('Mask Mod is not installed')
        }
        this.upFella()
        try{
            this.upPaizuriD()
            
        }catch(err){

        }
        this.upDanmen()
        try{
            this.upFinger()
        }catch(err){
            console.log('park mod is not installed')
        }
        this.upBase()
    }

    // birth section

    const _makeCGBirth = Display_CG.Birth.prototype.makeCG;
    Display_CG.Birth.prototype.makeCG = function(){
        try{
            this.makeBackHair()
        }catch(err){
            console.log('this is not the version 1.11.1')
        }
        try{
            this.makeMimiTailB()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        this.makeBase()
        try{
            this.makeTattooB()
            this.makePiercingB()
        }catch(err){
            console.log('Tattoo Mod is not installed')
        }
        this.makeBirth()
        this.makeBirthTwins()
        this.makeBirthTriples()
        this.makePubic()
        this.makeAse()
        this.makeFace()
        try{
            this.makeMimiB()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        this.makeShasei()
    }

    const _updateCGBirth = Display_CG.Birth.prototype.update
    Display_CG.Birth.prototype.update = function(){
        try{
            this.upMimiTailB()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        this.upBase()
        try{
            this.upTattooB()
            this.upPiercingB()
        }catch(err){
            console.log('Tattoo Mod is not installed')
        }
        this.upBirth()
        this.upBirthTwins()
        this.upBirthTriples()
        this.upPubic()
        this.upAse()
        this.upFace()
        try{
            this.upMimiB()
        }catch(err){
            console.log('Mimi Mod is not installed')
        }
        this.upShasei()
    }

    const _Display_CG_Birth_upBase = Display_CG.Birth.prototype.upBase
    Display_CG.Birth.prototype.upBase = function(){
        _Display_CG_Birth_upBase.apply(this, arguments)
        let bellyName ="";
        switch(true){
            case(hasQuintupletsOrMore()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._birthTriples)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_ultra'
                if(progBirthTriplesOrMore() >= 4){
                    return this.afterBirthBelly()
                }
                break;
            case(isUltraOverdueQuadruBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                    this.addChild(this._face)
                    this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }      
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._birthTriples)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_ultra'
                if(progBirthTriplesOrMore() >= 4){
                    return this.afterBirthBelly()
                }
                break;
            case(isUltraOverdueTripleBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._birthTriples)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_ultra'
                if(progBirthTriplesOrMore() >= 4){
                    return this.afterBirthBelly()
                }
                break;
            case(isUltraOverdueTwinBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_ultra'
                if(progBirthTwins() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(isUltraOverdueSingleBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_ultra'
                if(progBirth() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(hasQuadrupletsBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }   
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._birthTriples)
                this.addChild(this._pubic)   
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_super'
                if(progBirthTriplesOrMore() >= 4){
                    return this.afterBirthBelly()
                }
                break;
            case(isSuperOverdueTripleBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._birthTriples)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_super'
                if(progBirthTriplesOrMore() >= 4){
                    return this.afterBirthBelly()
                }
                break;
            case(isSuperOverdueTwinBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_super'
                if(progBirthTwins() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(isSuperOverdueSingleBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_super'
                if(progBirth() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(hasTriplesBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._birthTriples)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_mega'
                if(progBirthTriplesOrMore() >= 4){
                    return this.afterBirthBelly()
                }
                break;
            case(isMegaOverdueTwinBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_mega'
                if(progBirthTwins() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(isMegaOverdueSingleBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_mega'
                if(progBirth() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(hasTwinsBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._birthTwins)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName ='M_CG_body_bote_big'
                if(progBirthTwins() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(isOverdueSingleBaby()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote_big'
                if(progBirth() >= 3){
                    return this.afterBirthBelly()
                }
                break;
            case(isPregnant()):
                try{
                    this.addChild(this._MimiB)
                }catch(err){
                console.log('Mimi Mod dont install')
                }
                this.addChild(this._face)
                this.addChild(this._belly)
                try{
                    this.addChild(this._TattooB)
                    this.addChild(this._PiercingB)
                }catch(err){
                    console.log('Tattoo Mod is not installed')
                }
                this.addChild(this._leg)
                try{
                    this.addChild(this._MimiTailB)
                }catch(err){
                    console.log('Mimi Mod dont install')
                }
                this.addChild(this._birth)
                this.addChild(this._pubic)
                this.addChild(this._ase)
                bellyName='M_CG_body_bote'
                if(progBirth() >= 3){
                    return this.afterBirthBelly()
                }
                break;
        }
        return this._belly.bitmap = ImageManager.loadPicture(bellyName);
    }

})();