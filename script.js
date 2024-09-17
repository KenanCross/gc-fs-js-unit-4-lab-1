function main() {
	const grow = document.getElementById("grow-me");
	const hide = document.getElementById("hide-me");
	const show = document.getElementById("show-me");
	const shrink = document.getElementById("shrink-me");
	const lists = document.querySelectorAll("li");
	const link = document.querySelector(".link");

	grow.classList.add("big");
	shrink.classList.remove("big");
	lists.forEach(function (element) {
		console.log(element.textContent);
	});
	link.href = "https://www.example.com";
	link.textContent = "somewhere";

	hide.style.display = "none";
	show.style.display = "block";
}
