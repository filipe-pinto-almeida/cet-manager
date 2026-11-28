# SQL Server em Docker — configuração de desenvolvimento

O ficheiro `compose.yaml` descreve como o Docker deve executar SQL Server 2022 Developer. Está preparado e validado; o arranque do serviço e a ligação à aplicação ainda estão pendentes.

## O que significa cada bloco

| Bloco | Função |
| --- | --- |
| `name: agenda-pessoal` | Identifica o conjunto de recursos deste projeto. |
| `services.sqlserver` | Declara o serviço da base de dados. |
| `image` | Seleciona a imagem oficial de SQL Server 2022. A imagem é o pacote de software; o contentor é uma instância desse pacote. |
| `restart: unless-stopped` | Permite reiniciar automaticamente o contentor, exceto quando foi parado manualmente. |
| `environment` | Passa configurações ao SQL Server. |
| `mem_limit: 2560m` | Limita a memória do contentor inteiro a 2,5 GiB. |
| `127.0.0.1:1433:1433` | Publica a porta 1433 apenas no próprio servidor. O acesso a partir do PC deverá usar uma ligação privada, como um túnel SSH. |
| `sqlserver_data:/var/opt/mssql` | Liga o volume de dados à pasta usada pelo SQL Server. |
| `volumes` no final do ficheiro | Declara o volume; o bloco dentro do serviço indica onde o utilizar. |

O volume permite conservar os dados quando o contentor é substituído. As cópias de segurança serão tratadas separadamente; um volume não é um backup.

## Configurações do SQL Server

- `ACCEPT_EULA: "Y"` indica aceitação da licença no arranque.
- `MSSQL_PID: "Developer"` seleciona a edição para desenvolvimento e testes, não para produção.
- `MSSQL_SA_PASSWORD` recebe a palavra-passe da conta administrativa inicial. A expressão `${MSSQL_SA_PASSWORD:?...}` interrompe a configuração com uma mensagem se a variável estiver ausente ou vazia.
- `MSSQL_MEMORY_LIMIT_MB: "2048"` limita a memória utilizada pelo SQL Server, deixando margem dentro do limite do contentor.

A palavra-passe real ficará em `infra/.env` apenas no servidor. Esse ficheiro está excluído do Git. A conta `sa` será usada para administração inicial; a aplicação terá uma conta própria com os privilégios necessários.

O YAML organiza os blocos através da indentação. Usar espaços, mantendo os níveis apresentados no ficheiro.

## Estado e próxima etapa

- O ficheiro foi validado com Docker Compose v5.8.0 e uma palavra-passe fictícia apenas para verificar a configuração.
- Ainda falta configurar o `.env` privado no servidor, arrancar o serviço e verificar a ligação. A validação do ficheiro não comprova que SQL Server esteja em execução.
- O frontend estático continua independente desta configuração; a API e a base de dados serão ligadas nas etapas seguintes.

## Referências

- [SQL Server em contentores — Microsoft Learn](https://learn.microsoft.com/sql/linux/install-upgrade/quickstart-install-docker?view=sql-server-ver16).
- [Substituição de variáveis no Compose](https://docs.docker.com/reference/compose-file/interpolation/).
- [Volumes Docker](https://docs.docker.com/engine/storage/volumes/).
