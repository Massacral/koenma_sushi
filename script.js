document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DADOS DO MENU (COM DESCRIÇÃO LONGA E CAMINHOS CORRIGIDOS) ---
    const menuItems = [
        // --- ENTRADAS ---
        { 
            id: 1, 
            name: "Sunomono", 
            description: "Salada de pepino agridoce", 
            longDescription: "Uma entrada clássica, leve e refrescante. Lâminas finíssimas de pepino japonês marinadas em nosso molho Su (agridoce) especial da casa, finalizadas com sementes de gergelim torrado e tiras de Kani. Ideal para abrir o paladar.",
            price: 12.90, 
            image: "imagens/sunomono.jpg", 
            category: "entradas" 
        },
        { 
            id: 2, 
            name: "Shimeji na Manteiga", 
            description: "Cogumelos na manteiga", 
            longDescription: "Cogumelos Shimeji frescos selecionados, salteados na manteiga com um toque de shoyu premium e cebolinha fresca. Servidos quentes.",
            price: 24.90, 
            image: "imagens/Shimeji-na-manteiga.jpg", 
            category: "entradas" 
        },
        { 
            id: 3, 
            name: "Guioza (6 un)", 
            description: "Pasteizinhos de carne suína", 
            longDescription: "Pasteizinhos orientais de massa fina e delicada, recheados com uma mistura suculenta de carne suína e vegetais. Acompanha molho cítrico.",
            price: 18.90, 
            image: "imagens/guioza.jpg", 
            category: "entradas" 
        },
        { 
            id: 4, 
            name: "Harumaki de Queijo", 
            description: "Rolinho primavera crocante", 
            longDescription: "O clássico Rolinho Primavera. Massa crocante e sequinha, recheada com bastante queijo mussarela derretido. Acompanha nosso molho agridoce.",
            price: 14.90, 
            image: "imagens/harumaki-queijo.jpg", 
            category: "entradas" 
        },

        // --- SUSHI ---
        { 
            id: 5, 
            name: "Niguiri Salmão", 
            description: "Dupla de arroz com salmão", 
            longDescription: "A essência do sushi. Bolinho de arroz (shari) temperado com perfeição, coberto por uma fatia generosa de salmão fresco.",
            price: 12.90, 
            image: "imagens/niguiri-salmao.jpg", 
            category: "sushi" 
        },
        { 
            id: 6, 
            name: "Niguiri Atum", 
            description: "Dupla de arroz com atum", 
            longDescription: "Dupla de sushis tradicionais feitos com arroz japonês temperado e cobertos com cortes de Atum vermelho fresco.",
            price: 14.90, 
            image: "imagens/niguiri-atum.jpg", 
            category: "sushi" 
        },
        { 
            id: 7, 
            name: "Niguiri Peixe Branco", 
            description: "Dupla de tilápia com limão", 
            longDescription: "Sushis delicados de peixe branco (Tilápia Saint Peter) fresco. Finalizados com uma raspa de limão siciliano.",
            price: 11.90, 
            image: "imagens/niguiri-peixe-branco.jpg", 
            category: "sushi" 
        },
        { 
            id: 8, 
            name: "Niguiri Skin", 
            description: "Dupla de pele grelhada", 
            longDescription: "Pele de salmão grelhada e crocante sobre o arroz de sushi, finalizada com uma pincelada de molho tarê doce e gergelim.",
            price: 10.90, 
            image: "imagens/niguiri-skin.jpg", 
            category: "sushi" 
        },
        { 
            id: 9, 
            name: "Joe Salmão", 
            description: "Salmão com cream cheese", 
            longDescription: "O favorito! Bolinho de arroz envolto por uma lâmina de salmão fresco, coberto com cream cheese e cebolinha picada.",
            price: 16.90, 
            image: "imagens/joe-salmao.jpg", 
            category: "sushi" 
        },
        { 
            id: 10, 
            name: "Uramaki Filadélfia", 
            description: "Salmão e cream cheese", 
            longDescription: "Sushi com o arroz por fora e gergelim. Recheado generosamente com salmão fresco e cream cheese.",
            price: 22.90, 
            image: "imagens/uramaki-filadelfia.jpg", 
            category: "sushi" 
        },
        { 
            id: 11, 
            name: "Uramaki California", 
            description: "Manga, pepino e kani", 
            longDescription: "Opção leve. Sushi invertido recheado com manga doce, pepino japonês crocante e kani kama. Envolto em gergelim.",
            price: 19.90, 
            image: "imagens/uramaki-california.jpg", 
            category: "sushi" 
        },
        { 
            id: 12, 
            name: "Hossomaki Salmão", 
            description: "Enrolado fino de alga", 
            longDescription: "O tradicional sushi enrolado com a alga por fora (nori crocante), recheado apenas com salmão fresco e arroz.",
            price: 18.90, 
            image: "imagens/hossomaki-salmao.jpg", 
            category: "sushi" 
        },

        // --- SASHIMI ---
        { 
            id: 13, 
            name: "Sashimi Salmão (5 un)", 
            description: "Fatias frescas de salmão", 
            longDescription: "5 cortes nobres de salmão fresco, sem arroz. Selecionamos a parte mais saborosa do peixe.",
            price: 24.90, 
            image: "imagens/sashimi-salmao.jpg", 
            category: "sashimi" 
        },
        { 
            id: 14, 
            name: "Sashimi Atum (5 un)", 
            description: "Fatias frescas de atum", 
            longDescription: "5 fatias de Atum fresco de alta qualidade. Coloração vermelho rubi intenso e sabor marcante.",
            price: 26.90, 
            image: "imagens/sashimi-atum.jpg", 
            category: "sashimi" 
        },
        { 
            id: 15, 
            name: "Sashimi Peixe Branco", 
            description: "Fatias finas com limão", 
            longDescription: "Cortes finos e delicados de peixe branco (Tilápia). Servidos com rodelas finas de limão.",
            price: 19.90, 
            image: "imagens/sashimi-peixe-branco.jpg", 
            category: "sashimi" 
        },
        { 
            id: 16, 
            name: "Sashimi Polvo (5 un)", 
            description: "Fatias de polvo cozido", 
            longDescription: "Tentáculos de polvo cozidos no ponto exato para garantir maciez, cortados em fatias finas.",
            price: 29.90, 
            image: "imagens/sashimi-polvo.jpg", 
            category: "sashimi" 
        },

        // --- COMBOS ---
        { 
            id: 17, 
            name: "Combo Individual", 
            description: "16 peças variadas", 
            longDescription: "Contém: 4 Sashimis de Salmão, 2 Niguiris, 2 Joes, 4 Uramakis Filadélfia e 4 Hossomakis.",
            price: 49.90, 
            image: "imagens/combo-individual.jpg", 
            category: "combos" 
        },
        { 
            id: 18, 
            name: "Combo Casal", 
            description: "36 peças variadas", 
            longDescription: "Seleção especial: 10 Sashimis variados, 6 Niguiris, 4 Joes, 8 Uramakis, 4 Hossomakis e 4 Hot Rolls.",
            price: 98.90, 
            image: "imagens/Combo_Casal.jpg", 
            category: "combos" 
        },
        { 
            id: 19, 
            name: "Barca Koenma", 
            description: "60 peças - Completa", 
            longDescription: "A experiência suprema. 60 peças selecionadas, incluindo os melhores cortes de sashimi, sushis especiais e joes.",
            price: 159.90, 
            image: "imagens/combo_60_peças.jpg", 
            category: "combos" 
        },
        { 
            id: 20, 
            name: "Combo Só Salmão", 
            description: "20 peças de salmão puro", 
            longDescription: "5 Sashimis de Salmão, 5 Niguiris de Salmão, 5 Joes e 5 Uramakis Filadélfia.",
            price: 69.90, 
            image: "imagens/combo-so-salmao.jpg", 
            category: "combos" 
        },

        // --- TEMAKI ---
        { 
            id: 21, 
            name: "Temaki Salmão", 
            description: "Salmão e cream cheese", 
            longDescription: "Cone de alga crocante recheado até a borda com cubos de salmão fresco, cream cheese e cebolinha.",
            price: 21.90, 
            image: "imagens/temaki-salmao.jpg", 
            category: "temaki" 
        },
        { 
            id: 22, 
            name: "Temaki Grelhado", 
            description: "Salmão grelhado e tarê", 
            longDescription: "Recheio de salmão grelhado misturado com cream cheese e cebolinha. Finalizado com molho tarê.",
            price: 19.90, 
            image: "imagens/temaki-grelhado.jpg", 
            category: "temaki" 
        },
        { 
            id: 23, 
            name: "Temaki Atum Spicy", 
            description: "Atum com pimenta sriracha", 
            longDescription: "Cubos de atum fresco temperados com molho de pimenta Sriracha, cebolinha e óleo de gergelim.",
            price: 22.90, 
            image: "imagens/temaki-atum.jpg", 
            category: "temaki" 
        },
        { 
            id: 24, 
            name: "Temaki Camarão", 
            description: "Camarão empanado crocante", 
            longDescription: "Camarões empanados na farinha Panko com cream cheese e cebolinha.",
            price: 24.90, 
            image: "imagens/temaki-camarao.jpg", 
            category: "temaki" 
        },

        // --- QUENTES ---
        { 
            id: 25, 
            name: "Yakissoba Clássico", 
            description: "Macarrão, carne e legumes", 
            longDescription: "Macarrão oriental frito na chapa com tiras de carne bovina, frango e legumes variados ao molho especial.",
            price: 32.90, 
            image: "imagens/yakissoba-classico.jpg", 
            category: "hot" 
        },
        { 
            id: 26, 
            name: "Yakissoba Veggie", 
            description: "Macarrão com legumes", 
            longDescription: "Versão vegetariana. Macarrão oriental com mix generoso de legumes frescos e cogumelos.",
            price: 28.90, 
            image: "imagens/yakissoba-veggie.jpg", 
            category: "hot" 
        },
        { 
            id: 27, 
            name: "Hot Roll (8 un)", 
            description: "Sushi frito com tarê", 
            longDescription: "Rolo empanado e frito, recheado com salmão e cream cheese. Coberto com molho Tarê doce e gergelim.",
            price: 18.90, 
            image: "imagens/hot-roll.jpg", 
            category: "hot" 
        },
        { 
            id: 28, 
            name: "Teppanyaki Salmão", 
            description: "Salmão grelhado com legumes", 
            longDescription: "Filé de salmão grelhado na chapa de ferro, servido com legumes na manteiga e gohan.",
            price: 45.90, 
            image: "imagens/teppanyaki-salmao.jpg", 
            category: "hot" 
        },

        // --- BEBIDAS ---
        { 
            id: 29, 
            name: "Coca-Cola", 
            description: "Lata 350ml", 
            longDescription: "Refrigerante Coca-Cola Lata 350ml. Gelada.",
            price: 5.90, 
            image: "imagens/coca-cola.jpg", 
            category: "bebidas" 
        },
        { 
            id: 30, 
            name: "Guaraná", 
            description: "Lata 350ml", 
            longDescription: "Refrigerante Guaraná Antarctica Lata 350ml. Gelado.",
            price: 5.90, 
            image: "imagens/guarana.jpg", 
            category: "bebidas" 
        },
        { 
            id: 31, 
            name: "Água Mineral", 
            description: "500ml", 
            longDescription: "Água mineral 500ml (Com ou Sem gás).",
            price: 4.00, 
            image: "imagens/agua.jpg", 
            category: "bebidas" 
        },
        { 
            id: 32, 
            name: "Heineken", 
            description: "Long Neck 330ml", 
            longDescription: "Cerveja Heineken Long Neck 330ml. Premium Lager puro malte.",
            price: 12.90, 
            image: "imagens/heineken.jpg", 
            category: "bebidas" 
        },
        { 
            id: 33, 
            name: "Sake Azuma Kirin", 
            description: "Dose 150ml", 
            longDescription: "Dose de Sake nacional Azuma Kirin. Pode ser servido quente ou frio.",
            price: 25.90, 
            image: "imagens/sake.jpg", 
            category: "bebidas" 
        },
        { 
            id: 34, 
            name: "Suco Natural", 
            description: "Laranja 500ml", 
            longDescription: "Suco de laranja natural espremido na hora. Sem açúcar.",
            price: 9.90, 
            image: "imagens/suco-natural.jpg", 
            category: "bebidas" 
        },

        // --- SOBREMESAS ---
        { 
            id: 35, 
            name: "Harumaki Chocolate", 
            description: "Rolinho doce (2 un)", 
            longDescription: "2 unidades de rolinho primavera recheados com ganache de chocolate. Servidos quentes.",
            price: 16.90, 
            image: "imagens/harumaki-chocolate.jpg", 
            category: "sobremesas" 
        },
        { 
            id: 36, 
            name: "Romeu e Julieta", 
            description: "Goiabada com queijo (2 un)", 
            longDescription: "Massa crocante recheada com goiabada cascão e queijo minas.",
            price: 15.90, 
            image: "imagens/romeu-julieta.jpg", 
            category: "sobremesas" 
        },
        { 
            id: 37, 
            name: "Petit Gâteau", 
            description: "Bolo com sorvete", 
            longDescription: "Pequeno bolo de chocolate com recheio cremoso, servido quente com sorvete de creme.",
            price: 22.90, 
            image: "imagens/petit-gateau.jpg", 
            category: "sobremesas" 
        }
    ];

    // --- 2. LÓGICA DE LOGIN/CADASTRO ---
    const loginModal = document.getElementById('login-modal');
    const headerLoginBtn = document.getElementById('header-login-btn');
    const closeModalX = document.getElementById('close-modal-x');
    
    let currentUser = JSON.parse(localStorage.getItem('koenma_user'));

    function updateHeaderButton() {
        if (headerLoginBtn) {
            if (currentUser) {
                const firstName = currentUser.nome.split(' ')[0];
                headerLoginBtn.innerHTML = `<i class="fas fa-user-check"></i> Olá, ${firstName}`;
                headerLoginBtn.style.backgroundColor = "#27ae60";
                headerLoginBtn.style.color = "#fff";
                headerLoginBtn.style.border = "none";
            } else {
                headerLoginBtn.innerHTML = `<i class="fas fa-user"></i> Entrar`;
                headerLoginBtn.style.backgroundColor = ""; 
                headerLoginBtn.style.color = "";
                headerLoginBtn.style.border = "";
            }
        }
    }
    updateHeaderButton();

    if (headerLoginBtn) {
        headerLoginBtn.addEventListener('click', () => {
            if (!currentUser) {
                if(loginModal) loginModal.classList.add('active');
            } else {
                if(confirm(`Deseja sair da conta de ${currentUser.nome}?`)) {
                    localStorage.removeItem('koenma_user');
                    currentUser = null;
                    updateHeaderButton();
                    window.location.reload();
                }
            }
        });
    }

    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) loginModal.classList.remove('active');
        });
        if(closeModalX) {
            closeModalX.addEventListener('click', () => loginModal.classList.remove('active'));
        }
    }

    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.target).classList.add('active');
        });
    });

    const formLogin = document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = formLogin.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = "Verificando...";
            btn.disabled = true;

            const loginData = {
                cpf: document.getElementById('login-cpf').value,
                senha: document.getElementById('login-senha').value
            };

            try {
                const response = await fetch('http://127.0.0.1:3000/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loginData)
                });
                const result = await response.json();
                if (result.success) { login(result.usuario); } else { alert(result.error); }
            } catch (err) { console.error(err); alert("Erro ao conectar com servidor."); } 
            finally { btn.textContent = originalText; btn.disabled = false; }
        });
    }

    const formRegister = document.getElementById('form-register');
    if (formRegister) {
        formRegister.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = formRegister.querySelector('button');
            const originalText = btn.textContent;
            
            const senha1 = document.getElementById('reg-senha').value;
            const senha2 = document.getElementById('reg-senha-confirm').value;

            if (senha1 !== senha2) {
                alert("❌ As senhas não coincidem!");
                return;
            }

            btn.textContent = "Criando conta...";
            btn.disabled = true;

            const regData = {
                nome: document.getElementById('reg-nome').value,
                cpf: document.getElementById('reg-cpf').value,
                telefone: document.getElementById('reg-telefone').value,
                endereco: document.getElementById('reg-endereco').value,
                senha: senha1
            };

            try {
                const response = await fetch('http://127.0.0.1:3000/registro', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(regData)
                });
                const result = await response.json();
                if (result.success) {
                    alert("Conta criada! Logado.");
                    const newUser = { ...regData, id: result.id };
                    delete newUser.senha;
                    login(newUser);
                } else { alert("Erro: " + result.error); }
            } catch (err) { console.error(err); alert("Erro ao conectar com servidor."); }
            finally { btn.textContent = originalText; btn.disabled = false; }
        });
    }

    function login(userData) {
        currentUser = userData;
        localStorage.setItem('koenma_user', JSON.stringify(currentUser));
        loginModal.classList.remove('active');
        updateHeaderButton();
        if (cart.length > 0) alert(`Bem-vindo, ${userData.nome.split(' ')[0]}!`);
    }

    function checkLogin() {
        if (!currentUser) {
            if(loginModal) loginModal.classList.add('active');
            return false;
        }
        return true;
    }

    // --- 5. CARRINHO ---
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const menuItemsContainer = document.getElementById('menu-items');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // --- ELEMENTOS DO MODAL DE PRODUTO (NOVO) ---
    const productModal = document.getElementById('product-modal');
    const closeProductModal = document.getElementById('close-product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const modalAddBtn = document.getElementById('modal-add-btn');

    function openProductModal(item) {
        modalImg.src = item.image;
        modalTitle.textContent = item.name;
        
        // AQUI ESTÁ A MUDANÇA: Usamos longDescription, se não existir, usa a curta
        modalDesc.textContent = item.longDescription || item.description; 
        
        modalPrice.textContent = `R$ ${item.price.toFixed(2)}`;
        
        modalAddBtn.onclick = () => {
            if (checkLogin()) {
                addToCart(item.id);
                productModal.classList.remove('active');
            }
        };
        productModal.classList.add('active');
    }

    if (closeProductModal) {
        closeProductModal.addEventListener('click', () => productModal.classList.remove('active'));
    }
    window.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.classList.remove('active');
    });

    // --- RENDERIZAR MENU ---
    function renderMenuItems(category = 'all') {
        if (!menuItemsContainer) return;
        menuItemsContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            const fallbackImage = 'https://cdn-icons-png.flaticon.com/512/2252/2252075.png'; 
            
            menuItem.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='${fallbackImage}'">
                </div>
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="menu-item-price">
                        <span class="price">R$ ${item.price.toFixed(2)}</span>
                        <button class="add-to-cart" data-id="${item.id}">
                            <i class="fas fa-plus"></i> Adicionar
                        </button>
                    </div>
                </div>
            `;
            
            // Eventos para abrir modal
            const imgEl = menuItem.querySelector('.menu-item-image');
            const titleEl = menuItem.querySelector('h3');
            imgEl.addEventListener('click', () => openProductModal(item));
            titleEl.addEventListener('click', () => openProductModal(item));

            menuItemsContainer.appendChild(menuItem);
        });
        
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemId = parseInt(e.currentTarget.dataset.id);
                if (checkLogin()) addToCart(itemId);
            });
        });
    }

    // --- FUNÇÕES DE CARRINHO ---
    function addToCart(itemId) {
        const item = menuItems.find(item => item.id === itemId);
        if (!item) return;
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        if (existingItem) existingItem.quantity += 1;
        else cart.push({ ...item, quantity: 1 });
        updateCart();
        showCartNotification();
    }

    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCart();
    }

    function updateQuantity(itemId, newQuantity) {
        if (newQuantity < 1) { removeFromCart(itemId); return; }
        const item = cart.find(item => item.id === itemId);
        if (item) { item.quantity = newQuantity; updateCart(); }
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalItems;
        
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
            if (cartTotalPrice) cartTotalPrice.textContent = '0.00';
            return;
        }
        
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        if (cartTotalPrice) cartTotalPrice.textContent = totalPrice.toFixed(2);
        
        document.querySelectorAll('.decrease').forEach(btn => btn.addEventListener('click', e => updateQuantity(parseInt(e.currentTarget.dataset.id), cart.find(i => i.id == e.currentTarget.dataset.id).quantity - 1)));
        document.querySelectorAll('.increase').forEach(btn => btn.addEventListener('click', e => updateQuantity(parseInt(e.currentTarget.dataset.id), cart.find(i => i.id == e.currentTarget.dataset.id).quantity + 1)));
        document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', e => removeFromCart(parseInt(e.currentTarget.dataset.id))));
    }

    function showCartNotification() {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `<i class="fas fa-check-circle"></i> <span>Item adicionado!</span>`;
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => { if (document.body.contains(notification)) document.body.removeChild(notification); }, 300);
        }, 2000);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async () => {
            if (cart.length === 0) { alert('Seu carrinho está vazio!'); return; }
            if (!checkLogin()) return;

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const pedidoData = { cliente_id: currentUser.id, total: total, itens: cart };
            const originalText = checkoutBtn.textContent;
            checkoutBtn.textContent = "Enviando...";
            checkoutBtn.disabled = true;

            try {
                const response = await fetch('http://127.0.0.1:3000/pedidos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(pedidoData)
                });
                const result = await response.json();
                if (result.success) {
                    alert(`✅ Pedido #${result.pedidoId} confirmado!`);
                    cart = []; updateCart(); cartSidebar.style.right = '-400px';
                } else { alert('Erro: ' + result.error); }
            } catch (error) { console.error(error); alert('Erro de conexão.'); } 
            finally { checkoutBtn.textContent = originalText; checkoutBtn.disabled = false; }
        });
    }

    // --- CARROSSEL E EVENTOS ---
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        if(slides.length === 0) return;
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if(dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    if(slides.length > 0) setInterval(() => showSlide(currentSlide + 1), 5000);
    if(prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    if(nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

    if (cartToggle) cartToggle.addEventListener('click', (e) => { e.preventDefault(); cartSidebar.style.right = '0'; });
    if (closeCart) closeCart.addEventListener('click', () => cartSidebar.style.right = '-400px');
    
    document.addEventListener('click', (e) => {
        if (cartSidebar && !cartSidebar.contains(e.target) && !cartToggle.contains(e.target) && e.target !== cartToggle && !loginModal.contains(e.target)) {
            cartSidebar.style.right = '-400px';
        }
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderMenuItems(button.dataset.category);
        });
    });

    renderMenuItems();
    updateCart();
});