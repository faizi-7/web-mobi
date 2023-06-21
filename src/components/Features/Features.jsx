import React from 'react'
import './Features.scss'

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-heading">Our Expertise</div>
      <div className="feature-cards">
        <div className="feature-card">
          <div className="card-heading">Hiring</div>
          <div className="card-body">Leveraging our deep understanding of the talent landscape, we devise effective hiring strategies to attract the best tech professionals.</div>
        </div>
        <div className="feature-card">
          <div className="card-heading">Human Resources Management</div>
          <div className="card-body">We ensure a healthy and productive work environment by implementing efficient HR practices tailored to the unique needs of your startup.</div>
        </div>
        <div className="feature-card">
          <div className="card-heading">Taxation</div>
          <div className="card-body">Our team navigates through the complexities of the tax system, ensuring compliance while optimizing financial efficiency.</div>
        </div>
        <div className="feature-card">
          <div className="card-heading">Regulatory Guidance</div>
          <div className="card-body">We stay abreast of the ever-changing regulatory landscape, providing timely advice to ensure your startup's operations stay within legal boundaries.</div>
        </div>
      </div>
    </div>
  )
}

export default Features