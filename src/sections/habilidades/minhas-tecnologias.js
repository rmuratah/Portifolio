import git from "../../assets/icons/habilidades/git.png"
import mysql from "../../assets/icons/habilidades/mysql.png"
import aws from "../../assets/icons/habilidades/aws.png"
import figma from "../../assets/icons/habilidades/figma.png"
import azuredevops from "../../assets/icons/habilidades/azuredevops.png"
import trello from "../../assets/icons/habilidades/trello.png"

const MinhasTecnologias = [{
        id: 1,
        Tecnologia: 'Git',
        Image: git,
        Sobre: 'Git é um sistema de controle de versão distribuído amplamente utilizado para o rastreamento de mudanças no código fonte durante o desenvolvimento de software. Ele permite que os desenvolvedores trabalhem em projetos de forma colaborativa e simultânea, gerenciando diferentes versões do código, acompanhando alterações feitas por diferentes membros da equipe e mesclando as contribuições de volta ao código principal de forma eficiente.'
    },
    {
        id: 2,
        Tecnologia: 'MySQL',
        Image: mysql,
        Sobre: 'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado. Ele oferece uma plataforma robusta e escalável para armazenar, gerenciar e recuperar dados de forma eficiente. Com o MySQL, os desenvolvedores podem criar e gerenciar bancos de dados relacionais para uma variedade de aplicativos, desde sites simples até aplicativos empresariais complexos.'
    },
    {
        id: 3,
        Tecnologia: 'Cloud AWS',
        Image: aws,
        Sobre: 'Amazon Web Services (AWS) é uma plataforma de computação em nuvem oferecida pela Amazon. Ela fornece uma ampla gama de serviços de infraestrutura e computação em nuvem, incluindo armazenamento, computação, banco de dados, análise, inteligência artificial, Internet das Coisas (IoT), segurança e muito mais.'
    },
    {
        id: 4,
        Tecnologia: 'Figma',
        Image: figma,
        Sobre: 'Figma é uma poderosa ferramenta de design colaborativo baseada em nuvem, usada por designers, equipes de produto e desenvolvedores para criar e colaborar em projetos de design de interface do usuário (UI) e experiência do usuário (UX). Ele permite que múltiplos usuários trabalhem simultaneamente no mesmo projeto, facilitando a colaboração em tempo real e a comunicação entre membros da equipe'
    },
    {
        id: 5,
        Tecnologia: 'Azure Devops',
        Image: azuredevops,
        Sobre: 'Azure DevOps é uma plataforma de serviços em nuvem fornecida pela Microsoft, projetada para ajudar equipes de desenvolvimento de software a colaborar, planejar, construir e implantar aplicativos com eficiência.'
    },
    {
        id: 6,
        Tecnologia: 'Trello',
        Image: trello,
        Sobre: 'Trello é uma ferramenta de gestão de projetos baseada em nuvem que utiliza o conceito de quadros, listas e cartões para organizar e priorizar tarefas. É conhecido por sua interface intuitiva e flexibilidade, permitindo que equipes de qualquer tamanho colaborem de forma eficaz.'
    }
]

export default MinhasTecnologias;