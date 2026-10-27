import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { products } from '../data/products';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: 'General Art Curation & Advisory',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid contact number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (8–15 digits).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please share a brief note about your space or artwork preference.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    // Success in demo mode
    setErrors({});
    setIsSubmitted(true);
    setSubmissionData({ ...formData });
  };

  // Pre-fill WhatsApp message from form input
  const generatedWhatsAppUrl = formData.fullName.trim()
    ? `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(
        `Hello Kapil Yadav / The Sketchy Wall,\n\nMy name is ${formData.fullName}.\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nMessage: ${formData.message}`
      )}`
    : `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(
        `Hello Kapil Yadav / The Sketchy Wall, I would like to enquire about bespoke wall art curation.`
      )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-sand-50/80 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Client Advisory & Inquiries</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-medium tracking-tight">
                Let’s Curate Your Walls.
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
                Whether you’re outfitting an entire apartment, seeking a grand statement canvas, or need custom dimensions, Kapil Yadav and our atelier team are ready to assist.
              </p>
            </div>

            {/* Direct WhatsApp Callout Box */}
            <div className="bg-charcoal-900 text-ivory-50 p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-olive-700/80 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium">Direct WhatsApp Advisory</h4>
                  <p className="text-xs text-sand-300">Fastest response for sizing & mockups</p>
                </div>
              </div>

              <p className="text-xs text-sand-200/90 font-light leading-relaxed">
                Send us a photograph of your empty wall or your interior blueprint for complimentary layout recommendations.
              </p>

              <a
                href={generatedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp: {siteConfig.contact.whatsappNumber}</span>
              </a>

              <p className="text-[10px] text-sand-400 text-center font-mono">
                [Placeholder WhatsApp: Configurable in siteConfig.js]
              </p>
            </div>

            {/* Contact Information List */}
            <div className="space-y-4 pt-2 text-xs text-charcoal-700">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal-900 block">Email Inquiries:</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline text-charcoal-600">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal-900 block">Studio Hours:</span>
                  <span className="text-charcoal-600">{siteConfig.contact.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal-900 block">Studio Atelier:</span>
                  <span className="text-charcoal-600">{siteConfig.contact.studioAddress}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-ivory-50 p-6 sm:p-10 border border-sand-300 shadow-sm">
            
            <div className="mb-6 pb-4 border-b border-sand-200">
              <h3 className="font-serif text-2xl text-charcoal-900 font-semibold">
                Send an Art Enquiry
              </h3>
              <p className="text-xs text-charcoal-500 font-light mt-1">
                Fill out the details below. Fully validated client-side form.
              </p>
            </div>

            {/* Demo Submission Success Banner */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-fade-in">
                <div className="flex items-center space-x-2 font-medium text-xs sm:text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Demo Submission Verified</span>
                </div>
                <p className="text-xs text-emerald-800 font-light leading-relaxed">
                  Thank you, <strong>{submissionData.fullName}</strong>. In production, this form instantly dispatches an enquiry notification to Kapil Yadav's inbox and CRM.
                </p>
                <div className="pt-2">
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-emerald-800 font-semibold underline underline-offset-4 hover:text-emerald-950"
                  >
                    <span>Click here to also forward this message directly to WhatsApp</span>
                    <Send className="w-3 h-3 inline" />
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                  Full Name <span className="text-terracotta-600">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Radhika Sharma"
                  className={`w-full bg-sand-50/50 border px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:ring-1 ${
                    errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-sand-300 focus:ring-charcoal-900'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Contact Grid: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                    Phone / WhatsApp <span className="text-terracotta-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full bg-sand-50/50 border px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:ring-1 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-sand-300 focus:ring-charcoal-900'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                    Email Address <span className="text-charcoal-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. radhika@example.com"
                    className={`w-full bg-sand-50/50 border px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:ring-1 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-sand-300 focus:ring-charcoal-900'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Product / Category of Interest */}
              <div>
                <label htmlFor="interest" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                  Artwork or Category of Interest
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-sand-50/50 border border-sand-300 px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-charcoal-900 cursor-pointer"
                >
                  <option value="General Art Curation & Advisory">General Art Curation & Spatial Advisory</option>
                  <option value="Living Room Feature Wall">Living Room Feature Wall Planning</option>
                  <option value="Gallery Wall Sets">Gallery Wall Sets (Diptychs / Triptychs)</option>
                  <option value="Statement Scale Artworks">Monumental Statement Scale Pieces</option>
                  {products.map((p) => (
                    <option key={p.id} value={`Specific Artwork: ${p.name}`}>
                      Artwork: {p.name} ({p.category})
                    </option>
                  ))}
                  <option value="Home Décor Objects">Artisanal Home Décor & Ceramics</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                  Your Message or Wall Dimensions <span className="text-terracotta-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details such as room type, wall dimensions, preferred colors, or questions about frames..."
                  className={`w-full bg-sand-50/50 border px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:ring-1 ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-sand-300 focus:ring-charcoal-900'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Demo Enquiry</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
