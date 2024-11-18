import React from 'react'
import { Link } from 'react-router-dom'
import khaltiLogo from '../../assets/khalti.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer flex flex-col bg-purple-950 p-16 text-white justify-center">
        {/* row1 */}
        <div className="row1 flex justify-center gap-[5rem] flex-wrap ml-24 mr-24">
            <div className="item1 flex flex-col">
                <h2 className='font-bold mb-3'>COMPANY</h2>
                < Link to="/about">Our Story</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/support">Help & Support</Link>
                <Link to="/careers">Opportunities</Link>
                < Link to="/Procurement">Procurement</Link>
            </div>

            <div className="item2 flex flex-col">
                <h2 className='font-bold mb-3'>CODE OF CONDUCT</h2>
                < Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/dispute-policy">Dispute Policy</Link>
                <Link to="/term">Terms & Conditions</Link>
                <Link to="/inactive">Inactive/Dormant Account Policy</Link>
                < Link to="/flight-flare-rule">Flight Fare Rules and Regulations</Link>
            </div>

            <div className="item3 flex flex-col">
                <h2 className='font-bold mb-3'>KHALTI SUPPORT</h2>
                <p className='font-bold'>Chat Support</p>
                <p>Whatsapp: +977 9847474997</p>
                <p>Viber: +977 9813895290</p>
                <p>Email: support@khalti.com</p>
                <p className='font-bold mt-3'>Call Support: (6am-12am)</p>
                <p>Toll Free: 1810-21-02102 (Ncell)</p>
                <p>Toll Free: 1660-01-5-8888 (NTC)</p>
                <p>Landline: 01-5970017</p>
            </div>
            <div className="item4 flex flex-col">
                <h2 className='font-bold mb-3'>GRIEVANCE OFFICER</h2>
                <p>Name: Sabin K.C</p>
                <p>Call: +977 9801856415</p>
                <p>Email: support@khalti.com</p>
                <p>NRB Grievance Portal</p>
                <h2 className='font-bold mt-3 text-2xl'>JOIN KHALTI</h2>
                <button className='bg-yellow-500 rounded-3xl p-2 w-40 mt-2'>Login/Register</button>
            </div>
        {/* </div> */}
            {/* row2 */}
        {/* <div className="row2 flex mt-6 justify-center gap-[6rem]"> */}

             <div className="item5 flex flex-col">
                <h2 className='font-bold mb-3'>DEVELOPER</h2>
                < Link to="/PAYMENT-GATEWAY">Payment Gateway API</Link>
                <Link to="/khalti">Open Source</Link>
                <Link to="/billing-api">Billing Services API</Link>
                <Link to="/brand">Brand Guidelines</Link>
            </div>

            <div className="item6 flex flex-col">
                <h2 className='font-bold mb-3'>CHARGES & LIMITS</h2>
                < Link to="/charges">Khalti Service charge</Link>
                <Link to="/transaction-limit">Transaction Limit</Link>
            </div>

            <div className="item7 flex flex-col">
                <h2 className='font-bold mb-3'>KHALTI PASAL SUPPORT</h2>
               <p> Viber(Chat only): +977 8080808080 </p>
               <p> Email: pasalsupport@khalti.com </p>
               <p> Call: 01-5970017 </p>
                <Link to="/pasal">Khalti Pasal registration </Link>
            </div>

            <div className="item8 flex flex-col">
                <h2 className="font-bold mb-2">Connect With Us</h2>
                <img className='rounded-2xl h-14 w-30' src={khaltiLogo} alt="" />
                <div className="links flex justify-center gap-2 mt-3 text-2xl">
                <Link to="/facebook"><FaFacebook /></Link>
                <Link to="/insta"><FaInstagram /></Link>
                <Link to="/Linkedin"><FaLinkedin /></Link>
                <Link to="/youtube"><FaYoutube /></Link>

                </div>
            </div>
        </div>

        {/* row3 */}
        <div className="row3 flex justify-center mt-6">
            <p>© 2024 Khalti Private Limited. All Rights Reserved. ISO 27001: 2013 Certified Company</p>
           
        </div>
    </footer>
      
    </>
  )
}

export default Footer
