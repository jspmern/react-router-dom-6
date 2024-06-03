 import React from 'react'
 
 function Footer() {
   return (
<footer className="bg-dark text-white pt-4">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="col-md-4">
        <h5>Contact</h5>
        <ul className="list-unstyled">
          <li>Email: example@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main Street, Anytown, USA</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Follow Us</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Facebook</a></li>
          <li><a href="#" className="text-white">Twitter</a></li>
          <li><a href="#" className="text-white">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col text-center">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

   )
 }
 
 export default Footer
   

 
