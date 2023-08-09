describe('home page', () => {
    beforeEach(() => {
      cy.visit('https://forhemer.github.io/React-Todo-List/')
    })
    context('тестовое задание', () => {
      it('добавить 3 элемента', () => {
        //
        cy.get('.input-text').type("Hallo");
        cy.get('.input-submit').click();
        cy.get('.input-text').type("wow");
        cy.get('.input-submit').click();
        cy.get('.input-text').type("noW");
        cy.get('.input-submit').click();
//Проверить что элемента действительно 3
        cy.get('span')
  .should('have.length', 3);
      
//Отметить элемент
        cy.get(':nth-child(2) > .TodoItem_checkbox__Tf0FQ').click();
            
           
//Проверить что стиль span изменился
        cy.get('span[style="font-style: italic; color: rgb(89, 89, 89); opacity: 0.5; text-decoration: line-through;"]')
  .should('have.text', 'wow');



//Удалить элемент
        cy.get('ul > :nth-child(2) > button').click();
//Проверить что элементов осталось 2
        cy.get('span')
  .should('have.length', 2);

        cy.get(':nth-child(2) > span');
  })
})
})
