// ==================== DADOS DAS RECEITAS ====================
window.ReceitasData = {
    receitas: [
        {
            id: '1',
            nome: 'Bolo de Chocolate',
            imagem: '../assets/img/bolo-chocolate.jpg',
            categoria: 'Sobremesa',
            tempo: 45,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '2 xícaras', item: 'Farinha de trigo' },
                { quantidade: '1 xícara', item: 'Açúcar' },
                { quantidade: '1/2 xícara', item: 'Chocolate em pó' },
                { quantidade: '3', item: 'Ovos' },
                { quantidade: '1/2 xícara', item: 'Óleo' },
                { quantidade: '1 xícara', item: 'Leite' },
                { quantidade: '1 colher (sopa)', item: 'Fermento em pó' }
            ],
            instrucoes: [
                'Pré-aqueça o forno a 180°C e unte uma forma com manteiga.',
                'Em uma tigela, misture a farinha, açúcar, chocolate em pó e fermento.',
                'Em outra tigela, bata os ovos, adicione o óleo e o leite.',
                'Misture os ingredientes secos com os líquidos até formar uma massa homogênea.',
                'Despeje na forma e leve ao forno por 35-40 minutos.',
                'Faça o teste do palito para verificar se está assado.',
                'Deixe esfriar antes de desenformar.'
            ]
        },
        {
            id: '2',
            nome: 'Frango Parmegiana',
            imagem: '../assets/img/frango-parmegiana.jpg',
            categoria: 'Prato Principal',
            tempo: 35,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '4', item: 'Filés de frango' },
                { quantidade: '2', item: 'Ovos batidos' },
                { quantidade: '2 xícaras', item: 'Farinha de rosca' },
                { quantidade: '200g', item: 'Queijo mussarela' },
                { quantidade: '2 xícaras', item: 'Molho de tomate' },
                { quantidade: '1/2 xícara', item: 'Queijo parmesão ralado' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' },
                { quantidade: 'Para fritar', item: 'Óleo' }
            ],
            instrucoes: [
                'Tempere os filés de frango com sal e pimenta.',
                'Passe cada filé no ovo batido e depois na farinha de rosca.',
                'Frite os filés em óleo quente até dourar dos dois lados.',
                'Em um refratário, coloque um pouco de molho de tomate no fundo.',
                'Disponha os filés fritos sobre o molho.',
                'Cubra com o restante do molho e os queijos.',
                'Leve ao forno a 200°C por 15-20 minutos até gratinar.'
            ]
        },
        {
            id: '3',
            nome: 'Salada Caesar',
            imagem: '../assets/img/salada-caesar.jpg',
            categoria: 'Salada',
            tempo: 15,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '1 pé', item: 'Alface americana' },
                { quantidade: '100g', item: 'Queijo parmesão' },
                { quantidade: '1 xícara', item: 'Croutons' },
                { quantidade: '3 colheres (sopa)', item: 'Maionese' },
                { quantidade: '1 colher (sopa)', item: 'Mostarda dijon' },
                { quantidade: '2 dentes', item: 'Alho picado' },
                { quantidade: '2 colheres (sopa)', item: 'Suco de limão' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' }
            ],
            instrucoes: [
                'Lave e corte a alface em pedaços médios.',
                'Para o molho, misture maionese, mostarda, alho, suco de limão, sal e pimenta.',
                'Em uma saladeira, coloque a alface.',
                'Regue com o molho e misture bem.',
                'Adicione o queijo parmesão ralado grosso.',
                'Finalize com os croutons por cima.',
                'Sirva imediatamente.'
            ]
        },
        {
            id: '4',
            nome: 'Lasanha Vegetariana',
            imagem: '../assets/img/lasanha-vegetariana.jpg',
            categoria: 'Prato Principal',
            tempo: 60,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '500g', item: 'Massa para lasanha' },
                { quantidade: '2', item: 'Berinjelas médias' },
                { quantidade: '2', item: 'Abobrinhas médias' },
                { quantidade: '300g', item: 'Ricota' },
                { quantidade: '200g', item: 'Queijo mussarela' },
                { quantidade: '3 xícaras', item: 'Molho de tomate' },
                { quantidade: '1/2 xícara', item: 'Queijo parmesão' },
                { quantidade: 'A gosto', item: 'Manjericão fresco' }
            ],
            instrucoes: [
                'Corte as berinjelas e abobrinhas em fatias finas.',
                'Grelhe os legumes até ficarem macios.',
                'Cozinhe a massa da lasanha conforme instruções da embalagem.',
                'Em um refratário, faça camadas: molho, massa, legumes, ricota.',
                'Repita as camadas até acabar os ingredientes.',
                'Cubra com mussarela e parmesão.',
                'Asse a 180°C por 30-35 minutos até gratinar.',
                'Deixe descansar 10 minutos antes de servir.'
            ]
        },
        {
            id: '5',
            nome: 'Brigadeiro Gourmet',
            imagem: '../assets/img/brigadeiro-gourmet.jpg',
            categoria: 'Sobremesa',
            tempo: 20,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '1 lata', item: 'Leite condensado' },
                { quantidade: '3 colheres (sopa)', item: 'Chocolate em pó' },
                { quantidade: '1 colher (sopa)', item: 'Manteiga' },
                { quantidade: 'Para decorar', item: 'Chocolate granulado' },
                { quantidade: 'Para decorar', item: 'Castanhas picadas' }
            ],
            instrucoes: [
                'Em uma panela, misture leite condensado, chocolate em pó e manteiga.',
                'Cozinhe em fogo médio, mexendo sempre, até desgrudar do fundo.',
                'Deixe esfriar completamente.',
                'Com as mãos untadas, faça bolinhas.',
                'Passe no chocolate granulado ou castanhas.',
                'Coloque em forminhas de papel.',
                'Leve à geladeira por 30 minutos antes de servir.'
            ]
        },
        {
            id: '6',
            nome: 'Salmão com Aspargos',
            imagem: '../assets/img/salmao-aspargos.jpg',
            categoria: 'Prato Principal',
            tempo: 25,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '4 filés', item: 'Salmão' },
                { quantidade: '500g', item: 'Aspargos' },
                { quantidade: '2 colheres (sopa)', item: 'Azeite' },
                { quantidade: '2 dentes', item: 'Alho picado' },
                { quantidade: '1', item: 'Limão (suco)' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' },
                { quantidade: 'A gosto', item: 'Ervas finas' }
            ],
            instrucoes: [
                'Tempere o salmão com sal, pimenta e suco de limão.',
                'Corte as pontas dos aspargos e cozinhe no vapor por 5 minutos.',
                'Aqueça o azeite em uma frigideira.',
                'Grelhe o salmão por 3-4 minutos de cada lado.',
                'Na mesma frigideira, refogue os aspargos com alho.',
                'Tempere com sal, pimenta e ervas finas.',
                'Sirva o salmão sobre os aspargos.'
            ]
        },
        {
            id: '7',
            nome: 'Risoto de Cogumelos',
            imagem: '../assets/img/risoto-cogumelos.jpg',
            categoria: 'Prato Principal',
            tempo: 40,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '2 xícaras', item: 'Arroz arbóreo' },
                { quantidade: '300g', item: 'Cogumelos variados' },
                { quantidade: '1 litro', item: 'Caldo de legumes' },
                { quantidade: '1', item: 'Cebola picada' },
                { quantidade: '1/2 xícara', item: 'Vinho branco' },
                { quantidade: '1/2 xícara', item: 'Queijo parmesão' },
                { quantidade: '2 colheres (sopa)', item: 'Manteiga' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' }
            ],
            instrucoes: [
                'Aqueça o caldo de legumes e mantenha quente.',
                'Refogue a cebola na manteiga até dourar.',
                'Adicione o arroz e refogue por 2 minutos.',
                'Acrescente o vinho branco e deixe evaporar.',
                'Adicione o caldo quente, uma concha por vez, mexendo sempre.',
                'Refogue os cogumelos separadamente e adicione ao risoto.',
                'Finalize com parmesão, sal e pimenta.',
                'Sirva imediatamente.'
            ]
        },
        {
            id: '8',
            nome: 'Torta de Limão',
            imagem: '../assets/img/torta-de-limao.jpg',
            categoria: 'Sobremesa',
            tempo: 30,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '200g', item: 'Biscoito maisena' },
                { quantidade: '100g', item: 'Manteiga derretida' },
                { quantidade: '1 lata', item: 'Leite condensado' },
                { quantidade: '1/2 xícara', item: 'Suco de limão' },
                { quantidade: '1 envelope', item: 'Gelatina incolor' },
                { quantidade: '200ml', item: 'Creme de leite' },
                { quantidade: 'Para decorar', item: 'Raspas de limão' }
            ],
            instrucoes: [
                'Triture os biscoitos e misture com a manteiga derretida.',
                'Forre o fundo de uma forma removível com a mistura.',
                'Leve à geladeira por 30 minutos.',
                'Dissolva a gelatina conforme instruções da embalagem.',
                'Misture leite condensado, suco de limão e gelatina.',
                'Adicione o creme de leite e misture bem.',
                'Despeje sobre a base de biscoito.',
                'Leve à geladeira por 4 horas.',
                'Decore com raspas de limão antes de servir.'
            ]
        },
        {
            id: '9',
            nome: 'Pão de Queijo',
            imagem: '../assets/img/pao-de-queijo.jpg',
            categoria: 'Lanche',
            tempo: 30,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '2 xícaras', item: 'Polvilho doce' },
                { quantidade: '1/2 xícara', item: 'Óleo' },
                { quantidade: '1/2 xícara', item: 'Leite' },
                { quantidade: '1/2 xícara', item: 'Água' },
                { quantidade: '1 colher (chá)', item: 'Sal' },
                { quantidade: '2', item: 'Ovos' },
                { quantidade: '1 xícara', item: 'Queijo minas ralado' }
            ],
            instrucoes: [
                'Ferva água, leite, óleo e sal em uma panela.',
                'Despeje sobre o polvilho e misture bem.',
                'Deixe esfriar e adicione os ovos um a um.',
                'Misture o queijo ralado à massa.',
                'Faça bolinhas com as mãos untadas.',
                'Coloque em assadeira untada.',
                'Asse a 200°C por 20-25 minutos até dourar.'
            ]
        },
        {
            id: '10',
            nome: 'Smoothie Verde',
            imagem: '../assets/img/smoothie-verde.jpg',
            categoria: 'Bebida',
            tempo: 5,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '1', item: 'Banana madura' },
                { quantidade: '1 xícara', item: 'Espinafre fresco' },
                { quantidade: '1/2', item: 'Abacate' },
                { quantidade: '1 xícara', item: 'Água de coco' },
                { quantidade: '1 colher (sopa)', item: 'Mel' },
                { quantidade: '1/2', item: 'Limão (suco)' },
                { quantidade: 'A gosto', item: 'Gelo' }
            ],
            instrucoes: [
                'Coloque todos os ingredientes no liquidificador.',
                'Bata até obter uma mistura homogênea.',
                'Adicione gelo se desejar mais gelado.',
                'Prove e ajuste o mel se necessário.',
                'Sirva imediatamente em copos altos.',
                'Decore com folhas de hortelã se desejar.'
            ]
        },
        {
            id: '11',
            nome: 'Omelete Simples',
            imagem: '../assets/img/omelete.jpg',
            categoria: 'Café da Manhã',
            tempo: 10,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '3', item: 'Ovos' },
                { quantidade: '2 colheres (sopa)', item: 'Leite' },
                { quantidade: '1 colher (sopa)', item: 'Manteiga' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' },
                { quantidade: 'A gosto', item: 'Queijo ralado' },
                { quantidade: 'A gosto', item: 'Ervas frescas' }
            ],
            instrucoes: [
                'Bata os ovos com leite, sal e pimenta.',
                'Aqueça a manteiga em uma frigideira antiaderente.',
                'Despeje a mistura de ovos na frigideira.',
                'Cozinhe em fogo baixo até as bordas firmarem.',
                'Adicione queijo e ervas de um lado.',
                'Dobre a omelete ao meio.',
                'Sirva imediatamente.'
            ]
        },
        {
            id: '12',
            nome: 'Macarrão Alho e Óleo',
            imagem: '../assets/img/macarao-alho-oleo.jpg',
            categoria: 'Prato Principal',
            tempo: 20,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '500g', item: 'Espaguete' },
                { quantidade: '6 dentes', item: 'Alho laminado' },
                { quantidade: '1/2 xícara', item: 'Azeite extra virgem' },
                { quantidade: '1 colher (chá)', item: 'Pimenta vermelha' },
                { quantidade: '1/2 xícara', item: 'Queijo parmesão' },
                { quantidade: 'A gosto', item: 'Salsinha picada' },
                { quantidade: 'A gosto', item: 'Sal' }
            ],
            instrucoes: [
                'Cozinhe o macarrão em água salgada conforme embalagem.',
                'Aqueça o azeite em uma frigideira grande.',
                'Doure o alho laminado no azeite.',
                'Adicione a pimenta vermelha.',
                'Escorra o macarrão e adicione à frigideira.',
                'Misture bem com o azeite temperado.',
                'Finalize com parmesão e salsinha.',
                'Sirva imediatamente.'
            ]
        },
        {
            id: '13',
            nome: 'Pudim de Leite Condensado',
            imagem: '../assets/img/pudim-de-leite-condensado.jpg',
            categoria: 'Sobremesa',
            tempo: 60,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '1 lata', item: 'Leite condensado' },
                { quantidade: '2 latas', item: 'Leite (medida da lata)' },
                { quantidade: '3', item: 'Ovos' },
                { quantidade: '1 xícara', item: 'Açúcar para calda' }
            ],
            instrucoes: [
                'Faça a calda derretendo o açúcar até dourar.',
                'Despeje a calda em uma forma de pudim.',
                'No liquidificador, bata leite condensado, leite e ovos.',
                'Despeje a mistura sobre a calda.',
                'Cubra com papel alumínio.',
                'Cozinhe em banho-maria por 1 hora.',
                'Deixe esfriar e desenforme gelado.'
            ]
        },
        {
            id: '14',
            nome: 'Quiche de Legumes',
            imagem: '../assets/img/quiche-de-legumes.jpg',
            categoria: 'Prato Principal',
            tempo: 45,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '1', item: 'Massa quebrada pronta' },
                { quantidade: '3', item: 'Ovos' },
                { quantidade: '200ml', item: 'Creme de leite' },
                { quantidade: '1', item: 'Abobrinha em cubos' },
                { quantidade: '1', item: 'Tomate em cubos' },
                { quantidade: '100g', item: 'Queijo gruyère' },
                { quantidade: 'A gosto', item: 'Sal, pimenta e ervas' }
            ],
            instrucoes: [
                'Forre uma forma com a massa quebrada.',
                'Refogue os legumes até ficarem macios.',
                'Bata ovos com creme de leite, sal e pimenta.',
                'Distribua os legumes sobre a massa.',
                'Despeje a mistura de ovos por cima.',
                'Polvilhe o queijo ralado.',
                'Asse a 180°C por 30-35 minutos.',
                'Sirva morno ou frio.'
            ]
        },
        {
            id: '15',
            nome: 'Mousse de Maracujá',
            imagem: '../assets/img/mousse-de-maracuja.jpg',
            categoria: 'Sobremesa',
            tempo: 15,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '1 lata', item: 'Leite condensado' },
                { quantidade: '1 lata', item: 'Creme de leite' },
                { quantidade: '1/2 xícara', item: 'Polpa de maracujá' },
                { quantidade: '1 envelope', item: 'Gelatina incolor' },
                { quantidade: '1/4 xícara', item: 'Água quente' }
            ],
            instrucoes: [
                'Dissolva a gelatina na água quente.',
                'No liquidificador, bata leite condensado e polpa de maracujá.',
                'Adicione a gelatina dissolvida.',
                'Por último, adicione o creme de leite.',
                'Bata até ficar homogêneo.',
                'Distribua em taças individuais.',
                'Leve à geladeira por 2 horas.',
                'Decore com sementes de maracujá.'
            ]
        },
        {
            id: '16',
            nome: 'Wrap de Frango',
            imagem: '../assets/img/wrap.jpg',
            categoria: 'Lanche',
            tempo: 20,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '4', item: 'Tortillas grandes' },
                { quantidade: '300g', item: 'Peito de frango em tiras' },
                { quantidade: '2 xícaras', item: 'Alface picada' },
                { quantidade: '1', item: 'Tomate em cubos' },
                { quantidade: '1/2', item: 'Cebola roxa fatiada' },
                { quantidade: '4 colheres (sopa)', item: 'Maionese temperada' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' }
            ],
            instrucoes: [
                'Tempere o frango com sal e pimenta.',
                'Grelhe o frango até ficar dourado e cozido.',
                'Aqueça as tortillas rapidamente.',
                'Espalhe maionese sobre cada tortilla.',
                'Distribua alface, tomate e cebola.',
                'Adicione o frango grelhado.',
                'Enrole bem apertado.',
                'Corte ao meio e sirva.'
            ]
        },
        {
            id: '17',
            nome: 'Sopa de Legumes',
            imagem: '../assets/img/sopa-legumes.jpg',
            categoria: 'Sopa',
            tempo: 40,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '2', item: 'Batatas médias' },
                { quantidade: '2', item: 'Cenouras' },
                { quantidade: '1', item: 'Abobrinha' },
                { quantidade: '1', item: 'Cebola' },
                { quantidade: '2 dentes', item: 'Alho' },
                { quantidade: '1 litro', item: 'Caldo de legumes' },
                { quantidade: '2 colheres (sopa)', item: 'Azeite' },
                { quantidade: 'A gosto', item: 'Sal, pimenta e ervas' }
            ],
            instrucoes: [
                'Corte todos os legumes em cubos médios.',
                'Refogue cebola e alho no azeite.',
                'Adicione os legumes e refogue por 5 minutos.',
                'Acrescente o caldo de legumes.',
                'Cozinhe por 25-30 minutos até os legumes ficarem macios.',
                'Tempere com sal, pimenta e ervas.',
                'Sirva quente com torradas.'
            ]
        },
        {
            id: '18',
            nome: 'Cookies de Aveia',
            imagem: '../assets/img/cookies-aveia.jpg',
            categoria: 'Sobremesa',
            tempo: 25,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '1 xícara', item: 'Aveia em flocos' },
                { quantidade: '1 xícara', item: 'Farinha de trigo' },
                { quantidade: '1/2 xícara', item: 'Açúcar mascavo' },
                { quantidade: '1/2 xícara', item: 'Manteiga amolecida' },
                { quantidade: '1', item: 'Ovo' },
                { quantidade: '1/2 colher (chá)', item: 'Fermento em pó' },
                { quantidade: '1/2 xícara', item: 'Gotas de chocolate' }
            ],
            instrucoes: [
                'Misture ingredientes secos em uma tigela.',
                'Em outra tigela, bata manteiga com açúcar.',
                'Adicione o ovo e misture bem.',
                'Incorpore os ingredientes secos.',
                'Adicione as gotas de chocolate.',
                'Faça bolinhas e coloque em assadeira.',
                'Asse a 180°C por 12-15 minutos.',
                'Deixe esfriar antes de retirar da forma.'
            ]
        },
        {
            id: '19',
            nome: 'Ratatouille',
            imagem: '../assets/img/ratatouille.jpg',
            categoria: 'Prato Principal',
            tempo: 50,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '1', item: 'Berinjela média' },
                { quantidade: '2', item: 'Abobrinhas' },
                { quantidade: '2', item: 'Tomates' },
                { quantidade: '1', item: 'Pimentão vermelho' },
                { quantidade: '1', item: 'Cebola' },
                { quantidade: '3 dentes', item: 'Alho' },
                { quantidade: '1/4 xícara', item: 'Azeite' },
                { quantidade: 'A gosto', item: 'Ervas de Provence' }
            ],
            instrucoes: [
                'Corte todos os legumes em cubos médios.',
                'Refogue a cebola e alho no azeite.',
                'Adicione berinjela e cozinhe por 5 minutos.',
                'Acrescente pimentão e abobrinha.',
                'Por último, adicione os tomates.',
                'Tempere com sal, pimenta e ervas.',
                'Cozinhe em fogo baixo por 30 minutos.',
                'Sirva quente como acompanhamento.'
            ]
        },
        {
            id: '20',
            nome: 'Panqueca de Banana',
            imagem: '../assets/img/panqueca-banana.jpg',
            categoria: 'Café da Manhã',
            tempo: 15,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '2', item: 'Bananas maduras' },
                { quantidade: '2', item: 'Ovos' },
                { quantidade: '1/4 xícara', item: 'Farinha de aveia' },
                { quantidade: '1 colher (chá)', item: 'Canela em pó' },
                { quantidade: '1 colher (sopa)', item: 'Mel' },
                { quantidade: '1 colher (sopa)', item: 'Óleo de coco' }
            ],
            instrucoes: [
                'Amasse as bananas com um garfo.',
                'Misture com ovos, farinha de aveia e canela.',
                'Adicione mel e misture bem.',
                'Aqueça óleo de coco em frigideira antiaderente.',
                'Despeje pequenas porções da massa.',
                'Cozinhe por 2-3 minutos de cada lado.',
                'Sirva com frutas frescas e mel.'
            ]
        },
        {
            id: '21',
            nome: 'Beijinho Gourmet',
            imagem: '../assets/img/beijinho-de-coco.jpg',
            categoria: 'Sobremesa',
            tempo: 25,
            dificuldade: 'Fácil',
            porcoes: 30,
            calorias: 120,
            ingredientes: [
                { quantidade: '1 lata (395g)', item: 'Leite condensado' },
                { quantidade: '1 caixinha (200g)', item: 'Creme de leite com 17% de gordura' },
                { quantidade: '100g', item: 'Coco em flocos' },
                { quantidade: '100g', item: 'Chocolate branco nobre picado' },
                { quantidade: '1/2 colher de sopa', item: 'Manteiga sem sal' },
                { quantidade: '50g', item: 'Coco ralado fino (sem açúcar), para finalizar' }
            ],
            instrucoes: [
                'Reúna todos os ingredientes. Esse é o segredo para garantir que o beijinho fique perfeito.',
                'Em uma panela, coloque o leite condensado, o creme de leite, o coco em flocos e a manteiga. Misture bem até incorporar.',
                'Leve ao fogo médio ou baixo e mexa constantemente com uma espátula, até o doce desgrudar do fundo da panela.',
                'Desligue o fogo, adicione o chocolate branco e misture bem até derreter completamente.',
                'Transfira o doce para um recipiente, cubra com plástico-filme e deixe esfriar em temperatura ambiente. Depois, leve à geladeira por no mínimo 6 horas.',
                'Modele bolinhas de aproximadamente 20g, passe no coco ralado fino e coloque em forminhas.'
            ]
        },
        {
            id: '22',
            nome: 'Bolinho de Bacalhau',
            imagem: '../assets/img/bolinho-de-bacalhau.jpg',
            categoria: 'Aperitivo',
            tempo: 40,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '500g', item: 'Bacalhau dessalgado' },
                { quantidade: '3', item: 'Batatas médias' },
                { quantidade: '2', item: 'Ovos' },
                { quantidade: '1/2 xícara', item: 'Salsinha picada' },
                { quantidade: 'A gosto', item: 'Pimenta-do-reino' },
                { quantidade: 'Para fritar', item: 'Óleo' }
            ],
            instrucoes: [
                'Cozinhe o bacalhau e desfie.',
                'Cozinhe as batatas e amasse.',
                'Misture todos os ingredientes.',
                'Modele os bolinhos com as mãos.',
                'Frite em óleo quente até dourar.',
                'Escorra em papel absorvente.',
                'Sirva com limão.'
            ]
        },
        {
            id: '23',
            nome: 'Bolo de Cenoura com Cobertura',
            imagem: '../assets/img/bolo-cenoura-cobertura.jpg',
            categoria: 'Sobremesa',
            tempo: 50,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '3', item: 'Cenouras médias' },
                { quantidade: '4', item: 'Ovos' },
                { quantidade: '1 xícara', item: 'Óleo' },
                { quantidade: '2 xícaras', item: 'Açúcar' },
                { quantidade: '2 xícaras', item: 'Farinha de trigo' },
                { quantidade: '1 colher (sopa)', item: 'Fermento em pó' },
                { quantidade: '1 lata', item: 'Leite condensado' },
                { quantidade: '1 colher (sopa)', item: 'Manteiga' },
                { quantidade: '3 colheres (sopa)', item: 'Chocolate em pó' }
            ],
            instrucoes: [
                'Bata no liquidificador as cenouras, ovos e óleo.',
                'Misture com os ingredientes secos em uma tigela.',
                'Asse em forno médio por 30 minutos.',
                'Para a cobertura, misture leite condensado, manteiga e chocolate.',
                'Leve ao fogo até engrossar.',
                'Despeje sobre o bolo frio.'
            ]
        },
        {
            id: '24',
            nome: 'Bowl de Frango Teriyaki',
            imagem: '../assets/img/bowl-frango-teriyaki.jpg',
            categoria: 'Prato Principal',
            tempo: 30,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '300g', item: 'Peito de frango' },
                { quantidade: '2 xícaras', item: 'Arroz integral' },
                { quantidade: '1', item: 'Abacate' },
                { quantidade: '1', item: 'Pepino' },
                { quantidade: '1/2 xícara', item: 'Molho teriyaki' },
                { quantidade: '1 colher (sopa)', item: 'Gergelim' }
            ],
            instrucoes: [
                'Cozinhe o arroz conforme instruções.',
                'Grelhe o frango cortado em tiras com molho teriyaki.',
                'Corte os legumes em cubos.',
                'Monte o bowl com arroz, frango e legumes.',
                'Regue com mais molho teriyaki.',
                'Polvilhe gergelim por cima.'
            ]
        },
        {
            id: '25',
            nome: 'Empadão de Frango',
            imagem: '../assets/img/empadao-de-frango.jpg',
            categoria: 'Prato Principal',
            tempo: 60,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '500g', item: 'Massa para empadão' },
                { quantidade: '300g', item: 'Frango desfiado' },
                { quantidade: '1', item: 'Cebola picada' },
                { quantidade: '2', item: 'Tomates picados' },
                { quantidade: '1/2 xícara', item: 'Azeitonas' },
                { quantidade: '2 colheres (sopa)', item: 'Azeite' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' }
            ],
            instrucoes: [
                'Refogue a cebola e o frango no azeite.',
                'Adicione os tomates e temperos.',
                'Forre uma forma com metade da massa.',
                'Coloque o recheio e cubra com o restante da massa.',
                'Asse em forno médio por 30 minutos.',
                'Deixe esfriar antes de cortar.'
            ]
        },
        {
            id: '26',
            nome: 'Escondidinho de Carne Seca',
            imagem: '../assets/img/escondidinho-de-carne-seca.jpg',
            categoria: 'Prato Principal',
            tempo: 50,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '1kg', item: 'Batata-doce' },
                { quantidade: '300g', item: 'Carne seca dessalgada' },
                { quantidade: '1', item: 'Cebola picada' },
                { quantidade: '2 colheres (sopa)', item: 'Manteiga' },
                { quantidade: '1 xícara', item: 'Leite' },
                { quantidade: '200g', item: 'Queijo coalho' }
            ],
            instrucoes: [
                'Cozinhe e amasse as batatas-doces.',
                'Refogue a carne seca com cebola.',
                'Misture as batatas com manteiga e leite.',
                'Em um refratário, faça camadas de purê e carne.',
                'Finalize com queijo coalho por cima.',
                'Leve ao forno para gratinar.'
            ]
        },
        {
            id: '27',
            nome: 'Frango com Batata',
            imagem: '../assets/img/frango-batata.jpg',
            categoria: 'Prato Principal',
            tempo: 45,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '4', item: 'Coxas de frango' },
                { quantidade: '4', item: 'Batatas médias' },
                { quantidade: '2', item: 'Cebolas' },
                { quantidade: '3 dentes', item: 'Alho' },
                { quantidade: '2 colheres (sopa)', item: 'Azeite' },
                { quantidade: 'A gosto', item: 'Temperos' }
            ],
            instrucoes: [
                'Tempere o frango com alho e sal.',
                'Corte as batatas em pedaços grandes.',
                'Coloque tudo em uma assadeira com azeite.',
                'Asse em forno médio por 40 minutos.',
                'Vire o frango na metade do tempo.',
                'Sirva quente.'
            ]
        },
        {
            id: '28',
            nome: 'Frango Frito',
            imagem: '../assets/img/frango-frito-molho.jpg',
            categoria: 'Prato Principal',
            tempo: 30,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '4', item: 'Sobrecoxas de frango' },
                { quantidade: '1 xícara', item: 'Farinha de trigo' },
                { quantidade: '2', item: 'Ovos' },
                { quantidade: 'A gosto', item: 'Temperos' },
                { quantidade: 'Para fritar', item: 'Óleo' }
            ],
            instrucoes: [
                'Tempere o frango com sal e pimenta.',
                'Passe na farinha, depois no ovo batido.',
                'Frite em óleo quente até dourar.',
                'Escorra em papel absorvente.',
                'Sirva com molho de sua preferência.'
            ]
        },
        {
            id: '29',
            nome: 'Strogonoff de Cogumelos',
            imagem: '../assets/img/strogonoff-de-cogumelos.jpg',
            categoria: 'Prato Principal',
            tempo: 25,
            dificuldade: 'Fácil',
            ingredientes: [
                { quantidade: '300g', item: 'Cogumelos variados' },
                { quantidade: '1', item: 'Cebola picada' },
                { quantidade: '2 colheres (sopa)', item: 'Manteiga' },
                { quantidade: '1 xícara', item: 'Creme de leite' },
                { quantidade: '1 colher (sopa)', item: 'Mostarda' },
                { quantidade: 'A gosto', item: 'Sal e pimenta' }
            ],
            instrucoes: [
                'Refogue a cebola na manteiga.',
                'Adicione os cogumelos e cozinhe.',
                'Tempere com sal e pimenta.',
                'Adicione a mostarda e o creme de leite.',
                'Cozinhe por mais 5 minutos.',
                'Sirva com arroz branco.'
            ]
        },
        {
            id: '30',
            nome: 'Torta de Atum',
            imagem: '../assets/img/torta-de-atum.jpg',
            categoria: 'Prato Principal',
            tempo: 40,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '2 xícaras', item: 'Farinha de trigo' },
                { quantidade: '1/2 xícara', item: 'Óleo' },
                { quantidade: '1', item: 'Ovo' },
                { quantidade: '1 lata', item: 'Atum em água' },
                { quantidade: '1', item: 'Cebola picada' },
                { quantidade: '1/2 xícara', item: 'Azeitonas' }
            ],
            instrucoes: [
                'Misture os ingredientes secos para a massa.',
                'Forre uma forma com metade da massa.',
                'Misture o recheio e coloque sobre a massa.',
                'Cubra com o restante da massa.',
                'Asse em forno médio por 30 minutos.',
                'Deixe esfriar antes de cortar.'
            ]
        },
        {
            id: '31',
            nome: 'Torta de Atum',
            imagem: '../assets/img/',
            categoria: 'Prato Principal',
            tempo: 40,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '2 xícaras', item: 'Farinha de trigo' },
                { quantidade: '1/2 xícara', item: 'Óleo' },
                { quantidade: '1', item: 'Ovo' },
                { quantidade: '1 lata', item: 'Atum em água' },
                { quantidade: '1', item: 'Cebola picada' },
                { quantidade: '1/2 xícara', item: 'Azeitonas' }
            ],
            instrucoes: [
                'Misture os ingredientes secos para a massa.',
                'Forre uma forma com metade da massa.',
                'Misture o recheio e coloque sobre a massa.',
                'Cubra com o restante da massa.',
                'Asse em forno médio por 30 minutos.',
                'Deixe esfriar antes de cortar.'
            ]
        },
        {
            id: '33',
            nome: 'Salada Quinoa',
            imagem: '../assets/img/salada-quinoa.jpg',
            categoria: 'Prato Principal',
            tempo: 40,
            dificuldade: 'Médio',
            ingredientes: [
                { quantidade: '2 xícaras', item: 'Farinha de trigo' },
                { quantidade: '1/2 xícara', item: 'Óleo' },
                { quantidade: '1', item: 'Ovo' },
                { quantidade: '1 lata', item: 'Atum em água' },
                { quantidade: '1', item: 'Cebola picada' },
                { quantidade: '1/2 xícara', item: 'Azeitonas' }
            ],
            instrucoes: [
                'Misture os ingredientes secos para a massa.',
                'Forre uma forma com metade da massa.',
                'Misture o recheio e coloque sobre a massa.',
                'Cubra com o restante da massa.',
                'Asse em forno médio por 30 minutos.',
                'Deixe esfriar antes de cortar.'
            ]
        },
    ],

    // Método para buscar receitas
    buscarReceitas: function (termo = '', categoria = '', tempo = '', dificuldade = '') {
        let resultados = [...this.receitas];

        // Filtro por termo de busca
        if (termo) {
            const termoLower = termo.toLowerCase();
            resultados = resultados.filter(receita =>
                receita.nome.toLowerCase().includes(termoLower) ||
                receita.ingredientes.some(ing => ing.item.toLowerCase().includes(termoLower))
            );
        }

        // Filtro por categoria
        if (categoria) {
            resultados = resultados.filter(receita => receita.categoria === categoria);
        }

        // Filtro por tempo
        if (tempo) {
            const tempoMax = parseInt(tempo);
            resultados = resultados.filter(receita => receita.tempo <= tempoMax);
        }

        // Filtro por dificuldade
        if (dificuldade) {
            const dificuldadeMap = {
                'easy': 'Fácil',
                'medium': 'Médio', 
                'hard': 'Difícil'
            };
            const dificuldadePt = dificuldadeMap[dificuldade] || dificuldade;
            resultados = resultados.filter(receita => receita.dificuldade === dificuldadePt);
        }

        return resultados;
    },

    // Método para buscar receita por ID
    buscarPorId: function (id) {
        return this.receitas.find(receita => receita.id === id);
    },

    // Método para obter categorias únicas
    obterCategorias: function () {
        const categorias = [...new Set(this.receitas.map(receita => receita.categoria))];
        return categorias.sort();
    },

    // Método para obter receitas populares (primeiras 6)
    obterPopulares: function () {
        return this.receitas.slice(0, 6);
    }
};