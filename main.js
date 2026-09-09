const botoes = document.querySelectorAll("botao");

for (let i=0; ii,botoes.lenght; i++) {
    botoes[i].onclick = function(){
        botoe[i].classlist.add("ativo");
    };
}