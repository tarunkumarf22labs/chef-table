import React from "react";

function Footer() {
  return (
    <footer className="p-8 text-white bg-black">
      <div className="text-center footer-logo ">
        <div className="font-bold">
          <span>Chef Table</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 justify-items-center sm:grid-cols-2 md:grid-cols-4 ">
        <div className="">
          <div className="text-left">
            <h3>
              7983 North Carson Dr. <br /> Brooklyn, NY 11233
            </h3>
            <div className="">
              <ul className="flex justify-center">
                <li className="p-3"> 😃 </li>
                <li className="p-3"> 😃 </li>
                <li className="p-3"> 😃 </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="pb-3 text">
            <h2>About</h2>
          </div>
          <ul>
            <li> How it works </li>
            <li>our story</li>
            <li>our chefs</li>
          </ul>
        </div>
        <div className="">
          <div className="pb-3 text">
            <h2>CTYT</h2>
          </div>
          <ul>
            <li> Terms and Conditions </li>
            <li> Privacy Policy</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="">
          <div className="pb-3 text">
            <h2>Contact us</h2>
          </div>
          <ul>
            <li> support@chef2table.com </li>
            <li> +21 3421 2212 1321</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
