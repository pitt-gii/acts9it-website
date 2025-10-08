import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-900 text-white'} py-4 px-6 flex justify-between items-center transition-all duration-300`}>
      <h1 className="font-bold text-xl">Acts9 IT Services</h1>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/services" className="hover:text-yellow-400">Services</Link>
        <Link to="/plans" className="hover:text-yellow-400">Plans</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        <button
          onClick={toggleTheme}
          className="ml-4 bg-yellow-400 text-black font-semibold px-3 py-1 rounded-lg hover:bg-yellow-300"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

function Footer({ darkMode }) {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-blue-900 text-blue-200'} text-center py-6 text-sm mt-10 transition-all duration-300`}>
      <p>Acts9 IT Services — Managed IT & Web Development from the Philippines, proudly serving businesses worldwide.</p>
      <p>Office: Manila (Remote-capable)</p>
    </footer>
  );
}

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return null;
}

function HomePage() {
  return (
    <section className="bg-blue-900 text-white py-20 px-6 text-center transition-all duration-300 overflow-hidden">
      <ScrollToTop />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Managed IT Services & Web Development</h1>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Reliable, Scalable IT & Web Solutions for Global Businesses
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="max-w-3xl mx-auto mb-8">
        Your trusted partner in managed IT services — from desktop support to cloud and custom web development — powered by a professional and dedicated team at Acts9 IT Services, based in the Philippines.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300">Get a Free IT Health Check</button>
        <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900">Book a Consultation</button>
      </motion.div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <ScrollToTop />
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard title="Helpdesk & Desktop Support" items={["Proactive monitoring","Troubleshooting (Windows/macOS)","Application & patch management","Hardware & software asset tracking"]} />
        <ServiceCard title="Server Support & Management" items={["Windows & Linux server management","Active Directory & domain support","Backup & disaster recovery","24/7 uptime monitoring"]} />
        <ServiceCard title="Cloud Support – AWS & Azure Experts" items={["Cloud instance deployment & scaling","Azure AD / Identity management","AWS EC2, S3, RDS, and backup services","Migrations, licensing, and billing optimization"]} />
        <ServiceCard title="Website Development & Support" items={["WordPress, Shopify, and custom builds","Ongoing maintenance & content updates","SEO-friendly & mobile optimized","Web hosting and security (SSL, backups)"]} />
      </div>
    </section>
  );
}

function ServiceCard({ title, items }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow p-6 transition-transform">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </motion.div>
  );
}

function PlansPage() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <ScrollToTop />
      <h2 className="text-3xl font-bold text-center mb-10">Service Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <PlanCard title="Startup Support" subtitle="Best for small businesses" items={["Helpdesk (business hours)","Server maintenance","Basic web support"]} />
        <PlanCard title="Business Pro" subtitle="Most Popular" highlight items={["24/7 helpdesk","Full server & cloud management","Website management (up to 2 sites)"]} />
        <PlanCard title="Enterprise Care" subtitle="For growing teams" items={["Dedicated remote IT staff","AWS/Azure provisioning","Priority response SLA","Custom web dev projects"]} />
      </div>
    </section>
  );
}

function PlanCard({ title, subtitle, items, highlight }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={`${highlight ? 'bg-blue-900 text-white' : 'bg-white text-gray-800'} rounded-2xl shadow p-6 text-center`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="mb-4">{subtitle}</p>
      <ul className="list-disc pl-5 text-left space-y-1">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <ScrollToTop />
      <h2 className="text-3xl font-bold mb-8">Why Choose Acts9 IT Services?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AboutCard title="Skilled Filipino IT Talent" text="Our team of certified IT professionals is based in the Philippines, delivering world-class services at competitive rates — without compromising quality or response times." />
        <AboutCard title="Global Mindset, Local Expertise" text="We understand the needs of modern businesses around the world and tailor our solutions to your timezone, compliance requirements, and industry standards." />
        <AboutCard title="24/7 Support – With Real Humans" text="Our support never sleeps. Whether it’s an urgent desktop issue, a downed website, or a cloud performance check — we’re on it." />
      </div>
    </section>
  );
}

function AboutCard({ title, text }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow p-6 transition-transform">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
      .then(
        () => setStatus('✅ Message sent successfully!'),
        (error) => setStatus('❌ Failed to send. Please try again.')
      );
  };

  return (
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <ScrollToTop />
      <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
      <p className="max-w-2xl mx-auto mb-8">Ready to transform your IT operations and digital presence?</p>
      <form onSubmit={sendEmail} className="max-w-md mx-auto bg-white text-gray-800 p-6 rounded-xl shadow space-y-4">
        <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
        <textarea name="message" placeholder="Your Message" rows="4" value={form.message} onChange={handleChange} className="w-full p-3 border rounded-lg" required></textarea>
        <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
      </form>
      {status && <p className="mt-4 text-lg">{status}</p>}
      <p className="text-lg mt-6">Or reach us directly:</p>
      <p className="text-lg">Email: <a href="mailto:support@acts9it.com" className="underline">support@acts9it.com</a></p>
      <p className="text-lg">Phone: +63 917000000</p>
    </section>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={`${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-800'} min-h-screen flex flex-col transition-all duration-300`}>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}
