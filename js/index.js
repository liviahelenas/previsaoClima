const form = document.querySelector(` form`);
///tipando o tipo da constante, ou ele será um elemento HTML, ou retornará nulo. Com isso, será localizado pelo document.querySelector 
const input = document.querySelector(`#input-localizacao`);
const sectionInfo = document.querySelector(`#search-form`);
///o ponto de interrogação serve para dar certeza de que o form não voltará nulo
///prevent default: impede de recarregar a página
///submit: é o comportamento do evento
form?.addEventListener(`submit`, async (event) => {
    console.log("clicou!");
    event.preventDefault();
    ///se o input está nulo, ele retorna ao início
    if (!input || !sectionInfo)
        return;
    /// pegue o valor de input e armazene em localização
    const localizacao = input.value;
    /// se a localização retornar vazia, retorne um alerta
    /// se localização for escrito menor que 3 caracteres, retorne um alerta
    if (localizacao.length === 0) {
        alert("O campo está vazio, preencha novamente.");
        return;
    }
    else if (localizacao.length < 3) {
        alert("O local precisar ter 3 letras!");
        return;
    }
    ///  na const response, faça um fetch que será awayt(pois espera a resposta asyn do evento),
    ///armazene em dados a espera da resposta e transforme em valor JSON;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=ed827368b09c96f2c0cdf8bbb6800134&units=metric&lang=pt_br`);
        /// se retornar diferente  do status ok na API, não foi encontrado o destino
        if (!response.ok) {
            alert("Não foi encontrado este destino.");
            return;
        }
        /// dados recebe resposta e transforma em json.
        const dados = await response.json();
        /// infos recebe de dados, parametros do son;
        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
        };
        ///variavel em string info (armazena em string, o dado json), é colocada na estrutura do html
        ///é criado pelo ts com inneHTML uma parte do código, que será dinamico.
        sectionInfo.innerHTML = `
     <section id="tempo-info">
            <div class="tempo-dados">
                <div>
                    <h2>${infos.local}</h2>
                    <p>${infos.temperatura} °C</p>

                </div>

                <div>
                <img src="${infos.icone}" class="icone-clima" />
                </div>

            </div>
        </section>`;
    }
    catch (err) {
        console.log("Não foi possível fazer sua requisição!", err);
    }
});
export {};
//# sourceMappingURL=index.js.map