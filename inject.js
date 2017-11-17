sc = document.createElement('script');
sc.type = 'text/javascript';
sc.src = 'https://cdn.rawgit.com/jibe-b/trait-ontology-widget/develop/cropOntologyWidget.js';

ln = document.createElement('link');
ln.rel = 'stylesheet';
ln.href = 'https://cdn.rawgit.com/jibe-b/trait-ontology-widget/develop/cropOntologyWidget.min.css';

document.head.append(sc);
document.head.append(ln);

dv = document.createElement('div');
dv.id = 'trait-ontology-widget';
dv.style.position = 'absolute';
dv.style.top = '100px';
dv.style.left = '200px'

document.body.append(dv);

sc2 = document.createElement('script');
sc2.type = 'text/javascript';
sc2.innerText = 'var widget = new CropOntologyWidget("#trait-ontology-widget",{"breedingAPIEndpoint":"https://urgi.versailles.inra.fr/ws/webresources/brapi/v1/"});';
window.setTimeout(function(){
document.body.append(sc2);
}, 2000);
