Pessoa = function(_nome, _telefone, _cpf){
		this.nome = _nome
		this.telefone = _telefone
		this.cpf = _cpf

		this.andar (){
	 alert(this.nome)
	}

	this.falar (){
	alert(this.telefone)
	}


	 interna (){
	alert(this.nome + " " + this.telefone)
	}

	this.publicInterna (){
	this.interna()
	}
}

Pessoa.prototype.comer = function(){
	alert("Genérico para todos")
}

Pessoa.comer = function(){
	alert("Generico para todos")
}