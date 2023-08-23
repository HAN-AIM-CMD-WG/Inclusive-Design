import React from 'react'

const OurGoals = () => {
  const goals = [
    'Promote an open, inclusive, and transparent Next Generation Internet.',
    'Invest in research and innovation for a future internet that respects privacy and is robust, trustworthy, and sustainable.',
    'Shape internet policy and set standards with European values at the heart.',
    'Foster a vibrant open internet movement to collaboratively build an inclusive internet ecosystem.'
  ]

  return (
    <section className="py-12 px-4 text-center text-white rounded-lg">
      <h2 className="text-3xl mb-4 font-semibold">
        Our Goals
      </h2>
      <ul className="list-disc text-lg max-w-3xl mx-auto text-left">
        {goals.map((goal, index) => (
          <li key={index} className="mb-2">
            {goal}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurGoals
