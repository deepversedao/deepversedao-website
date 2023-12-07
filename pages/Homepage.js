import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  const textStyleTop = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16vw', // Responsive font size
    fontWeight: 'bold',
    color: '#e0e0e0',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: 'auto',
    top: '20%', // Adjust as needed for positioning
    textAlign: 'center',
    zIndex: '1',
  };

  const textStyleMiddle = {
    ...textStyleTop,
    top: '50%', // Position at the middle
  };

  const textStyleBottom = {
    ...textStyleTop,
    top: '80%', // Position at the bottom
  };

  const textBackgroundStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    opacity: '0.05',
  };

  const containerStyle = {
    position: 'relative',
    maxWidth: '100%',
    height: 'auto',
    textAlign: 'center',
    marginTop: '6vw', // Spacing from the top
  };

  return (
    <div style={containerStyle} className='sm:top-24 md:top-20 lg:top-20'>
      {/* Text as background - Top */}
      <div style={containerStyle}>
        {/* Text as background - Top */}
        <div className="animation-slide-right-1 " style={textBackgroundStyle}>
          <p style={textStyleTop}>Deepverse</p>
        </div>
        {/* Text as background - Middle */}
        <div className="py-52 animation-slide-right-2" style={textBackgroundStyle}>
          <p style={textStyleMiddle}>Deepverse</p>
        </div>
        {/* Text as background - Bottom */}
        <div className="animation-slide-right-3" style={textBackgroundStyle}>
          <p style={textStyleBottom}>Deepverse</p>
        </div>
        {/* Rest of your code */}
      </div>

      {/* Container for group 30 */}
      <div style={{ position: 'relative', width: '10%', top: '-385px' }}>
        <Image
          src="/Group_30.svg"
          alt="Group 30"
          width={317}
          height={325}
          layout="responsive"
        />
      </div>
      <div className='' style={{ position: 'absolute', top: '100px', left: '41%' }}>
        <Image
          src="/Ellipse_1744.svg"
          alt="This is vector"
          width={250}
          height={250}
          layout="fixed"
        />
      </div>
      <div className='' style={{ position: 'absolute', top: '350px', left: '41%' }}>
        <Image
          src="/Vector_27.svg"
          alt="This is vector"
          width={250}
          height={250}
          layout="fixed"
        />
      </div>
      <div className='' style={{ position: 'absolute', top: '100px', left: '90%' }}>
        <Image
          src="/Vector_25.svg"
          alt="This is vector"
          width={300}
          height={350}
          layout="fixed"
        />
      </div>
      <div className='' style={{ position: 'absolute', top: '325px', right: 0 }}>
        <Image
          src="/Vector_29.svg"
          alt="This is vector"
          width={225}
          height={225}
          layout="fixed"
        />
      </div>
      <div className="absolute inset-x-0 top-36 text-center">
        <h1 className="font-urbanist text-3xl md:text-5xl lg:text-8xl font-bold">Deepverse</h1>
      </div>
      <div className="absolute inset-x-0 top-56 text-center p-6">
        <h2 className="font-urbanist text-semigreytypo text-lg md:text-1xl lg:text-sm font-thin">
          Welcome to DeepVerse! <br />  Where Skills Collide, Ideas Thrive
        </h2>
      </div>
      <div className='absolute inset-x-0 top-72 text-center p-6 flex justify-center items-center'>
        <Link href={'https://discord.gg/vH6rMR5VEB'}>
          <button className="hover:bg-pink-200   w-32 h-8 rounded-full flex items-center justify-center bg-purplish" >
            Join Discord
          </button></Link>
      </div>
      <div style={{ position: 'absolute', top: '10px', left: '100px' }}>
        <Image
          src="/Vector_24.svg"
          alt="This is vector"
          width={250}
          height={300}
          layout="fixed"
        />
      </div>

      {/* Container for group 31 */}
      <div style={{ position: 'absolute', top: '0', right: '0', width: '15%' }}>
        {/* Adjust margin as needed */}
        <Image src="/Group_31.svg" alt="Group 31" width={300} height={333} layout="fixed" />
      </div>
      <div className='pt-72' style={{ position: 'absolute', top: '20px', left: '100px' }}>
        <Image
          src="/Ellipse_1744.svg"
          alt="This is vector"
          width={250}
          height={250}
          layout="fixed"
        />
      </div>
      {/* Container for group 32 */}
      <div style={{ position: 'absolute', top: '400px', right: '6vw', width: '15%', transform: 'translateY(-50%)' }}>
        {/* Adjust margin as needed */}
        <Image src="/Group_32.svg" alt="Group 32" width={300} height={333} layout="fixed" />
      </div>
      <div style={{ position: 'absolute', top: '440px', width: '100vw', height: '120px', zIndex: '999' }}>
        <Image src='/Rectangle_15329.svg' alt='' width={45} height={45} layout="responsive" objectFit="cover" />
      </div>
    </div>
  );
}
