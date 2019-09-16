function addList() {
	var input = document.getElementById("my-input");
	var listNode = document.getElementById("listahan"),
	textNode = document.createTextNode(input.value),
	liNode = document.createElement("LI");
	liNode.appendChild(textNode);
	listNode.appendChild(liNode);
}

document.getElementById("add").addEventListener("click",addList);