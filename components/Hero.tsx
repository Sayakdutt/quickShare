import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Upload,Save and Easily Share your files in one place
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-primary font-semibold">
            Drag and Drop your file directly on our cloud and share it with your friends securely with password and send it on email.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-green-600 bg-primary px-12 py-3 text-sm hover:text-primary font-medium text-white hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/sign-in"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded border border-green-600 px-12 py-3 text-sm font-medium text-primary hover:bg-primary focus:outline-none focus:ring active:bg-primary hover:text-gray-100 sm:w-auto"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
