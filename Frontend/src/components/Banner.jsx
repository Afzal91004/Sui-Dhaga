import React from 'react'
import './Banner.css'
import img1 from '../assets/img.jpeg'
import img2 from '../assets/img1.jpeg'

const img = [
  "https://static3.azafashions.com/tr:w-1500/uploads/banner_templates/masaba-top-0819602001721982955.jpg", 
  img1, img2]

function Banner() {

  let box = document.querySelector("img"); 

  const btnpressprev= () =>{
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
  }
  const btnpressnext = () =>{
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
  }
  return (
    <>
      <div className="flex  h-[70vh] overflow-hidden relative items-center p-2 mb-5">
       <button className='pre-btn' onClick={()=>btnpressprev()}><p>&lt;</p></button>

        <button className='next-btn' onClick={()=>btnpressnext()}><p>&gt;</p></button>

      {img.map(im=><img src={im}  />)}

    </div>
    </>
  )
}

export default Banner
