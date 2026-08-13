// app/portfolio/page.js
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Badria Abokor",
    role: "UI/UX Designer",
    bio: "Passionate about creating intuitive and beautiful user experiences that solve real problems.",
    image: "/images/team/badria.jpg", // Replace with actual image path
    social: {
      linkedin: "https://linkedin.com/in/badria",
      github: "https://github.com/badria",
      twitter: "https://twitter.com/badria"
    },
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    id: 2,
    name: "Mervyn Maina",
    role: "Full Stack Developer",
    bio: "Building robust and scalable web applications with modern technologies and clean code.",
    image: "/images/team/mervyn.jpg", // Replace with actual image path
    social: {
      linkedin: "https://linkedin.com/in/mervyn",
      github: "https://github.com/mervyn",
      twitter: "https://twitter.com/mervyn"
    },
    skills: ["React", "Node.js", "Python", "AWS"]
  },
  {
    id: 3,
    name: "Henry Njuguna",
    role: "Backend Engineer",
    bio: "Crafting powerful server-side solutions and optimizing database performance.",
    image: "/images/team/henry.jpg", // Replace with actual image path
    social: {
      linkedin: "https://linkedin.com/in/henry",
      github: "https://github.com/henry",
      twitter: "https://twitter.com/henry"
    },
    skills: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
  },
  {
    id: 4,
    name: "Victor Kichwen",
    role: "DevOps Engineer",
    bio: "Bridging the gap between development and operations with automation and best practices.",
    image: "/images/team/victor.jpg", // Replace with actual image path
    social: {
      linkedin: "https://linkedin.com/in/victor",
      github: "https://github.com/victor",
      twitter: "https://twitter.com/victor"
    },
    skills: ["Kubernetes", "Docker", "CI/CD", "Terraform"]
  },
  {
    id: 5,
    name: "Kinyira Millicent",
    role: "Frontend Developer",
    bio: "Creating pixel-perfect interfaces with a focus on accessibility and performance.",
    image: "/images/team/millicent.jpg", // Replace with actual image path
    social: {
      linkedin: "https://linkedin.com/in/millicent",
      github: "https://github.com/millicent",
      twitter: "https://twitter.com/millicent"
    },
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  }
];

const TeamPortfolio = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // Handle modal open/close
  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedMember(null), 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  return (
    <div className="team-portfolio-container">
      {/* Header Section */}
      <div className="portfolio-header">
        <span className="section-badge">OUR TEAM</span>
        <h1 className="section-title">Meet the <span className="highlight">Creative Minds</span></h1>
        <p className="section-subtitle">
          A diverse group of passionate professionals dedicated to delivering exceptional results
        </p>
      </div>

      {/* Team Grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className={`team-card ${hoveredId === member.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => openModal(member)}
          >
            <div className="card-image-wrapper">
              <div className="image-placeholder">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={400}
                    height={400}
                    className="team-image"
                    priority={member.id <= 2}
                  />
                ) : (
                  <div className="avatar-initials">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div className="card-overlay">
                <div className="social-links">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a 
                      key={platform}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${member.name}'s ${platform}`}
                    >
                      <span className="social-icon">{platform[0].toUpperCase()}</span>
                    </a>
                  ))}
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
            <div className="card-content">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="skill-tags">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
                {member.skills.length > 3 && (
                  <span className="skill-tag more">+{member.skills.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <div className="modal-grid">
              <div className="modal-image-section">
                <div className="modal-image-wrapper">
                  {selectedMember.image ? (
                    <Image 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      width={500}
                      height={500}
                      className="modal-image"
                    />
                  ) : (
                    <div className="modal-avatar-initials">
                      {selectedMember.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-details">
                <span className="modal-role">{selectedMember.role}</span>
                <h2 className="modal-name">{selectedMember.name}</h2>
                <p className="modal-bio">{selectedMember.bio}</p>
                <div className="modal-skills">
                  <h4 className="skills-title">Expertise</h4>
                  <div className="modal-skill-tags">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="modal-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-social">
                  <h4 className="social-title">Connect</h4>
                  <div className="modal-social-links">
                    {Object.entries(selectedMember.social).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-social-link"
                      >
                        <span className="modal-social-icon">{platform[0].toUpperCase()}</span>
                        <span className="modal-social-platform">{platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .team-portfolio-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background: #f8fafc;
        }

        /* Header Styles */
        .portfolio-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .section-title .highlight {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Team Grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Team Card */
        .team-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .team-card.hovered {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
        }

        .card-image-wrapper {
          position: relative;
          padding-top: 100%;
          background: #e2e8f0;
          overflow: hidden;
        }

        .image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-initials {
          font-size: 3rem;
          font-weight: 700;
          color: #64748b;
          background: #cbd5e1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(99, 102, 241, 0.85);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card:hover .card-overlay {
          opacity: 1;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          text-decoration: none;
          color: white;
          font-weight: 700;
          font-size: 0.875rem;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .view-details-btn {
          background: white;
          color: #4f46e5;
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .view-details-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          padding: 1.5rem;
        }

        .member-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.25rem 0;
        }

        .member-role {
          font-size: 0.875rem;
          color: #4f46e5;
          font-weight: 500;
          margin: 0 0 0.75rem 0;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .skill-tag {
          background: #f1f5f9;
          color: #475569;
          font-size: 0.7rem;
          padding: 0.2rem 0.6rem;
          border-radius: 50px;
          font-weight: 500;
        }

        .skill-tag.more {
          background: #e2e8f0;
          color: #64748b;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1.5rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: white;
          border-radius: 24px;
          max-width: 1000px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-close {
          position: sticky;
          top: 0.75rem;
          right: 0.75rem;
          float: right;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          font-size: 1.8rem;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e293b;
          margin: 0.75rem 0.75rem 0 0;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 0;
          padding: 0;
        }

        .modal-image-section {
          background: #f1f5f9;
          border-radius: 24px 0 0 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          min-height: 400px;
        }

        .modal-image-wrapper {
          width: 100%;
          max-width: 350px;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-avatar-initials {
          width: 100%;
          height: 100%;
          font-size: 6rem;
          font-weight: 700;
          color: #475569;
          background: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .modal-details {
          padding: 2.5rem 2.5rem 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .modal-role {
          font-size: 0.875rem;
          font-weight: 600;
          color: #4f46e5;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .modal-name {
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0;
        }

        .modal-bio {
          color: #64748b;
          line-height: 1.7;
          font-size: 1rem;
          margin: 0;
        }

        .modal-skills {
          margin-top: 0.5rem;
        }

        .skills-title, .social-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          margin: 0 0 0.75rem 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .modal-skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-skill-tag {
          background: #f1f5f9;
          color: #475569;
          padding: 0.3rem 0.9rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .modal-social-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .modal-social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #475569;
          transition: color 0.2s ease, transform 0.2s ease;
          padding: 0.3rem 0;
        }

        .modal-social-link:hover {
          color: #4f46e5;
          transform: translateX(4px);
        }

        .modal-social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
          color: #1e293b;
          transition: background 0.2s ease;
        }

        .modal-social-link:hover .modal-social-icon {
          background: #e0e7ff;
        }

        .modal-social-platform {
          font-weight: 500;
          font-size: 0.9rem;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .team-portfolio-container {
            padding: 2rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.25rem;
          }

          .modal-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .modal-image-section {
            border-radius: 24px 24px 0 0;
            padding: 1.5rem;
            min-height: 200px;
          }

          .modal-image-wrapper {
            max-width: 150px;
          }

          .modal-details {
            padding: 1.5rem;
          }

          .modal-name {
            font-size: 1.5rem;
          }

          .modal-content {
            max-height: 85vh;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
            margin: 0 auto;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .modal-overlay {
            padding: 0.75rem;
          }

          .modal-content {
            border-radius: 16px;
          }

          .modal-close {
            width: 36px;
            height: 36px;
            font-size: 1.5rem;
            margin: 0.5rem 0.5rem 0 0;
          }

          .modal-image-wrapper {
            max-width: 120px;
          }

          .modal-avatar-initials {
            font-size: 4rem;
          }
        }

        /* Scrollbar styling for modal */
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default TeamPortfolio;