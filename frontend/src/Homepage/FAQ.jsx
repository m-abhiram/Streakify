import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import "./FAQ.css";

const faqs = [
  {
    question: "💡 What is Streakify?",
    answer:
      "Streakify is a gamified productivity platform that helps you build habits, stay consistent, and achieve your personal goals. With features like habit tracking, to-do lists, Pomodoro timers, and personal dashboards, Streakify transforms self-growth into an engaging, reward-driven experience.",
  },
  {
    question: "🔥 How does the streak system work?",
    answer:
      "Each day you complete a habit, your streak continues — motivating you to stay consistent. Miss a day, and your streak resets. The goal is simple: turn daily progress into unstoppable momentum.",
  },
  {
    question: "🎮 What are Pomocoins?",
    answer:
      "Pomocoins are virtual reward points you earn by completing tasks, maintaining streaks, and staying productive. They help you gamify your journey and visualize your growth through meaningful milestones.",
  },
  {
    question: "🕐 How does the Pomodoro timer help me stay productive?",
    answer:
      "The Pomodoro Timer breaks your work into focused intervals followed by short breaks. This method helps you beat procrastination, boost concentration, and maintain consistent output without burnout.",
  },
  {
    question: "📋 Can I customize my habits and tasks?",
    answer:
      "Absolutely! You can add, edit, or remove habits and tasks based on your personal or professional goals — whether it’s fitness, learning, productivity, or mindfulness.",
  },
  {
    question: "📈 What is the Personal Dashboard?",
    answer:
      "The Personal Dashboard is your command center for growth — where you can visualize progress, track streaks, and analyze productivity trends over time.",
  },
  {
    question: "☁️ Will my data be saved if I log out?",
    answer:
      "Yes. Your data is securely stored in the cloud, so you can log in from any device and continue where you left off — consistency meets convenience.",
  },
  {
    question: "🔒 Is my data secure?",
    answer:
      "Absolutely. Streakify uses JWT-based authentication and secure backend APIs to protect your personal information and activity data. Your progress stays yours. Always.",
  },
  {
    question: "🚀 Who is Streakify for?",
    answer:
      "Streakify is built for students, professionals, and creators who want to level up their lives through consistency and accountability. If you’re ready to grow — you belong here.",
  },
  {
    question: "💬 How can I share feedback or suggestions?",
    answer:
      "We love hearing from our users! You can contact us directly through the Feedback section in your dashboard or reach out via mabhiram255@gmail.com . Your insights help shape the future of Streakify.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">
        Everything you need to know about <span>Streakify</span> — your personal
        growth companion.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <FiChevronDown
                className={`faq-icon ${
                  activeIndex === index ? "rotated" : ""
                }`}
              />
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
