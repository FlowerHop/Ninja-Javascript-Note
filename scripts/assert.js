function assert (value, descript) {
  var ul = document.getElementById ('results');
  if (!ul) {
  	ul = document.createElement ('ul');
  	document.getElementsByTagName ('body')[0].appendChild (ul);
  	ul.setAttribute ('id', 'results');
  }

  var li = document.createElement ('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild (document.createTextNode (descript));
  ul.appendChild (li);
};