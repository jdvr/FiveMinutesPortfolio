$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage'],
				menu: '#menu',
				sectionsColor: ['#59ADEE', '#FFFFFF', '#7E8F7C'],
				navigation: true,
				slidesNavigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Home', 'About', 'Contact'],
				autoScrolling:false,
				scrollOverflow: true,
			});
		});