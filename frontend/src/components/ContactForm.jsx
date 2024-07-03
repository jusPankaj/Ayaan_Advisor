import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <section className="w-[717px] mx-3 box-border text-gray-700 body-font relative font-primary">
        {/* <div className="container px-5 py-24 mx-auto"> */}
          <div className="">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent rounded border border-[#E0E0E0]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent rounded border border-[#E0E0E0] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent rounded border border-[#E0E0E0] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <select 
                  className="w-full bg-transparent rounded border border-[#E0E0E0] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="">Countries Interested in</option>
                    <option value="Russia">Russia</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Philippines">Philippines</option>
                    <option value="China">China</option>
                    <option value="Ukraine">Ukraine</option>
                    {/* <option value=""></option>
                    <option value=""></option> */}
                  </select>
                </div>
              </div>
              
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-transparent rounded border border-[#E0E0E0] focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2">
                <button className="flex h-12 text-white bg-[#5981B2] border-0 py-3 px-6 rounded text-md font-medium">
                  Submit
                </button>
              </div>
              {/* <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">example@email.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div> */}

              <div className='border-t border-[#E0E0E0] w-full mt-2 mb-4'>
                <div className='flex items-center my-8 '>
                  <p>CONTACT US VIA </p>
                  <img src="./images/whatsapp.png" alt="" className='w-[32.96px] h-[30.55px]'/> 
                </div>
                <div className='flex justify-between '>
                  <div className='flex items-center'>
                    <img src="./images/phone_call1.png" alt="" className='h-10 w-10'/>
                    <div className='flex flex-col mx-1'>
                      <h6 className='text-[16px] font-normal'>Phone</h6>
                      <p className='text-[16px] font-normal'>9999999999</p>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <img src="./images/location1.png" alt="" className='h-10 w-10'/>
                    <div className='flex flex-col mx-1'>
                      <h6 className='text-[16px] font-normal'>Phone</h6>
                      <p className='text-[16px] font-normal'>9999999999</p>
                    </div>
                  </div>

                  <divsection className='flex items-center'>
                    <img src="./images/envelope1.png" alt="" className='h-10 w-10'/>
                    <div className='flex flex-col mx-1'>
                      <h6 className='text-[16px] font-normal'>Phone</h6>
                      <p className='text-[16px] font-normal'>9999999999</p>
                    </div>
                  </divsection>

                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  )
}

export default ContactForm