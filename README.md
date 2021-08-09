# RedDex
Projeto de pokedex em next e adonisJs,

# NextJs
    npm install
    npm run dev

# Adonis
    npm install
    adonis migration:run
    adonis serve --dev

## Rotas
**localhost:3333/import**
>Copie e cole o conteúdo do arquivo do json para o insomnia (ou qualquer outro como postman) para importar os dados para o banco dados.

**localhost:3333/**
>Listar todos os pokemons

**localhost:3333/search?type=ice** / **localhost:3333/search?weather=snow**/ **localhost:3333/search?search=picachu**
>Rotas para pesquisas de type, weather e nome do pokemon respectivamente

**localhost:3333/weather**
>Retorna todos os weather

**localhost:3333/type**
>Retorna todos os types
