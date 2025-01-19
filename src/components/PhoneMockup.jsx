import Image from 'next/image';

const AlterYouthHero = () => {
  return (
    <section className="relative mb-10 mt-2 pb-5 h-full w-full">
      <div className="absolute w-full inset-0 z-0 h-full "></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col items-center h-full mt-2">
          <h1 className="text-center text-3xl lg:text-3xl font-bold mt-4">The Uber for Scholarships</h1>
          <p className="text-center text-base mt-4">
            A platform connecting the world with financially struggling students<br />
            in Government Primary Schools of Bangladesh
          </p>
          <div className="flex space-x-4 justify-center mt-4">
            <a
              href="https://apps.apple.com/us/app/alteryouth-start-scholarships/id1569106859"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="appstore_small.svg"
                alt="Apple App Store"
                width={105}
                height={35}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.alteryouth"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="playstore_small.svg"
                alt="Google Play Store"
                width={105}
                height={35}
              />
            </a>
          </div>
          <div className="flex flex-col w-full lg:flex-row items-center justify-evenly mt-16">{/* gap-6 lg:gap-16 */}
            <div className="flex flex-col justify-center text-center">
              <Image
                src="/images/app_scholarship.jpg"
                alt="Monthly scholarship transfer details in the AlterYouth app"
                width={180}
                height={200}
                className='mx-auto'
              />
                <div className='mt-4'>
                  <h3 className="font-bold">Transfer directly</h3>
                  <p className='w-[350px] mt-3 text-sm'>Your scholarship is transferred directly to your<br/> student's family on their mobile bank account.</p>
                </div>
              
            </div>
            <div className="text-center">
              <Image
                src="/images/app_school.png"
                alt="School report updates in the AlterYouth app"
                width={180}
                height={200}
                className='mx-auto'
              />
                <div className='mt-4'>
                  <h3 className="font-bold">Get school reports</h3>
                  <p className='w-[350px] mt-3 text-sm'>View attendance data and report cards from your<br/> student's school, until completion of Class 5.</p>
                </div>
              
            </div>
            <div className="text-center">
              <Image
                src="/images/app_graduation.png"
                alt="School report updates in the AlterYouth app"
                width={180}
                height={200}
                className='mx-auto'
              />
              <div className='mt-4'>
                <h3 className="mt-4 font-semibold">Ensure a literate citizen</h3>
                <p className='w-[350px] mt-3 text-sm'>Your scholarship continues until completion of<br/> class 5, when your student achieves literacy.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlterYouthHero;