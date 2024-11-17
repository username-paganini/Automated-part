describe('Carrot Shop Test', () => {
  
  // Перед каждым тестом открываем сайт и устанавливаем размер окна
  beforeEach(() => {
    cy.viewport(941, 806);
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
  });

  it('Поиск и добавление товаров в корзину', () => {
    // Поиск поля ввода и ввод ключевого слова "ro"
    cy.get('.search-keyword').click().type('ro');
    
    // Ждем, пока отобразятся результаты поиска
    cy.wait(1000);

    // Увеличиваем количество третьего продукта до 4 единиц
    cy.get('.product:nth-child(3) .increment').click().click().click().click();
  // Ждем, пока отобразятся результаты поиска
    cy.wait(1000);
    // Увеличиваем количество четвертого продукта до 3 единиц (2 клика + двойной клик)
    cy.get('.product:nth-child(4) .increment').dblclick();

    // Добавляем третий и четвертый продукт в корзину
    cy.get('.product:nth-child(3) button').click();
      // Ждем, пока отобразятся результаты поиска
    cy.wait(1000);
    cy.get('.product:nth-child(4) button').click();
    cy.wait(1000);
    // Открываем корзину
    cy.get('.cart-icon > img').click();

    // Ждем, пока корзина откроется
    cy.wait(500);
     // Ждем, пока отобразятся результаты поиска
    cy.wait(1000);

    // Удаляем первый элемент из корзины
    cy.contains('×').click();
  });
});