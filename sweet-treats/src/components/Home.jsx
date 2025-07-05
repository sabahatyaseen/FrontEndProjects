// src/components/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SweetTreats Bakery</h1>
        <p>Delicious, handcrafted sweets made with love and the finest ingredients.</p>
        <Link to="/menu">
           <button>Explore Our Menu</button>
       </Link>

      </section>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          At SweetTreats, we bake with passion and tradition. Every bite is a taste of home.
          Whether you're celebrating a birthday or just treating yourself, we've got something perfect.
        </p>
      </section>

      {/* Best Sellers Section */}
      <section className="bestsellers">
        <h2>Customer Favorites</h2>
        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587" alt="Cupcake" />
            <h3>Chocolate Cupcakes</h3>
            <p>Rich, moist, and topped with creamy frosting.</p>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNG5kdcQ1CFv9Q0NS4ejgzkBcdcOqD4TAJiA&s" alt="Cookies" />
            <h3>Butter Cookies</h3>
            <p>Crispy edges with a soft, buttery center.</p>
          </div>
          <div className="card">
            <img src="https://thescranline.com/wp-content/uploads/2025/02/VANILLA-CAKE-25-S-01.jpg" alt="Cake" />
            <h3>Classic Vanilla Cake</h3>
            <p>Perfect for any celebration or sweet moment.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
