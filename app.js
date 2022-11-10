let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


/*logic behind closing and opening navbars in mobile view*/
menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}
/* end of logic*/
/*start ofsearch bar */
let filterInput=document.getElementById("search-data");
filterInput.addEventListener('click',filterName)

function filterName(){
  const cl=document.getElementById("sales");
  cl.scrollIntoView({behavior:"smooth"})
}
filterInput.addEventListener('keyup',filterNames)

function filterNames(){
  const searchbox=document.getElementById("search-data").value.toUpperCase();
    const storeitems=document.getElementById("box-container")
  const product=document.querySelectorAll(".box")
  const pname=document.getElementsByTagName("h3")


    for(var i=0;i<pname.length;i++){
      let match=product[i].getElementsByTagName('h3')[0];

      if(match){
        let textvalue=match.textContent || match.innerHTML;

        if(textvalue.toUpperCase().indexOf(searchbox)>-1){
          product[i].style.display="";
        }else{
          product[i].style.display="none";
        }
      }
  }

}
/*end of search bar */