import React from "react";

const WhitePaper = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          DecentRaise Whitepaper
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Introduction To White Paper of DecentRaise
          </h2>
          <p className="text-gray-600 mb-6">
            DecentRaise is a decentralized crowdfunding platform built on
            blockchain technology, enabling transparent and trustless
            fundraising for projects worldwide.
          </p>

          {/* Add more sections as needed */}
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Problem Statement
              </h3>
              <p className="text-gray-600">
                Traditional crowdfunding platforms face challenges with
                transparency, trust, and high fees. DecentRaise addresses these
                issues through blockchain technology and smart contracts.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Solution
              </h3>
              <p className="text-gray-600">
                Our platform leverages blockchain technology to create a
                transparent, efficient, and secure crowdfunding ecosystem where
                project creators and backers can interact directly without
                intermediaries.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
