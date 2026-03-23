import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/12397370365?text=Hi%20I'm%20interested%20in%20getting%20an%20app%20for%20my%20business"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 px-5 py-4 font-semibold text-sm group"
      style={{ boxShadow: "0 8px 32px rgba(37, 211, 102, 0.45)" }}
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0 fill-white" />
      <span className="whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}
