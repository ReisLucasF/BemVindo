var db = {
    dados: [
        {
            paragrafo: "1",
            text: `<div>    
                        <h3>Empresa:</h3><aside>Manut Solar LTDA</aside>
                        <h3>Período:</h3><aside>Ago de 2019 até o presente momento</aside>
                        <h3>funções:</h3>
                    </div>
                    <ul>
                        <li>Administração de Servidor Windows realizando controle de acesso, criação de novos usuários e resolução de eventuais erros;</li>
                        <li>Implementação de sistema ERP;</li>
                        <li>Controle de acesso ao sistema;</li>
                        <li>Suporte na utilização de software e verificação de demandas como product owner;</li>
                        <li>Atualização do site institucional da empresa;</li>
                        <li>Criação de design para site, redes sociais e marketing no geral.</li>
                    </ul>`
        },
        {
            paragrafo: "2",
            text: `<div>    
                        <h3>Empresa:</h3><aside>Lojas Americanas S/A</aside>
                        <h3>Período:</h3><aside>Ago de 2019 - Jan de 2021</aside>
                        <h3>funções:</h3>
                    </div>
                    <ul>
                        <li>Atendimento ao cliente online e presencial;</li>
                        <li>Gestão de sistema de pedidos on-line;</li>
                        <li>Gestão de estoque;</li>
                        <li>Organização de loja e checkout;</li>
                        <li>Fechamento de caixa.</li>
                    </ul>`,        
            
        
        },
        {
            paragrafo: "3",
            text: `<summary>Auxiliar Administrativo Junior</summary>
                <div>    
                    <h3>Empresa:</h3><aside>Delta Filmes LTDA</aside>
                    <h3>Período:</h3><aside>Out de 2017 - Jan de 2019</aside>
                    <h3>funções:</h3>
                </div>
                    <ul>
                        <li>Rotina administrativa;</li>
                        <li>Organização de documentos;</li>
                        <li>Elaboração de planilhas e documentos;</li>
                        <li>Atendimento ao cliente;</li>
                        <li>Gestão de estoque.</li>
                    </ul>`,
        }

    ]
}
// Obtem os hemocentro informados pelo usuário nos filtros
var fr = document.querySelector(".name");
function srcExperiencias(fr) {

    // limpa a lista
    $("#experiencia").empty();

    // Popula a tabela com os registros do banco de dados
    document.getElementById('nomeExperiencia').innerHTML = fr;
    for (let index = 0; index < db.dados.length; index++) {
        const indice = db.dados[index];
        if ((indice.paragrafo == fr) || (fr == '')) {
            $("#experiencia").append(
                `<div class="card">
                 <p>${indice.text}<br>
                </div>`
            );
        }
    };

}