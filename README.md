# form-CadEndereco
# laco-for 

* [introdoção](#introducao)
* [funcionalidades](#funcionalidades)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Autores](#autores)

## Introdução
Esse projeto consiste em uma pagina web de procura de endereço utilizando uma ferramenta de busca de C.E.P , onde ao ser digitado no campo, adiciona as informações automaticamente aos campos corretos.

## ViaCep
* [<code><img height="32" src="data:image/png;base64,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" alt="Css3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
O ViaCEP é uma API (Interface de Programação de Aplicações) brasileira que disponibiliza informações detalhadas sobre endereços a partir de seus CEPs (Códigos de Endereçamento Postal). Essa ferramenta gratuita e simples de usar tem se tornado indispensável para diversas aplicações que exigem a localização precisa de endereços, como:

- E-commerce: Calcular frete, validar endereços e otimizar a entrega;
- Sistemas de gestão: Cadastrar clientes, fornecedores e realizar entregas;
- Aplicativos de delivery: Localizar estabelecimentos e clientes;
- Mapas e geolocalização: Integrar dados de endereços em mapas;
E muito mais.

Como funciona?

1- Faça uma requisição: Envie uma requisição HTTP para a API ViaCEP, informando o CEP desejado.
2- Receba os dados: A API retorna um JSON com as informações do endereço, como logradouro, bairro, cidade estado e outros detalhes.
3- Utilize os dados: Integre os dados recebidos em sua aplicação para as finalidades desejadas.

Vantagens de utilizar o ViaCEP:

- Gratuito: Não há custos para utilizar a API.
- Simples: A documentação é clara e fácil de entender.
- Completo: Fornece informações detalhadas sobre os endereços.
- Confiável: A base de dados é constantemente atualizada.
- Versátil: Pode ser integrada a diversas linguagens de programação e plataformas.




## Funcionalidades


## Tecnologias Utilizadas
* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg" alt="Git"/></code>](https://git-scm.com/)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="Css3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
## Autores
* ``Aluno 2ºC:``Rafael Souza Mastellini