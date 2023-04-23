import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative w-screen min-h-screen h-full bg-[#22A2E3] px-[40px] lg:px-[140px]">
      <Image src="/desktop.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', zIndex: -1, position: 'fixed', left: 0, top: 0 }} 
      />
      <div className='relative w-full pt-[35px] flex justify-between items-center'>
        <Image className='w-[150px] lg:w-[218.79px]' src="/brand.png"
          width={218.79}
          height={80}
        />
        <a
          href="https://twitter.com/bundlr_"
          rel="noopener noreferrer"
        >
          <Image 
              className='cursor-pointer w-[35px] lg:w-[40px]'
              src="/twitter.png"
              width={40}
              height={40}
          />
        </a>
      </div>
      <div className='relative mt-[40px] lg:mt-[50px] w-full flex flex-wrap'>
        <div className='w-full lg:w-1/2 h-full'>
          <div className='relative w-full flex flex-col justify-center items-center lg:pt-[45px]'>
            <h1 className='text-[43px] lg:text-[86px] font-bold lg:leading-[112px] tracking-normal	font-poppins text-white' >Buy in Bulk. Save in Bulk.</h1>
            <h1 className='mt-[15px] text-[20px] lg:text-[28px] leading-[36px] font-semibold font-inter text-[#F3F4F6]'>Arbitrum's First NFT Marketplace for Bulk Sales</h1>
            <a
              href="https://twitter.com/bundlr_"
              rel="noopener noreferrer"
            >
              <button className='self-center flex flex-inline gap-2 items-center mt-[20px] lg:mt-[45px] py-[18px] lg:py-[24px] px-[15px] lg:px-[25px] bg-[#F0ADA9] rounded-3xl text-[14px] lg:text-[19px] text-white font-inter font-black hover:shadow-md'>
                Follow us on Twitter
                <Image 
                  className="w-[20px] lg:w-[27px]"
                  src="/twitter.png"
                  width={27}
                  height={27}
                />
              </button>
            </a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 h-full flex justify-center'>
            <Image className='mt-[20px] lg:mt-[0] w-stretch' src="/hero.png" width={800} height={800} />
        </div>
      </div>
    </div>
  )
}
