import Image from "next/image";

export default function Media() {
  return (
    <div className="mt-16 sm:mt-24">
      <div >
        <div>
          <h1 className="text-pink-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-4 sm:ml-12">
            Media
          </h1>
        </div>
        <div className='pt-72' style={{ position: 'absolute', left: '100px' }}>
          <Image
            src='/Group_2.svg'
            alt="This is vector"
            width={250}
            height={250}
            layout="fixed"
          />
        </div>
        <div className='pt-72' style={{ position: 'absolute', right: '10px' }}>
          <Image
            src='/Group_3.svg'
            alt="This is vector"
            width={350}
            height={350}
            layout="fixed"
          />
        </div>
      </div>
      <div>
        <div className="flex top-24 mt-8 container scroll-container-1">
          <div  className="p-8 ">
            <Image src='/Rectangle_15352.svg' alt="" width={200} height={300}/>
          </div>
          <div className="p-8  card-container">
            <Image src={'/IMG_5937.png'} alt="" width={200} height={300}/>
          </div>
          <div className="p-8 card-container">
            <Image src='/helloMedia.svg' alt="" width={200} height={300}/>
          </div>
          <div className="p-8 card-container">
            <Image src='/helloMedia2.svg' alt="" width={200} height={300}/>
          </div>
          <div className="p-8 card-container">
            <Image src={'/HelloMedia3.png'} alt="" width={200} height={300}/>
          </div>
        </div>

        <div className="flex top-24 mt-2 container scroll-container-2">
          <div  className="px-8 card-container">
            <Image src={'/hmedia.png'} alt="" width={300} height={150}/>
          </div>
          <div className="px-8 card-container">
            <Image src={'/hmedia2.png'} alt="" width={300} height={150}/>
          </div>
          <div className="px-8 card-container">
            <Image src={'/hmedia3.png'} alt="" width={300} height={150}/>
          </div>
          <div className="px-8 card-container">
            <Image src={'/hmedia4.png'} alt="" width={300} height={150}/>
          </div>
        </div>
      </div>
    </div>
  );
}