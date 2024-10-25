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
function isSonyu(){
    return s(85);
}

function NewClothes(){
    return s(520)
}
function isTattoo(){
    return s(550)
}
function isPubic(){ // 変数が0のときtrueなので注意
    return v(69)<=0
}

function isPiercing(){
	return s(549)
}

function isBareChest(){
    return s(3)
}
function isworkingMaid(){
    return s(80)
}

function isMaidOutfit(){
    return s(522)
}

function isNure(){
    return s(54)
}

function isJusei(){
    //const v = (id) => {return $gameVariables._data[id]||0}
    return v(42) && !v(43)
}


(function () {

    function strIsNippleBlack(canBlackNipple){
        if(!isWhite() && !!canBlackNipple){// 乳首沈殿なら
            if(!isBigBellyOrMore() && isBustSaggy()){
                return '_saggy_black'
            } else {
                return '_black'
            }
        }
        return ''
    }
    
    StandDisplay.stand.prototype.makeTattoo = function() {
        this._Tattoo = new Sprite();
        this.addChild(this._Tattoo);
    }

    StandDisplay.stand.prototype.makePiercing = function(){
    	this._Piercing = new Sprite();
    	this.addChild(this._Piercing);
    }

    StandDisplay.stand.prototype.setTattoo =function(){
            switch(true){
                case(isUltraBelly()):
                return 'Tattoo_'+v(699)+'_ultra';
                break;   
                case(isSuperBelly()):
                return 'Tattoo_'+v(699)+'_super';
                break;    
                case(isMegaBelly()):
                return 'Tattoo_'+v(699)+'_mega';
                break;    
                case(isHugeBelly()):
                return 'Tattoo_'+v(699)+'_huge';
                break;   
                case(isBigBelly()):
                return 'Tattoo_'+v(699)+'_big';
                break;
                case(isMedBelly()):
                return 'Tattoo_'+v(699)+'_med';
                break;
                case(isBellySaggy()):
                return 'Tattoo_'+v(699)+'_bellySaggy';
                break;
                default:
                return 'Tattoo_'+v(699);
                break;
            }
    }

    StandDisplay.stand.prototype.setPiercing = function(){
    	switch(true){
                case(isUltraBelly()):
                return 'Piercing_'+v(698)+'_ultra';
                break;   
                case(isSuperBelly()):
                return 'Piercing_'+v(698)+'_super';
                break;    
                case(isMegaBelly()):
                return 'Piercing_'+v(698)+'_mega';
                break;    
                case(isHugeBelly()):
                return 'Piercing_'+v(698)+'_huge';
                break;   
                case(isBigBelly()):
                return 'Piercing_'+v(698)+'_big';
                break;
                case(isMedBelly()):
                return 'Piercing_'+v(698)+'_med';
                break;
                case(isBellySaggy()):
                return 'Piercing_'+v(698)+'_bellySaggy';
                break;
                default:
                return 'Piercing_'+v(698);
                break;
            }
    }

    StandDisplay.stand.prototype.upTatto = function() {
        const v = (id) => { return $gameVariables._data[id] || 0 }
        const TattooName = this.setTattoo();
        this._Tattoo.bitmap = ImageManager.loadPicture(TattooName);
        this._Tattoo.visible=false
        if(isTattoo()){
            if(this.isNakedOrErostat()){
                this._Tattoo.visible=true;
            }else{
                switch(true){
                    case(isUltraBelly()):
                    	switch(HazumiBodyType()){
                    		case 'normal':
                    			this._Tattoo.visible=true;
                    		break;
                    		case 'young':
                    			this._Tattoo.visible=true;
                    		break;
                    		case 'loli':
                    			if(NewClothes()){
                    				if(isBareChest()){
                    					this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_ultra')
                    					this._Tattoo.visible = true
                    				}else{
                    					this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_ultra')
                            			this._Tattoo.visible=true;
                    				}		
                        		}else{
                            		this._Tattoo.visible=true;
                        		}
                    		break;
                    	}
                        this._Tattoo.visible=true;
                        break;   
                    case(isSuperBelly()):
                    		switch(HazumiBodyType()){
                    			case 'normal':
                    				this._Tattoo.visible=true;
                    			break;
                    			case 'young':
                    				if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=true;
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_super')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                        		this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_super')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}else{
                                        	if(isBareChest()){
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}
                                	}
                    			break;
                    			case 'loli':
                    				if(NewClothes()){
                    					this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_super')
                            			this._Tattoo.visible=true;
                        			}else{
                            			this._Tattoo.visible=true;
                        			}
                    			break;
                    		}
                        
                        break;    
                    case(isMegaBelly()):
                    		switch(HazumiBodyType()){
                    			case 'normal':
                    				this._Tattoo.visible=true;
                    			break;
                    			case 'young':
                    				if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=true;
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_mega')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                        		this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_mega')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}else{
                                        	if(isBareChest()){
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}
                                	}
                    			break
                    			case 'loli':
                    				if(NewClothes()){
                    					this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_mega')
                            			this._Tattoo.visible=true;
                        			}else{
                            			this._Tattoo.visible=true;
                        			}
                    			break

                    		}	
                        
                        break;    
                    case(isHugeBelly()):
                    		switch(HazumiBodyType()){
                    			case 'normal':
                    				this._Tattoo.visible=true;
                    			break;
                    			case 'young':
                    				if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=true;
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_huge')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                        		this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_huge')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}else{
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_huge')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_huge')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}
                                	}
                    			break;
                    			case 'loli':
                    			if(NewClothes()){
                    					this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_huge')
                            			this._Tattoo.visible=true;
                        			}else{
                            			this._Tattoo.visible=true;
                        			}
                    			break;
                    		}
                        

                        break;   
                    case(isBigBelly()):
                    		switch(HazumiBodyType()){
                    			case 'normal':
                    				if(isworkingMaid() || isMaidOutfit()){
                            			this._Tattoo.visible=true;
                        			}else{
                            			if(NewClothes()){
                                			this._Tattoo.visible=true;
                            			}else{
                                			if(isBareChest()){
                                    			this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_big')
                                			}else{
                                    			this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_big')
                                			}
                            				this._Tattoo.visible=true;
                            			}
                        			} 
                    			break;
                    			case 'young':
                    				if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=false;
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_big')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                        		this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_big')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}else{
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_big')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_big')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}
                                	}
                    			break;
                    			case 'loli':
                    				if(NewClothes()){
                            			this._Tattoo.visible=false;
                        			}else{
                            			this._Tattoo.visible=true;
                        			}
                    			break;
                    		}
                        break;
                    case(isMedBelly()):
                    		switch(HazumiBodyType()){
                    			case 'normal':
                    				if(isworkingMaid() || isMaidOutfit()){
                    					this._Tattoo.visible=false;
                    				}else{
                    					if(NewClothes()){
                            				this._Tattoo.visible=true;
                        				}else{
                            				this._Tattoo.visible=false;
                        				}
                    				}
                        		break;
                    			case 'young':
                    				if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=false;
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_bare_med')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                        		this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_med')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}else{
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_med')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_med')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}
                                	}
                    			break;
                    			case 'loli':
                    				if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=false;
                                	}else{
                                    	if(NewClothes()){
                                            this._Tattoo.visible=false;
                                    	}else{
                                            this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes_med')
                                            this._Tattoo.visible=true;
                                    	}
                                	}
                    			break;
                    		}
                        break;
                    case(isBellySaggy()):
                    		switch(HazumiBodyType()){
                    			case 'normal':
                    				if(isworkingMaid() || isMaidOutfit()){
                    					this._Tattoo.visible=false;
                    				}else{
                    					if(NewClothes()){
                            				this._Tattoo.visible=true;
                        				}else{
                            				this._Tattoo.visible=false;
                        				}
                    				}
                        		break;
                    			case 'young':
                    				if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=false;
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_bare_saggy')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.visible=false;
                                        	}
                                    	}else{
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}
                                	}
                    			break;
                    			case 'loli':
                    				this._Tattoo.visible=false;
                    			break;

                    		}
                        break;
                    default:
                        	switch(HazumiBodyType()){
                            	case 'normal':
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Tattoo.visible=false;
                            		}else{
                            			if(NewClothes()){
                                   			this._Tattoo.visible=true;
                                		}else{
                                    		this._Tattoo.visible=false;
                                		}
                            		}
                            	break;
                            	case 'young':
                                	if(isworkingMaid() || isMaidOutfit()){
                                    	this._Tattoo.visible=false;
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_newclothes_bare')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.visible=false;
                                        	}
                                    	}else{
                                        	if(isBareChest()){
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes')
                                            	this._Tattoo.visible=true;
                                        	}else{
                                            	this._Tattoo.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_clothes')
                                            	this._Tattoo.visible=true;
                                        	}
                                    	}
                                	}
                                break;
                            case 'loli':
                            	this._Tattoo.visible=false;
                            break;
                        }
                        break;
                }
            } 
        } 
    
    }

    StandDisplay.stand.prototype.upPiercing = function(){
    	const v = (id) => { return $gameVariables._data[id] || 0 }
    	const PiercingName = this.setPiercing();
        this._Piercing.bitmap  = ImageManager.loadPicture(PiercingName);
        if(isPiercing()){
        	if(this.isNakedOrErostat()){
        		this._Piercing.visible=true;
        	}else{
        		switch(true){
        			case(isUltraBelly()):
        					switch(HazumiBodyType()){
                            	case 'normal'://normal
                            		this._Piercing.visible=true
                            	break;
                            	case 'young'://young
                                	this._Piercing.visible=true
                                break;
                            	case 'loli'://loli
                            		this._Piercing.visible=true
                            	break;
                        	}
        			break;
        			case(isSuperBelly()):
        					switch(HazumiBodyType()){
                            	case 'normal'://normal
                            		this._Piercing.visible=true
                            	break;
                            	case 'young'://young
                                    this._Piercing.visible=true
                                break;
                            	case 'loli'://loli
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible =true
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.bitmap=ImageManager.loadPicture('Piercing_'+v(698)+'_newclothes_super')
                            				this._Piercing.visible = true
                            			}else{
                            				this._Piercing.visible = true
                            			}
                            		}
                            	break;
                        	}
        			break;
        			case(isMegaBelly()):
        					switch(HazumiBodyType()){
                            	case 'normal'://normal
                            		this._Piercing.visible=true
                            	break;
                            	case 'young'://young
                                    this._Piercing.visible=true
                                break;
                            	case 'loli'://loli
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible =true
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.bitmap=ImageManager.loadPicture('Piercing_'+v(698)+'_newclothes_mega')
                            				this._Piercing.visible = true
                            			}else{
                            				this._Piercing.visible = true
                            			}
                            		}
                            	break;
                        	}
        			break;
        			case(isHugeBelly()):
        					switch(HazumiBodyType()){
                            	case 'normal'://normal
                            		this._Piercing.visible=true
                            	break;
                            	case 'young'://young
                            		if(isworkingMaid()){
                            			this._Piercing.bitmap=ImageManager.loadPicture('Piercing_'+v(698)+'_Maid_huge')
                            			this._Piercing.visible=true  
                            		}else{
                            			this._Piercing.visible=true                  
                            		}
                                    
                                break;
                            	case 'loli'://loli
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible =true
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.visible = false
                            			}else{
                            				this._Piercing.visible = true
                            			}
                            		}
                            	break;
                        	}
        			break;
        			case(isBigBelly()):
        					switch(HazumiBodyType()){
                            	case 'normal'://normal 
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible=true
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.visible=true
                                		}else{
                                			this._Piercing.visible=false
                                		}
                            		}
                            	break;
                            	case 'young'://young
                                	if(isworkingMaid() || isMaidOutfit()){
                                    	this._Piercing.visible=false
                                	}else{
                                        this._Piercing.visible=true
                                	}
                                break;
                            	case 'loli'://loli
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible =true
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.visible = false
                            			}else{
                            				this._Piercing.visible = true
                            			}
                            		}
                            	
                            	break;
                        	}
        			break;
        			case(isMedBelly()):
        					switch(HazumiBodyType()){
                            	case 'normal'://normal 
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible=false
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.visible=true
                                		}else{
                                			this._Piercing.visible=false
                                		}
                            		}
                            	break;
                            	case 'young'://young
                                	if(isworkingMaid() || isMaidOutfit()){
                                    	this._Piercing.visible=false
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Piercing.visible=true
                                        	}else{
                                            	this._Piercing.visible=false
                                        	}
                                    	}else{
                                            this._Piercing.visible=true
                                    	}
                                	}
                                break;
                            	case 'loli'://loli
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible =false
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.visible = false
                            			}else{
                            				this._Piercing.visible = true
                            			}
                            		}
                            	break;
                        	}
        			break;
        			case(isBellySaggy()):
        					switch(HazumiBodyType()){
                            	case 'normal'://normal 
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible=false
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.visible=true
                                		}else{
                                			this._Piercing.visible=false
                                		}
                            		}
                            	break;
                            	case 'young'://young
                                	if(isworkingMaid() || isMaidOutfit()){
                                    	this._Piercing.visible=false
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Piercing.visible=true
                                        	}else{
                                            	this._Piercing.visible=false
                                        	}
                                    	}else{
                                            this._Piercing.bitmap=ImageManager.loadPicture('Piercing_'+v(698))
                                            this._Piercing.visible=true
                                    	}
                                	}
                                break;
                            	case 'loli'://loli
                            		this._Piercing.visible=false;
                            	break;
                        	}
        			break;
        			default:
        					switch(HazumiBodyType()){
                            	case 'normal'://normal 
                            		if(isworkingMaid() || isMaidOutfit()){
                            			this._Piercing.visible=false
                            		}else{
                            			if(NewClothes()){
                            				this._Piercing.visible=true
                                		}else{
                                			this._Piercing.visible=false
                                		}
                            		}
                            	break;
                            	case 'young'://young
                                	if(isworkingMaid() || isMaidOutfit()){
                                    	this._Piercing.visible=false
                                	}else{
                                    	if(NewClothes()){
                                        	if(isBareChest()){
                                            	this._Piercing.visible=true
                                        	}else{
                                            	this._Piercing.visible=false
                                        	}
                                    	}else{
                                            this._Piercing.visible=true
                                    	}
                                	}
                                break;
                            	case 'loli'://loli
                            		this._Piercing.visible = false
                            	break;
                        	}
        			break;
        		}
        	}
        }else{
        	this._Piercing.visible = false
        }
    }


    const _makeStandFun = StandDisplay.stand.prototype.makeStand;
    StandDisplay.stand.prototype.makeStand = function() {
        _makeStandFun.apply(this, arguments);
        this.makeTattoo();
        this.makePiercing();
    }

    const _makestandfunMap =StandDisplay.stand.prototype.makeStandMap;
    StandDisplay.stand.prototype.makeStandMap = function(){
        _makestandfunMap.apply(this,arguments);
        this.makeTattoo();
        this.makePiercing();
    }
    const _updateFun = StandDisplay.stand.prototype.update;
    StandDisplay.stand.prototype.update = function() {
        _updateFun.apply(this, arguments);
        this.upTatto();
        this.upPiercing();
    }

    //tattoo and piercing in missionary:

    Display_CG.Missionary.prototype.makeTattooM = function(){
        this._TattooM = new Sprite();
        this.addChild(this._TattooM);
    }

    Display_CG.Missionary.prototype.makePiercingM = function(){
    	this._PiercingM = new Sprite();
    	this.addChild(this._PiercingM);
    }

    Display_CG.Missionary.prototype.setTattooM = function(){
         switch(true){
                case(isUltraBelly()):
                return 'Tattoo_'+v(699)+'_ultra_M';
                break;   
                case(isSuperBelly()):
                return 'Tattoo_'+v(699)+'_super_M';
                break;    
                case(isMegaBelly()):
                return 'Tattoo_'+v(699)+'_mega_M';
                break;    
                case(isHugeBelly()):
                return 'Tattoo_'+v(699)+'_huge_M';
                break;   
                case(isBigBelly()):
                return 'Tattoo_'+v(699)+'_big_M';
                break;
                case(isMedBelly()):
                return 'Tattoo_'+v(699)+'_big_M';
                break;
                case(isBellySaggy()):
                return 'Tattoo_'+v(699)+'_bellySaggy_M';
                break;
                default:
                return 'Tattoo_'+v(699)+'_M';
                break;
            }
    }

    Display_CG.Missionary.prototype.setPiercingM = function(){
    	switch(true){
                case(isUltraBelly()):
                return 'Piercing_'+v(698)+'_ultra_M';
                break;   
                case(isSuperBelly()):
                return 'Piercing_'+v(698)+'_super_M';
                break;    
                case(isMegaBelly()):
                return 'Piercing_'+v(698)+'_mega_M';
                break;    
                case(isHugeBelly()):
                return 'Piercing_'+v(698)+'_huge_M';
                break;   
                case(isBigBelly()):
                return 'Piercing_'+v(698)+'_big_M';
                break;
                case(isMedBelly()):
                return 'Piercing_'+v(698)+'_big_M';
                break;
                case(isBellySaggy()):
                return 'Piercing_'+v(698)+'_bellySaggy_M';
                break;
                default:
                return 'Piercing_'+v(698)+'_M';
                break;
            }
    }

    Display_CG.Missionary.prototype.upTattooM =function(){
        const TattooNameM = this.setTattooM()
        this._TattooM.bitmap = ImageManager.loadPicture(TattooNameM);
        this._TattooM.visible=false
         if(isTattoo()){
             this._TattooM.visible=true
         }else{
         	this._TattooM.visible=false
         }
    }

     Display_CG.Missionary.prototype.upPiercingM =function(){
     	const PiercingNameM = this.setPiercingM()
        this._PiercingM.bitmap = ImageManager.loadPicture(PiercingNameM);
        this._PiercingM.visible=false
         if(isPiercing()){
            this._PiercingM.visible=true
         }else{
         	this._PiercingM.visible=false
         }
     }

    //tattoo and piercing in birth:

    Display_CG.Birth.prototype.makeTattooB = function(){
        this._TattooB = new Sprite();
        this.addChild(this._TattooB);
    }

    Display_CG.Birth.prototype.makePiercingB = function(){
    	this._PiercingB = new Sprite();
    	this.addChild(this._PiercingB);
    }

    Display_CG.Birth.prototype.setTattooB = function(){
         switch(true){
                case(isUltraBelly()):
                	if(hasQuintupletsOrMore()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isUltraOverdueQuadruBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isUltraOverdueTripleBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isUltraOverdueTwinBaby()){
                		if(progBirthTwins()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}

                	}
                	if(isUltraOverdueSingleBaby()){
                		if(progBirth()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}
                	return 'Tattoo_'+v(699)+'_ultra_M';
                break;   
                case(isSuperBelly()):
                	if(hasQuadrupletsBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isSuperOverdueTripleBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isSuperOverdueTwinBaby()){
                		if(progBirthTwins()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isSuperOverdueSingleBaby()){
                		if(progBirth()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                	}  	
                return 'Tattoo_'+v(699)+'_super_M';
                break;    
                case(isMegaBelly()):
                if(hasTriplesBaby()){
                	if(progBirthTriplesOrMore() >=4){
               			if(usedBeautyCreamToBelly()){
                   			return 'Tattoo_'+v(699)+'_M';
               			}else{
                   			return 'Tattoo_'+v(699)+'_bellySaggy_M';
               			}
               		}
                }
                if(isMegaOverdueTwinBaby()){
                	if(progBirthTwins()>=3){
                		if(usedBeautyCreamToBelly()){
                    		return 'Tattoo_'+v(699)+'_M';
                		}else{
                    		return 'Tattoo_'+v(699)+'_bellySaggy_M';
                		}
                	}
                }
                if(isMegaOverdueSingleBaby()){
                	if(progBirth()>=3){
               			if(usedBeautyCreamToBelly()){
                   			return 'Tattoo_'+v(699)+'_M';
               			}else{
                   			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                		}
                	}
                }
                return 'Tattoo_'+v(699)+'_mega_M';
                break;    
                case(isHugeBelly()):
                if(hasTwinsBaby()){
                    if(progBirthTwins()>=3){
                        if(usedBeautyCreamToBelly()){
                            return 'Tattoo_'+v(699)+'_M';
                        }else{
                            return 'Tattoo_'+v(699)+'_bellySaggy_M';
                        }
                    }
                }
                if(isOverdueSingleBaby()){
                	if(progBirth()>=3){
               			if(usedBeautyCreamToBelly()){
                   			return 'Tattoo_'+v(699)+'_M';
               			}else{
                   			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                		}
                	}
                }
                return 'Tattoo_'+v(699)+'_huge_M';
                break;   
                case(isBigBelly()):
                	if(progBirth()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Tattoo_'+v(699)+'_M';
                			}else{
                    			return 'Tattoo_'+v(699)+'_bellySaggy_M';
                			}
                		}
                return 'Tattoo_'+v(699)+'_big_M';
                break;
                case(isMedBelly()):
                return 'Tattoo_'+v(699)+'_big_M';
                break;
                default:
                return 'Tattoo_'+v(699)+'_M';
                break;
            }

    }

    Display_CG.Birth.prototype.setPiercingB = function(){
    	switch(true){
                case(isUltraBelly()):
                	if(hasQuintupletsOrMore()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isUltraOverdueQuadruBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isUltraOverdueTripleBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                	    		return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isUltraOverdueTwinBaby()){
                		if(progBirthTwins()>=3){
                			if(usedBeautyCreamToBelly()){
        	            		return 'Piercing_'+v(698)+'_M';
            	    		}else{
                	    		return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}

                	}
                	if(isUltraOverdueSingleBaby()){
                		if(progBirth()>=3){
                			if(usedBeautyCreamToBelly()){
        	            		return 'Piercing_'+v(698)+'_M';
            	    		}else{
                	    		return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                return 'Piercing_'+v(698)+'_ultra_M';	
                break;   
                case(isSuperBelly()):
                	if(hasQuadrupletsBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isSuperOverdueTripleBaby()){
                		if(progBirthTriplesOrMore() >=4){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isSuperOverdueTwinBaby()){
                		if(progBirthTwins()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isSuperOverdueSingleBaby()){
                		if(progBirth()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                return 'Piercing_'+v(698)+'_super_M';
                break;    
                case(isMegaBelly()):
                	if(hasTriplesBaby()){
                		if(progBirthTriplesOrMore() >=4){
               				if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
               			}
                	}
                	if(isMegaOverdueTwinBaby()){
                		if(progBirthTwins()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isMegaOverdueSingleBaby()){
                		if(progBirth()>=3){
               				if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
            	    	}
        	        }
                return 'Piercing_'+v(698)+'_mega_M';
                break;    
                case(isHugeBelly()):
                	if(hasTwinsBaby()){
                		if(progBirthTwins()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                	if(isOverdueSingleBaby()){
                		if(progBirth()>=3){
               				if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(698)+'_M';
                			}else{
                    			return 'Piercing_'+v(698)+'_bellySaggy_M';
                			}
                		}
                	}
                return 'Piercing_'+v(698)+'_huge_M';
                break;   
                case(isBigBelly()):
                	if(progBirth()>=3){
                			if(usedBeautyCreamToBelly()){
                    			return 'Piercing_'+v(699)+'_M';
                			}else{
                    			return 'Piercing_'+v(699)+'_bellySaggy_M';
                			}
                		}
                return 'Piercing_'+v(698)+'_big_M';

                break;
                case(isMedBelly()):
                return 'Piercing_'+v(698)+'_big_M';
                break;
                default:
                return 'Piercing_'+v(698)+'_M';
                break;
            }
    }

    Display_CG.Birth.prototype.upTattooB =function(){
        const TattooNameB = this.setTattooB()
        this._TattooB.bitmap = ImageManager.loadPicture(TattooNameB);
        console.log(TattooNameB);
        this._TattooB.visible=false
         if(isTattoo()){
         	this._TattooB.visible=true
         }
    }
    Display_CG.Birth.prototype.upPiercingB = function(){
    	const PiercingNameB = this.setPiercingB()
    	this._PiercingB.bitmap = ImageManager.loadPicture(PiercingNameB);
    	this._PiercingB.visible = false
    	if(isPiercing()){
    		this._PiercingB.visible = true
    	}
    }


    Display_CG.Cow.prototype.upCut = function(){
     if (nakaIndex()>=6){ 
            this._cut.bitmap = ImageManager.loadPicture('C_CG_cut_body_bote')
        }
    }


    Display_CG.Cow.prototype.makeTattooC = function(){
        this._TattooC = new Sprite();
        this.addChild(this._TattooC);
    }

    Display_CG.Cow.prototype.makePiercingC = function(){
    	this._PiercingC = new Sprite();
    	this.addChild(this._PiercingC);
    }


    Display_CG.Cow.prototype.setTattooC = function(){
        switch(true){
                case(isUltraBelly()):
                return '';
                break;   
                case(isSuperBelly()):
                return 'Tattoo_'+v(699)+'_super_C';
                break;    
                case(isMegaBelly()):
                return 'Tattoo_'+v(699)+'_mega_C';
                break;    
                case(isHugeBelly()):
                return 'Tattoo_'+v(699)+'_huge_C';
                break;   
                case(isBigBelly()):
                return 'Tattoo_'+v(699)+'_big_C';
                break;
                case(isMedBelly()):
                return 'Tattoo_'+v(699)+'_big_C';
                break;
                case(isBellySaggy()):
                return 'Tattoo_'+v(699)+'_C';
                break;
                default:
                return 'Tattoo_'+v(699)+'_C';
                break;
            }
    }

    Display_CG.Cow.prototype.setPiercingC = function(){
    	switch(true){
                case(isUltraBelly()):
                return '';
                break;   
                case(isSuperBelly()):
                return 'Piercing_'+v(698)+'_super_C';
                break;    
                case(isMegaBelly()):
                return 'Piercing_'+v(698)+'_mega_C';
                break;    
                case(isHugeBelly()):
                return 'Piercing_'+v(698)+'_huge_C';
                break;   
                case(isBigBelly()):
                return 'Piercing_'+v(698)+'_big_C';
                break;
                case(isMedBelly()):
                return 'Piercing_'+v(698)+'_big_C';
                break;
                case(isBellySaggy()):
                return 'Piercing_'+v(698)+'_C';
                break;
                default:
                return 'Piercing_'+v(698)+'_C';
                break;
            }
    }


    Display_CG.Cow.prototype.upTattooC =function(){
        const TattooNameC = this.setTattooC()
        this._TattooC.bitmap = ImageManager.loadPicture(TattooNameC);
        this._TattooC.visible=false
         if(isTattoo()){
             this._TattooC.visible=true
         }
    }

    Display_CG.Cow.prototype.upPiercingC =function(){
    	const PiercingNameC = this.setPiercingC()
        this._PiercingC.bitmap = ImageManager.loadPicture(PiercingNameC);
        this._PiercingC.visible = false
    	if(isPiercing()){
    		this._PiercingC.visible = true
    	}

    }

    const _legs = Display_CG.Cow.prototype.checkLeg
    Display_CG.Cow.prototype.checkLeg = function(siriNum){
        //_legs.apply(this, arguments)
        let legNum
        if( isSonyu() ){
            if ( siriNum >= 3 ){
                legNum = '2'
            } else {
                legNum = '1'
            }
        } else {    
            legNum = '2'
        }
        if(isTattoo()){
        	switch(HazumiBodyType()){
        	case 'normal':
        		if(!isMedBelly() && !isBigBelly()){
        			if(legNum == '2'){
        				this._TattooC.visible = true
        			}else{
        				this._TattooC.visible = false
        			}
        		}
        	break;
        	case 'young':
        		if(!isMedBelly() && !isBigBelly()){
               		if(legNum == '2'){
                		this._TattooC.visible = true
            		}else{
            			this._TattooC.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_C_1')
            			this._TattooC.visible = true
            		} 
        		}
        	break;
        	case 'loli':
        		if(!isMedBelly() && !isBigBelly() && !isHugeBelly() && !isMegaBelly() && !isSuperBelly()){
               		if(legNum == '2'){
                		this._TattooC.visible = true
            		}else{
            			this._TattooC.bitmap=ImageManager.loadPicture('Tattoo_'+v(699)+'_C_1')
            			this._TattooC.visible = true
            		} 
        		}

        	break;
        	}
        }
        if(isPiercing()){
        	switch(HazumiBodyType()){
        	case 'normal':
        		if(!isMedBelly() && !isBigBelly()){
        			if(legNum == '2'){
        				this._PiercingC.visible = true
        			}else{
        				this._PiercingC.visible = false
        			}
        		}
        	break;
        	case 'young':
        		if(!isMedBelly() && !isBigBelly()){
               		if(legNum == '2'){
                		this._PiercingC.visible = true
            		}else{
            			this._PiercingC.bitmap=ImageManager.loadPicture('Piercing_'+v(698)+'_C_1')
            			this._PiercingC.visible = true
            		} 
        		}
        	break;
        	case 'loli':
        		if(!isMedBelly() && !isBigBelly() && !isHugeBelly() && !isMegaBelly() && !isSuperBelly()){
               		if(legNum == '2'){
                		this._PiercingC.visible = true
            		}else{
            			this._PiercingC.bitmap=ImageManager.loadPicture('Piercing_'+v(698)+'_C_1')
            			this._PiercingC.visible = true
            		} 
        		}

        	break;
        	}
        }
        
        
        let legName = 'C_CG_leg' + legNum
        this._leg.bitmap = ImageManager.loadPicture(legName)
        this._leg_Pubic.bitmap = ImageManager.loadPicture(legName + '_pubic')
        this._leg_Aieki.bitmap = ImageManager.loadPicture(legName + '_aieki')
        
        this._leg_Pubic.visible = isPubic()
        this._leg_Aieki.visible = isNure()
    }

})();