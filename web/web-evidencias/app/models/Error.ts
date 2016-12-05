export class Error {

	getError(form) {
		var error = {},
			key;

		for (key in form.controls) {
			if(form.controls[key].controls) error[key] = this.getErrorArray(form.controls[key]);
			else error[key] = this.getMessage(form.controls[key].errors);
		}

		return error;
	}

	getErrorArray(form) {
		var key,
			array = [];
		for (key in form.controls) {
			array.push(this.getError(form.controls[key]));
		}
		return array;
	}

	initError(form) {
		var error = {},
			key;

		for (key in form.controls) {
			if(form.controls[key].controls) error[key] = this.initFormArray(form.controls[key]);
			else error[key] = '';
		}

		return error;
	}

	initFormArray(form) {
		var key,
			array = [];
		for (key in form.controls) {
			array.push(this.initError(form.controls[key]));
		}
		return array;
	}

	getMessage(error) {
		var key,
			msg = '';

		if(!error) return '';

		for (key in error) {
			if(error[key]) {
				switch (key) {
					case 'required':
						return 'Este campo é obrigatório';

					case 'maxlength':
						return 'Máximo de caracteres foi atingido';
					
					case 'ValidURL':
						return 'Este não é um site válido'

					case 'ValidCoin':
						return 'O formato da moeda deve ser R$ 1.000,00'

					case 'ValidCnpj':
						return 'O CNPJ está num formado inválido'
					default:
						return 'Erro deconhecido';
				}
			}
		}
	}
}