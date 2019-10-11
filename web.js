const os = require('os');

function fetchIp() {
	const interfaces = os.networkInterfaces();
	const text = Object.entries(interfaces).map(([interface, addresses]) => (
		`${interface.padEnd(10)}${addresses.filter(a => a.family === 'IPv4').map(a => a.address).join(' ')}`
	)).join('\n');
	document.getElementById('interfaceList').innerText = text;
}

function onReady() {
	setInterval(fetchIp, 500);
}

window.addEventListener('load', onReady, false);
