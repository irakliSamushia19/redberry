


document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    //remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // create thumbnail element
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
var laptop_brand = document.querySelector('.laptop_brand')
fetch('https://pcfy.redberryinternship.ge/api/teams')
.then(result => result.json())
.then(x => {     
  for(var i = 0; i < x.data.length; i++){
    let tmp = `
      <option value="${x.data[i]}">${x.data[i].name}</option>
    `
    laptop_brand.innerHTML += tmp
  }
})

let cpuname = document.querySelector('.cpu_name')
fetch('https://pcfy.redberryinternship.ge/api/cpus')
.then(result => result.json())
.then(x => {
      
    for(var j = 0; j < x.data.length; j++){
      let tmp = `
        <option value="${x.data[j].name}">${x.data[j].name}</option>
      `
      cpuname.innerHTML += tmp
    }
})
let myform = document.querySelector('#myform')
let laptopname = document.querySelector('.laptop_name2')
let btn = document.querySelector('.btn')
let valid = /[a-zA-Z0-9]/
let spec = /[!@#$%^&*()_=+]/

myform.addEventListener('submit', function(e){
    if(!(laptopname.value.match(valid))) {
      console.log('asdasda')
      e.preventDefault()
    }
    else if(!(laptopname.value.match(spec))){
      console.log('irakli')
      e.preventDefault()
    }
    
})

let cores = document.querySelector('.cpu_cores')

