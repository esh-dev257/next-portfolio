"use client";

import React, { useState, useRef } from "react";
import SectionHeader from "./SectionHeader";
import RetroButton from "./RetroButton";
import RetroToast from "./RetroToast";
import { Mail, Linkedin, Github, FileText, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    description: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Next.js environment variables are available on process.env
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Debug check — remove after confirming it works
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS env variables:", {
        serviceId,
        templateId,
        publicKey,
      });
      setToastMessage("Email config missing. Check .env file! ⚠️");
      setToastType("error");
      setShowToast(true);
      return;
    }

    setIsSending(true);
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setFormData({ name: "", subject: "", description: "" });
      setToastMessage("Message sent successfully! +100XP 🎮");
      setToastType("success");
      setShowToast(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setToastMessage("Failed to send message. Try again! 💀");
      setToastType("error");
      setShowToast(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 max-w-4xl mx-auto mb-20 relative"
    >
      <SectionHeader title="Game Over? Continue?" icon={<Mail size={32} />} />

      {showToast && (
        <RetroToast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="bg-[#261a22] border-4 border-white p-6 sm:p-10 shadow-pixel relative">
        <div className="absolute top-2 right-2 flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="font-pixel text-xs text-retro-green">
                Player Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="bg-[#1e1218] border-2 border-slate-600 p-2 font-retro text-xl text-white focus:border-retro-pink outline-none placeholder:text-slate-600 placeholder:text-sm"
                required
                disabled={isSending}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-pixel text-xs text-retro-green">
                Quest (Subject)
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's your quest about?"
                className="bg-[#1e1218] border-2 border-slate-600 p-2 font-retro text-xl text-white focus:border-retro-pink outline-none placeholder:text-slate-600 placeholder:text-sm"
                required
                disabled={isSending}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-pixel text-xs text-retro-green">
                Briefing
              </label>
              <textarea
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your mission..."
                className="bg-[#1e1218] border-2 border-slate-600 p-2 font-retro text-xl text-white focus:border-retro-pink outline-none resize-none placeholder:text-slate-600 placeholder:text-sm"
                required
                disabled={isSending}
              />
            </div>

            <RetroButton
              type="submit"
              className={`w-full mt-4 flex items-center justify-center gap-2 ${
                isSending ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Mail size={16} />
                  <span>Send Message</span>
                </>
              )}
            </RetroButton>
          </form>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <p className="font-retro text-2xl text-gray-300 leading-relaxed">
                Ready to start a new game? I am currently available for new
                opportunities and collaborations.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-white hover:text-retro-cyan transition-colors">
                  <Mail size={24} />
                  <a
                    href="mailto:eshitabhawsar@gmail.com"
                    className="font-retro text-xl"
                  >
                    eshitabhawsar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-pixel text-xs text-retro-yellow mb-4 border-b border-gray-600 pb-2">
                Connect via Network
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/eshita-bhawsar-552a82255/"
                  target="_blank"
                  className="bg-[#1e1218] p-3 border-2 border-white hover:border-retro-cyan hover:bg-slate-800 transition-all shadow-pixel active:translate-y-1 active:shadow-none flex items-center gap-2 group"
                >
                  <Linkedin className="text-white" />
                  <span className="font-pixel text-[10px] text-white hidden group-hover:inline">
                    Linkedin
                  </span>
                </a>

                <a
                  href="https://github.com/esh-dev257"
                  target="_blank"
                  className="bg-[#1e1218] p-3 border-2 border-white hover:border-retro-green hover:bg-slate-800 transition-all shadow-pixel active:translate-y-1 active:shadow-none flex items-center gap-2 group"
                >
                  <Github className="text-white" />
                  <span className="font-pixel text-[10px] text-white hidden group-hover:inline">
                    Github
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1e1218] p-3 border-2 border-white hover:border-retro-pink hover:bg-slate-800 transition-all shadow-pixel active:translate-y-1 active:shadow-none flex items-center gap-2 group"
                  title="Download Resume"
                >
                  <FileText className="text-white" />
                  <span className="font-pixel text-[10px] text-white hidden group-hover:inline">
                    RESUME
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
