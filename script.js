let tabela = 0;
let valor = document.querySelector("#text")
let btAcansar = document.querySelector("#avansar")
let main = document.querySelector("main")
let textoTabela = document.querySelector("#textoTabela")
function clicar(){
    
    if((valor.value !== "") && (valor.value !== null) && (valor.value !== undefined)){
        ++tabela;
        let adicionar = `
        <div id="${tabela}" class="tabela" >

            <div onclick="marcarTarefa(${tabela})" class="foto">
                <img src="img/trancar.png" alt="Erro" id="foto_${tabela}" class="trancar" >
            </div>

            <p onclick="marcarTarefa(${tabela})" class="textoTabela">${valor.value}</p>

            <button class="Escluir" onclick="escluir(${tabela})">Escluir</button>
        </div>`
        main.innerHTML += adicionar;

        valor.value = "";
        valor.focus();
    }
}
function escluir(id){
    let tarefa = document.getElementById(id)
    tarefa.remove();
}
function marcarTarefa(id){
    let marcar = document.getElementById(id);
    let classe = marcar.getAttribute('class');

    if(classe == "tabela"){
        marcar.classList.add('tabelaValido');
        let img = document.getElementById("foto_" + id)
        img.src = 'img/caixa-de-selecao.png'

        marcar.parentNode.appendchild(marcar)
        
    }else{
        marcar.classList.remove('tabelaValido');
        let img = document.getElementById("foto_" + id)
        img.src = 'img/trancar.png'
    }

}