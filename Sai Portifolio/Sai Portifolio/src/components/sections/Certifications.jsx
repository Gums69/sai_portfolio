import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ZoomIn, FileText, Image } from 'lucide-react';
import { textVariant, fadeIn } from '../../utils/motion';

const certifications = [
  {
    id: 1,
    title: "Packet Switching Networks and Algorithms",
    issuer: "Coursera",
    type: "image",
    file: "/cert-coursera.jpeg",
    color: "#00f0ff",
    badge: "🎓",
    year: "2024",
  },
  {
    id: 2,
    title: "Java Programming Language",
    issuer: "NeoColab",
    type: "image",
    file: "/cert-neocolab.jpeg",
    color: "#8a2be2",
    badge: "💻",
    year: "2024",
  },
  {
    id: 3,
    title: "DBMS Certificate",
    issuer: "Academic",
    type: "pdf",
    file: "/cert-dbms.pdf",
    color: "#00f0ff",
    badge: "🗄️",
    year: "2024",
  },
  {
    id: 4,
    title: "SWAYAM-NPTEL – Security and Privacy",
    issuer: "NPTEL",
    type: "pdf",
    file: "/cert-nptel.pdf",
    color: "#8a2be2",
    badge: "🔐",
    year: "2024",
  },
];

const CertificateModal = ({ cert, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0f]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cert.badge}</span>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{cert.title}</h3>
                <p className="text-textMuted text-sm">{cert.issuer} · {cert.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all text-sm font-semibold"
              >
                <ExternalLink size={16} /> Open Full Screen
              </a>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Certificate Display */}
          <div className="overflow-auto max-h-[calc(90vh-100px)] flex items-center justify-center p-4 bg-black/50">
            {cert.type === 'image' ? (
              <img
                src={cert.file}
                alt={cert.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-lg select-none"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              />
            ) : (
              <div className="w-full flex flex-col items-center gap-6 py-12">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <FileText size={40} className="text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-xl mb-2">{cert.title}</h4>
                  <p className="text-textMuted mb-6">{cert.issuer}</p>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-background font-bold hover:scale-105 transition-all shadow-glass-glow"
                  >
                    <ExternalLink size={20} /> View Certificate PDF
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const CertCard = ({ cert, index, onView }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="glass rounded-2xl overflow-hidden border border-cardBorder hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,240,255,0.12)]">
      
      {/* Certificate preview */}
      <div className="relative h-48 overflow-hidden bg-card/80 flex items-center justify-center">
        {cert.type === 'image' ? (
          <>
            <img
              src={cert.file}
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div
              className="hidden absolute inset-0 flex-col items-center justify-center"
              style={{ display: 'none' }}
            >
              <span className="text-5xl mb-2">{cert.badge}</span>
              <span className="text-textMuted text-sm">{cert.issuer}</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: `radial-gradient(circle at center, ${cert.color} 0%, transparent 70%)` }}
            />
            <FileText size={48} className="text-primary/70 relative z-10" />
            <span className="text-textMuted text-sm relative z-10">{cert.issuer} · PDF</span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm z-20">
          <span className="flex items-center gap-2 text-white font-semibold">
            <ZoomIn size={20} /> Preview
          </span>
        </div>

        {/* Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs font-bold border border-white/10 text-white/80">
            {cert.year}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border text-base"
            style={{ borderColor: `${cert.color}40`, background: `${cert.color}15` }}
          >
            {cert.badge}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-textMuted text-xs mt-1 flex items-center gap-1">
              <Award size={12} className="text-secondary shrink-0" />
              {cert.issuer}
            </p>
          </div>
        </div>

        <button
          onClick={() => onView(cert)}
          className="w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 border group-hover:scale-[1.02]"
          style={{
            background: `${cert.color}15`,
            borderColor: `${cert.color}40`,
            color: cert.color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${cert.color}25`;
            e.currentTarget.style.borderColor = `${cert.color}80`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${cert.color}15`;
            e.currentTarget.style.borderColor = `${cert.color}40`;
          }}
        >
          {cert.type === 'image' ? (
            <><Image size={16} /> View Certificate</>
          ) : (
            <><FileText size={16} /> View Certificate</>
          )}
        </button>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 max-w-7xl mx-auto px-6 sm:px-16 overflow-hidden">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-secondary tracking-widest text-sm font-semibold uppercase mb-2">Credentials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-textMain glow-text mb-4">
          Certifications.
        </h2>
        <p className="text-textMuted text-base max-w-xl mb-12 leading-relaxed">
          Verified credentials from leading platforms. Click <span className="text-primary font-semibold">View Certificate</span> to preview each one.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <CertCard key={cert.id} cert={cert} index={index} onView={setActiveCert} />
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </section>
  );
};

export default Certifications;
