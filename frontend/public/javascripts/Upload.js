const photoFile = document.getElementById('photo-file')
const icon = document.getElementById('download-icon')

// Seleção e Preview
document.getElementById('select-image')
.onclick = function() {
   photoFile.click()
   if (icon.style.display === 'flex') {
   icon.style.display = 'none';
   } else {
    icon.style.display = 'flex';
   }
}

window.addEventListener('DOMContentLoaded', () =>{
    photoFile.addEventListener('change', () => {
        let file = photoFile.files.item(0)

           // Leitura
           let reader = new FileReader()
           reader.readAsDataURL(file)
           reader.onload = function(event) {
               let image = document.getElementById('photo-preview')
               image.src = event.target.result
               
           }
       })
   })

   