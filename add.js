let myform = document.querySelector('#myform')
let email = document.querySelector('.input2')
let nametext = document.querySelector('.nametext')
var firstname = document.querySelector('.input_name')
let submit = document.querySelector('.submit')
let team = document.querySelector('.select-team')

fetch('https://pcfy.redberryinternship.ge/api/teams')
.then(result => result.json())
.then(x => {
      
    for(var j = 0; j < x.data.length; j++){
      console.log(x.data[j].name)
      let tmp = `
        <option value="${x.data[j].name}">${x.data[j].name}</option>
      `
      team.innerHTML += tmp
    }
})

var position = document.querySelector('.select-team2')
fetch('https://pcfy.redberryinternship.ge/api/positions')
.then(result => result.json())
.then(x => {
      
    for(var j = 0; j < x.data.length; j++){
      
      let tmp = `
        <option value="${x.data[j].name}">${x.data[j].name}</option>
      `
      position.innerHTML += tmp
    }
})

let g = /[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]/
myform.addEventListener('submit', function(e){     
  for(var each of firstname.value){     
    if (!(each.match(g))){
      nametext.innerHTML = 'მხოლოდ ქართული ასოები'
      firstname.style.borderColor = 'rgba(229, 47, 47, 1)'
      firstname.style.borderWidth = '1.8px'
      nametext.style.color = 'rgba(229, 47, 47, 1)'
      e.preventDefault();
    }      
    else if(firstname.value.length < 2 ){
      nametext.innerHTML = 'მინიმუმ ორი სიმბოლო'
      nametext.style.color = 'rgba(229, 47, 47, 1)'
      firstname.style.borderColor = 'rgba(229, 47, 47, 1)'
      firstname.style.borderWidth = '1.8px'
      e.preventDefault();
    }   
    else if(firstname.value.length == 0){
      console.log('asfas')
      nametext.innerHTML = 'შეავსეთ ველი'
      nametext.style.color = 'rgba(229, 47, 47, 1)'
      firstname.style.borderColor = 'rgba(229, 47, 47, 1)'
      firstname.style.borderWidth = '1.8px'
      e.preventDefault();
    }
    else{
      nametext.style.color = 'rgba(138, 192, 226, 1)'
      firstname.style.borderColor = 'rgba(138, 192, 226, 1)'
      firstname.style.borderWidth = '1px'
      nametext.innerHTML = 'მინიმუმ ორი სიმბოლო, ქართული ასოები'
    }  
  }
})

let lastname = document.querySelector('.input_lastname')
let lastnametext = document.querySelector('.lastnametext')

myform.addEventListener('submit', function(e){     
  for(var each of lastname.value){     
    if (!(each.match(g))){
      lastnametext.innerHTML = 'მხოლოდ ქართული ასოები'
      lastname.style.borderColor = 'rgba(229, 47, 47, 1)'
      lastname.style.borderWidth = '1.8px'
      lastnametext.style.color = 'rgba(229, 47, 47, 1)'
      e.preventDefault();
    }      
    else if(lastname.value.length < 2){
      lastnametext.innerHTML = 'მინიმუმ ორი სიმბოლო'
      lastnametext.style.color = 'rgba(229, 47, 47, 1)'
      lastname.style.borderColor = 'rgba(229, 47, 47, 1)'
      lastname.style.borderWidth = '1.8px'
      e.preventDefault();
    }
    else if(lastname.value.length == 0){
      lastnametext.innerHTML = 'შეავსეთ ველი'
      lastnametext.style.color = 'rgba(229, 47, 47, 1)'
      lastname.style.borderColor = 'rgba(229, 47, 47, 1)'
      lastname.style.borderWidth = '1.8px'
      e.preventDefault();
    }
    else{
      lastnametext.style.color = 'rgba(138, 192, 226, 1)'
      lastname.style.borderColor = 'rgba(138, 192, 226, 1)'
      lastname.style.borderWidth = '1px'
      lastnametext.innerHTML = 'მინიმუმ ორი სიმბოლო, ქართული ასოები'
    }    
  }
})
myform.addEventListener("submit", function(e) { 
    if  (email.value.slice(email.value.length-12) != "@redberry.ge"){    
        email.style.borderColor = 'rgba(229, 47, 47, 1)'
        email.style.borderWidth = '1.8px'
        e.preventDefault();
          }
    else{
      email.style.borderColor = 'rgba(138, 192, 226, 1)'
    }
})

let phonenumber = document.querySelector('.phonenumber')

myform.addEventListener("submit", function(e) { 
  let number = phonenumber.value.replace(' ', '')
  if(number.substring(0, 5) != '+9955'){
    
    phonenumber.style.borderColor = 'rgba(229, 47, 47, 1)'
    phonenumber.style.borderWidth = '1.8px'
    e.preventDefault();

  }
  else{
    phonenumber.style.borderColor = 'rgba(138, 192, 226, 1)'
  }
  
})




