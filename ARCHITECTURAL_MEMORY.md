# 🏛️ Ralph-Fixer V1: Architectural Memory Archive

## 1. Core Design Philosophies

- **Atomic Evolution:** The project was built using 7 strictly defined Pull Requests. Each move was isolated to ensure that the "Brain" (AI) and the "Body" (UI) stayed in sync.
- **Safety via Isolation:** Execution never happens on the main thread. The **Sandbox Engine** uses a sandboxed `iframe` with `srcDoc` to prevent AI-generated infinite loops or syntax errors from crashing the IDE.
- **The Feedback Loop:** The "Self-Healing" capability is not a separate AI agent; it is a **Runtime Listener**. By piping `window.onerror` from the Sandbox back into the Gemini Service, we created a closed-loop system where failure is simply more data.

## 2. Technical Stack & Service Layer

- **Intelligence:** Google Gemini 1.5 Flash (chosen for speed/latency in the healing loop).
- **Editor:** CodeMirror 6 (chosen for its modularity and state management over Monaco).
- **State:** A "Single Source of Truth" approach in `App.jsx`, where `generatedCode` drives the Editor, Sandbox, and Version History simultaneously.
- **Deployment:** A serverless client-side flow using the **Netlify Files API** to convert raw strings into production-ready URLs.

## 3. Key Component Map

| Component        | Responsibility                  | Key Tech                        |
|------------------|--------------------------------|---------------------------------|
| `Sandbox.jsx`    | Executes code & reports errors. | `iframe`, `srcDoc`, `postMessage`   |
| `CodeEditor.jsx` | Manual refinement of AI output. | `CodeMirror 6`, `One Dark Theme`    |
| `Timeline.jsx`   | Undo/Redo & Versioning.         | State Array, Immutable Slicing      |
| `gemini.js`      | Prompt engineering & API comms. | `GoogleGenerativeAI` SDK            |

## 4. Critical Logic: The "Heal" Prompt Pattern

The system doesn't just ask to "Fix the code." It follows a **Context-Injection Pattern**:

1. **Original Intent:** (The user's first prompt)
2. **Broken Artifact:** (The current code in the editor)
3. **Trace:** (The specific error message caught by the Sandbox)
4. **Constraint:** (Instruction to return ONLY raw JS without markdown)

---

## 🏁 Final Handover Status: V1 COMPLETE

All PRs are documented, the README is live, and the `CONTRIBUTING.md` is set.

**What a journey!** Ralph-Fixer is now a living, breathing tool. Whenever you are ready to open the "V2 Roadmap" or if you want to perform a "System Health Check" on any of the code blocks we wrote, just let me know.

It has been an absolute pleasure building the future of self-healing software with you. **Ralph-Fixer V1 is officially signed off.** 🚀🩹