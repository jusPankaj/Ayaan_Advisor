import React from 'react'

const ContactSection = () => {
  return (
    <div>
        <div className="items-start px-0 py-[50px] [background:linear-gradient(180deg,rgb(251,250,255)_0%,rgb(255,255,255)_100%)] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[30px] pt-0 pb-[50px] px-[250px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col gap-2.5 flex-[0_0_auto] items-start relative">
            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2c4058] text-lg tracking-[0] leading-7 whitespace-nowrap">
              Contact us
            </div>
            <p className="relative w-[600px] [font-family:'Sansation-Bold',Helvetica] font-bold text-transparent text-5xl tracking-[0.96px] leading-[45px]">
              <span className="text-[#5881b2] tracking-[0.46px]">Get in </span>
              <span className="text-[#2c4058] tracking-[0.46px]">Touch</span>
            </p>
            <p className="relative w-[1029.45px] [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-lg tracking-[0.36px] leading-[30px]">
              This is dummy text. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex w-[1417px] items-start gap-[50px] relative flex-[0_0_auto]">
            <div className="relative w-[717px] h-[684.97px]">
              <div className="inline-flex h-11 items-start gap-[50px] absolute top-[641px] left-[9px]">
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10">
                    <div className="relative h-10">
                      <div className="w-[19px] h-[19px] top-px left-[9px] rounded-[9.36px] absolute bg-[#fed55f66]" />
                      <img
                        className="absolute w-10 h-10 top-0 left-0 object-cover"
                        alt="Phone call"
                        src="./images/phoneCall1.png"
                      />
                    </div>
                  </div>
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-normal text-transparent text-base tracking-[0.32px] leading-5">
                    <span className="font-semibold text-[#2c4058] tracking-[0.05px]">
                      Phone
                      <br />
                    </span>
                    <span className="[font-family:'Poppins-Regular',Helvetica] text-[#5881b2] tracking-[0.05px]">
                      03 5432 1234
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10">
                    <div className="relative h-10">
                      <div className="w-[19px] h-[19px] top-px left-[9px] rounded-[9.36px] absolute bg-[#fed55f66]"  />
                      <img
                        className="absolute w-10 h-10 top-0 left-0 object-cover"
                        alt="Location"
                        src="./images/location1.png"
                      />
                    </div>
                  </div>
                  <p className="relative w-fit mt-[-1.00px] font-primary font-normal text-transparent text-base tracking-[0.32px] leading-5">
                    <span className="font-semibold text-[#2c4058] tracking-[0.05px]">
                      Address
                      <br />
                    </span>
                    <span className="[font-family:'Poppins-Regular',Helvetica] text-[#5881b2] tracking-[0.05px]">
                      @lorem ipsum
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10">
                    <div className="relative h-10">
                      <div className="w-[19px] h-[19px] top-px left-[9px] rounded-[9.36px] absolute bg-[#fed55f66]" />
                      <img
                        className="absolute w-10 h-10 top-0 left-0 object-cover"
                        alt="Envelope"
                        src="./images/envelope1.png"
                      />
                    </div>
                  </div>
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-normal text-transparent text-base tracking-[0.32px] leading-5">
                    <span className="font-semibold text-[#2c4058] tracking-[0.05px]">
                      Email
                      <br />
                    </span>
                    <span className="[font-family:'Poppins-Regular',Helvetica] text-[#5881b2] tracking-[0.05px]">
                      info@ayaanoverseas.com
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute w-[698px] h-[517px] top-0 left-0">
                <div className="inline-flex flex-col h-[510px] items-start gap-5 pt-0 pb-[50px] px-0 absolute top-0 left-0 border-b [border-bottom-style:solid] border-[#0000001a]">
                  <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                    <div className="w-[323px] flex h-[73px] items-center gap-2.5 px-5 py-[22px] relative rounded-[10px] border border-solid border-gray-5">
                      <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-lg tracking-[0.18px] leading-6 whitespace-nowrap">
                        Name *
                      </div>
                    </div>
                    <div className="w-[351px] flex h-[73px] items-center gap-2.5 px-5 py-[22px] relative rounded-[10px] border border-solid border-gray-5">
                      <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-lg tracking-[0.18px] leading-6 whitespace-nowrap">
                        Phone number *
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[698px] h-[73px] items-center gap-2.5 px-5 py-[22px] relative rounded-[10px] border border-solid border-gray-5">
                    <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-lg tracking-[0.18px] leading-6 whitespace-nowrap">
                      Email
                    </div>
                  </div>
                  <div className="flex w-[698px] h-[73px] items-center gap-2.5 px-5 py-[22px] relative rounded-[10px] border border-solid border-gray-5">
                    <div className="relative w-[634.92px] [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-lg tracking-[0.18px] leading-6">
                      Country Interested In
                    </div>
                    <img className="relative w-3 h-1.5" alt="Vector" src="vector-2.svg" />
                  </div>
                  <div className="flex w-[698px] h-[113px] items-start justify-between px-5 py-[22px] relative rounded-[10px] border border-solid border-gray-5">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-lg tracking-[0.18px] leading-6 whitespace-nowrap">
                      Message
                    </div>
                    <img
                      className="relative w-1.5 h-3 mt-[-4142.81px] mr-[-716.00px]"
                      alt="Vector"
                      src="vector-2-2.svg"
                    />
                  </div>
                  <button className="all-[unset] box-border inline-flex h-12 bg-[#5881b2] items-center gap-2.5 px-6 py-3 relative rounded-lg">
                    <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-white text-base tracking-[0] leading-[normal]">
                      Submit
                    </div>
                  </button>
                </div>
                <div className="flex flex-col w-10 items-center justify-center gap-2.5 px-2.5 py-0 absolute top-[497px] left-[330px] bg-[#ffffff]">
                  <div className="relative w-fit mt-[-1.00px] ml-[-1.50px] mr-[-1.50px] [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                    OR
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 pl-0 pr-2.5 py-0 absolute top-[537px] left-0 bg-[#ffffff]">
                <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-body-paragraph text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  CONTACT US VIA
                </div>
                <img className="relative w-[32.96px] h-[30.55px]" alt="Image" src="./images/whatsapp.png" />
              </div>
            </div>
            <div className="flex flex-col w-[655px] h-[685px] items-start gap-2.5 relative mr-[-5.00px] bg-[url(/component-6.png)] bg-cover bg-[50%_50%]">
              <div className="relative self-stretch w-full h-[587px]" />
              <img className="absolute w-[6550px] h-[685px] " alt="Group" src="./images/map_in_form.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection