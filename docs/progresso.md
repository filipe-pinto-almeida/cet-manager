# Progresso da Agenda Pessoal

Última atualização: 26/11/2026, Europe/Lisbon.

Este documento separa o que está implementado do que está planeado. A visão funcional e as decisões técnicas estão em [plano-projeto.md](plano-projeto.md).

## Implementado e verificado

- Repositório próprio e público no GitHub, separado do repositório dos exercícios do CET.
- Página `index.html` com a Agenda e a lista de próximas atividades, ainda vazia.
- Mensagem `p#empty-message` «Ainda não tens aulas nem atividades.» antes da lista, escrita pelo aluno e verificada no HTML. A apresentação ainda não depende de dados em JavaScript.
- Ficheiro `js/script.js` criado pelo aluno e referenciado no final de `body` de ambas as páginas.
- Código para preencher `h2#current-date` com a data atual em formato `pt-PT`, usando `new Date()` e `textContent`. Uma condição verifica se o título existe, para permitir o uso do mesmo script na página do formulário.
- JavaScript verificado por leitura e com `node --check`, sem erros de sintaxe. A apresentação da data no navegador ainda aguarda confirmação visual; a navegação já foi confirmada pelo utilizador.
- Página `marcar-atividade.html` com o formulário, separada da Agenda pelo aluno.
- Links em elementos `nav` nos dois sentidos. O utilizador confirmou o teste completo no navegador em 26/11/2026.
- Títulos verificados: `title` «Agenda Pessoal» e `h1` «Agenda» no início; `title` «Marcar atividade — Agenda Pessoal» e `h1` «Marcar atividade» no formulário.
- Formulário com título, data e hora e etiquetas associadas aos campos.
- CSS com cor de fundo, título azul, cartões brancos, cantos arredondados, sombra e espaço entre cartões.
- Formulário vertical, botão azul e campos com texto de 16px, espaço interior de 8px, largura de 100% e `box-sizing: border-box`.
- Capturas fornecidas pelo utilizador em 26/11/2026 mostram as duas páginas separadas, com títulos e ligações visíveis, lista vazia na Agenda e formulário vertical na outra página.
- Fluxo Git praticado: rever alterações, preparar ficheiros, criar commit e enviar para o GitHub.

As propriedades CSS recentes foram verificadas no ficheiro. O layout completo e a adaptação a telemóveis ainda precisam de implementação e testes visuais.

## Ainda não implementado

- Menu lateral e calendário com vistas Dia, Semana, 2 semanas (14 dias) e Mês.
- Páginas próprias de Cronogramas, Unidades Curriculares, Faltas e Valores a receber.
- Cartões compactos das aulas e avisos de trabalhos e prazos na Agenda.
- Registo de presença por aula e consulta de faltas.
- Consulta de horas totais, dadas e por dar de cada UC.
- Cálculo dos valores teóricos a receber.
- Login obrigatório em toda a área pessoal, sessões e isolamento dos dados privados por utilizador.
- Adição efetiva de atividades, persistência e atualização da lista.
- Importação, extração, comparação e aprovação de cronogramas PDF.
- API, Microsoft SQL Server e publicação no home server.

O JavaScript contém a mensagem de diagnóstico na consola e o preenchimento da data atual ao abrir ou atualizar a Agenda. O formulário continua a ser um protótipo visual.

## Decisões confirmadas

### Organização da interface

A organização do Google Calendar foi usada como referência visual para uma agenda própria:

- Topo: identificação da aplicação, período apresentado, «Hoje» e seleção Dia/Semana/2 semanas/Mês.
- Esquerda: menu com Agenda, Unidades Curriculares, Marcar atividade, Cronogramas, Faltas e Valores a receber, cada opção com a sua página própria.
- Página inicial pessoal: Agenda, centrada no calendário, nas aulas e nos avisos de atividades.
- A Agenda deve ficar leve. O formulário pertence a «Marcar atividade» e o carregamento de PDFs a «Cronogramas».
- Cada aula aparece num cartão compacto com dia/data, horário e UC. Exemplo fictício: UC600, 2/11/2000, das 14h às 17h.
- A vista do dia permite registar presença por aula.
- Mostrar avisos de trabalhos e prazos, como «Trabalho de UCxxx até dia y». No dia da entrega, apresentar a vermelho «Atenção: entrega hoje!».
- Os avisos podem integrar a própria Agenda; não foi exigido um painel separado.
- Em ecrãs pequenos: adaptar a navegação e a disposição do conteúdo.
- Prever modos claro e escuro, sem fixar o tema final nesta fase.

A ideia anterior de um painel lateral com formulário/exames foi substituída pela página «Marcar atividade». A interpretação da imagem como requisito «Sem outros eventos» foi rejeitada; o utilizador esclareceu que pretende avisos de atividades.

### Origem das aulas e das atividades

- As aulas e os horários vêm dos cronogramas PDF depois da sua validação.
- A opção «Agenda» apresenta o calendário.
- A página «Cronogramas» permite carregar, rever e aplicar os PDFs à Agenda; mantém-se a comparação e validação de atualizações.
- As atividades são marcadas manualmente pelo utilizador autenticado e aparecem no calendário; incluem testes, entregas de trabalhos e outros eventos.
- O formulário já foi transferido pelo aluno para a página própria «Marcar atividade».

### Área pessoal e acesso

- Toda a área pessoal exige login, incluindo a Agenda e as páginas de consulta.
- A Agenda é a página inicial pessoal depois do login.
- Os cronogramas, presenças, faltas, atividades e restantes dados de cada utilizador são pessoais e privados.
- O backend deve validar a sessão e o acesso aos dados em todas as consultas e alterações, associando os registos ao utilizador respetivo.
- O login e o isolamento ainda não estão implementados. Separar os ficheiros HTML e criar links é apenas uma etapa da estrutura; não protege os dados.

### UCs, faltas e valores

- As UCs apresentam horas totais, horas já dadas e horas por dar.
- Horas por dar = horas totais − horas já dadas.
- As horas lecionadas de uma UC e a frequência individual são medidas distintas.
- A área de Faltas permite consultar as faltas registadas.
- A área de Valores a receber apresenta estimativas; fórmulas, tarifas e condições serão confirmadas antes da implementação.

### Tecnologias e publicação

- HTML, CSS e JavaScript; React será introduzido depois dos fundamentos.
- Node.js e Express no backend; Microsoft SQL Server, T-SQL e `mssql` na base de dados.
- Sem ASP.NET nem ORM nesta fase.
- Apenas dados fictícios durante os exercícios e testes.
- Repositório público; instruções pessoais de estudo e referências privadas apenas locais, excluídas do Git.
- Commits com tipos adequados, como `feat:`, `fix:` e `docs:`.
- Publicação no home server prevista. Sistema operativo, versão, recursos e compatibilidade com SQL Server ainda por confirmar.

## Próxima tarefa de aprendizagem

Depois de guardar esta etapa no Git, começar a ler os dados do formulário com JavaScript. Toda a escrita é feita pelo aluno:

1. Confirmar no navegador a apresentação da data atual na Agenda e o funcionamento da página do formulário.
2. Encontrar o formulário por `id` e verificar a sua existência antes de o usar, porque o script é partilhado entre páginas.
3. Explicar o evento de envio do formulário e como impedir o recarregamento automático da página durante o tratamento desse evento.
4. Introduzir a leitura dos valores dos campos, começando pelo título e avançando para data e hora.
5. Observar os valores na consola para confirmar a leitura, antes de introduzir gravação e apresentação na Agenda.

O aluno preferiu uma Agenda dinâmica com estado vazio a aulas e avisos escritos diretamente no HTML. O código da data já foi escrito. A leitura do formulário, a gravação, a apresentação dos dados e a deteção de prazos serão construídas por etapas.

Ao introduzir acesso aos elementos HTML, explicar variáveis, seletores e eventos progressivamente. O mesmo script é carregado nas duas páginas: verificar a existência de cada elemento antes de o usar, porque o formulário e a lista estão em páginas diferentes. Depois, ligar o formulário à Agenda e trabalhar o aspeto dos cartões, os avisos, o restante menu e os controlos do calendário.

## Retoma

O utilizador definiu a visão da aplicação, escolheu o nome Agenda Pessoal, separou a Agenda do formulário, criou links e corrigiu os títulos. Em 26/11/2026 mostrou as duas páginas em capturas e confirmou a navegação nos dois sentidos. Preferiu estado vazio e dados dinâmicos a exemplos fixos. Escreveu a mensagem de lista vazia e o código JavaScript da data atual, cuja sintaxe foi validada. A etapa de código foi guardada no commit `af8643f` (`feat: adiciona navegacao e data atual a Agenda Pessoal`), cuja publicação foi confirmada no GitHub. Depois, confirmar a data no navegador e começar a leitura do formulário. Os cartões, os cálculos e a gestão dinâmica de atividades ainda não estão implementados.

Ao retomar, verificar os ficheiros e continuar pela tarefa acima. Não reiniciar o levantamento de requisitos nem implementar automaticamente a aplicação durante a aprendizagem. Só esclarecer regras concretas em falta quando forem necessárias à etapa em curso.
