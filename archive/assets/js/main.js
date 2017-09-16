$(document).ready(function(){

$('.col1of5 .content').click(function(){
  moon[0].mesh.material.uniforms.texture.value = THREE.ImageUtils.loadTexture("img2.png");
  moon[0].mesh.material.uniforms.texture.needsUpdate = true;
});

});
