import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="w-full border-b border-yellow-400 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 flex items-center justify-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full h-48 sm:h-64 relative">
              <Image
                src="/images/SmileyTechLogo2.png"
                alt="Smiley Technologies LLC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* About Section */}
        <section className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400 mt-2 text-center">
            Smiley Technologies LLC
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
            About Us
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            <p>
              Smiley Technologies is a software company that creates innovative web applications designed to solve real-world problems for businesses of all sizes.
            </p>
            <p>
              While we develop our own web application products, we also offer comprehensive consulting and development services for small businesses. Whether you need a custom web application built from scratch or want to enhance your existing digital presence, our team is here to help.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border border-yellow-400 rounded">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Web Application Development
              </h3>
              <p className="text-gray-300">
                Custom web applications tailored to your business needs.
              </p>
            </div>
            <div className="p-4 border border-yellow-400 rounded">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Consulting Services
              </h3>
              <p className="text-gray-300">
                Expert guidance on digital transformation and technology strategy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black border-2 border-yellow-400 rounded p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            Contact us today to discuss how we can help your business grow.
          </p>
          <a
            href="mailto:info@smileytechllc.com"
            className="inline-block text-yellow-400 font-bold text-lg transition-colors duration-200 hover:text-white"
          >
            info@smileytechllc.com
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-yellow-400 bg-black mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>
             {new Date().getFullYear()} Smiley Technologies LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
