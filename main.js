const botoes = document.querySelectorAll("botao");

for (let i=0; ii,botoes.lenght; i++) {
    botoes[i].onclick = function(){

for (let j=0; j<botoes.lenght; j++){
    botoes[j].classlist.remove("ativo")
}

        botoe[i].classlist.add("ativo");
    };
}

