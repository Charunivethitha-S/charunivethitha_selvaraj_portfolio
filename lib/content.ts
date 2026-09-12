import type { Experience, Project, Publication } from "./types";

/* ============================================================
   PROJECTS
   ------------------------------------------------------------
   To add a new project in the future:

   1. Copy the project template at the bottom.
   2. Paste it before the closing ]; 
   3. Fill in your project details.
   4. Set featured: true for major projects.
      Set featured: false for academic/additional projects.

   You do NOT need to modify page.tsx for every new project.
   ============================================================ */

export const projects: Project[] = [

  /* ==========================================================
     FEATURED PROJECTS
     ========================================================== */

  {
    slug: "agrinn",
    title: "AgriNN",
    eyebrow: "FPGA ACCELERATOR / ZYNQ-7020",
    summary:
      "INT8 neural-network accelerator with a 16-core MAC systolic architecture and custom DMA for real-time edge inference.",
    description:
      "A hardware-oriented neural-network acceleration project focused on moving inference-critical operations into programmable logic and reducing data-movement overhead.",
    category: "AI Hardware",
    technologies: [
      "Zynq-7020",
      "Verilog",
      "INT8",
      "Systolic Array",
      "DMA"
    ],
    metrics: [
      { value: "<10 ms", label: "target inference" },
      { value: "16-core", label: "MAC array" }
    ],
    featured: true
  },

  {
    slug: "root-of-trust",
    title: "Post-Quantum Root-of-Trust",
    eyebrow: "HARDWARE SECURITY / SOC",
    summary:
      "Pipelined hardware architecture integrating TRNG, Kyber-1024 and ChaCha20 for a quantum-resistant trust foundation.",
    description:
      "A security-focused SoC concept exploring high-throughput cryptographic datapaths, secure key material and hardware acceleration.",
    category: "Security",
    technologies: [
      "Kyber-1024",
      "ChaCha20",
      "TRNG",
      "SoC",
      "RTL"
    ],
    metrics: [
      { value: "2,700×", label: "reported throughput gain" }
    ],
    featured: true
  },

  {
    slug: "snn",
    title: "100-Neuron SNN",
    eyebrow: "NEUROMORPHIC / FPGA",
    summary:
      "Time-multiplexed spiking neural network architecture designed to improve hardware reuse and PPA efficiency.",
    description:
      "A 100-neuron spiking neural-network architecture using hardware reuse and a compact neuron datapath for edge-oriented inference.",
    category: "Neuromorphic",
    technologies: [
      "SNN",
      "LIF",
      "FPGA",
      "Time Multiplexing",
      "Edge AI"
    ],
    metrics: [
      { value: "100", label: "neurons" },
      { value: "PPA", label: "optimization focus" }
    ],
    featured: true
  },

  {
    slug: "signal",
    title: "SIGNAL",
    eyebrow: "ASSISTIVE HARDWARE / FPGA",
    summary:
      "Dual-channel FPGA communication interface using hardware-classified eye-blink and head-tilt inputs.",
    description:
      "An assistive communication prototype that translates two independent physical input channels into deterministic hardware-level communication states.",
    category: "FPGA",
    technologies: [
      "FPGA",
      "Verilog",
      "RTL",
      "Classification",
      "Assistive Tech"
    ],
    featured: true
  },

  {
    slug: "zero-latency-neural-engine",
    title: "Zero-Latency Combinational Neural Engine",
    eyebrow: "NEURAL HARDWARE / ZYNQ",
    summary:
      "Combinational neural-engine architecture implemented on Xilinx Zynq with custom DMA and AXI interfaces.",
    description:
      "A hardware neural-engine project exploring FPGA implementation, custom DMA and AXI-based communication.",
    category: "AI Hardware",
    technologies: [
      "Xilinx Zynq",
      "FPGA",
      "Custom DMA",
      "AXI4-Lite",
      "AXI4-Stream"
    ],
    featured: true
  },

  /* ==========================================================
     ADDITIONAL / ACADEMIC PROJECTS
     ========================================================== */

  /*
    Add your smaller academic projects here.

    Example:

    {
      slug: "4-bit-alu",
      title: "4-bit Arithmetic Logic Unit",
      eyebrow: "DIGITAL DESIGN / FPGA",
      summary:
        "A 4-bit ALU supporting arithmetic and logical operations using RTL design.",
      description:
        "Designed and verified a 4-bit ALU using Verilog and deployed the design on an FPGA.",
      category: "Digital Design",
      technologies: [
        "Verilog",
        "Vivado",
        "FPGA"
      ],
      featured: false
    },

  */

  /* ==========================================================
     ADD NEW PROJECTS BELOW THIS LINE
     ==========================================================

     COPY THIS TEMPLATE:

  {
    slug: "your-project-slug",
    title: "Your Project Title",
    eyebrow: "DOMAIN / TECHNOLOGY",
    summary:
      "One short sentence describing what the project does.",
    description:
      "A slightly longer explanation of the project, architecture,
      implementation or purpose.",
    category: "FPGA",
    technologies: [
      "Verilog",
      "Vivado",
      "FPGA"
    ],
    metrics: [
      { value: "100", label: "example metric" }
    ],
    featured: false
  },

     IMPORTANT:
     - Every project needs a unique slug.
     - Keep featured: true for your strongest projects.
     - Use featured: false for academic/smaller projects.
     - metrics is optional.
     - You can add as many projects as you want.
     ========================================================== */

];


/* ============================================================
   EXPERIENCE
   ============================================================ */

export const experiences: Experience[] = [
  {
    organization: "NIT Tiruchirappalli",
    role: "Technical / Research Internship",
    start_date: "2026",
    end_date: "Present",
    description:
      "Exploring FPGA-oriented hardware architectures, neural-network acceleration and VLSI implementation concepts.",
    technologies: [
      "FPGA",
      "RTL",
      "AI Hardware",
      "VLSI"
    ]
  }
];


/* ============================================================
   PUBLICATIONS / RESEARCH
   ============================================================ */

export const publications: Publication[] = [
  {
    title:
      "Design and Evaluation of a Low-Latency Unified Cryptographic Pipeline for Quantum-Resistant Embedded Systems",
    venue: "ICSEIS 2026 — NIT Warangal",
    year: "2026",
    status: "Accepted",
    paper_id: "50",
    abstract:
      "A low-latency unified cryptographic pipeline targeting quantum-resistant embedded systems and hardware acceleration."
  }
];


/* ============================================================
   CERTIFICATES
   ------------------------------------------------------------
   Add your real certificates here.

   Do NOT use placeholder certificates.
   ============================================================ */

export const certificates = [

  /*
  Example:

  {
    title: "Certificate Name",
    issuer: "Organization / Institution",
    date: "2026",
    category: "VLSI"
  }

  Add as many certificates as you want.
  */

];


/* ============================================================
   EVENTS / PARTICIPATION
   ============================================================ */

export const events = [
  {
    title: "Circuit Sprint — Yuva'2026",
    organizer: "SIMATS Engineering",
    date: "2026",
    role: "Event / Competition",
    description:
      "Participation in Circuit Sprint as part of Yuva'2026."
  },

  {
    title: "AASHAV 2026",
    organizer: "SIMATS Engineering",
    date: "2026",
    role: "Hackathon",
    description:
      "Participation in AASHAV 2026 with a hardware and technology-focused project."
  }

  /*
    Add future events here.

    Example:

    {
      title: "Your Event Name",
      organizer: "Organization",
      date: "2027",
      role: "Hackathon / Competition / Workshop",
      description:
        "Short description of your participation."
    }
  */
];


/* ============================================================
   ACHIEVEMENTS
   ============================================================ */

export const achievements = [
  {
    value: "9.79",
    label: "CGPA",
    detail: "Academic performance"
  },

  {
    value: "2,700×",
    label: "Reported gain",
    detail: "Hardware-security project"
  },

  {
    value: "100",
    label: "SNN neurons",
    detail: "Time-multiplexed architecture"
  },

  {
    value: "IEEE",
    label: "Research",
    detail: "Accepted conference work"
  }
];


/* ============================================================
   SKILLS
   ============================================================ */

export const skills = [
  "Verilog",
  "SystemVerilog",
  "VHDL",
  "RTL Design",
  "FPGA",
  "Vivado",
  "Vitis",
  "Zynq",
  "Cadence",
  "Digital Design",
  "UVM",
  "Neural Networks",
  "SNN",
  "Edge AI",
  "INT8 Quantization",
  "Hardware Security",
  "Post-Quantum Cryptography"
];
