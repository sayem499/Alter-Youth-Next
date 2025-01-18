import Image from 'next/image';

const AlterYouthHero = () => {
  return (
    <section className="relative mb-10 mt-4 pb-5 h-full w-full">
      <div className="absolute w-full inset-0 z-0 h-full "></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col items-center h-full mt-10">
          <h1 className="text-center text-3xl lg:text-3xl font-bold">The Uber for Scholarships</h1>
          <p className="text-center text-sm">
            A platform connecting the world with financially struggling students<br />
            in Government Primary Schools of Bangladesh
          </p>
          <div className="flex space-x-4 justify-center">
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
          <div className="flex flex-col w-full lg:flex-row items-center justify-evenly mt-24">{/* gap-6 lg:gap-16 */}
            <div className="text-center">
              <Image
                src="/images/app_scholarship.jpg"
                alt="Monthly scholarship transfer details in the AlterYouth app"
                width={180}
                height={200}
              />
              <h3 className="mt-4 font-semibold">Monthly Scholarship Transfer Details</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/app_school.png"
                alt="School report updates in the AlterYouth app"
                width={180}
                height={200}
              />
              <h3 className="mt-4 font-semibold">School Report Updates</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/app_graduation.png"
                alt="School report updates in the AlterYouth app"
                width={180}
                height={200}
              />
              <h3 className="mt-4 font-semibold">School Report Updates</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlterYouthHero;