import React from 'react'
import logo from "../assets/images/logo.svg"
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pin from "../assets/images/icon-pinterest.svg";
const Footer = () => {
  return (
    
      <footer class="bg-veryDarkBlue w-screen">
      
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 text-white space-y-8 md:flex-row md:space-y-0"
      >
        
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          
          <div>
            <img src={logo} class="h-6" alt="" />
          </div>
          <div class="flex justify-center space-x-4 mb-4">
            <a href="#">
              <img src={facebook} alt="" class="h-4" />
            </a>
            <a href="#">
              <img src={youtube} alt="" class="h-4" />
            </a>
            <a href="#">
              <img src={twitter} alt="" class="h-4" />
            </a>
            <a href="#">
              <img src={pin} alt="" class="h-4" />
            </a>
            <a href="#">
              <img src={instagram} alt="" class="h-4" />
            </a>
          </div>
        </div>
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none bg-white text-darkGrayishBlue" 
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
