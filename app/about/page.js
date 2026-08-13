"use client"

import Image from 'next/image'
import Navbar from "../../components/Navbar"

const TEAM = [
	{
		name: 'Victor Kichwen',
		role: 'About Page & Docker Lead',
		photo: '/team/victor.jpg',
		responsibilities: 'Team bios, mission section, Dockerfile creation, and local container testing.',
	},
	{
		name: 'Kinyira Millicent',
		role: 'Contact & CI/CD Lead',
		photo: '/team/millicent.jpg',
		responsibilities: 'Contact form validation, GitHub Actions workflows and deployment pipelines.',
	},
	{
		name: 'Mervyn Maina',
		role: 'Home & Project Setup',
		photo: '/team/mervyn.jpg',
		responsibilities: 'Project scaffolding, routing, and homepage implementation.',
	},
	{
		name: 'Badria Abokor',
		role: 'Project Setup / Frontend',
		photo: '/team/badria.jpg',
		responsibilities: 'Next.js initialization, shared layout, navigation and UI components.',
	},
	{
		name: 'Henry Njuguna',
		role: 'Blog / Content',
		photo: '/team/henry.jpg',
		responsibilities: 'Post listing, dynamic post routes and Markdown-based content rendering.',
	},
]

const PROJECTS = [
	{ title: 'Portfolio Site', category: 'Web', desc: 'Personal portfolio showcasing projects and case studies.' },
	{ title: 'E‑Commerce UI', category: 'Design', desc: 'Product grid and checkout flow design for a mock store.' },
	{ title: 'Blog Engine', category: 'Tooling', desc: 'Markdown-driven blog with static generation and tags.' },
	{ title: 'Mobile App Concept', category: 'App', desc: 'Prototype for a cross-platform mobile experience.' },
]

const POSTS = [
	{ title: 'Shipping Fast, Staying Curious', date: '2026-06-10', excerpt: 'How we iterate on projects while keeping quality high.', slug: '/blog/shipping-fast' },
	{ title: 'Designing for Clarity', date: '2026-05-02', excerpt: 'Principles that guide our visual and interaction decisions.', slug: '/blog/designing-clarity' },
	{ title: 'From Idea to Deployment', date: '2026-03-19', excerpt: 'A practical walkthrough of taking a project live.', slug: '/blog/idea-to-deploy' },
]

export default function AboutPage() {
	return (
		<div>
			

			<main>
				<section className="hero-section">
					<p className="hero-tag">Our Work & Team</p>
					<h1 className="hero-title font-display">Crafting thoughtful projects and sharing what we learn.</h1>
					<p className="hero-description">We build portfolio projects, write about our process, and collaborate to ship quality software.</p>
				</section>

				<div className="ring-divider" aria-hidden="true" />

				<section className="story-section section-soft">
					<div className="story-grid">
						<div className="story-content">
							<h2 className="story-title">How we collaborate</h2>
							<p className="story-text">Our team pairs designers, engineers and devops leads to move ideas forward quickly. Each project has a clear owner and shared standards for accessibility, testing and deployment.</p>
							<p className="story-text">We emphasize readable code, component-driven UIs, and concise documentation so others can pick up our work.</p>
						</div>
						<div className="story-image"><Image src="/team/team.jpg" alt="Description of our team" width="400" height="300" className="story-img" /></div>
					</div>
				</section>

				<div className="ring-divider" aria-hidden="true" />

				<section className="values-section">
					<div className="values-content">
						<h2 className="values-title">What guides our work</h2>
						<div className="values-grid">
							<div className="value-card">
								<h3 className="value-title">Clarity</h3>
								<p className="value-description">Readable code and simple interfaces that invite contribution.</p>
							</div>
							<div className="value-card">
								<h3 className="value-title">Ownership</h3>
								<p className="value-description">Clear responsibilities and shared review processes keep progress steady.</p>
							</div>
							<div className="value-card">
								<h3 className="value-title">Iterate</h3>
								<p className="value-description">Ship small, learn fast, and refine based on feedback and metrics.</p>
							</div>
						</div>
					</div>
				</section>

				<div className="ring-divider" aria-hidden="true" />

				<section className="team-section section-soft">
					<h2 className="team-title">The people behind the work</h2>
					<div className="team-grid">
						{TEAM.map((m) => (
							<article className="team-member focus-ring" tabIndex={0} key={m.name}>
								<div className="team-avatar">
									<img src={m.photo} alt={`${m.name} photo`} />
								</div>
								<h3 className="team-name">{m.name}</h3>
								<p className="team-role">{m.role}</p>
								<p className="team-bio">{m.responsibilities}</p>
							</article>
						))}
					</div>
				</section>

				<div className="ring-divider" aria-hidden="true" />

				<section className="story-section">
					<h2 className="story-title">Portfolio</h2>
					<div className="story-grid">
						{PROJECTS.map((p) => (
							<div key={p.title} className="story-image" style={{padding: '1rem'}}>
								<h3 className="story-title" style={{fontSize: '1.125rem'}}>{p.title}</h3>
								<p className="story-text">{p.desc}</p>
								<p style={{fontSize: '0.85rem', color: 'rgba(62,39,35,0.6)'}}>{p.category}</p>
							</div>
						))}
					</div>
				</section>

				<div className="ring-divider" aria-hidden="true" />

				<section className="story-section section-soft">
					<h2 className="story-title">From the Blog</h2>
					<div className="story-grid">
						{POSTS.map((post) => (
							<article key={post.slug} style={{padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.04)'}}>
								<h3 className="story-title" style={{fontSize: '1.125rem'}}>{post.title}</h3>
								<p style={{color: 'rgba(62,39,35,0.6)', margin: '0.25rem 0'}}>{post.date}</p>
								<p className="story-text">{post.excerpt}</p>
								<a href={post.slug} style={{color: 'var(--caramel)', fontWeight: 600}}>Read more →</a>
							</article>
						))}
					</div>
				</section>
			</main>

			<footer className="footer">
				<div className="footer-content">
					<p>© 2026 Team Portfolio. All rights reserved.</p>
					<div className="footer-links">
						<a href="/portfolio">Portfolio</a>
						<a href="/blog">Blog</a>
						<a href="/contact">Contact</a>
					</div>
				</div>
			</footer>
		</div>
	)
} 