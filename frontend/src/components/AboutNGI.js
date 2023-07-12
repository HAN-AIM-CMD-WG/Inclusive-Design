import React from 'react'

const AboutNGI = () => {
  return (
    <section className="py-12 px-4 text-center rounded-lg w-full">
      <img
        src="https://cdn.discordapp.com/attachments/952852718274351136/1127992283963342908/Logo_ZERO-2-plo1j6o7a7a6rl891glr05l0i4dp70bi0b97xaogk8.png"
        alt="NGI Logo"
        className="mx-auto mb-8"
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <h2 className="text-3xl mb-4 font-semibold">
        About Next Generation Internet (NGI)
      </h2>
      <p className="text-lg max-w-3xl mx-auto">
        The Next Generation Internet (NGI) is an EU initiative that aims to shape the future internet as an interoperable platform ecosystem that embodies the values that Europe holds dear: openness, inclusivity, transparency, privacy, cooperation, and protection of data. NGI will drive this transformation by investing in research and innovation, and by setting policy and standards.
      </p>
    </section>
  )
}

export default AboutNGI
