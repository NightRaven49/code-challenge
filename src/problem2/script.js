function confirm() {
	alert("Form submitted! Do double check your wallet balance to ensure that it has been updated.");
}

function checkAddress(text) {
	let address = text.value;
	let isTrue = true;
	let addErr = document.getElementById("addressErr");
	while (addErr.hasChildNodes()) {
		addErr.removeChild(addErr.lastChild);
	}
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        isTrue = false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    } else {
        isTrue = isChecksumAddress(address);
    }
	if (address.length == 0 || isTrue) {
		addErr.appendChild(document.createElement("br"));
	} else {
		let errText = document.createTextNode("This address does not appear to be valid.");
		addErr.appendChild(errText);
	}
}
function isChecksumAddress(address) {
    address = address.replace('0x','');
    var addressHash = sha3(address.toLowerCase());
    for (var i = 0; i < 40; i++ ) {
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
	}
	return true;
}

function checkAmount(amt) {
	let valueToTrf = Number(amt.value);
	let amtErr = document.getElementById("amtErr");
	while (amtErr.hasChildNodes()) {
		amtErr.removeChild(amtErr.lastChild);
	}
	if (amt.value.length == 0 || valueToTrf > 0) {
		amtErr.appendChild(document.createElement("br"));
	} else if (isNaN(valueToTrf)) {
		let errText = document.createTextNode("Amount specified must be a number.");
		amtErr.appendChild(errText);
	} else {
		let errText = document.createTextNode("Amount specified must be greater than 0.");
		amtErr.appendChild(errText);
	}
}

function checkOTP(otp) {
	let otpValue = Number(otp.value);
	let otpErr = document.getElementById("otpErr");
	while (otpErr.hasChildNodes()) {
		otpErr.removeChild(otpErr.lastChild);
	}
	if (otp.value.length > 6 && !isNaN(otpValue)) {
		let errText = document.createTextNode("Too many input digits.");
		otpErr.appendChild(errText);
	} else if (otp.value.length == 0 || otpValue >= 0) {
		otpErr.appendChild(document.createElement("br"));
	} else if (isNaN(otpValue)) {
		let errText = document.createTextNode("OTP must be a number.");
		otpErr.appendChild(errText);
	} else { }
}