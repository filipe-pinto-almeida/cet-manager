# Agenda Pessoal

Projeto de aprendizagem de programação desenvolvido durante o CET de Tecnologias e Programação de Sistemas de Informação.

O objetivo é construir progressivamente uma aplicação web para acompanhar horários, assiduidade, unidades de competência, avaliações, trabalhos e pagamentos previstos de formação.

## Estado atual

O projeto tem duas páginas HTML com CSS partilhado e menu lateral: `index.html` apresenta a Agenda com uma lista ainda vazia e a mensagem «Ainda não tens aulas nem atividades.»; `marcar-atividade.html` apresenta o formulário com título, data e hora. As páginas estão organizadas em duas colunas com CSS Grid e a versão estática foi publicada com Nginx no home server.

O calendário, o menu completo, a autenticação, a importação de PDFs, o registo de presenças, as consultas de horas e faltas, os cálculos de valores, o backend e a persistência ainda serão construídos. O formulário lê os campos, cria objetos e acrescenta-os a um array em memória; os dados perdem-se ao recarregar a página e ainda não aparecem na Agenda.

O objetivo do frontend é uma área pessoal privada, com login obrigatório em todas as páginas e verificação da sessão e do acesso aos dados no backend. A Agenda será a página inicial, com menu lateral e calendário nas vistas Dia, Semana, 2 semanas (14 dias) e Mês. Apresentará aulas em cartões compactos com dia/data, horário e UC, além de avisos de trabalhos e prazos. No dia da entrega, o aviso «Atenção: entrega hoje!» será destacado a vermelho.

O menu dará acesso às páginas Agenda, Unidades Curriculares, Marcar atividade, Cronogramas, Faltas e Valores a receber. A página inicial ficará centrada na consulta: o formulário estará em «Marcar atividade» e o carregamento, revisão e aplicação de PDFs em «Cronogramas». Cada utilizador poderá registar presença por aula e consultar horas das UCs, faltas e valores teóricos a receber nas páginas respetivas.

O ficheiro `js/script.js` preenche a data atual em formato português e trata o envio do formulário com `preventDefault()`. Verifica a existência dos elementos específicos de cada página antes de os utilizar.

A configuração inicial de SQL Server 2022 Developer em Docker Compose está em `infra/compose.yaml`, com volume persistente, porta publicada apenas no próprio servidor e limites de memória. O ficheiro foi validado, mas o serviço SQL Server ainda não foi arrancado nesta etapa. A próxima tarefa é configurar a palavra-passe num `.env` privado no servidor e verificar o arranque. A [explicação da configuração](infra/README.md) acompanha o ficheiro.

## Plano e ponto de retoma

- [Plano funcional e técnico](docs/plano-projeto.md): requisitos e decisões de organização da aplicação.
- [Progresso e próxima tarefa](docs/progresso.md): estado verificado e ponto de retoma, atualizados em 28/11/2026.

## Abrir a página

Abre o ficheiro `index.html` num navegador. Nesta fase não é necessário instalar dependências nem iniciar um servidor.

## Organização

- `index.html`: página da Agenda, com lista ainda vazia e ligação para marcar atividades.
- `marcar-atividade.html`: formulário de marcação e ligação de regresso à Agenda.
- `css/style.css`: estilos atuais da página e do formulário.
- `js/script.js`: primeiro código JavaScript, partilhado pelas duas páginas.
- `infra/compose.yaml`: configuração do SQL Server para desenvolvimento.
- `infra/README.md`: explicação dos blocos e estado da preparação.
- `img/`: imagens do projeto.
- `docs/`: plano, decisões e acompanhamento do desenvolvimento.

O Git passa a guardar estas pastas quando contiverem ficheiros. Os componentes de backend e base de dados serão acrescentados nas fases correspondentes.

## Tecnologias previstas

- HTML, CSS e JavaScript, seguidos de React para a interface.
- Node.js e Express para a API.
- Microsoft SQL Server e T-SQL para a base de dados, com ligação através de `mssql`.
- Git e GitHub para o controlo de versões.

A versão estática já está publicada no home server. A API e a ligação à base de dados serão introduzidas progressivamente.

Os commits seguem a convenção Conventional Commits, escolhendo o tipo conforme a alteração, por exemplo `feat:`, `fix:` ou `docs:`.

## Dados de desenvolvimento

Os exercícios e testes utilizam exclusivamente dados fictícios. Credenciais, configurações pessoais e cópias de bases de dados ficam fora do repositório.
