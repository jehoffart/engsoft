import { FormControl } from '@angular/forms';

export class Validation {

  	
  	Url(control: FormControl) {
	  	if(!control.value) return null;
	
	  	let url = /^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]$/;
		
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

		let coin = /^(?:^\s*\d{1,3}(?:\.\d{3})*.\d{2}$|)$/;
		
		return coin.test(control.value) ? null : {
  			ValidCoin: {
    			valid: false
  			}
		};
	}
}