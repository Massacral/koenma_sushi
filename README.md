# 🍣 Koenma Sushi

![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)
![Badge Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Badge MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Uma aplicação Full Stack robusta para delivery de comida japonesa, oferecendo uma experiência completa desde a escolha do cardápio até a finalização do pedido, com integração real ao banco de dados.

---

## 📸 Demonstração

<div align="center">
  <p><em>(<img width="1919" height="956" alt="image" src="https://github.com/user-attachments/assets/86c4f58c-15f2-461d-8e67-4c36764395c1" />
)</em></p>
</div>

---

## 💻 Sobre o Projeto

O **Koenma Sushi** é um sistema web desenvolvido para simular o ambiente real de um restaurante japonês. O projeto utiliza uma arquitetura **Client-Server**, onde o Front-end consome uma API RESTful construída em Node.js para gerenciar clientes, produtos e pedidos.

O diferencial deste projeto é a integração completa com **MySQL**, permitindo que o cadastro de usuários e o histórico de pedidos sejam persistentes, além de um carrinho de compras dinâmico gerenciado via **LocalStorage**.

---

## 🚀 Funcionalidades

### 🛒 Experiência do Usuário (Front-end)
* **Cardápio Interativo:** Navegação por categorias (Entradas, Sushi, Sashimi, etc.) com filtragem dinâmica.
* **Modal de Detalhes:** Visualização ampliada dos pratos com descrição detalhada e preço.
* **Carrinho de Compras:** Adição/Remoção de itens, controle de quantidade e cálculo automático do total em tempo real.
* **Design Responsivo:** Interface adaptada para Desktop, Tablets e Smartphones.
* **Carrossel de Destaques:** Banner rotativo na tela inicial promovendo os principais pratos.

### ⚙️ Sistema e Back-end
* **API RESTful:** Rotas para Login, Cadastro de Usuários e Processamento de Pedidos.
* **Autenticação:** Sistema de Login e Registro com validação de CPF.
* **Persistência de Dados:** Todos os clientes e pedidos são salvos em um banco de dados relacional (MySQL).
* **Arquivos Estáticos:** O servidor Express gerencia a entrega do Front-end e das imagens.

---

## 🛠 Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3 (Flexbox/Grid), JavaScript (Vanilla ES6+).
* **Back-end:** Node.js, Express.
* **Banco de Dados:** MySQL (Driver `mysql2`).
* **Segurança/Utils:** Cors (Cross-Origin Resource Sharing).

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto na sua máquina:

### 1. Pré-requisitos
* Tenha o [Node.js](https://nodejs.org/) instalado.
* Tenha o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) ou similar instalado e rodando.

### 2. Instalação
Clone o repositório e instale as dependências:

```bash
# Clone este repositório
git clone [https://github.com/seu-usuario/koenma-sushi.git](https://github.com/seu-usuario/koenma-sushi.git)

# Entre na pasta
cd koenma-sushi

# Instale as dependências listadas no package.json
npm install
