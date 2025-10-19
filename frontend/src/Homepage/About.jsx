import React from "react";
import { motion } from "framer-motion";
import { FaFireAlt, FaChartLine, FaGamepad, FaClock } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="about-title">About Streakify</h1>
        <p className="about-subtitle">
          The productivity companion that transforms consistency into success.
        </p>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="about-description">
          <span className="highlight">Streakify</span> is a gamified self-growth platform built to help you
          stay consistent, focused, and motivated. It blends the science of habit
          formation with the fun of gamification — empowering you to turn your
          everyday goals into a rewarding, trackable journey.
        </p>

        <p className="about-description">
          Designed for students, professionals, and creators, Streakify uses
          streak-based mechanics, productivity tracking, and personalized
          dashboards to make consistency feel effortless and exciting.
        </p>
      </motion.div>

      <motion.div
        className="features-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="feature-card">
          <FaFireAlt className="feature-icon" />
          <h3 className="feature-title">Habit Streaks</h3>
          <p className="feature-text">
            Build consistency with daily habit tracking and streak-based
            motivation. Never lose momentum again.
          </p>
        </div>

        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3 className="feature-title">Pomodoro Productivity</h3>
          <p className="feature-text">
            Stay focused with time-boxed work sessions that help you beat
            procrastination and burnout.
          </p>
        </div>

        <div className="feature-card">
          <FaGamepad className="feature-icon" />
          <h3 className="feature-title">Gamified Growth</h3>
          <p className="feature-text">
            Earn Pomocoins, unlock milestones, and turn your self-improvement
            journey into an interactive game.
          </p>
        </div>

        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3 className="feature-title">Personal Dashboard</h3>
          <p className="feature-text">
            Visualize your progress, monitor streaks, and track performance
            trends with powerful analytics.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="about-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2 className="footer-heading">
          Consistency. Focus. Growth. <span>Streakify</span> makes it simple.
        </h2>
        <p className="footer-text">
          Join a community of achievers who are transforming their routines into
          lasting success — one streak at a time.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
