import React from 'react';

const App = () => {
  return (
    <div className="bg-[#222831] h-auto sm:h-screen">
     
      
      <footer className=" dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 sm:text-3xl text-2xl font-semibold text-white uppercase dark:text-white">CleverBooks</h2>
              <p className="text-white">
              Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
              </p>
            </div>
            <div>
              
              <ul className="text-gray-200  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Explore</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Product</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Pricing</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Customer Stories</a>
                </li>
              </ul>
            </div>
            <div>
              
              <ul className="text-gray-200  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Learn</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">About us</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Blogs</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact Crest</h2>
              <ul className="text-gray-100 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Registered Office:</a>
                </li>
                <p>
                1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102
                </p>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Corporate Office:</a>
                </li>
                <p>
                291, All Time Space, 4th Floor,15th A Cross, Sector - 6,HSR Layout, Bengaluru,India. 560102 
                </p>
                <div className='flex gap-2'>
                    <img className='h-8 w-8' src="https://twitter.com/Get_Crest"></img>
                    <img className='h-8 w-8' src="https://www.facebook.com/getcrest"></img>
                    <img className='h-8 w-8' src="https://www.facebook.com/getcrest"></img>
                    <img className='h-8 w-8' src="https://www.linkedin.com/company/get-crest/"></img>
                </div>
              </ul>
            </div>
          </div>
         
        </div>

      </footer>
      <div className='sm:flex sm:gap-5 text-white sm:ml-36'>
            <p>Copyright 2024 CleverBook</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default App;
