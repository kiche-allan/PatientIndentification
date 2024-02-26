import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaPencilAlt } from 'react-icons/fa';

function About() {
  return (
    <>
      <div className='mt-60px'>
        <div className="mockup-window border bg-base-300 mt-8 mx-4">
          <div className="hero min-h-fit bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-screen">
                <h1 className="text-5xl font-bold text-warning">Why Us</h1>
                <p className="py-6 md:text-xl sm:text-xl">MediTrack is a comprehensive health record keeping system designed exclusively for medical professionals. Our easy-to-use platform provides you with all the tools you need to access and manage your patients' health records with ease</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mision and vision */}
      <div className='mt-60px'>
        <div className="mockup-window border bg-base-300 mt-8 mx-4">
          <div className="hero min-h-fit bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-screen">
                <h1 className="text-5xl font-bold text-warning">Our Mission</h1>
                <p className="py-6 md:text-xl sm:text-xl">At MediTrack, we are committed to ensuring the confidentiality and security of patient information. Our platform uses the latest encryption technology to keep all data safe and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-60px'>
        <div className="mockup-window border bg-base-300 mt-8 mx-4">
          <div className="hero min-h-fit bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-screen">
                <h1 className="text-5xl font-bold text-warning">Our Vision</h1>
                <p className="py-6 md:text-xl sm:text-xl">At MediTrack, our vision is to empower medical professionals with the tools they need to provide the best possible care to their patients. We believe that by streamlining the process of managing patient records, we can help medical professionals focus on what matters most - their patients' health and well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-60px'>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <span className="footer-title">Contacts</span>
            <a className="link link-hover">Location: Kenya</a>
            <a className="link link-hover">P.O.BOX:01-00100 </a>
            <a className="link link-hover">Phone number: 0712000000</a>
          </div>
          <div>
            <span className="footer-title">Links</span>
            <a className="link link-hover" href='/'>Home</a>
            <a className="link link-hover" href='/register'>Register</a>
            <a className="link link-hover" href='/login'>Login</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default About