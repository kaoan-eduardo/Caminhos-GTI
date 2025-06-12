const descricaoContainer = document.getElementById("descricao");
const descricaoTexto = document.getElementById("descricao-texto");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("botao-fechar");

const descricoes = {
    "Gestor de Projetos de TI" : " Responsável por planejar, executar e acompanhar projetos tecnológicos, garantindo que sejam entregues no prazo, dentro do orçamento e com a qualidade esperada. Ele coordena equipes, aloca recursos, define cronogramas e gerencia riscos, além de atuar como ponto de comunicação entre stakeholders e o time técnico. Seus principais objetivos incluem assegurar o sucesso dos projetos, otimizar processos, garantir a satisfação dos clientes e alinhar as entregas às metas estratégicas da empresa. No Brasil, os salários variam entre R$ 6.000 para iniciantes e podem ultrapassar R$ 20.000 para profissionais experientes com certificações como PMP, Scrum Master ou Prince2. A demanda por esse perfil cresce com a digitalização e transformação empresarial.", 

    "Gerente de Segurança da Informação" : " Profissional responsável por liderar estratégias para proteger os dados e sistemas de uma organização contra ameaças e ataques cibernéticos. Ele desenvolve políticas de segurança, supervisiona a implementação de soluções de proteção, gerencia incidentes e garante conformidade com normas como LGPD e ISO 27001.  Seus principais objetivos incluem preservar a confidencialidade, integridade e disponibilidade das informações, minimizar riscos e mitigar impactos de eventuais falhas. Também lidera auditorias e capacita equipes para manter boas práticas de segurança. No Brasil, os salários começam em R$ 10.000 para posições iniciais e podem ultrapassar R$ 30.000 para profissionais experientes em grandes empresas, especialmente com certificações como CISM, CISSP ou ISO Lead Auditor. ",

    "Gestor de Dados" : " Responsável por organizar, monitorar e garantir o uso estratégico das informações dentro de uma organização. Ele supervisiona a coleta, armazenamento, análise e proteção dos dados, assegurando sua qualidade, segurança e conformidade com regulamentações, como a LGPD. Seus principais objetivos incluem transformar dados em insights para a tomada de decisões, implementar governança de dados, otimizar processos e garantir que a informação seja um ativo valioso para a empresa. No Brasil, os salários variam entre R$ 8.000 para iniciantes e podem ultrapassar R$ 25.000 para profissionais experientes ou especializados em áreas como Big Data, Business Intelligence e governança de dados. A demanda é alta com o crescimento do uso de dados nas estratégias empresariais.",

    "Gestor de Produtos Digitais" : "Responsável pelo planejamento, desenvolvimento e gerenciamento de produtos tecnológicos, como aplicativos, plataformas ou softwares. Ele atua na definição de estratégias, alinhamento com as necessidades dos usuários e priorização de funcionalidades, garantindo que o produto atenda às metas de negócios e ao mercado.  Seus principais objetivos incluem maximizar o valor do produto, promover inovação, coordenar equipes multifuncionais e monitorar o ciclo de vida do produto. Trabalha com metodologias ágeis e ferramentas como Scrum e Kanban. No Brasil, os salários começam em R$ 8.000 para posições iniciais e podem ultrapassar R$ 25.000 para gestores experientes em grandes empresas ou startups com forte presença digital. É uma profissão em alta no mercado tecnológico.",

    "Gestor de Operações em TI" : "Responsável por supervisionar e otimizar as atividades diárias relacionadas à infraestrutura, sistemas e serviços tecnológicos da organização. Ele garante que os recursos de TI funcionem de forma eficiente, segura e alinhada aos objetivos do negócio. Seus principais objetivos incluem assegurar a continuidade dos serviços, gerenciar equipes e fornecedores, implementar melhorias operacionais, controlar custos e garantir conformidade com padrões e políticas de TI. Ele também atua na resolução de incidentes críticos e no planejamento de capacidade. No Brasil, os salários começam em R$ 7.000 para iniciantes e podem ultrapassar R$ 20.000 para profissionais experientes, especialmente em grandes empresas ou com certificações como ITIL e COBIT. A demanda é alta em ambientes corporativos que dependem de TI para operações.",

    "Gestor de Contratos de TI" : "Responsável por negociar, administrar e monitorar contratos relacionados a fornecedores de tecnologia, serviços terceirizados, softwares e infraestrutura. Ele garante que os acordos atendam às necessidades da empresa, respeitando prazos, custos e condições previamente estabelecidas. Seus principais objetivos incluem assegurar conformidade contratual, reduzir riscos, otimizar custos, monitorar a qualidade dos serviços e manter boas relações com fornecedores. Também avalia renovações e encerramentos de contratos, alinhando-os às estratégias de TI. No Brasil, os salários começam em R$ 5.000 para iniciantes e podem ultrapassar R$ 15.000 para gestores experientes, especialmente em grandes empresas ou projetos complexos. A profissão é valorizada em ambientes com alta dependência de fornecedores tecnológicos.",

    "Gestor de Continuidade de Negócios" : "Responsável por desenvolver e implementar estratégias para garantir que uma organização continue operando durante e após eventos disruptivos, como desastres naturais, ataques cibernéticos ou falhas de sistemas. Ele cria planos de recuperação, conduz testes e treina equipes para lidar com crises. Seus principais objetivos incluem minimizar interrupções operacionais, proteger ativos críticos, garantir a segurança das informações e cumprir regulamentações. Também atua na identificação de riscos e na implementação de medidas preventivas. No Brasil, os salários variam entre R$ 7.000 para iniciantes e podem ultrapassar R$ 20.000 para profissionais experientes ou com certificações específicas, como CBCP (Certified Business Continuity Professional). A demanda cresce com a valorização da resiliência corporativa.",

    "Gestor de Parcerias Tecnológicas" : "Responsável por identificar, negociar e manter colaborações estratégicas com fornecedores, startups e outras organizações que ofereçam soluções tecnológicas relevantes. Ele avalia oportunidades, alinha objetivos de negócios e supervisiona a integração dessas parcerias no ambiente corporativo.  Seus principais objetivos incluem impulsionar a inovação, otimizar custos, ampliar o acesso a novas tecnologias e fortalecer a competitividade da empresa no mercado. Também monitora o desempenho das parcerias e garante que elas gerem valor. No Brasil, os salários começam em R$ 8.000 para posições iniciais e podem ultrapassar R$ 25.000 para gestores experientes.",

    "Gestor de Business Intelligence (BI)" : "Responsável por liderar equipes e projetos que transformam dados brutos em insights estratégicos para a tomada de decisão. Ele supervisiona a coleta, organização e análise de informações, utilizando ferramentas de BI como Power BI, Tableau ou Qlik. Seus principais objetivos incluem melhorar a eficiência operacional, identificar oportunidades de negócios, monitorar KPIs e apoiar a alta gestão com relatórios e dashboards claros e precisos. Também garante a qualidade e integridade dos dados utilizados. No Brasil, os salários variam entre R$ 8.000 para iniciantes e podem ultrapassar R$ 25.000 para profissionais experientes ou especializados em análise de dados e estratégias empresariais. É uma função essencial na era orientada por dados.",

    "Gerente de Governança de TI" : "Responsável por assegurar que os processos e recursos de tecnologia da informação estejam alinhados com os objetivos estratégicos da organização, garantindo a conformidade com regulamentações e boas práticas do setor. Ele define políticas, frameworks e controles internos para gerenciar riscos e otimizar o uso de TI. Seus principais objetivos incluem garantir a eficácia dos processos de TI, proteger a empresa contra riscos cibernéticos, aumentar a transparência e promover a eficiência operacional. Além disso, ele assegura a conformidade com normas e auditorias. No Brasil, os salários variam entre R$ 9.000 para iniciantes e podem ultrapassar R$ 25.000 para profissionais experientes, especialmente com certificações como COBIT ou ITIL.",

    "Gestor de Pessoas" : "Responsável por liderar e desenvolver equipes dentro de uma organização, garantindo que os colaboradores estejam motivados, alinhados aos objetivos da empresa e produtivos. Ele gerencia processos de recrutamento, integração, treinamento, avaliação de desempenho e retenção de talentos.  Seus principais objetivos incluem promover um ambiente de trabalho saudável, melhorar o engajamento dos funcionários, identificar necessidades de capacitação e gerir conflitos de maneira eficaz. Além disso, busca alinhar as práticas de gestão de pessoas à estratégia organizacional. No Brasil, os salários variam entre R$ 5.000 para iniciantes e podem ultrapassar R$ 20.000 para profissionais com experiência em grandes empresas ou cargos de liderança estratégica.",

    "Gestor de Help Desk/Service Desk" :  "Responsável por supervisionar a equipe de suporte técnico, garantindo que os usuários recebam assistência rápida e eficiente para resolver problemas relacionados a hardware, software e sistemas. Ele coordena a resolução de incidentes, monitora os tempos de resposta e assegura a qualidade do atendimento.  Seus principais objetivos incluem otimizar o desempenho da equipe, implementar processos de melhoria contínua, manter a satisfação dos usuários e garantir que as soluções sejam entregues dentro dos prazos estabelecidos. No Brasil, os salários começam em R$ 4.000 para posições iniciais e podem ultrapassar R$ 12.000 para gestores experientes ou com certificações como ITIL ou COBIT. A demanda por esses profissionais cresce com a dependência crescente de TI nas empresas."
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
