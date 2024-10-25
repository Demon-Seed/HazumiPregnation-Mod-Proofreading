//for developers: if you create a new form of hazumi you can add the variable you use in the array 
//check in what array your new form bodytype fit(normal,young,loli or ultraloli)


function v(id){
    return $gameVariables._data[id] || 0
}

function HazumiBodyType(){
		var variablesForNormal    = [0,3,4] //IDs for normal hazumi
		var variablesForYoung     = [1,5,6] //IDs for Young hazumi
		var variablesForLoli      = [2,7,8]	// IDs for Loli Hazumi
		var variablesForUltraLoli = [9,10,11] // IDs for Ultra Loli Hazumi
		var hazumiForm = v(704);
		var bodyType=''

			function isNormal(target,pattern){
				return pattern.includes(target);
			}
			function isYoung(target,pattern){
				return pattern.includes(target);
			}
			function isLoli(target,pattern){
				return pattern.includes(target);
			}
			function isUltraLoli(target,pattern){
				return pattern.includes(target);
			}
			switch(true){
				case(isNormal(hazumiForm,variablesForNormal)):
				bodyType = 'normal'
				break;
				case(isYoung(hazumiForm,variablesForYoung)):
				bodyType = 'young'
				break;
				case(isLoli(hazumiForm,variablesForLoli)):
				bodyType = 'loli'
				break;
				case(isUltraLoli(hazumiForm,variablesForUltraLoli)):
				bodyType = 'ultraloli'
				break;
			}
			return bodyType;
	}

/*(function () {
	
})();*/