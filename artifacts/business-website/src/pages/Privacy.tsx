import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "Introduction",
    content: `At Real App Solutions, we take your privacy seriously. This page explains what information we collect when you reach out to us, how we use it, and how we keep it safe. We keep things simple — no complicated legal language.`,
  },
  {
    title: "Information We Collect",
    content: `When you contact us through our website form or directly, we may collect your name, email address, and phone number. We only collect what's needed to respond to your inquiry and learn about your business needs.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to respond to your inquiry, discuss your project, and follow up if needed. We do not use your information for marketing campaigns, and we never sell or share your details with anyone outside of Real App Solutions.`,
  },
  {
    title: "Data Protection",
    content: `We store your contact information securely and only keep it for as long as it's relevant to our conversation or working relationship. If you'd like us to delete your information at any time, just let us know and we'll take care of it.`,
  },
  {
    title: "Third-Party Services",
    content: `We may communicate with you through WhatsApp or email to follow up on your inquiry. These are standard communication tools — we do not share your information with these platforms beyond what is necessary to send and receive messages. Our website may also use basic analytics to understand general visitor behavior (such as page views), but this does not identify you personally.`,
  },
  {
    title: "Contact Information",
    content: `If you have any questions about this Privacy Policy or want to request that we update or delete your information, you can reach us directly through the contact form on our website or via WhatsApp. We're happy to help.`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="mb-12">
          <Link href="/" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: March 2026</p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <div key={i} className="border-t border-white/5 pt-8">
              <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
