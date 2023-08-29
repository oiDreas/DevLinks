function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img

  // substituir a image
  var img = document.querySelector("#profile img")
  // se tiver light mode, adicionar a imagem light
  

   if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/assets/Meu-avatar.png")
  } else {
  // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/assets/avatar-light.png")
   }




  var img = document.querySelector('img')
}
