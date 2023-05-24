Feature: Add to cart functionality

scenario: Add to cart functionality

    Given Visit the Ecommerce Sites

    When Search the Product starts with "ca"

    Then Add the "carrot" in the cart

    Then proceed to checkout

    Then click on place order
    
    Then select country and check condition tab

    And click on proceed

    And validate the successful msg