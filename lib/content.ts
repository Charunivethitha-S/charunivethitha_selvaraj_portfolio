import type { Experience, Project, Publication } from "./types";

export const projects: Project[] = [
  {
    slug: "agrinn",
    title: "AgriNN",
    eyebrow: "FPGA ACCELERATOR / ZYNQ-7020",
    summary: "INT8 neural-network accelerator with a 16-core MAC systolic architecture and custom DMA for real-time edge inference.",
    description: "A hardware-oriented neural-network acceleration project focused on moving inference-critical operations into programmable logic and reducing data-movement overhead.",
    category: "AI Hardware",
    technologies: ["Zynq-7020", "Verilog", "INT8", "Systolic Array", "DMA"],
    metrics: [{ value: "<10 ms", label: "target inference" }, { value: "16-core", label: "MAC array" }],
    featured: true
  },
  {
    slug: "root-of-trust",
    title: "Post-Quantum Root-of-Trust",
    eyebrow: "HARDWARE SECURITY / SOC",
    summary: "Pipelined hardware architecture integrating TRNG, Kyber-1024 and ChaCha20 for a quantum-resistant trust foundation.",
    description: "A security-focused SoC concept exploring high-throughput cryptographic datapaths, secure key material and hardware acceleration.",
    category: "Security",
    technologies: ["Kyber-1024", "ChaCha20", "TRNG", "SoC", "RTL"],
    metrics: [{ value: "2,700×", label: "reported throughput gain" }],
    featured: true
  },
  {
    slug: "snn",
    title: "100-Neuron SNN",
    eyebrow: "NEUROMORPHIC / FPGA",
    summary: "Time-multiplexed spiking neural network architecture designed to improve hardware reuse and PPA efficiency.",
    description: "A 100-neuron spiking neural-network architecture using hardware reuse and a compact neuron datapath for edge-oriented inference.",
    category: "Neuromorphic",
    technologies: ["SNN", "LIF", "FPGA", "Time Multiplexing", "Edge AI"],
    metrics: [{ value: "100", label: "neurons" }, { value: "PPA", label: "optimization focus" }],
    featured: true
  },
  {
    slug: "signal",
    title: "SIGNAL",
    eyebrow: "ASSISTIVE HARDWARE / FPGA",
    summary: "Dual-channel FPGA communication interface using hardware-classified eye-blink and head-tilt inputs.",
    description: "An assistive communication prototype that translates two independent physical input channels into deterministic hardware-level communication states.",
    category: "FPGA",
    technologies: ["FPGA", "Verilog", "RTL", "Classification", "Assistive Tech"],
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    organization: "NIT Tiruchirappalli",
    role: "Technical / Research Internship",
    start_date: "2026",
    end_date: "Present",
    description: "Exploring FPGA-oriented hardware architectures, neural-network acceleration and VLSI implementation concepts.",
    technologies: ["FPGA", "RTL", "AI Hardware", "VLSI"]
  }
];

export const publications: Publication[] = [
  {
    title: "Design and Evaluation of a Low-Latency Unified Cryptographic Pipeline for Quantum-Resistant Embedded Systems",
    venue: "ICSEIS 2026 — NIT Warangal",
    year: "2026",
    status: "Accepted",
    paper_id: "50",
    abstract: "A low-latency unified cryptographic pipeline targeting quantum-resistant embedded systems and hardware acceleration."
  }
];

export const certificates = [
  { title: "Certificate / Training", issuer: "Add issuer", date: "2026", category: "VLSI" },
  { title: "Certificate / Workshop", issuer: "Add issuer", date: "2026", category: "FPGA" }
];

export const events = [
  { title: "Circuit Sprint — Yuva'2026", organizer: "SIMATS Engineering", date: "2026", role: "Event / Competition", description: "Add event details and photographs from the admin dashboard." },
  { title: "AASHAV 2026", organizer: "SIMATS Engineering", date: "2026", role: "Hackathon", description: "Add team, project and media details from the admin dashboard." }
];

export const achievements = [
  { value: "9.79", label: "CGPA", detail: "Academic performance" },
  { value: "2,700×", label: "Reported gain", detail: "Hardware-security project" },
  { value: "100", label: "SNN neurons", detail: "Time-multiplexed architecture" },
  { value: "IEEE", label: "Research", detail: "Accepted conference work" }
];

export const skills = [
  "Verilog", "SystemVerilog", "VHDL", "RTL Design", "FPGA", "Vivado", "Vitis",
  "Zynq", "Cadence", "Digital Design", "UVM", "Neural Networks", "SNN",
  "Edge AI", "INT8 Quantization", "Hardware Security", "Post-Quantum Cryptography"
];
