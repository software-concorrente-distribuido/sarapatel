# Sarapatel

### Membros do grupo: ###

* Flavimar da Silva Almeida
* Giancarlo Oliveira Silva
* Luca Baccheschi Benetti
* Lucas Oliveira de Souza

## Como executar

1. Ir até o diretório:

```
..\Projeto\WebApp\docker
```

2. Executar o comando:
```
docker-compose up -d --build
```

Este comando irá criar dois containeres:
- sdc-chat-sql-server (banco de dados SQL Server)
- sdc-chat-webapp (aplicação ASP.NET MVC)

A aplicação estará disponível em localhost em: [http://localhost:5010/](http://localhost:5010/).

Obs: o esquema do banco de dados já é preenchido automaticamente, sem a necessidade de rodar scripts manualmente