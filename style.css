* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: white;
  overflow-x: hidden;
  position: relative;
}

/* Background glow */
body::before,
body::after {
  content: "";
  position: fixed;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  filter: blur(70px);
  z-index: -3;
  opacity: 0.28;
  animation: floatGlow 10s ease-in-out infinite;
}

body::before {
  top: 80px;
  left: -60px;
  background: #60a5fa;
}

body::after {
  bottom: 60px;
  right: -60px;
  background: #22d3ee;
  animation-delay: 2s;
}

.floating-orb {
  position: fixed;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  filter: blur(55px);
  opacity: 0.18;
  z-index: -2;
  animation: drift 14s ease-in-out infinite;
  pointer-events: none;
}

.orb-1 {
  top: 28%;
  left: 8%;
  background: #818cf8;
}

.orb-2 {
  top: 18%;
  right: 10%;
  background: #38bdf8;
  animation-delay: 3s;
}

.orb-3 {
  bottom: 10%;
  left: 42%;
  background: #22d3ee;
  animation-delay: 5s;
}

/* Header */
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 40px;
  background-color: rgba(2, 6, 23, 0.72);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

.logo {
  margin: 0;
  font-size: 1.5rem;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #cbd5f5;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover,
nav a.active {
  color: #60a5fa;
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.7);
}

/* Scroll snap layout */
.scroll-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.panel {
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 60px;
}

.panel-content {
  width: 100%;
  max-width: 1000px;
  text-align: center;
}

/* Hero */
h1 {
  font-size: clamp(2.8rem, 8vw, 5rem);
  margin-bottom: 14px;
}

h2 {
  font-size: clamp(2.2rem, 6vw, 3.4rem);
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.15rem;
  color: #94a3b8;
  margin-bottom: 28px;
}

.section-text {
  max-width: 800px;
  margin: 0 auto 28px;
  font-size: 1.08rem;
  color: #cbd5e1;
  line-height: 1.8;
}

/* Buttons */
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  background: #60a5fa;
  color: #03111f;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 18px rgba(96, 165, 250, 0.6);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 1px solid #60a5fa;
}

/* Typing + hover */
.name-hover {
  transition: transform 0.3s ease, text-shadow 0.3s ease;
  display: inline-block;
}

.name-hover:hover {
  transform: scale(1.05);
  text-shadow:
    0 0 10px #60a5fa,
    0 0 20px #60a5fa,
    0 0 30px #60a5fa;
}

.typing-text {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #60a5fa;
  width: 0;
  margin: 0 auto 12px;
  animation: typing 1.4s steps(14, end) forwards, blink 0.7s step-end infinite;
}

/* Cards */
.info-card,
.project,
.contact-box {
  background-color: rgba(2, 6, 23, 0.92);
  border: 1px solid #1e293b;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
  border-radius: 14px;
  padding: 26px;
}

.info-card {
  max-width: 760px;
  margin: 0 auto;
}

.info-card h3,
.project h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.info-card p,
.project p,
.contact-box p {
  color: #cbd5e1;
  line-height: 1.8;
  margin: 0;
}

.project {
  max-width: 760px;
  margin: 0 auto 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 18px rgba(96, 165, 250, 0.2), 0 14px 30px rgba(0, 0, 0, 0.24);
}

.contact-box {
  max-width: 700px;
  margin: 0 auto;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 850px;
  margin: 0 auto;
}

.skill-card {
  background-color: rgba(2, 6, 23, 0.92);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  transition: 0.3s;
  border: 1px solid #1e293b;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
}

.skill-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 0 20px #60a5fa, 0 12px 28px rgba(0, 0, 0, 0.25);
  border-color: #60a5fa;
}

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 0.9s ease, transform 0.9s ease;
  will-change: opacity, transform;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

/* Keyframes */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 14ch;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes floatGlow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-25px) translateX(25px);
  }
}

@keyframes drift {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  25% {
    transform: translateY(-20px) translateX(15px) scale(1.05);
  }
  50% {
    transform: translateY(10px) translateX(-18px) scale(0.96);
  }
  75% {
    transform: translateY(-12px) translateX(10px) scale(1.02);
  }
}

/* Responsive */
@media (max-width: 768px) {
  header {
    padding: 18px 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  nav {
    margin-top: 10px;
  }

  nav a {
    margin-left: 0;
    margin-right: 16px;
    display: inline-block;
    margin-bottom: 8px;
  }

  .panel {
    padding-top: 140px;
  }

  .subtitle,
  .section-text,
  .info-card p,
  .project p,
  .contact-box p {
    font-size: 1rem;
  }
}
