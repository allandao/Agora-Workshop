let handleFail = function (err) {
	console.log(err);
}

document.getElementById("start").onclick = function () {
	let client = AgoraRTC.createClient({
		mode: 'live',
		codec: 'h264', // Web encryption codec, vp8 (fairly advanced version, not supported by all version)
	});

	let appID = ""; // From Agora
	let channelName = document.getElementById("channelName").value;
	client.init(appID, () => );
};
