function encryptMessage(){  
	if(window.crypto.getRandomValues){
		if(document.getElementById("message").value != ""){
			var publicKeyString = "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
				"Version: GnuPG v1\n" +
				"\n" +
				"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\n" +
				"7005JriejAzEBEnx\n" +
				"=djMy\n" +
				"-----END PGP PUBLIC KEY BLOCK-----";

			var options = {
				data: document.getElementById("message").value,
				publicKeys: openpgp.key.readArmored(publicKeyString).keys
			};

			openpgp.encrypt(options).then(function(ciphertext){
				document.getElementById("message").value = ciphertext.data;
			});

			$("#btnEncrypt").attr("disabled", true);
			document.getElementById("btnEncrypt").title = "You may only encrypt once.";
			document.getElementById("btnEncrypt").removeEventListener("click", encryptMessage);
		}
	}
	else{
		window.alert("This browser does not support basic cryptography!");
	}
}

document.getElementById("btnEncrypt").addEventListener("click", encryptMessage);

