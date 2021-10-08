# Avalyst - Teste de Back-end

## Requirements

- [composer](https://getcomposer.org/)
- [PHP 7.4](https://www.php.net/downloads#v7.4.19)
- [MySQL](https://www.mysql.com/downloads/)

## Install

`composer install`

## Run

`cd public && php -S localhost:8282 index.php`

## Folder Structure

- public *(arquivo de iniciação)*

- src  
  - Services *(controllers)*
  - Models *(models)*
  - Validators *(validadores)*
  - dependencies.php *(configuração de DI)*
  - routes.php *(configuração das rotas da API)*
  - settings.php *(configuração do banco de dados)*

- migration *(scripts de criação de tabelas)*
