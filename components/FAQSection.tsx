'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How does T'emi verify Christian faith?",
    answer: "We verify faith through a combination of profile verification, church references, and community engagement. Members can add their church information and participate in our faith-based activities to build trust within the community."
  },
  {
    question: "Is T'emi only for African Christians?",
    answer: "While T'emi was specifically designed with African Christians in mind, we welcome all Christians who are serious about faith-based relationships and appreciate African culture and values."
  },
  {
    question: "What makes T'emi different from other dating apps?",
    answer: "T'emi combines faith-based matching with cultural understanding. We offer prayer partner matching, Christian counseling, Bible study groups, and ensure all members share Christian values for meaningful connections."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your Premium or Kingdom+ subscription at any time. We also offer a 30-day money-back guarantee if you're not satisfied with your premium experience."
  },
  {
    question: "How does the prayer partner matching work?",
    answer: "Our prayer partner feature matches you with members who share similar prayer interests and spiritual goals. You can participate in guided prayer sessions, share prayer requests, and build spiritual connections."
  },
  {
    question: "Is my personal information safe on T'emi?",
    answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. We never share your personal information with third parties without your consent."
  },
  {
    question: "How do I report inappropriate behavior?",
    answer: "T'emi has zero tolerance for inappropriate behavior. You can report any member through their profile or contact our support team directly. We investigate all reports promptly and take appropriate action."
  },
  {
    question: "Do you offer relationship counseling?",
    answer: "Yes! Our Kingdom+ plan includes access to certified Christian counselors who specialize in relationships and marriage preparation. We also offer group counseling sessions and workshops."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common questions about T'emi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <i className="ri-arrow-down-line text-xl text-gray-500"></i>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="pb-6 pr-12">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}