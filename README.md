# pokedex

Link do deploy: https://pokedex-bia-rossati.netlify.app/

Projeto criado em ReactJS, aplicando hooks como useNavigate para criar as Routes, 
useContext para criar o Global Context/Provider, integração com a POKE API (uma API Rest) fazendo requisições com Axios, 
implementando localStorage, estilizando com styled-components, entre outros.

O objetivo do projeto é renderizar na HomePage uma lista de pokémons, trazidos da POKE API, sendo não apenas o pokémon em si,
mas inclusive as figuras e cor dos cards.
A partir da Home, é possível adicionar Pokémons em uma Pokédex e olhar detalhes deles,
navegando para o caminho "/details-nome-do-pokemon". 
Ao adicionar, esse Pokémon será transferido da Home e para Pokedéx (rota "/pokedex"). Lá, ele poderá ser excluído e caso isso ocorra,
ele voltará para Home. Da Pokedéx também é possível ver detalhes dele.
Na página de detalhes teremos mais informações vindas da API e alguns efeitos, como a cor da barra de status que muda conforme o valor do status.
Também na página de detalhes há a renderização condicional do botão "Adicionar/Excluir", para fazer a transferência desse Pokémon dependendo 
dele estar ou não na Pokédex.

Nesse projeto pensei em otimizar usando o mínimo possível dos métodos de array (sort, filter e find) e de chamadas na API,
pensando tanto em não sobrecarregar a API e para que as páginas carregarem mais rápido.
Possíveis melhorias planejadas são incluir modais de alerta para quando a pessoa adicionar ou remover um Pokémon da Pokédex e
implementar uma busca página na API para ser possível ver todos os Pokémons.


