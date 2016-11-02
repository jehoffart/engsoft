import { FormControl } from '@angular/forms';

export class Util {
    constructor() { }

    ValidURL(c: FormControl) {
    	if(!c.value) return null;

		let url = /^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]$/;
  		return url.test(c.value) ? null : {
    		ValidURL: {
      			valid: false
    		}
  		};
	}

	ValidCnpj(c: FormControl) {
		let cnpj = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  		return cnpj.test(c.value) ? null : {
    		ValidCnpj: {
      			valid: false
    		}
  		};
	}

	ValidCoin(c: FormControl) {
		let coin = /^(?:^\s*\d{1,3}(?:\.\d{3})*,\d{2}$|)$/;
  		return coin.test(c.value) ? null : {
    		ValidCoin: {
      			valid: false
    		}
  		};
	}
}