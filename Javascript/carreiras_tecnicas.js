let descricaoContainer = document.getElementById("descricao"); /* Pega o elemento "descricao" no HTML */
let descricaoTexto = document.getElementById("descricao-texto"); /* Pega o elemento "descricao-texto" no HTML */
let overlay = document.getElementById("overlay"); /* Pega o elemento "overlay" no HTML */
let closeBtn = document.getElementById("botao-fechar"); /* Pega o elemento "botao-fechar" no HTML */

/* Variável guarda as descrições para quando elas forem chamadas (chave:descricao)*/
let descricoes = {
    "Desenvolvedor de Software": "profissional responsável pelo desenvolvimento de sites, aplicações e sistemas. Basicamente, constrói programas para celulares, computadores e demais dispositivos. Além disso, é um profissional muito requisitado em diversas empresas, desde bancos a aplicativos de lojas e 'marketplaces'. O salário de um desenvolvedor de software Junior pode chegar a R$3.000,00 e Sênior a R$9.000,00 ou mais, dependendo de empresa e localização.",

    "Desenvolvedor Front-End": "profissional responsável pela construção da parte visual de um site ou aplicativo baseando seus conhecimentos em linguagens de programação, como JavaScript e PHP, além de linguagens de marcação, como o HTML (Hipertext Markup Language) e CSS (Cascading Style Sheets) e os chamados 'Frameworks' ou também bibliotecas, como Bootstrap, React ou Angular. Além dessas habilidades técnicas, um desenvolvedor front end também precisa ter conhecimentos em usabilidade e experiência do usuário, entendendo como criar interfaces intuitivas e eficientes para os usuários. O salário deste profissional pode variar, mas o valor de um salário de profissional front-end Junior pode chegar a R$3.500,00 e Sênior o dobro desse valor.",

    "Desenvolvedor Back-End": "este profissional tem como responsabilidade a criação de sites com soluções de otimização, segurança e melhorias, estando por dentro do que sua empresa produz e/ou presta serviço. Seus principais objetivos são planejar, criar, testar e manter sites, servidores e banco de dados. Além disso, sua atuação é essencial para a manutenção da eficiência do sistema e mantê-lo atualizado. Atualmente, o desenvolvedor back-end possui atuação comumente atrelada aos e-commerces, aplicativos, softwares comerciais e desenvolvimento de sites. O salário deste profissional a nível de carreria Junior pode estar entre R$4.500,00 a 8.000,00 e Senior entre 8.000,00 a R$15.000,00 variando de região e empresa em que desempenha o papel.",

    "Desenvolvedor Full Stack": "esse profissional trabalha tanto no front-end (interface do usuário) quanto no back-end (servidores e bancos de dados) de um sistema ou aplicação. Seu objetivo é construir soluções completas, integrando a experiência do usuário com a lógica funcional por trás do software. Ele utiliza tecnologias como HTML, CSS, JavaScript, Python, Node.js, entre outras. Suas principais funções desenvolver aplicativos funcionais, garantir a integração entre sistemas, resolver problemas técnicos e melhorar a performance. Os salários variam dependendo da experiência e localização, mas no Brasil podem começar em R$ 4.000 para iniciantes e ultrapassar R$ 15.000 para sêniores. A demanda é alta devido à versatilidade desse profissional no mercado de tecnologia.",

    "Desenvolvedor Mobile" : "é o profissional responsável por criar aplicativos para dispositivos móveis, como smartphones e tablets. Ele pode trabalhar com plataformas específicas (iOS com Swift ou Android com Kotlin/Java) ou com tecnologias multiplataforma (como Flutter ou React Native).  Seus objetivos incluem projetar interfaces intuitivas, garantir boa performance dos apps, corrigir bugs e manter compatibilidade com diferentes dispositivos e sistemas operacionais. A demanda por esse profissional é alta devido ao crescimento do uso de aplicativos móveis. No Brasil, salários começam em torno de R$3.500,00 para juniores e podem ultrapassar R$12.000,00 para profissionais sêniores ou especializados em tecnologias específicas.",

    "Administrador de Redes" : " é o profissional responsável por planejar, configurar, gerenciar e manter redes de computadores em funcionamento seguro e eficiente. Ele cuida da infraestrutura de TI, como servidores, roteadores, firewalls, entre outros garantindo conectividade e proteção contra ameaças cibernéticas. Seus objetivos incluem monitorar o desempenho da rede, solucionar problemas técnicos, implementar políticas de segurança, realizar backups e otimizar recursos. A função é essencial para empresas que dependem de tecnologia para suas operações. Os salários começam em R$3.000,00 para iniciantes e podem superar R$10.000,00 para profissionais experientes ou certificados (como Cisco ou Microsoft).",

    "Analista de Sistemas" : "profissional responsável por projetar, desenvolver e implementar soluções tecnológicas para atender às necessidades de uma organização. Ele analisa processos, identifica problemas, propõe melhorias e supervisiona o desenvolvimento de sistemas e softwares, conectando as áreas de negócios e tecnologia. Seus principais objetivos incluem compreender as demandas dos usuários, garantir a integração entre sistemas, documentar processos e acompanhar a implementação de soluções. É uma carreira estratégica em empresas que buscam inovação e eficiência. No Brasil, os salários variam entre R$4.000,00 para iniciantes e podem ultrapassar R$12.000,00 para profissionais experientes ou especializados em áreas como Business Intelligence.",

    "Analista de Infraestrutura de TI" : "é responsável por planejar, implementar, gerenciar e manter a infraestrutura tecnológica de uma organização, incluindo servidores, redes, armazenamento de dados e sistemas operacionais. Esse profissional garante a estabilidade, segurança e desempenho dos recursos de TI. Seus principais objetivos incluem monitorar e otimizar o desempenho dos sistemas, implementar medidas de segurança, realizar backups, solucionar problemas técnicos e suportar a escalabilidade das operações da empresa. No Brasil, os salários começam em R$ 3.500,00 para iniciantes e podem ultrapassar R$12.000,00 para profissionais sêniores ou especializados em tecnologias como cloud computing e virtualização.",

    "Analista de Suporte Técnico" : "é o profissional responsável por prestar assistência a usuários e resolver problemas relacionados a equipamentos, softwares e redes. Ele atua na identificação de falhas, implementação de soluções e no suporte ao uso de tecnologias no dia a dia da empresa. Seus principais objetivos incluem atender demandas técnicas, realizar manutenção preventiva e corretiva, documentar soluções aplicadas e garantir a continuidade operacional. É uma função essencial para empresas que dependem de tecnologia. No Brasil, os salários variam entre R$ 2.000 para iniciantes e podem ultrapassar R$ 7.000 para profissionais experientes ou especializados em suporte avançado ou áreas específicas, como sistemas ERP.",

    "Especialista em Cloud Computing" : "é o profissional responsável por projetar, implementar e gerenciar soluções na nuvem, utilizando plataformas como AWS, Microsoft Azure ou Google Cloud. Ele foca na escalabilidade, segurança e eficiência de recursos computacionais baseados em infraestrutura remota. Os principais objetivos incluem migrar sistemas para a nuvem, otimizar custos, garantir a segurança dos dados, implementar arquiteturas resilientes e monitorar o desempenho dos serviços. A demanda por esse profissional cresce com a transformação digital. No Brasil, os salários variam entre R$ 7.000 para iniciantes e podem ultrapassar R$ 20.000 para especialistas com certificações avançadas e experiência em projetos complexos.",

    "Especialista em Segurança da Informação" : "profissional responsável por proteger os dados e sistemas de uma organização contra ameaças cibernéticas, acessos não autorizados e vazamentos. Ele desenvolve políticas de segurança, implementa ferramentas de proteção e conduz auditorias para identificar vulnerabilidades. Seus principais objetivos incluem garantir a confidencialidade, integridade e disponibilidade das informações, responder a incidentes de segurança, monitorar ameaças e treinar equipes sobre boas práticas. É uma função estratégica em tempos de crescente cibercriminalidade. No Brasil, os salários variam entre R$ 6.000 para iniciantes e podem ultrapassar R$ 20.000 para profissionais experientes com certificações como CISSP, CEH ou CISM.",

    "UX/UI DESIGNER" : "é o profissional que atua na área de experiência do usuário com o uso de produtos e serviços. Suas responsabilidades são desde a pesquisa de usuários até a pós-venda. Alguns de seus objetivos são realizar pesquisas de mercado, entrevistas com usuários e pesquisas de mercado; criar protótipos e wireframes; planejar o fluxo de navegação e testar soluções para melhorar a usabilidade e a satisfação do cliente. O UX/UI designer deve ter um conhecimento profundo das necessidades, desejos e objetivos do público-alvo. Além disso, deve ter soft skills como empatia, habilidade comunicativa e organização. No Brasil, os salários para esse tipo de profissional é de R$3.000,00 para níveis de menor experiência até ultrapassarem R$6.000,00 para níveis mais experientes"
};

document.querySelectorAll(".lista-carreiras a").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const descricao = descricoes[item.textContent.trim()];
        if (descricao) {
            descricaoTexto.textContent = descricao; 
            descricaoContainer.style.display = "block"; 
            overlay.style.display = "block"; 
            document.body.classList.add("overlay-active"); 
        }
    });
});


closeBtn.addEventListener("click", () => {
    descricaoContainer.style.display = "none"; 
    overlay.style.display = "none"; 
    document.body.classList.remove("overlay-active"); 
});


overlay.addEventListener("click", () => {
    descricaoContainer.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("overlay-active");
});
