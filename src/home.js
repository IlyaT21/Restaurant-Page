import restaurantImage from "./img/restaurant.jpeg";

export function renderHomeSections() {

	const descriptionSection = `
	<section class="description-section">
		<h2>About Us</h2>
		<p>
			Welcome to Le Restaurant, where we serve mouthwatering dishes made from the finest ingredients. Our passion
			for food drives us to create unique culinary experiences for our guests.
		</p>
		<p>
			Join us for an unforgettable dining experience that will delight your taste buds and leave you craving for
			more.
		</p>
		<img src="${restaurantImage}" alt="Restauran Image">
	</section>
  `;

	const workingHoursSection = `
	<section class="working-hours">
		<h2>Working Hours</h2>
		<p>Monday - Friday: 11:00 AM - 10:00 PM</p>
		<p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
	</section>
  `;

	const homeSections = descriptionSection + workingHoursSection;

	document.getElementById('content').innerHTML = homeSections;
}