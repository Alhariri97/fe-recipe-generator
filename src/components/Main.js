const Main = () => {
  return (
    <>
      <section>
        <h5>Choose your ingredients</h5>
        <ul class="main-ingredients">
          <li>
            <button name="tomatoes">Tomatoes</button>
          </li>
          <li>
            <button name="potatoes">Potatoes</button>
          </li>
          <li>
            <button name="broccoli">Broccoli</button>
          </li>
          <li>
            <button name="mushrooms">Mushrooms</button>
          </li>
          <li>
            <button name="cucumber">Cucumber</button>
          </li>
          <li>
            <button name="chicken">Chicken</button>
          </li>
          <li>
            <button name="eggs">Eggs</button>
          </li>
          <li>
            <button name="lamb">Lamb</button>
          </li>
          <li>
            <button name="kale">Kale</button>
          </li>
          <li>
            <button name="aubergine">Aubergine</button>
          </li>
          <li>
            <button name="rice">Rice</button>
          </li>
          <li>
            <button name="flour">Flour</button>
          </li>
        </ul>
      </section>
      <section>
        <h5>Choose your spices</h5>
        <ul class="main-ingredients">
          <li>
            <button name="salt">Salt</button>
          </li>
          <li>
            <button name="pepper">Pepper</button>
          </li>
          <li>
            <button name="oregano">Oregano</button>
          </li>
          <li>
            <button name="cinnamon">Cinnamon</button>
          </li>
          <li>
            <button name="turmeric">Turmeric</button>
          </li>
          <li>
            <button name="curry">Curry powder</button>
          </li>
          <li>
            <button name="sugar">Sugar</button>
          </li>
          <li>
            <button name="chinese">Chinese Five Spice</button>
          </li>
        </ul>
      </section>
      <section>
        <h5>What are you cooking with?</h5>
        <ul className="main-ingredients">
          <li>
            <button name="cooker">Cooker</button>
          </li>
          <li>
            <button name="oven">Oven</button>
          </li>
          <li>
            <button name="micro">Microwave</button>
          </li>
          <li>
            <button name="fry">Frying Pan</button>
          </li>
        </ul>
      </section>
      <section>
        <button>Make my meal!</button>
      </section>
      <section>
        <p>
          You're going to make Roast Chicken. You need to roast the chicken,
          potatoes and broccoli.
        </p>
      </section>
    </>
  );
};

export default Main;
