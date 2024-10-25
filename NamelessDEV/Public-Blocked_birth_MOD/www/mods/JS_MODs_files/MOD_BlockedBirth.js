function s(id){
    return $gameSwitches._data[id] || 0;
}

function v(id){
    return $gameVariables._data[id] || 0
}


function isBockedbirth(){
    return s(529)
}

//mimi update 5.3

(function () {

    // Birth Section;

    Display_CG.Birth.prototype.makePantyB = function(){
        this._PantyB = new Sprite();
        this.addChild(this._PantyB);
    }

    Display_CG.Birth.prototype.setPantyB = function(){
        let name='Panty_Block_'+v(71);//+'_M';
        switch(HazumiBodyType()){
            case 'loli':
                switch(true){
                    case(isUltraBelly()||isSuperBelly()):      
                        name=name+'_US';   
                    break;     
                    case(isMegaBelly()):
                        name=name+'_M';
                    break;
                }                    
            break;     
        }
        if(v(443)==2 || v(444)==2){
            name=name+'_twin';
        }
        if(v(444)==4){
            name='Panty_Block_'+v(71)
        }
        return name
    }


    Display_CG.Birth.prototype.upPantyB =function(){
        const PantyNameB = this.setPantyB()
        console.log(PantyNameB)
        this._PantyB.bitmap = ImageManager.loadPicture(PantyNameB);
         if(isBockedbirth()){
            this._PantyB.visible=true
         }else{
            this._PantyB.visible=false
         }
    }

    

})();

