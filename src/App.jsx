import React from 'react';

class PizzaTycoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 100,  // Starting money
      pizzasSold: 0,
      pizzaPrice: 10,
      ingredients: { cheese: 10, tomato: 10, pepperoni: 10 },
      customers: 0,
    };
  }

  sellPizza = () => {
    if (this.state.money >= this.state.pizzaPrice && this.state.ingredients.cheese >= 1 && this.state.ingredients.tomato >= 1) {
      this.setState((prevState) => ({
        money: prevState.money + prevState.pizzaPrice,
        pizzasSold: prevState.pizzasSold + 1,
        ingredients: {
          ...prevState.ingredients,
          cheese: prevState.ingredients.cheese - 1,
          tomato: prevState.ingredients.tomato - 1,
        },
        customers: prevState.customers + 1,
      }));
    } else {
      alert('Not enough resources to sell a pizza!');
    }
  };

  buyIngredients = (ingredient) => {
    const cost = 5;  // Cost per ingredient
    if (this.state.money >= cost) {
      this.setState((prevState) => ({
        money: prevState.money - cost,
        ingredients: {
          ...prevState.ingredients,
          [ingredient]: prevState.ingredients[ingredient] + 1,
        },
      }));
    } else {
      alert('Not enough money to buy ingredients!');
    }
  };

  render() {
    return (
      <div>
        <h1>Pizza Tycoon Game</h1>
        <h2>Money: ${this.state.money}</h2>
        <h2>Pizzas Sold: {this.state.pizzasSold}</h2>
        <h2>Ingredients:</h2>
        <ul>
          <li>Cheese: {this.state.ingredients.cheese}</li>
          <li>Tomato: {this.state.ingredients.tomato}</li>
          <li>Pepperoni: {this.state.ingredients.pepperoni}</li>
        </ul>
        <button onClick={this.sellPizza}>Sell Pizza</button>
        <h2>Buy Ingredients</h2>
        <button onClick={() => this.buyIngredients('cheese')}>Buy Cheese</button>
        <button onClick={() => this.buyIngredients('tomato')}>Buy Tomato</button>
        <button onClick={() => this.buyIngredients('pepperoni')}>Buy Pepperoni</button>
      </div>
    );
  }
}

export default PizzaTycoon;