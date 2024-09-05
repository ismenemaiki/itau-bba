# itau-bba

Desafio técnico para Itaú BBA

Nivelamento de conhecimento e requisitos:

Aplicação simples de listagem e detalhamento de item com APIs REST;

Versão do Angular utilizado: 13

Versão do Node.js: 18.18.0

Versão do NPM: 10.4.0

Layout proposto: https://projects.invisionapp.com/share/P510TQNYQ3TJ#/screens/450456419

Endpoint de listagem: https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste

Endpoint do item detalhado: https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste/:id

Hospedagem/ deploy: vercel? ou https://www.netlify.com/

Detalhe dos itens desenvolvidos:

1. Componentes (todos com prefixo it de itau):

- Buscador de cep (it-cep)
- header (it-header)
- tabela dinamica (it-table)
- componente de renderização principal (it-main-components)
- home (it-home)
- listagem de polos (it-unit)
- detalhamento do polo (it-unit-detail)

2. Pipes:

- máscara nos inputs (ngx-mask)
- valor monetário (currency pipe)
- tradutor (i18n)

3. Interceptors:

- interceptador de erros de requisições (it-error-handler)
- loader das requisições (it-loader) não fiz

4. Serviços:

- serviço do Felipe Deschamps (cep.service)
- serviço de listagem dos itens da Antlia (api.service)
- serviço de alteração de i18n [Precisei fazer um PubSub para alterar onde queria] (language.service)

5. Configuração:

- arquivo para configuração de tabela dinamicamente [nao consegui traduzir por conta do tempo] (data-table.config)
