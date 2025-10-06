# 🎬 Demo Script - Syntheseek Presentation

## Introduction (15 seconds)

"Hi! I'm presenting Syntheseek - an AI-powered search engine that synthesizes information from multiple sources using Cerebras, Meta Llama, and Docker."

## Problem Statement (15 seconds)

"Traditional search engines give you links. You click, read, compare sources yourself. It's time-consuming and overwhelming. Syntheseek solves this by delivering intelligent, cited answers instantly."

## Demo Flow (60 seconds)

### 1. Show Landing Page (10 seconds)
- **Action:** Navigate to homepage
- **Highlight:** 
  - Clean, modern UI with glass-morphism design
  - Interactive eyes that follow cursor (unique feature!)
  - "Powered by Cerebras AI & Llama" badge

**Script:** "Notice our interactive mascot - the eyes actually follow your cursor across the screen. This showcases our attention to user experience."

### 2. Perform Search (20 seconds)
- **Action:** Type query: "What is Llama 4 Scout and how does it compare to GPT-4?"
- **Highlight:**
  - Real-time source loading (show 9 sources appearing)
  - Streaming answer with citations [1][2][3]
  - Source cards with metadata

**Script:** "Watch as Syntheseek searches the web using Exa, retrieves 9 sources, and uses Cerebras-powered Llama 4 Scout to generate this comprehensive answer in under 2 seconds. Notice the citations linking to sources."

### 3. Show Follow-up Questions (10 seconds)
- **Highlight:**
  - 3 AI-generated related questions
  - Powered by Llama 3.1 8B

**Script:** "Below, Llama 3.1 automatically suggests three related questions for deeper exploration."

### 4. Click a Source (10 seconds)
- **Action:** Click on one of the source cards
- **Highlight:**
  - Source preview with title, description, URL
  - Clean card design with hover effects

**Script:** "Each source is beautifully presented with full metadata, and you can visit them directly."

### 5. Show GitHub Star Button (5 seconds)
- **Action:** Hover over GitHub button in header
- **Highlight:**
  - Live star count animation
  - Rainbow glow effect

**Script:** "We've even animated our GitHub star counter using Framer Motion!"

### 6. Docker Integration (5 seconds)
- **Action:** Quickly show terminal with docker-compose up command
- **Highlight:**
  - Show container running
  - Health check passing

**Script:** "And it's fully containerized with Docker for one-command deployment."

## Technical Highlights (20 seconds)

**Script:** "Under the hood, Syntheseek uses:
- Cerebras API for lightning-fast inference with the world's fastest AI chip
- Meta's Llama 4 Scout for answer generation and Llama 3.1 for suggestions
- Docker multi-stage builds with health monitoring for production deployment
- Next.js 14 with streaming for real-time responses"

## Sponsor Integration Summary (10 seconds)

**Script:** "This demonstrates all three sponsor technologies:
- Cerebras: Sub-500ms latency for first token
- Meta Llama: Strategic use of 17B and 8B models
- Docker: Production-ready containerization with security best practices"

## Closing (10 seconds)

**Script:** "Syntheseek makes AI search accessible, fast, and beautifully designed. The code is open source, fully documented, and ready for production deployment. Thank you!"

---

## Key Talking Points

### For Cerebras Track
- "We're using Cerebras's world-fastest AI chip to deliver sub-second first-token latency"
- "The streaming implementation provides immediate user feedback"
- "Strategic model selection: Llama 4 Scout for complex reasoning, Llama 3.1 for quick tasks"

### For Meta Llama Track
- "We leverage two different Llama models optimally: 17B for deep understanding, 8B for efficiency"
- "Advanced prompt engineering ensures high-quality citations"
- "Demonstrates real-world application of open-source LLMs"

### For Docker Track
- "Multi-stage Docker build reduces image size by 60%"
- "Implements security best practices: non-root user, minimal base image"
- "Production-ready with health checks and auto-restart policies"
- "Cloud-agnostic deployment to AWS, GCP, or Azure"

---

## Backup Answers for Q&A

**Q: Why use two different Llama models?**
A: "Llama 4 Scout (17B) provides superior reasoning for synthesizing multiple sources. Llama 3.1 (8B) is faster and more cost-effective for the simpler task of generating follow-up questions. This demonstrates strategic optimization."

**Q: How does Docker improve your deployment?**
A: "Docker ensures consistent environments from development to production. Our multi-stage build optimizes size and security. Health checks enable auto-recovery. And it's cloud-agnostic - deploy anywhere with one command."

**Q: What makes Cerebras special here?**
A: "Cerebras delivers first-token latency under 500ms - that's why our streaming feels instant. Traditional GPUs would take 2-3 seconds. This speed difference transforms user experience."

**Q: How scalable is this?**
A: "Very scalable. Docker enables horizontal scaling. Cerebras handles high concurrency. The stateless Next.js architecture means we can add containers as needed. Plus, caching reduces API calls."

**Q: What was the biggest technical challenge?**
A: "Implementing smooth streaming while maintaining citation accuracy. We had to carefully parse Llama's output in real-time while tracking source references. The solution involved custom parsing logic and state management."

---

## Demo Environment Checklist

- [ ] .env file with valid API keys
- [ ] Docker daemon running
- [ ] Application built and tested locally
- [ ] Network connection stable
- [ ] Browser cleared of cache
- [ ] Terminal ready for Docker commands
- [ ] GitHub repository open in another tab
- [ ] README.md and HACKATHON_SUBMISSION.md reviewed

## Backup Demo Plan

If live demo fails:
1. Have a pre-recorded video ready
2. Show screenshots of key features
3. Walk through code in IDE showing Cerebras/Llama/Docker integration
4. Demonstrate Docker commands in terminal

---

## Time Allocation (2 minutes total)

- Introduction: 15s
- Problem: 15s
- Demo: 60s
- Technical: 20s
- Sponsors: 10s
- Closing: 10s
- Buffer: 10s

**Practice this flow multiple times to stay within 2 minutes!**
