-- 1. CRIA E SELECIONA O BANCO DE DADOS (ISSO QUE ESTAVA FALTANDO)
CREATE DATABASE IF NOT EXISTS koenma_sushi;
USE koenma_sushi;

-- 2. Desliga a trava de segurança para permitir apagar e recriar as tabelas sem erro
SET FOREIGN_KEY_CHECKS = 0;

-- 3. Limpa as tabelas antigas (para começar do zero e organizado)
DROP TABLE IF EXISTS pedido_itens;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS produtos;

-- 4. Cria a tabela de CLIENTES
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    endereco TEXT NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 5. Cria a tabela de PRODUTOS
CREATE TABLE produtos (
    id INT PRIMARY KEY, 
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50),
    imagem VARCHAR(255),
    disponivel BOOLEAN DEFAULT TRUE
);

-- 6. Cria a tabela de PEDIDOS (Cabeçalho da nota)
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Recebido', 
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- 7. Cria a tabela de ITENS DO PEDIDO (Detalhes do que foi comprado)
CREATE TABLE pedido_itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL, 
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- 8. INSERÇÃO DOS PRODUTOS (IDs sincronizados com o site)
INSERT INTO produtos (id, nome, descricao, preco, categoria, imagem) VALUES
-- ENTRADAS
(1, 'Sunomono', 'Salada de pepino agridoce', 12.90, 'entradas', 'imagens/sunomono.jpg'),
(2, 'Shimeji na Manteiga', 'Cogumelos na manteiga', 24.90, 'entradas', 'imagens/Shimeji-na-manteiga.jpg'),
(3, 'Guioza (6 un)', 'Pasteizinhos de carne suína', 18.90, 'entradas', 'imagens/guioza.jpg'),
(4, 'Harumaki de Queijo', 'Rolinho primavera crocante', 14.90, 'entradas', 'imagens/harumaki-queijo.jpg'),
-- SUSHI
(5, 'Niguiri Salmão', 'Dupla de arroz com salmão', 12.90, 'sushi', 'imagens/niguiri-salmao.jpg'),
(6, 'Niguiri Atum', 'Dupla de arroz com atum', 14.90, 'sushi', 'imagens/niguiri-atum.jpg'),
(7, 'Niguiri Peixe Branco', 'Dupla de tilápia com limão', 11.90, 'sushi', 'imagens/niguiri-peixe-branco.jpg'),
(8, 'Niguiri Skin', 'Dupla de pele grelhada', 10.90, 'sushi', 'imagens/niguiri-skin.jpg'),
(9, 'Joe Salmão', 'Salmão com cream cheese', 16.90, 'sushi', 'imagens/joe-salmao.jpg'),
(10, 'Uramaki Filadélfia', 'Salmão e cream cheese', 22.90, 'sushi', 'imagens/uramaki-filadelfia.jpg'),
(11, 'Uramaki California', 'Manga, pepino e kani', 19.90, 'sushi', 'imagens/uramaki-california.jpg'),
(12, 'Hossomaki Salmão', 'Enrolado fino de alga', 18.90, 'sushi', 'imagens/hossomaki-salmao.jpg'),
-- SASHIMI
(13, 'Sashimi Salmão (5 un)', 'Fatias frescas de salmão', 24.90, 'sashimi', 'imagens/sashimi-salmao.jpg'),
(14, 'Sashimi Atum (5 un)', 'Fatias frescas de atum', 26.90, 'sashimi', 'imagens/sashimi-atum.jpg'),
(15, 'Sashimi Peixe Branco', 'Fatias finas com limão', 19.90, 'sashimi', 'imagens/sashimi-peixe-branco.jpg'),
(16, 'Sashimi Polvo (5 un)', 'Fatias de polvo cozido', 29.90, 'sashimi', 'imagens/sashimi-polvo.jpg'),
-- COMBOS
(17, 'Combo Individual', '16 peças variadas', 49.90, 'combos', 'imagens/combo-individual.jpg'),
(18, 'Combo Casal', '36 peças variadas', 98.90, 'combos', 'imagens/Combo_Casal.jpg'),
(19, 'Barca Koenma', '60 peças - Completa', 159.90, 'combos', 'imagens/combo_60_peças.jpg'),
(20, 'Combo Só Salmão', '20 peças de salmão puro', 69.90, 'combos', 'imagens/combo-so-salmao.jpg'),
-- TEMAKI
(21, 'Temaki Salmão', 'Salmão e cream cheese', 21.90, 'temaki', 'imagens/temaki-salmao.jpg'),
(22, 'Temaki Grelhado', 'Salmão grelhado e tarê', 19.90, 'temaki', 'imagens/temaki-grelhado.jpg'),
(23, 'Temaki Atum Spicy', 'Atum com pimenta sriracha', 22.90, 'temaki', 'imagens/temaki-atum.jpg'),
(24, 'Temaki Camarão', 'Camarão empanado crocante', 24.90, 'temaki', 'imagens/temaki-camarao.jpg'),
-- QUENTES
(25, 'Yakissoba Clássico', 'Macarrão, carne e legumes', 32.90, 'hot', 'imagens/yakissoba-classico.jpg'),
(26, 'Yakissoba Veggie', 'Macarrão com legumes', 28.90, 'hot', 'imagens/yakissoba-veggie.jpg'),
(27, 'Hot Roll (8 un)', 'Sushi frito com tarê', 18.90, 'hot', 'imagens/hot-roll.jpg'),
(28, 'Teppanyaki Salmão', 'Salmão grelhado com legumes', 45.90, 'hot', 'imagens/teppanyaki-salmao.jpg'),
-- BEBIDAS
(29, 'Coca-Cola', 'Lata 350ml', 5.90, 'bebidas', 'imagens/coca-cola.jpg'),
(30, 'Guaraná', 'Lata 350ml', 5.90, 'bebidas', 'imagens/guarana.jpg'),
(31, 'Água Mineral', '500ml', 4.00, 'bebidas', 'imagens/agua.jpg'),
(32, 'Heineken', 'Long Neck 330ml', 12.90, 'bebidas', 'imagens/heineken.jpg'),
(33, 'Sake Azuma Kirin', 'Dose 150ml', 25.90, 'bebidas', 'imagens/sake.jpg'),
(34, 'Suco Natural', 'Laranja 500ml', 9.90, 'bebidas', 'imagens/suco-natural.jpg'),
-- SOBREMESAS
(35, 'Harumaki Chocolate', 'Rolinho doce (2 un)', 16.90, 'sobremesas', 'imagens/harumaki-chocolate.jpg'),
(36, 'Romeu e Julieta', 'Goiabada com queijo (2 un)', 15.90, 'sobremesas', 'imagens/romeu-julieta.jpg'),
(37, 'Petit Gâteau', 'Bolo com sorvete', 22.90, 'sobremesas', 'imagens/petit-gateau.jpg');

-- 9. Liga a segurança de volta
SET FOREIGN_KEY_CHECKS = 1;

-- 10. Verifica se os clientes foram criados (vai estar vazio agora, pois acabamos de limpar)
-- consultar o valor total)
SELECT 
    pedidos.id AS 'Num. Pedido',
    pedidos.total AS 'Valor Total do Pedido',
    pedidos.status AS 'Status',
    pedidos.data_pedido AS 'Data'
FROM pedidos
WHERE cliente_id = 1; -- <-- TROQUE PELO ID DO CLIENTE

SELECT 
    produtos.nome AS 'Produto',
    produtos.descricao AS 'Descrição',
    pedido_itens.quantidade AS 'Qtd',
    pedido_itens.preco_unitario AS 'Preço Unit.',
    (pedido_itens.quantidade * pedido_itens.preco_unitario) AS 'Subtotal'
FROM pedido_itens
INNER JOIN produtos ON pedido_itens.produto_id = produtos.id
WHERE pedido_itens.pedido_id = 1; -- <-- TROQUE PELO NÚMERO DO PEDIDO

-- consulta mais detalhada nome, protudo, quantidade, valor unitario, total do pedido
SELECT 
    clientes.nome AS 'Nome do Cliente',
    produtos.nome AS 'Produto',
    pedido_itens.quantidade AS 'Qtd',
    pedido_itens.preco_unitario AS 'Preço Unitário',
    -- Calcula o preço total daquele item (ex: 2 Temakis x R$ 20 = R$ 40)
    (pedido_itens.quantidade * pedido_itens.preco_unitario) AS 'Subtotal Item',
    -- Mostra o valor final da nota inteira
    pedidos.total AS 'TOTAL DO PEDIDO'
FROM pedidos
INNER JOIN clientes ON pedidos.cliente_id = clientes.id
INNER JOIN pedido_itens ON pedidos.id = pedido_itens.pedido_id
INNER JOIN produtos ON pedido_itens.produto_id = produtos.id
ORDER BY pedidos.id DESC;
select * from clientes
