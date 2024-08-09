import React from "react";
import "../../styles/services.scss";

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and scalable web applications. ",
    icon: "🌐",
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications for iOS / Android.",
    icon: "📱",
  },
  {
    title: "DevOps & CI/CD",
    description: "Implementing CI/CD pipelines and automating deployments.",
    icon: "🚀",
  },
  {
    title: "API Development",
    description: "Designing and developing robust RESTful and GraphQL APIs .",
    icon: "🔗",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h1 className="text-8xl font-bold mb-8 mr-2">
        𝖜𝖍𝖆𝖙 𝖎 𝖈𝖆𝖓<span className="linear"> do for you </span> 𝖎𝖓 𝕿𝖍𝖎𝖘 𝕾𝖕𝖆𝖈𝖊
      </h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
