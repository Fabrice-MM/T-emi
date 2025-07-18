'use client';

export default function PricingSection() {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Browse profiles",
        "Like profiles",
        "Receive messages",
        "Basic profile creation",
        "Email verification",
        "Mobile-optimized interface"
      ],
      limitations: [
        "Cannot initiate conversations",
        "Limited daily likes",
        "Basic matching algorithm"
      ],
      buttonText: "Start Free",
      popular: false,
      color: "gray"
    },
    {
      name: "Premium Plan",
      price: "$14.99",
      period: "/month",
      description: "For serious relationship seekers",
      features: [
        "All Free Plan features",
        "Unlimited messaging",
        "Daily devotionals",
        "Prayer partner matching",
        "Profile visibility boost",
        "Fun quizzes & ice-breakers",
        "Advanced matching filters",
        "Read receipts",
        "Profile insights"
      ],
      buttonText: "Go Premium",
      popular: true,
      color: "purple"
    },
    {
      name: "Kingdom+ Plan",
      price: "$24.99",
      period: "/month",
      description: "Ultimate Christian dating experience",
      features: [
        "All Premium Plan features",
        "VIP access to Christian counseling",
        "Exclusive Bible study groups",
        "Virtual speed dating events",
        "Singles events & meetups",
        "Priority customer support",
        "Relationship coaching",
        "Marriage preparation courses",
        "Community forums",
        "Video calling features"
      ],
      buttonText: "Join Kingdom+",
      popular: false,
      color: "gradient"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're just starting your search or ready to dive deep into meaningful connections, we have the perfect plan for your faith journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 text-lg">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations && plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-close-line text-white text-sm"></i>
                      </div>
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    plan.color === 'gradient'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : plan.color === 'purple'
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-green-500"></i>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-customer-service-line text-blue-500"></i>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-medal-line text-yellow-500"></i>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}