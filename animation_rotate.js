function createSvg(root, name, attrs){
  var doc = root.ownerDocument;
  var element = doc.createElementNS("http://www.w3.org/2000/svg",name);
  for(var attr in attrs){
    element.setAttributeNS(null, attr, attrs[attr]);
  }
  return root.appendChild(element);
}

var ellipse_elem = {cx:20,cy:50,rx:20,ry:10,fill:'#55aadd',stroke:'#ff3300','stroke-dasharray':5,'stroke-width':2,'fill-opacity':0.8}
$("#svgarea1 svg").append(createSvg(document.getElementById('svgarea1'), 'ellipse', ellipse_elem))
$("#svgarea2 svg").append(createSvg(document.getElementById('svgarea2'), 'ellipse', ellipse_elem))
$("#svgarea3 svg").append(createSvg(document.getElementById('svgarea3'), 'ellipse', ellipse_elem))
$("#svgarea4 svg").append(createSvg(document.getElementById('svgarea4'), 'ellipse', ellipse_elem))
