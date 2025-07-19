import { motion } from "framer-motion";

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">01</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sign Up with Purpose</h3>
                <p className="text-gray-600">
                  Create a profile that reflects your true self — your faith, your story, your hopes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">02</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get Matched by Values</h3>
                <p className="text-gray-600">
                  Our unique matching algorithm brings together people with compatible beliefs and life goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">03</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Start Meaningful Conversations</h3>
                <p className="text-gray-600">
                  Break the ice with guided prompts that lead to real dialogue — not just swipes.
                </p>
              </div>
            </div>

            {/* CTA Button aligned left */}
            <div className="pt-6">
              <a
                href="/preview/fe63acec-059b-4b3d-9a37-4da578dc9556/1137396/register"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
              >
                Ready to Try It? Join Free Today
              </a>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://readdy.ai/api/search-image?query=Happy%20African%20American%20couple%20having%20meaningful%20conversation%20in%20beautiful%20modern%20setting%2C%20warm%20intimate%20lighting%2C%20both%20people%20smiling%20and%20engaged%2C%20romantic%20atmosphere%2C%20professional%20photography%20style%2C%20simple%20background%2C%20relationship%20goals&amp;width=500&amp;height=600&amp;seq=howitworks1&amp;orientation=portrait"
              alt="Happy couple talking"
              className="rounded-2xl shadow-lg object-cover w-full h-[600px] object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-2xl"></div>

            {/* Floating hearts */}
            <div className="absolute top-4 right-4 space-y-2">
              <i className="ri-heart-fill text-pink-500 w-8 h-8 flex items-center justify-center text-2xl"></i>
              <i className="ri-heart-fill text-purple-500 w-8 h-8 flex items-center justify-center text-2xl"></i>
              <i className="ri-heart-fill text-red-500 w-8 h-8 flex items-center justify-center text-2xl"></i>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
