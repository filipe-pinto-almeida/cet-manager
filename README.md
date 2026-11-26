# Agenda Pessoal

Projeto de aprendizagem de programação desenvolvido durante o CET de Tecnologias e Programação de Sistemas de Informação.

O objetivo é construir progressivamente uma aplicação web para acompanhar horários, assiduidade, unidades de competência, avaliações, trabalhos e pagamentos previstos de formação.

## Estado atual

O projeto tem duas páginas HTML com CSS partilhado: `index.html` apresenta a Agenda com uma lista ainda vazia e a mensagem «Ainda não tens aulas nem atividades.»; `marcar-atividade.html` apresenta o formulário com título, data e hora. As ligações nos dois sentidos foram criadas pelo aluno, que confirmou o funcionamento no navegador.

O calendário, o menu completo, a autenticação, a importação de PDFs, o registo de presenças, as consultas de horas e faltas, os cálculos de valores, o backend e a persistência ainda serão construídos. O formulário atual é visual e ainda não guarda atividades.

O objetivo do frontend é uma área pessoal privada, com login obrigatório em todas as páginas e verificação da sessão e do acesso aos dados no backend. A Agenda será a página inicial, com menu lateral e calendário nas vistas Dia, Semana, 2 semanas (14 dias) e Mês. Apresentará aulas em cartões compactos com dia/data, horário e UC, além de avisos de trabalhos e prazos. No dia da entrega, o aviso «Atenção: entrega hoje!» será destacado a vermelho.

O menu dará acesso às páginas Agenda, Unidades Curriculares, Marcar atividade, Cronogramas, Faltas e Valores a receber. A página inicial ficará centrada na consulta: o formulário estará em «Marcar atividade» e o carregamento, revisão e aplicação de PDFs em «Cronogramas». Cada utilizador poderá registar presença por aula e consultar horas das UCs, faltas e valores teóricos a receber nas páginas respetivas.

O ficheiro `js/script.js` contém uma mensagem de diagnóstico na consola e o código que preenche a data atual na Agenda ao abrir ou atualizar a página, em formato português. O código verifica a existência do título antes de o alterar, permitindo partilhar o script com a página do formulário. A sintaxe foi verificada; a apresentação da data no navegador ainda aguarda confirmação visual.

A próxima tarefa de aprendizagem é ler os campos do formulário com JavaScript. A gravação, a apresentação das atividades e os prazos serão introduzidos progressivamente, mantendo uma mensagem na Agenda quando não existirem dados.

## Plano e ponto de retoma

- [Plano funcional e técnico](docs/plano-projeto.md): requisitos e decisões de organização da aplicação.
- [Progresso e próxima tarefa](docs/progresso.md): estado verificado e ponto de retoma, atualizados em 26/11/2026.

## Abrir a página

Abre o ficheiro `index.html` num navegador. Nesta fase não é necessário instalar dependências nem iniciar um servidor.

## Organização

- `index.html`: página da Agenda, com lista ainda vazia e ligação para marcar atividades.
- `marcar-atividade.html`: formulário de marcação e ligação de regresso à Agenda.
- `css/style.css`: estilos atuais da página e do formulário.
- `js/script.js`: primeiro código JavaScript, partilhado pelas duas páginas.
- `img/`: imagens do projeto.
- `docs/`: plano, decisões e acompanhamento do desenvolvimento.

O Git passa a guardar estas pastas quando contiverem ficheiros. Os componentes de backend e base de dados serão acrescentados nas fases correspondentes.

## Tecnologias previstas

- HTML, CSS e JavaScript, seguidos de React para a interface.
- Node.js e Express para a API.
- Microsoft SQL Server e T-SQL para a base de dados, com ligação através de `mssql`.
- Git e GitHub para o controlo de versões.

A publicação no home server faz parte do plano de aprendizagem e será preparada de acordo com a configuração do servidor.

Os commits seguem a convenção Conventional Commits, escolhendo o tipo conforme a alteração, por exemplo `feat:`, `fix:` ou `docs:`.

## Dados de desenvolvimento

Os exercícios e testes utilizam exclusivamente dados fictícios. Credenciais, configurações pessoais e cópias de bases de dados ficam fora do repositório.
