(function(){
	const _Display_CG_Missionary_upFace = Display_CG.Missionary.prototype.upFace
	Display_CG.Missionary.prototype.upFace = function(){
   _Display_CG_Missionary_upFace.apply(this, arguments)
        try{
          this.addChild(this._paizuriM)
          this.addChild(this._fella)
        }catch(err){
          console.log('park mod is not installed')
        }
        this.addChild(this._belly)
        try{
          this.addChild(this._TattooM)
          this.addChild(this._PiercingM)
        }catch(err){
          console.log('Tattoo Mod is not installed')
        }
        try{
          this.addChild(this._MaskM)
          this.addChild(this._GogglesM)
          this.addChild(this._SpareMaskM)
        }catch(err){
          console.log('Mask Mod is not installed')
        }
        this.addChild(this._leg)
        this.addChild(this._kupa)
        this.addChild(this._pubic)
        this.addChild(this._aieki)
        this.addChild(this._shasei_outside)
        this.addChild(this._shasei_inside)
        this.addChild(this._ase)
        this.addChild(this._sao)
        this.addChild(this._sotoSeieki)
        this.addChild(this._danmen)
        this.addChild(this._danmen_shasei)
        this.addChild(this._danmen_baby)
        try{
          this.addChild(this._finger)
        }catch(err){
          console.log('Park mod is not installed')
        }
        
}

})();