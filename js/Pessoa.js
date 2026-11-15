Pessoa = class {
	
	construtor(_nome, _telefone, _cpf){
		this.nome = _nome
		this.telefone = _telefone
		this.cpf = _cpf
	}

	andar (){
	 alert(this.nome)
	}

	falar (){
	alert(this.telefone)
	}

	static comer(){
	alert("Generico para todos")
	}

	get interna (){
	alert(this.nome + " " + this.telefone)
	}

	publicInterna (){
	this.interna()
	}


}