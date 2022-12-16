function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "Grey's Anatomy ",
            imagem: "img/ga.png",
            descricao:
                "Em Grey's Anatomy, os médicos do Grey Sloan Memorial Hospital/Seattle Grace Hospital lidam diariamente com casos de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e até mesmo amor. Juntos, eles se esforçam para conciliar os dramas profissionais com os pessoais, descobrindo que ambos podem – e vão – se misturar no meio do caminho. Entre os funcionários do local está Meredith Grey (Ellen Pompeo), filha de um cirurgião conceituado e recém-chegada ao programa de residência. Ela divide as preocupações do ofício com os internos Cristina Yang (Sandra Oh), Izzie Stevens (Katherine Heigl), Alex Karev (Justin Chambers) e George O'Malley (T. R. Knight). Todos passam pela supervisão de três renomados doutores: Miranda Bailey (Chandra Wilson), uma residente sênior que trabalha para ajudar Derek Shepherd (Patrick Dempsey), chefe de neurocirurgia e interesse amoroso de Grey; Preston Burke (Isaiah Washington), chefe do departamento de cardio e futuro noivo de Yang; e Richard Webber (James Pickens Jr.), chefe de cirurgia e cirurgião geral adjunto. Cada um deles luta para sobreviver em meio a longos expedientes e agitados treinamentos, dando o melhor de si nessa carreira tão importante quanto difícil.",
            citacao:
                "Quase completando duas décadas de história, você pode encontrar a série na  Star+."
        },

        bio02: {
            nome: "Transplant",
            imagem: "img/transplant.png",
            descricao:
                "Um médico sírio do serviço de urgências que se viu forçado a deixar a sua terra natal e emigrar para o Canadá terá de ultrapassar numerosos obstáculos para retomar a sua carreira no mundo exigente da emergência médica.",
            citacao:
                "Atualmente a série se encontra na 3ª temporada e pode ser encontrada na GloboPlay."
        },

        bio04: {
            nome: "The Resident",
            imagem: "img/ther.png",
            descricao:
                "Um jovem médico começa seu primeiro dia de trabalho sob a supervisão de um brilhante e frio residente, mas o dia-a-dia no hospital pode ser mais difícil do que ele imagina. Entre salvamentos e perdas, o novato percebe que suas expectativas sempre são frustradas.",
            citacao:
                "Na sua 6ª temporada, a série pode ser encontrada na plataforma da Star+."
        },        

        bio03: {
            nome: "Sob Pressão",
            imagem: "img/sobp.png",
            descricao:
                "Sob Pressão acompanha o dia-a-dia dos funcionários de um hospital público no subúbio do Rio de Janeiro. A vida dos profissionais não é nada fácil, especialmente para o Dr. Evandro (Júlio Andrade), o cirurgião-chefe da equipe médica. Cético, ele encontra alívio para os seus problemas na companhia da doutora Carolina (Marjoire Estiano), sua colega de trabalho que, diferente dele, encontra na fé o refúgio para seus problemas. Os dois podem até ser diferentes, mas vão encontrar um no outro uma maneira de sobreviver entre as emergências do hospital e o caos de suas próprias vidas. Diante de constantes desafios, eles fazem o impossível pela vida de seus pacientes, indo ao limite para exercer sua profissão com ética e eficiência, mas sem nunca perder o lado humano da medicina. Mesmo com enormes faltas e problemas na saúde pública, os dois e seus outros companheiros lutam diariamente para oferecer a melhor assistência possível a todos que atravessam as portas do hospital.",
            citacao:
                "Sua 5ª temporada foi lançada este ano e está disponível no GloboPlay."
        },


        bio05: {
            nome: "Onde Está Meu Coração",
            imagem: "img/oemc.png",
            descricao:
                "Em Onde Está Meu Coração, Amanda (Letícia Collin) é uma jovem e brilhante médica, sempre dedicada a seus pacientes. Mas a pressão diária do trabalho dentro do hospital acaba sobrecarregando a moça, que busca algum tipo de consolo nas drogas. Agora, enquanto ela tenta tratar sua dependência química, vê tudo que a rodeia desmoronar: seu casamento com Miguel (Daniel Oliveira), seu relacionamento com a irmã, Júlia (Manu Morelli), e a união de seus pais, Sofia (Mariana Lima) e David (Fabio Assunção).",
            citacao:
                "A série estreiou sua primeira temporada na Globo/play."
        },

        bio06: {
            nome: "Chicago Med",
            imagem: "img/cm.png",
            descricao:
                "Spin-off de Chicago Fire, a série acompanha o dia-a-dia de um grupo de médicos e enfermeiros de um hospital de Chicago. Entre eles, a Dra. Hannah Tremble (Laurie Holden), uma fria e brilhante cirurgiã; a diretora Sharon Goodwin (S. Epatha Merkerson), que não aprova o sistema político no qual a instituição está inserido, mas está sempre tentando ajudar os outros; o Dr. Daniel Charles (Oliver Platt), chefe da psiquiatria; o Dr. Will Halstead (Nick Gehlfuss) e a enfermeira Maggie Seaver (Yaya DaCosta).",
            citacao:
                "Na sua 8ª temporada, esta série pode ser encontrada tanto no Prime Video, quanto na GloboPlay."
        },

        bio07: {
            nome: "The Good Doctor",
            imagem: "img/tgd.png",
            descricao:
                "Em The Good Doctor, um jovem cirurgião diagnosticado com savantismo, um distúrbio psíquico raro, é recrutado para trabalhar na ala pedriátrica de um hospital de prestígio. Apesar do seu incrível conhecimento na área da medicina, esse médico não consegue se relacionar com o mundo à sua volta. Resta saber se esta dificuldade será um problema na hora de salvar vidas.",
            citacao:
                "5ª temporada disponível na GloboPlay."
        },

        bio08: {
            nome: "Hospital Playlist",
            imagem: "img/hp.png",
            descricao:
                "Em Hospital Playlist, desde a formatura, cinco médico, um especialista em cirurgia geral, um cardiologista, um ginecolista, um pediatra e um neurocirgião, seguem sendo amigos e colegas no mesmo hospital, por mais de 10 anos. Enquanto enfrentam os altos e baixos da rotina de sua profissão, eles também compartilham o amor pela música. Mesmo lidando com vários problemas no cotidiano do hospital, eles conseguem superar os obstáculos através da forte amizade que construíram e encontrando na música uma forma de escape.",
            citacao:
                "Suas duas temporadas estão disponíveis na Netflix."
        },

        bio09: {
            nome: "House",
            imagem: "img/house.png",
            descricao:
                "O cientista House (Hugh Laurie) é especializado em infectologia e nefrologia, realiza excelentes diagnósticos mantendo uma postura cética, distanciada e até mesmo mau humorada com os pacientes do fictício hospital de Princeton-Plainsboro. Ele trabalha com uma equipe de médicos selecionada de acordo com critérios duvidosos na busca de soluções para os piores males relacionados à saúde.",
            citacao:
                "Mesmo encerrada há anos, a série ainda pode ser encontrada na HBO Max, Prime Video e GloboPlay."
        },

    };
    var content = document.getElementById("content");

    for (var bio in biografias) {
        content.innerHTML += 
        '<div class="card">' + 
        '<img src="' + 
        biografias[bio].imagem + 
        '"/>' + 
        "<details>" + 
        "<summary>" + 
         biografias [bio].nome + 
        "</summary>" + 
        "<p>" + 
        biografias[bio].descricao + 
        "</p>" + 
        "<blockquote>" +         
        biografias[bio].citacao + 
        "</blockquote>" +
        "</details></div>";
    }
}

carregaDicionario();
