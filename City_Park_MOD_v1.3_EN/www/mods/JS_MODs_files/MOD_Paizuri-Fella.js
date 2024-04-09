function s(id){
    return $gameSwitches._data[id] || 0;
}

function v(id){
    return $gameVariables._data[id] || 0
}

function isShasei(){
    return $gameTemp.isShasei;
}

function isPennisCoveredSperm(){
    return s(87)
}

function sotoIndex(){
    const soto = ($H.out_seieki.findNum(v(76))-0 ).clamp(0,4)
    return soto
}

function tareIndex(){
    const naka = ($H.in_seieki.findNum(v(77))-0 ).clamp(0,4)
    return naka
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
function isSonyu(){
    return s(85);
}

function isPulling(){
    return $gameTemp.isPulling
}

function NewClothes(){
    return s(520)
}

function isPubic(){ // 変数が0のときtrueなので注意
    return v(69)<=0
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

function donePaiShasei(){
    return v(353) >= 1
}

function isNure(){
    return s(54)
}

function isJusei(){
    return v(42) && !v(43)
}

function doneOralShasei(){
    return v(353) >= 1
}

function donePaizuriShasei(){
    return v(756) >= 1
}
function checkExistDildo(fileName){
    const url = 'mods/JS_MODs_files/' + fileName + '.js';
    return Mihil_FileExists.checkExist(url, true)
}
function ismasturbating(){
    return $gameSwitches.value(551)
}

(function () {
    //Missionary Secction

    Display_CG.Missionary.prototype.makeFella = function(){
        this._fella = new Sprite()
        this.addChild(this._fella)
    }
    
    Display_CG.Missionary.prototype.upFella =function(){
        if(!isOralSex() && !isOrgyVaginalMouth()){
            this._fella.visible = false
            return
        }
        if(isShasei()){
            this._fella.bitmap = ImageManager.loadPicture('M_CG_fella_shasei_moment')
        } else if(doneOralShasei()){
            this._fella.bitmap = ImageManager.loadPicture('M_CG_fella_shasei_tare')
        } else {
            this._fella.bitmap = ImageManager.loadPicture('M_CG_fella_sao')
        }
        this._fella.visible = true 
    }

    Display_CG.Missionary.prototype.makePaizuriM = function(){
        this._paizuriM = new Sprite();
        this.addChild(this._paizuriM);
    }

    Display_CG.Missionary.prototype.setPaizuriM = function(){
        let prename='M_CG_Paizuri_sao';
         if(isShasei()){
            prename=prename+'_moment'
            $gameVariables._data[756]=1;
         }else{
            if(donePaizuriShasei()){
                prename=prename+'_tare'
            }
         }
         return prename;
    }
    Display_CG.Missionary.prototype.upPaizuriM =function(){
        const PaizuriNameM = this.setPaizuriM()
        this._paizuriM.bitmap = ImageManager.loadPicture(PaizuriNameM);
        if(!isPaizuriSex() && !isOrgyVaginalBreast()){
            this._paizuriM.visible=false
        }else{
            this._paizuriM.visible=true
        }
    }

    Display_CG.Missionary.prototype.makeFinger = function(){
        this._finger = new Sprite()
        this.addChild(this._finger)
    }

    Display_CG.Missionary.prototype.setFinger=function(){
        return 'M_CG_cut_finger'
    }

    Display_CG.Missionary.prototype.upFinger =function(){
        const FingerName = this.setFinger()
        this._finger.bitmap = ImageManager.loadPicture(FingerName);
        this._finger.visible=false
        if(!isDanmen()){
            this._finger.visible= false
            return;
        } else {
            if(isSonyu()){
                this._finger.visible= false

            }else{
                if(!isFingerSex()){
                    this._finger.visible=false
                }else{
                    this._finger.visible= true
                }    
                
            }
            
        }
    }

    const _Display_CG_Missionary_upsao = Display_CG.Missionary.prototype.upSao
    Display_CG.Missionary.prototype.upSao = function(){
        switch(true){
            case(isOralSex()||isPaizuriSex()||isLickSex()&& !isOrgyVaginalBreast() && !isOrgyVaginalMouth()):
                this._sao.visible=false
                return;
            //break;
            case(isOrgyVaginalMouth()&&isPaizuriSex()||isLickSex()):
                this._sao.visible=false
                return;
            //break;
            case(isOrgyVaginalBreast() && isOrgyVaginalMouth() && isLickSex()):
                this._sao.visible=false
                return;
            //break;
        }
        this._sao.visible = !isPulling()
        let sao
        if(isSonyu()){
            isGom() ? sao = 'M_CG_sao_gom' : sao = 'M_CG_sao'
        } else {
            isGom() ? sao = 'M_CG_sao_soto_gom' : sao = 'M_CG_sao_soto'
        }
        if(checkExistDildo("MOD_Dildo")){
            if(ismasturbating()){
                if(isSonyu()){
                    sao = 'M_CG_sao_dildo'
                }else{
                    sao ='M_CG_sao_dildo_soto'
                }
            } 
        }
        this._sao.bitmap = ImageManager.loadPicture(sao)
    } 

    // Cowgirl Section
    Display_CG.Cow.prototype.makeFella = function(){
        this._fella = new Sprite()
        this.addChild(this._fella)
    }

    Display_CG.Cow.prototype.upFella =function(){
        if(!isOralSex() && !isOrgyVaginalMouth()){
            this._fella.visible = false
            return
        }
        if(isShasei()){
            this._fella.bitmap = ImageManager.loadPicture('C_CG_fella_shasei_moment')
        } else if(doneOralShasei()){
            this._fella.bitmap = ImageManager.loadPicture('C_CG_fella_shasei_tare')
        } else {
            this._fella.bitmap = ImageManager.loadPicture('C_CG_fella_sao')
        }
        this._fella.visible =  true 
    }

    const _Display_CG_Cow_MakeCut  = Display_CG.Cow.prototype.MakeCut
    Display_CG.Cow.prototype.makeCut=function(){
        this._cutBase = new Sprite()
        this._cutBase.bitmap = ImageManager.loadPicture('C_CG_cut_base')
        this.addChild(this._cutBase)

        this._cutSao0 = new Sprite()
        this._cutSao0.bitmap = ImageManager.loadPicture('C_CG_cut_body_sao')
        this.addChild(this._cutSao0)

        this._cut = new Sprite()
        this._cut
        if (isBote()){ 
            this._cut.bitmap = ImageManager.loadPicture('C_CG_cut_body_bote')
        } else {
            this._cut.bitmap = ImageManager.loadPicture('C_CG_cut_body')
        }
        this.addChild(this._cut)
    }

    const _Display_CG_Cow_upSao = Display_CG.Cow.prototype.upSao
    Display_CG.Cow.prototype.upSao=function(){
        //_OjiEvt1.apply(this, arguments)
        if(isParkEvts()){
            this._cutSao0.visible = false
            this._sao_Body.visible= false
            this._cutSao.visible = false
            this._cutSaoSoto.visible = false
            return
        }
        switch(true){
            case(isOralSex()||isPaizuriSex()||isLickSex()&& !isOrgyVaginalBreast() && !isOrgyVaginalMouth()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false
                return;
            //break;
            case(isOrgyVaginalMouth()&&isPaizuriSex()||isLickSex()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false
                return;
            //break;
            case(isOrgyVaginalBreast() && isOrgyVaginalMouth() && isLickSex()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false
                return;
            //break;
            default:
                this._sao_Body.visible= true
                this._cutSao0.visible = true
            break;

        }
        if(!isParkEvts()){
            this._sao_Body.visible= true
            this._cutSao0.visible = true
        }
        let sao
        if(!isGom()){
            sao = 'C_CG_sao_sonyu'
        } else {
            sao = 'C_CG_sao_sonyu_gom'
        }
        if(ismasturbating()){
            sao = 'C_CG_sao_sonyu_dildo'
        }
        this._sao.bitmap = ImageManager.loadPicture(sao)
    }

    const _Display_CG_Cow_upCutSao = Display_CG.Cow.prototype.upCutSao
    Display_CG.Cow.prototype.upCutSao=function(){
        //_OjiEvt2.apply(this, arguments)
        if(isParkEvts()){
            this._cutSao0.visible = false
            this._sao_Body.visible= false
            this._cutSao.visible = false
            this._cutSaoSoto.visible = false
            return
        }
        switch(true){
            case(isOralSex()||isPaizuriSex()||isLickSex()&& !isOrgyVaginalBreast() && !isOrgyVaginalMouth()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false 
                return;
            //break;
            case(isOrgyVaginalMouth()&&isPaizuriSex()||isLickSex()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false 
                return;
            //break;
            case(isOrgyVaginalBreast() && isOrgyVaginalMouth() && isLickSex()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false 
                return;
            //break;
            case(ismasturbating()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                //this._cutSao.visible = false
                //this._cutSaoSoto.visible = false
            default:
                this._cutSao.visible = isSonyu()
            break;
        }       
        if(!isParkEvts()){
            this._cutSao.visible = isSonyu()
        }
        if (isGom()){ 
            this._cutSao.bitmap = ImageManager.loadPicture('C_CG_cut_sao_gom')
        } else {
            this._cutSao.bitmap = ImageManager.loadPicture('C_CG_cut_sao')
        }
        if(ismasturbating()){
            this._cutSao.bitmap = ImageManager.loadPicture('C_CG_cut_dildo')
        }    
    }

    const _Display_CG_Cow_upCutSaoSoto = Display_CG.Cow.prototype.upCutSaoSoto
    Display_CG.Cow.prototype.upCutSaoSoto=function(){
        if(isParkEvts()){
            this._cutSao0.visible = false
            this._sao_Body.visible= false
            this._cutSao.visible = false
            this._cutSaoSoto.visible = false
            return
        }
        switch(true){
            case(isOralSex()||isPaizuriSex()||isLickSex()&& !isOrgyVaginalBreast() && !isOrgyVaginalMouth()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false 
                return;
            //break;
            case(isOrgyVaginalMouth()&&isPaizuriSex()||isLickSex()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false 
                return;
            //break;
            case(isOrgyVaginalBreast() && isOrgyVaginalMouth() && isLickSex()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                this._cutSao.visible = false
                this._cutSaoSoto.visible = false 
                return;
                //break;
            case(ismasturbating()):
                this._cutSao0.visible = false
                this._sao_Body.visible= false
                //this._cutSao.visible = false
                //this._cutSaoSoto.visible = false
            
            default:
                this._cutSaoSoto.visible = true
            break

        }
        if(isSonyu()){
            this._cutSaoSoto.visible = false
            return
        }
        if(!isParkEvts()){
            this._cutSaoSoto.visible = true
        }
        if (isGom()){ 
            this._cutSaoSoto.bitmap = ImageManager.loadPicture('C_CG_cut_sao_gom')
        } else {
            this._cutSaoSoto.bitmap = ImageManager.loadPicture('C_CG_cut_sao')
        }
        if(ismasturbating()){
            this._cutSaoSoto.bitmap = ImageManager.loadPicture('C_CG_cut_Dildo')
        }    
    }

    Display_CG.Cow.prototype.makePaizuriC = function(){
        this._PaizuriC = new Sprite();
        this.addChild(this._PaizuriC);
    }

    Display_CG.Cow.prototype.setPaizuriC = function(){
        let prename='';
         if (!nippleisBlack()){
            prename='C_CG_Paizuri_sao'
         }else{
            prename='C_CG_Paizuri_sao_saggy'
         }
         if(isShasei()){
            prename=prename+'_moment'
            $gameVariables._data[756]=1;
         }else{
            if(donePaizuriShasei()){
                prename=prename+'_tare'
            }
         }
         return prename;
    }

    Display_CG.Cow.prototype.upPaizuriC =function(){
        const PaizuriNameC = this.setPaizuriC()
        this._PaizuriC.bitmap = ImageManager.loadPicture(PaizuriNameC);
        
         if(!isPaizuriSex() && !isOrgyVaginalBreast()){
            this._PaizuriC.visible=false
         }else{
            this._PaizuriC.visible=true
         }
    }

//doggy section
   const _Display_CG_Doggy_upSao = Display_CG.Doggy.prototype.upSao
    Display_CG.Doggy.prototype.upSao=function(){
        /*if(isOralSex() || isPaizuriSex()||isLickSex()){
            if(isOrgyVaginalMouth()|| isOrgyVaginalBreast()){

            }else{
                this._sao.visible = false
                this._saoSoto.visible = false
                this._saoHand.visible = false
            }
            
            return
        }*/
        switch(true){
            case(isOralSex()||isPaizuriSex()||isLickSex()&& !isOrgyVaginalBreast() && !isOrgyVaginalMouth()):
                 this._sao.visible = false
                 this._saoSoto.visible = false
                 this._saoHand.visible = false
                return;
            //break;
            case(isOrgyVaginalMouth()&&isPaizuriSex()||isLickSex()):
                this._sao.visible = false
                this._saoSoto.visible = false
                this._saoHand.visible = false
                return;
            //break;
            case(isOrgyVaginalBreast() && isOrgyVaginalMouth() && isLickSex()):
                this._sao.visible = false
                this._saoSoto.visible = false
                this._saoHand.visible = false
                return;
            //break;
            default:
            break
        }
        if(isSonyu()){
            this._saoSoto.visible = false
        } else {
            if(isGom()){
                if(isShasei()){// ゴム出し
                    this._saoSoto.bitmap = ImageManager.loadPicture('D_CG_sao_gom_shasei')
                } else {
                    this._saoSoto.bitmap = ImageManager.loadPicture('D_CG_sao_gom')
                }
            } else {
                if(isPennisCoveredSperm()){
                    this._saoSoto.bitmap = ImageManager.loadPicture('D_CG_sao_nama_seieki')
                } else {
                    this._saoSoto.bitmap = ImageManager.loadPicture('D_CG_sao_nama')
                }
            }    
            this._saoSoto.visible = true
        }
        // 中出し精液垂れ
        if (tareIndex() >= 1){
            this._shasei_inside.bitmap = ImageManager.loadPicture('D_CG_shasei_in_tare')
        }

        this._sao.visible = true
        this._saoHand.visible = true
    }

    Display_CG.Doggy.prototype.upFella= function(){
        if(!isOralSex() && !isOrgyVaginalMouth()){
            this._fella.visible = false
            return
        }
        if(isShasei()){
            this._fella.bitmap = ImageManager.loadPicture('D_CG_fella_shasei_moment')
        } else if(doneOralShasei()){
            this._fella.bitmap = ImageManager.loadPicture('D_CG_fella_shasei_tare')
        } else {
            this._fella.bitmap = ImageManager.loadPicture('D_CG_fella_sao')
        }
        this._fella.visible = !this.isOrgasm()// 絶頂していなかったら表示
    }


    Display_CG.Doggy.prototype.makePaizuriD = function(){
        this._PaizuriD = new Sprite()
        this.addChild(this._PaizuriD)
    }

    Display_CG.Doggy.prototype.setPaizuriD = function(){
        let prename='D_CG_Paizuri_sao_0';
        if(isShasei()){
            prename=prename+'_moment'
            $gameVariables._data[756]=1
        }else{
            if(donePaizuriShasei()){
                prename=prename+'_tare'
            }
        }
        return prename

    }

    Display_CG.Doggy.prototype.upPaizuriD = function(){
        const PaizuriNameD = this.setPaizuriD()
        this._PaizuriD.bitmap = ImageManager.loadPicture(PaizuriNameD)
        console.log(PaizuriNameD)
        //this._PaizuriD.visible=false
        if(!isPaizuriSex() && !isOrgyVaginalBreast()){
            this._PaizuriD.visible =false
        }else{
            this._PaizuriD.visible =true
        }
    }

    Display_CG.Doggy.prototype.makeFinger = function(){
        this._finger = new Sprite()
        this.addChild(this._finger)
    }

     Display_CG.Doggy.prototype.setFinger=function(){
        return 'D_CG_cut_finger'
    }

    Display_CG.Doggy.prototype.upFinger =function(){
        const FingerName = this.setFinger()
        this._finger.bitmap = ImageManager.loadPicture(FingerName);
        this._finger.visible=false
        if(!isDanmen()){
            this._finger.visible= false
            return;
        } else {
            if(isSonyu()){
                this._finger.visible= false

            }else{
                if(!isFingerSex()){
                    this._finger.visible=false
                }else{
                    this._finger.visible= true
                }    
                
            }
            
        }
    }

})();