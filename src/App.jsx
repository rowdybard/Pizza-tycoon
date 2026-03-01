// Complete Pizza Tycoon Game Code

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [money, setMoney] = useState(100);
    const [pizzaCount, setPizzaCount] = useState(0);
    const [upgrades, setUpgrades] = useState({
        oven: false,
        manager: false
    });

    // Save system
    useEffect(() => {
        const savedGame = localStorage.getItem('pizzaTycoonSave');
        if (savedGame) {
            const gameData = JSON.parse(savedGame);
            setMoney(gameData.money);
            setPizzaCount(gameData.pizzaCount);
            setUpgrades(gameData.upgrades);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('pizzaTycoonSave', JSON.stringify({ money, pizzaCount, upgrades }));
    }, [money, pizzaCount, upgrades]);

    const makePizza = () => {
        setPizzaCount(pizzaCount + 1);
        setMoney(money + 5);
    };

    const buyUpgrade = (type) => {
        if (type === 'oven' && money >= 50) {
            setMoney(money - 50);
            setUpgrades({ ...upgrades, oven: true });
        }
        if (type === 'manager' && money >= 100) {
            setMoney(money - 100);
            setUpgrades({ ...upgrades, manager: true });
        }
    };

    return (
        <div className="App">
            <h1>Pizza Tycoon Game</h1>
            <h2>Money: ${money}</h2>
            <h2>Pizzas Made: {pizzaCount}</h2>
            <button onClick={makePizza}>Make Pizza</button>
            <div>
                <h3>Upgrades</h3>
                <button onClick={() => buyUpgrade('oven')} disabled={upgrades.oven}>Buy Oven (Cost: $50)</button>
                <button onClick={() => buyUpgrade('manager')} disabled={upgrades.manager}>Hire Manager (Cost: $100)</button>
            </div>
        </div>
    );
}

export default App;
