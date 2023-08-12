export function renderMenuSections() {

	const menuItems = [
    { name: "Appetizer 1", price: "$8.99", description: "Delicious appetizer with fresh ingredients." },
    { name: "Appetizer 2", price: "$7.49", description: "A unique blend of flavors to tantalize your taste buds." },
    { name: "Soup of the Day", price: "$6.99", description: "A hearty and flavorful soup to warm your soul." },
    { name: "Salad Special", price: "$9.99", description: "Fresh and vibrant salad with a variety of toppings." },
    { name: "Seafood Platter", price: "$21.99", description: "An assortment of the freshest seafood, grilled to perfection." },
    { name: "Vegetarian Delight", price: "$15.99", description: "A flavorful blend of seasonal vegetables and herbs." },
    { name: "Pasta Primavera", price: "$12.49", description: "Al dente pasta served with a variety of sautéed vegetables." },
    { name: "BBQ Ribs", price: "$18.99", description: "Tender and juicy ribs smothered in our signature barbecue sauce." },
    { name: "Steak Au Poivre", price: "$24.99", description: "A classic French steak dish with a rich pepper sauce." },
    { name: "Sushi Sampler", price: "$19.99", description: "An assortment of premium sushi rolls and sashimi." },
    { name: "Chocolate Fondue", price: "$9.99", description: "Decadent chocolate fondue served with fresh fruit and treats." },
    { name: "Fruit Parfait", price: "$7.99", description: "Layers of yogurt, granola, and fresh fruits for a healthy dessert." },
    { name: "Classic Tiramisu", price: "$8.49", description: "A luscious Italian dessert made with coffee-soaked ladyfingers." },
    { name: "Cheese Platter", price: "$13.99", description: "A selection of artisanal cheeses paired with fruits and crackers." },
  ];

	let menuSection = `
	<section class="menu-section" id="menu">
		<h2>Our Menu</h2>`;
	menuItems.forEach(item => {
		menuSection += `
				<div class="menu-item">
					<div class="item-info">
						<h3>${item.name}</h3>
						<p>${item.description}</p>
					</div>
					<span>${item.price}</span>
				</div>`;
	});

	menuSection += `</section>`;

	const menuSections = menuSection;

	document.getElementById('content').innerHTML = menuSections;
}