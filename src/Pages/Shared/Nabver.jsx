import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaCross, FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMailBulk, FaMap, FaPhone, FaSearch, FaShoppingCart, FaStop, FaTwitter, FaWindowClose } from "react-icons/fa";
import logo from "../../assets/logo.png";

// CSS styles for the modals
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    width: '700px',
    height: '500px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: 'none',
    margin: 'auto',
    padding: '20px',
    zIndex: 10000,
  },
};

export default function Navber() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // Function to open the login modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Function to close the login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Function to open the sign-up modal
  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  // Function to close the sign-up modal
  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <div>
      <div className="lg:flex items-center justify-around text-white bg-[#FF3811]">
        <div className="flex gap-2 lg:gap-5 font-bold text-2xl p-6">
          <h1>FAQ | </h1>
          <h1>Help Desk |</h1>
          <button onClick={openLoginModal}>Login</button>
        </div>

        <div className="flex gap-8 p-4">
          <FaFacebook size={25} />
          <FaTwitter size={25} />
          <FaGoogle size={25} />
          <FaInstagram size={25} />
          <FaLinkedin size={25} />

          <p> <FaShoppingCart size={25} /> </p>

          <FaSearch size={25} />
        </div>
      </div>

      <div className="lg:flex items-center justify-around p-4  shadow-2xl">
        <div className="flex items-center gap-2">
          <div>
            <img className="w-20 rounded-sm" src={logo} alt="" />
          </div>
          <div>
            <p className="uppercase text-4xl font-bold">Car <span className="text-red-600">Doctor</span></p>
            <p className="text-sm text-base-500 font-bold">Car repair & Servicing</p>
          </div>
        </div>

        <div className="lg:flex lg:gap-5">
          <div className="space-y-2">
            <FaMailBulk size={30} />
            <p className="text-sm lg:text-2xl font-bold">Mail Us Today</p>
            <p className="font-bold text-slate-400">cardoctor@gmail.com</p>
          </div>

          <div className="space-y-2">
            <FaMap size={30} />
            <p className="text-sm lg:text-2xl font-bold">Company Location</p>
            <p className="font-bold text-slate-400">Melbourne, Australia.</p>
          </div>

          <div className="space-y-2">
            <FaPhone size={30} />
            <p className="text-sm lg:text-2xl font-bold">018-49545637</p>
            <p className="font-bold text-slate-400">call us for more details</p>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="block text-base-500">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-base-500">Password</label>
              <input type="password" id="password" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <button type="submit" className="bg-[#FF3811] text-white rounded p-2 w-full text-center">Login</button>
          </form>
          <p className="text-base-500 mt-4">
            Don't have an account?{' '}
            <a href="javascript:void(0)" onClick={openSignUpModal} className='text-red-500'>Sign up</a>
          </p>
          
          <button onClick={closeLoginModal} className="btn btn-circle btn-outline" style={{ position: 'absolute', top: '4px', right: '4px', zIndex: '10001' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Modal>

      {/* Sign Up Modal */}
      <Modal
        isOpen={isSignUpModalOpen}
        onRequestClose={closeSignUpModal}
        style={customStyles}
        contentLabel="Sign Up Modal"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="block text-base-500">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-base-500">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-base-500">Password</label>
              <input type="password" id="password" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="block text-base-500">Confirm Password</label>
              <input type="password" id="confirmPassword" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <button type="submit" className="bg-[#FF3811] text-white rounded p-2 w-full text-center">Sign Up</button>
          </form>
          <p className="text-base-500 mt-4">
            Already have an account?{' '}
            <a href="javascript:void(0)" onClick={openLoginModal} className='text-red-500'>Sign In</a>
          </p>
          <button onClick={closeSignUpModal} className="btn btn-circle btn-outline" style={{ position: 'absolute', top: '4px', right: '4px', zIndex: '10001' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Modal>
    </div>
  );
}