import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "Services Overview",
    content: `Real App Solutions builds custom mobile-friendly apps for local businesses. Every app we build is designed specifically for your business — we don't sell templates or off-the-shelf software. The details of what we build, the timeline, and what's included are agreed upon before any work begins.`,
  },
  {
    title: "No Guarantee of Specific Results",
    content: `We build tools to help your business look more professional and make it easier for clients to reach you. However, we cannot guarantee specific outcomes like a certain number of new clients, bookings, or revenue increases. Results depend on many factors outside of our control, including how you use the app and how your business operates.`,
  },
  {
    title: "Client Responsibility",
    content: `You are responsible for providing accurate information about your business, including any content, images, or details you want included in your app. You are also responsible for how you use the app once it's delivered — including how you communicate with your clients and how you manage requests. We are not responsible for any outcomes that result from how the app is used after delivery.`,
  },
  {
    title: "Payment Terms",
    content: `Our apps are priced as a one-time build fee — there are no recurring monthly charges from us for building your app. A deposit is typically required before work begins, with the remaining balance due upon delivery. Payment terms are confirmed in writing before any project starts. Once a phase of work is completed, payments made for that phase are non-refundable.`,
  },
  {
    title: "Contact Information",
    content: `If you have questions about these terms or anything related to your project, you can reach us through the contact form on our website or via WhatsApp. We're a small team and we're happy to talk things through directly.`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="mb-12">
          <Link href="/" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Terms of Service
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
