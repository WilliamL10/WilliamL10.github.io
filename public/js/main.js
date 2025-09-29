// Switching Tabs
function setUpTabs () {
	document.querySelectorAll('.tab-button').forEach(button => {
		button.addEventListener('click', () => {
			// Get names for each tab
			const tabName = button.dataset.forTab;
			
			// Grab all buttons and contents
			const allButtons = document.querySelectorAll('.tab-button');
			const allContents = document.querySelectorAll('.project-content .tab-content');
			
			// Reset buttons and contents
			allButtons.forEach(btn => btn.classList.remove('active'));
			allContents.forEach(content => content.classList.remove('active'));
			
			// Activate clicked button
			button.classList.add('active');
			
			// Activate tab content inside .project-content
			const tabToActivate = document.querySelector(`.project-content .tab-content[data-tab="${tabName}"]`);
			
			tabToActivate.classList.add('active');
		});
	});
}

// Call function
document.addEventListener('DOMContentLoaded', () => {
	setUpTabs();
	
	// Automatically click the first tab button without hard-coding it in HTML
	document.querySelectorAll('.tabs').forEach(button => {
		button.querySelector('.tab-button').click();
	});
});