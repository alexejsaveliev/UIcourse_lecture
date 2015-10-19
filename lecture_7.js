
function getDomElements(elemName, parent) {
	if (parent == undefined) {parent = document.body};
	elemName = elemName.toUpperCase();
	var resultArr = [];
	var childNodes = parent.childNodes;

	getChildNodes(childNodes);

	function getChildNodes(nodes) {
		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i].nodeType==3) {continue};

			if(nodes[i].tagName===elemName) {
				resultArr.push(nodes[i]);	
			} 
			if(nodes[i].hasChildNodes()) {
				getChildNodes(nodes[i].childNodes);
			}
		};
	}
	return resultArr;
}
