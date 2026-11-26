# Plano da Agenda Pessoal

Visão funcional confirmada em 26/11/2026, Europe/Lisbon.

Este documento reúne as decisões confirmadas para orientar a construção progressiva da aplicação. O estado implementado e a próxima tarefa estão em [progresso.md](progresso.md).

## Objetivo e organização

Criar uma aplicação web pessoal para acompanhar as aulas do CET, registar presenças por aula, consultar faltas e horas das UCs, prever valores a receber e marcar atividades.

Toda a área pessoal exige login e os dados de cada utilizador são pessoais e privados. A Agenda é a página inicial dessa área.

O Google Calendário serve de referência para a organização da Agenda. O menu fica à esquerda e dá acesso às páginas próprias de **Agenda · Unidades Curriculares · Marcar atividade · Cronogramas · Faltas · Valores a receber**. O calendário é o elemento central da Agenda.

A página inicial deve ficar leve: apresenta aulas e avisos de atividades. O formulário fica em «Marcar atividade» e o carregamento de PDFs em «Cronogramas».

## Funcionalidades confirmadas

### Agenda e presenças

- Consultar o calendário nas vistas **Dia, Semana, 2 semanas e Mês**.
- A vista de duas semanas abrange **14 dias**.
- Na vista diária, apresentar as aulas e respetivas UCs desse dia.
- Mostrar o dia atual automaticamente ao abrir a Agenda, mesmo sem aulas ou atividades, acompanhado da mensagem de lista vazia quando aplicável.
- Apresentar cada aula num cartão compacto com dia/data, horário e UC. Exemplo fictício: UC600, 2/11/2000, das 14h às 17h.
- Registar presença **por aula**, com registos separados para as aulas do mesmo dia.
- Apresentar no calendário as aulas importadas e as atividades marcadas pelo utilizador.
- Mostrar avisos de trabalhos e prazos, por exemplo «Trabalho de UCxxx até dia y».
- No dia da entrega, destacar a vermelho o aviso «Atenção: entrega hoje!».
- Integrar os avisos na Agenda; a sua apresentação não exige um painel separado.

### Unidades Curriculares

- Disponibilizar uma página própria, acessível pelo menu.
- Consultar, para cada UC, as horas totais, as horas já dadas e as horas por dar.
- Calcular as horas por dar através de: horas totais menos horas já dadas.
- As horas já dadas representam horas lecionadas. A frequência do aluno é acompanhada pelos registos de presença por aula.
- A forma de confirmar que uma aula foi lecionada será detalhada na implementação; uma aula agendada não comprova, por si só, que ocorreu.

### Faltas

- Disponibilizar uma página própria, acessível pelo menu.
- Consultar as faltas registadas do utilizador.
- As regras para faltas parciais, justificações e limites não foram detalhadas nesta definição da interface.

### Valores a receber

- Disponibilizar uma página própria, acessível pelo menu.
- Consultar os valores teóricos a receber, apresentados como estimativas.
- As fórmulas, tarifas e condições aplicáveis serão confirmadas antes de implementar os cálculos.

### Login e área pessoal

- Exigir login para aceder a toda a área pessoal, incluindo a consulta da Agenda e das restantes páginas.
- Apresentar a Agenda como página inicial pessoal depois do login.
- Manter os dados de cada utilizador pessoais e privados, com isolamento entre utilizadores.
- Associar cronogramas, presenças, faltas e atividades ao respetivo utilizador.
- Validar a sessão e o acesso aos dados no backend, tanto na consulta como nas alterações.

### Cronogramas PDF

- Usar a página própria «Cronogramas», acessível pelo menu, para carregar, rever e aplicar os PDFs.
- Permitir ao utilizador carregar o seu cronograma em PDF.
- Ler as UCs, datas e horários do documento.
- Apresentar os dados extraídos para revisão antes de os aplicar à Agenda.
- Prever comparação e validação quando for carregada uma atualização do cronograma, conforme as decisões anteriores do projeto.
- Detalhar a leitura a partir de exemplos de documentos, bem como o tratamento de duplicados e alterações, na fase correspondente.

### Marcar atividade

- Disponibilizar a página própria «Marcar atividade», acessível pelo menu, com o formulário de marcação.
- Permitir a marcação manual de testes, entregas de trabalhos e outras atividades pelo utilizador autenticado.
- Mostrar as atividades e os avisos de prazos na Agenda.
- O formulário atual de título, data e hora é o ponto de partida visual; ainda não guarda atividades.
- O aluno já separou o formulário da página inicial, com navegação entre `index.html` e `marcar-atividade.html`; a gravação de atividades ainda será implementada.
- Os exames fazem parte das atividades, sem limitar a aplicação à marcação de exames.

## Apresentação a desenvolver

- Manter os controlos de período e «Hoje» na Agenda.
- Manter a Agenda centrada na consulta de aulas e avisos, com formulário e carregamento de PDFs nas suas páginas próprias.
- Adaptar a navegação e a disposição a ecrãs pequenos.
- Prever modos claro e escuro; o aspeto final será trabalhado durante a aprendizagem.
- A gestão de PDFs pertence a «Cronogramas».

## Tecnologias previstas

- Começar com HTML, CSS e JavaScript; introduzir React depois dos fundamentos.
- Usar Node.js e Express para o backend.
- Usar Microsoft SQL Server e T-SQL, com a biblioteca `mssql` para a ligação.
- Manter esta stack, sem introduzir ASP.NET, outra base de dados ou uma ORM nesta fase.
- Usar Git e o repositório próprio do projeto para controlo de versões.
- Preparar a publicação no home server depois de confirmar a configuração e a compatibilidade do servidor.

## Desenvolvimento e dados

- Construir e verificar a aplicação por etapas: estrutura HTML, apresentação CSS, comportamento JavaScript e, mais tarde, backend e persistência.
- Usar exclusivamente dados fictícios nos exercícios e testes.
- Manter credenciais, configurações pessoais e cópias de bases de dados fora do repositório público.
- Aplicar isolamento dos dados por utilizador e ligar à base de dados com uma conta de privilégios mínimos, sem usar `sa` na aplicação.
- Manter o SQL Server sem exposição pública à Internet.

## Percurso principal

Iniciar sessão → abrir a Agenda pessoal → usar o menu para aceder às restantes páginas.

Em «Cronogramas»: carregar PDF → rever os dados → aplicar à Agenda. Em «Marcar atividade»: preencher o formulário → guardar a atividade → consultá-la na Agenda.

As funcionalidades descritas são requisitos. A sua presença neste plano não significa que já estejam implementadas.
