export function renderContactSections() {

	const contactSection = `
	<section class="contact-section" id="contact">
		<h2>Contact Us</h2>
		<div class="contact-info">
			<p>Address: 123 Main St, City</p>
			<p>Phone: (555) 123-4567</p>
			<p>Email: info@deliciousdiner.com</p>
			<p>Opening Hours:</p>
			<p>Monday - Friday: 11:00 AM - 10:00 PM</p>
			<p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
		</div>
	</section>
  `;

	const contactSections = contactSection;

	document.getElementById('content').innerHTML = contactSections;
}