
import {promises as fs} from 'fs'

async function pegaDados(){
    const dados = JSON.parse(await fs.readFile("./people.json"));
    return dados;
}


async function exForEach(){
    const dadosRecebidos = await pegaDados();

    dadosRecebidos.forEach(pessoa => {
        console.log(pessoa.name.first,pessoa.name.last,":",pessoa.location.street.name,"N°",pessoa.location.street.number);
    })
}

async function exemploMap(){
    const dadosRecebidos = await pegaDados();

    // o metodo Map permite criar uma nova variavel contendo apenas os dados necessarios para o recurso . Ou seja ele vai criar uma nova variavel com os dados limpos

    const dadosLimpos = dadosRecebidos.map(pessoa => {
        return{
            "nomeCompleto" : `${pessoa.name.first}, ${pessoa.name.last}`,
            "idade": `${pessoa.dob.age} anos`
        }
    })

    console.log(dadosLimpos);
}

async function exemploFilter(){
    const dadosRecebidos = await pegaDados();

    //O filter é um comando que permite voce selecionar os dados baseado num teste logico que voce queira implementar. Ele ira criar uma nova variavel.

    const mais50 = dadosRecebidos.filter(pessoa => {
        return pessoa.dob.age > 70 && pessoa.gender == "male";
    });

    console.log(mais50);
}

async function exemploFiltercomMap(){
    const dadosRecebidos = await pegaDados();

    //O filter é um comando que permite voce selecionar os dados baseado num teste logico que voce queira implementar. Ele ira criar uma nova variavel.

    const mais50 = dadosRecebidos.filter(pessoa => {
        return pessoa.dob.age > 70 && pessoa.gender == "male";
    }).map(pessoa => {
        return{
            "nomeCompleto" : `${pessoa.name.first}, ${pessoa.name.last}`,
            "idade": `${pessoa.dob.age} anos`,
            "email": pessoa.email
        }
    });
    console.log(mais50);
}

//filter nao interrompe o processamento, ele apenas filtra os dados que voce deseja.
//o find interrompe o processamento assim que ele encontra o dado que voce deseja.

async function exemploFind(){
    const dadosRecebidos = await pegaDados();

    //O find é um comando que permite voce selecionar um unico dado baseado num teste logico que voce queira implementar.

    const existePessoa = dadosRecebidos.find(pessoa => {
        return pessoa.gender == "female";
    })

    console.log(existePessoa);
}

async function exemploSome(){
    const dadosRecebidos = await pegaDados();

    //O some é um comando que permite voce verificar se existe algum dado que atenda a um teste logico que voce queira implementar.

    const existeMasc = dadosRecebidos.some(pessoa => {
        return pessoa.gender == "male";
    })
    console.log(existeMasc);
}

async function login(){
    const dadosRecebidos = await pegaDados();

    const loginCorreto = dadosRecebidos.some(pessoa => {
        return pessoa.email == "norma.viana@example.com" && pessoa.login.password == "thumper"
    })
    console.log(loginCorreto);
}


async function exemploEvery(){
    const dadosRecebidos = await pegaDados();

    //O every é um comando que permite voce verificar se todos os dados atendem a um teste logico que voce queira implementar.

    const brasileiros = dadosRecebidos.every(pessoa => {
        return pessoa.nat == "BR"
    })
    console.log(brasileiros);
}

async function exemploSort01(){
    const dadosRecebidos = await pegaDados();

    const dadosOrdenados = dadosRecebidos.sort((p1,p2) => {
        return p2.dob.age - p1.dob.age;
    }).map(pessoa => {
        return pessoa.dob.age
    });

    //o sort é um comando que permite voce ordenar os dados de acordo com um criterio que voce deseja.
    console.log(dadosOrdenados);
}

async function exemploSort02(){
    const dadosRecebidos = await pegaDados();

    const dadosOrdenados = dadosRecebidos.sort((p1,p2) => {
        return p1.name.first.localeCompare(p2.name.first);
    }).map(pessoa => {
        return{
            "nome": pessoa.name.first + " " + pessoa.name.last
        }
    })
    //o sort é um comando que permite voce ordenar os dados de acordo com um criterio que voce deseja.

    console.log(dadosOrdenados);
}

async function exemploIncludes(){
    const dadosRecebidos = await pegaDados();

    const dados = [];

    dadosRecebidos.forEach(pessoa => {
        if(pessoa.name.first.includes("MA")){
            dados.push(pessoa.name.first);
        }
    })

    //

    console.log(dados);
}


async function exemploIncludes2(){
    const dadosRecebidos = await pegaDados();

    const dados = [];

    dadosRecebidos.forEach(pessoa => {
        if(pessoa.name.first.toLowerCase().includes("MA".toLowerCase())){
            dados.push(pessoa.name.first);
            //toUpperCase()
            //Captalize()
        }
    })
    console.log(dados);
}


async function exStartsWith(){
    const dadosRecebidos = await pegaDados();

    const dados = [];

    dadosRecebidos.forEach(pessoa => {
        if(pessoa.name.first.startsWith("A")) {
            dados.push(pessoa.name.first);
        }
    });
    console.log(dados);
}

async function exLength(){
    const dadosRecebidos = await pegaDados();

    const dados = dadosRecebidos.length;

    console.log(dados);
    
}


exLength();