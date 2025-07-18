'use client';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finding Love On T'emi Is Simple, Safe, And Full Of Purpose. No Games, Just Real People With Real Hearts ❤️
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verify & Create Your Profile</h3>
                <p className="text-gray-600">
                  We Believe Trust Starts With Authenticity. That's Why Every Member Goes Through A Verification Process to ensure genuine connections.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Conversations That Matter</h3>
                <p className="text-gray-600">
                  Be Yourself In Greetings! Share Stories & Easy To Spark Deep, Meaningful Connections.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Matched With Intention</h3>
                <p className="text-gray-600">
                  Our New Profile Filters And Compatibility Based Algorithm Targets Building Solid Foundations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                04
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Grow Together In Love & Faith</h3>
                <p className="text-gray-600">
                  Beyond Matching, Our Platform Is Built To Harmonize That Loves, Divides To Christian Counselors & Services.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Beautiful%20African%20Christian%20couple%20praying%20together%20in%20modern%20church%20setting%2C%20holding%20hands%2C%20peaceful%20and%20romantic%20atmosphere%2C%20soft%20natural%20lighting%2C%20contemporary%20church%20interior%2C%20genuine%20faith%20and%20love%20connection%2C%20warm%20and%20welcoming%20environment&width=600&height=700&seq=how-it-works-001&orientation=portrait"
              alt="How it works illustration"
              className="rounded-lg shadow-lg w-full h-auto object-cover object-top"
            />
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-pink-500 text-white p-3 rounded-full">
              <i className="ri-heart-fill text-2xl"></i>
            </div>
            <div className="absolute top-20 -left-4 bg-purple-500 text-white p-3 rounded-full">
              <i className="ri-message-3-fill text-2xl"></i>
            </div>
            <div className="absolute bottom-20 -right-4 bg-green-500 text-white p-3 rounded-full">
              <i className="ri-check-fill text-2xl"></i>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-white p-3 rounded-full">
              <i className="ri-star-fill text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}