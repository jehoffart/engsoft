import { FormControl } from '@angular/forms';

export class Validation {

  	
  	Url(control: FormControl) {
	  	if(!control.value) return null;
	
	  	var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    	var url = new RegExp(regexQuery,"i");

    	return url.test(control.value) ? null : 
    	{
  			ValidURL: {
  				valid: false
	  		}
		};
	}

	ValidCnpj(control: FormControl) {
		if(!control.value) return null;

		let cnpj = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
	
		return cnpj.test(control.value) ? null : 
    	{
  			ValidCnpj: {
  				valid: false
  			}
		};
	}

	ValidCoin(control: FormControl) {
		if(!control.value) return null;

		var value = control.value.split(' ');

		if(value.length < 2) return {
  			ValidCoin: {
    			valid: false
  			}
		};

		let coin = /^(?:^\s*\d{1,3}(?:\.\d{3})*.\d{2}$|)$/
		
		return coin.test(control.value.split(' ')[1]) ? null : {
  			ValidCoin: {
    			valid: false
  			}
		};
	}
}