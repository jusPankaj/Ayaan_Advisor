
const OurServicesCards = ({imgSrc, title, subtitle1, subtitle2, content1, content2}) => {
  return (
    <div>
        <div className='w-[539px] h-[821px]  m-3 p-8 shadow-lg flex flex-col' > 
        <div className='flex justify-center h-[45%]'>
            <img src={imgSrc} alt="image"/>
        </div>
        <div className="h-[55%]">
            <h1 className='py-4 text-[20px] font-medium gap-[34px] border-b-2 border-slate-200'>
                {title}
            </h1>
            <div className=''>
                <h1 className='font-medium text-[16px] text-[#5981B2] py-4'>{subtitle1}</h1>
                <p className='text-[#2C4058] font-normal'>{content1}</p>
                <h1 className='font-medium text-[16px] text-[#5981B2] py-4'>{subtitle2}</h1>
                <p className='text-[#2C4058] font-normal'>{content2}</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default OurServicesCards