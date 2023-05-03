# Painel de mídia social com alternador de tema

## Índice

- [Visão geral](#visão-geral)
  - [Descrição](#descrição)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído](#construído-com)
  - [Aprendizado](#aprendizado)
  - [Referências](#referências)
  - [Author](#author)
  - [Lincença](#licenca)
  
## Visão geral

### Descrição

Esta é uma solução  [Painel de mídia social](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H) Frontend Mentor que ajudam você a melhorar suas habilidades de codificação criando projetos realistas.</br>
O mesmo consiste em uma visão ampla e organizada de todas as interações nas redes sociais. O objetivo de realizar este projeto foi de praticar metodologia BEM, arquitetura css Atomic Design e lógica de programação.


### O desafio

- [x] Layout ideal para o site, dependendo do tamanho da tela do dispositivo
- [x] Estados de foco para todos os elementos interativos 
- [x] Alternar tema de cores na página

### Captura de tela

![](/screenshot-desktop.PNG) 
![](/screenshot-mobile.PNG)


## links

- [Deploy](https://edilanesilva.github.io/Painel-midia-social/)

## Meu processo

### Construído com

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Grid
-   desktop-first workflow

### Aprendizado

>> A função getStyle recupera o estilo computado de um determinado elemento para uma propriedade CSS específica.  Leva dois parâmetros: 
>> element: Este parâmetro representa o elemento para o qual você deseja obter o estilo computado.  Pode ser qualquer elemento DOM válido. 

>> style: este parâmetro especifica a propriedade CSS para a qual você deseja recuperar o valor de estilo computado. 

>> window.getComputedStyle() para obter o estilo computado do elemento.  Este método retorna um objeto que contém os valores calculados de todas as propriedades CSS aplicadas ao elemento, após a aplicação de quaisquer folhas de estilo, estilos embutidos e estilos herdados. 

>> getPropertyValue() método é então usado no objeto de estilo computado para recuperar o valor da propriedade CSS especificada. 

```js
const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style)

```

### Referências

  - [Atomic Design](https://medium.com/@andersonbarbozadasilva/atomic-design-na-constru%C3%A7%C3%A3o-do-design-system-49d401a39a1f)

  - [Metodologia BEM](https://desenvolvimentoparaweb.com/css/bem/)
  
  -  [Rocketseat](https://www.youtube.com/watch?v=BvhYm0BOLvA)

## Author

>Edilane Silva     
<a href="https://www.linkedin.com/in/edilane-silva/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
  </a>

## Lincença

 Esse repositório está licenciado pela MIT LICENSE. Para mais informações detalhadas, leia o arquivo LICENSE contido nesse repositório.

