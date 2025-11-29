import FeaturesCard from "@/components/features-card";
import FAQ from "@/components/frequently-asked-questions";
import HowItWorks from "@/components/how-it-works";
import { BookDashed } from "lucide-react";
import { text } from "stream/consumers";

const FEATURES = [
  {
    title: "Smart Content Analysis",
    description:
      "Upload PDFs and our AI extracts key concepts, automatically organizing  knowledge using Feynman Technique.",
    icon: <BookDashed size={38} color='#7077B5' />,
  },
  {
    title: "Smart Content Analysis",
    description:
      "Upload PDFs and our AI extracts key concepts, automatically organizing  knowledge using Feynman Technique.",
    icon: <BookDashed size={38} color='#7077B5' />,
  },
  {
    title: "Smart Content Analysis",
    description:
      "Upload PDFs and our AI extracts key concepts, automatically organizing  knowledge using Feynman Technique.",
    icon: <BookDashed size={38} color='#7077B5' />,
  },
];

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Upload Your Material",
    description:
      "Simply upload your PDF study materials and let your AI analyze the content",
    color: "#CBF90C",
    textColor: "#7077B5",
  },
  {
    step: 2,
    title: "Take Adaptive Quizzes",
    description:
      "Our system generates personalized quizzes that adapt to your learning level.",
    color: "#7077B5",
    textColor: "#CBF90C",
  },
  {
    step: 3,
    title: "Master the Material",
    description:
      "Receive feedback and iterate until you truly understand every concept.",
    color: "#CBF90C",
    textColor: "#7077B5",
  },
];

const FAQS = [
  {
    question: "What is Feynman Technique",
    answer:
      "The Feynman Technique is a learning method that involves explaining concepts in simple terms. Our AI uses this approach to help you truly understand and retain complex material.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "Currently, we support PDF files. We're working on adding support for more formats including Word documents, PowerPoint presentations, and plain text files.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All uploaded materials are encrypted and processed securely. We never share your data with third parties and you can delete your materials at any time.",
  },
  {
    question: "Can I use this for any subject?",
    answer:
      "Yes! FeynMind works with any text-based learning material. Whether you're studying medicine, law, engineering, or humanities, out AI adapts to your content.",
  }
];

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col w-full">
      <div className="relative w-full h-fit flex flex-col z-100">
        {/* HEADER */}
        <header className="fixed w-full mb-24 h-20 bg-[#24261B] border-b grid grid-cols-3 items-center px-10 *:shrink-0 z-5 ">
          <picture>
            <a href="#main">
              <img src="/Logo.png" alt="" className=" h-10" />
            </a>
          </picture>
          <nav className="mx-auto font-bold">
            <ul className="flex flex-row gap-20 *:text-white *:inline-block *:hover:underline *:hover:text-[#CBF90C] *:hover:cursor-pointer *:decoration-[#CBF90C] *:underline-offset-7  ">
              <li className="">
                <a href="#features">Features</a>
              </li>
              <li className="">
                <a href="#howitworks">How It Works</a>
              </li>
              <li className="">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
          <div className="border border-[#B3BBFC] rounded-full w-fit ml-auto bg-[#b3bbfc27] px-3 py-2">
            <span className="uppercase font-bold bg-linear-to-r from-[#CBF90C] to-[#B3BBFC] text-transparent bg-clip-text">
              get started
            </span>
          </div>
        </header>

        {/* MAIN */}
        <section id="main" className="scroll-mt-90"></section>
        <main className="grow flex flex-col items-center justify-center text-center px-4 mt-60 scale-115">
          <div className=" text-md flex flex-row items-center gap-4 px-4 py-3 rounded-full bg-[#b3bbfc27] mb-12 text-[#B3BBFC] border-[#B3BBFC] border">
            <div className="w-2 h-2 rounded-full bg-[#B3BBFC]"></div>
            AI - Powered Learning for Night Students
          </div>
          <h1 className="text-white text-7xl md:text-6xl font-bold mb-6">
            Master Complex{" "}
            <span className="bg-linear-to-r from-[#CBF90C] to-[#B3BBFC] text-transparent bg-clip-text">
              Concepts
            </span>
            <br />
            Your Way
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            Adaptive study assistant powered by machine learning. Extract key
            insights from PDFs, generate personalized quizzes, and master
            material through intelligent feedback --- designed for the modern
            night school student
          </p>

          <div className="flex flex-row gap-3">
            <div className="border border-[#B3BBFC] rounded-full w-fit bg-[#CBF90C] px-6 py-2 mx-auto hover:scale-105 transition-all">
              <span className="uppercase font-bold text-[#7077B5]">
                start learning
              </span>
            </div>

            <div className="border border-[#B3BBFC] rounded-full w-fit bg-[#b3bbfc27] px-6 py-2 mx-auto hover:scale-105 transition-all">
              <span className="uppercase font-bold text-[#CBF90C]">
                start learning
              </span>
            </div>
          </div>
        </main>

        {/* SECTIONS */}
        <div className="h-120" />
        {/* FEATURES */}
        <section id="features" className="scroll-mt-90">
          <div
            className="mx-20 grid grid-cols-3 gap-7
          "
          >
            {FEATURES.map((feature, index) => (
              <FeaturesCard key={index} data={feature} />
            ))}
          </div>
        </section>
        {/* HOW IT WORKS */}
        <div className="h-30 " />
        <hr />
        <section id="howitworks" className="scroll-mt-80 my-20 relative">
          <div>
            <div className="relative flex">
              <picture>
                <img src="/HIW_2.svg" alt="" />
              </picture>
              <picture>
                <img className="absolute right-0" src="/HIW_1.svg" alt="" />
              </picture>
            </div>
          </div>
          <div className="flex flex-col items-center gap-20 mt-6 absolute top-0 left-0 w-full">
            <div className="flex flex-col items-center gap-3 ">
              <h1 className="text-5xl font-bold">How It Works</h1>
              <p className="text-center text-xl font-bold">
                Three simple steps to transform your learning experience
              </p>
            </div>
            <div className="max-w-7xl grid grid-cols-3 gap-15 px-5">
              {HOW_IT_WORKS.map((step, index) => (
                <HowItWorks key={index} data={step} />
              ))}
            </div>
          </div>
          <div></div>
        </section>
        <hr />
        {/* FAQ */}
        <section id="faq" className="flex flex-col items-center scroll-mt-20 ">
          <div className="flex flex-row w-full items-center gap-3  justify-center mt-25">
            <div className="h-3 bg-[#B3BBFC]/32 w-full rounded-r-3xl"></div>
            <h1 className="text-5xl font-bold text-nowrap">
              Frequently Asked Questions
            </h1>
            <div className="h-3 bg-[#B3BBFC]/32 w-full rounded-l-3xl"></div>
          </div>
          <p className="text-center text-xl font-bold mt-5 mb-20">
            Everything you need to know about FeynMind
          </p>
          <div>
            {FAQS.map((faq, index) => (
              <FAQ key={index} data={faq} />
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#24261B] w-full h-40 mt-40 flex items-center justify-center border-t z-6">
        <div className="grid grid-cols-3 gap-10 w-full px-20 items-center">
          {" "}
          <picture>
            <img src="/Logo.png" alt="" className=" h-10 mr-auto" />
          </picture>
          <p className="text-lg text-center">
            2025 Feynmind. Designed for the future of learning
          </p>
        </div>
      </footer>

      {/* ASSETS */}
      <div className="absolute top-0 left-0 w-full h-full z-5">
        <picture>
          <img
            src="/home-tl.svg"
            alt=""
            className="absolute z-5 left-0 top-0"
          />

          <div className="absolute z-5 right-0 top-35">
            <div className="-translate-y-3 translate-x-2 w-fit">
              <div className="flex items-center gap-2 ">
                <div className="w-2 h-2 rounded-full bg-[#CBF90C]"></div>
                <p className="text-[#CBF90C]">Real-time Feedback</p>
              </div>
              <p className="ml-4 text-[#B3BBFC]/40">98% satisfaction</p>
            </div>
            <picture>
              <img src="/home-tr.svg" alt="" />
            </picture>
          </div>
          <div className="absolute z-5 left-0 bottom-35">
            <picture>
              <img src="/home-bl.svg" alt="" />
            </picture>
            <div className=" translate-y-5 translate-x-20">
              <div className="flex items-center gap-2 ">
                <div className="w-2 h-2 rounded-full bg-[#CBF90C]" />
                <p className="text-[#CBF90C]">feynman technique</p>
              </div>
              <p className="ml-4 text-[#B3BBFC]/40">Science-backed</p>
            </div>
          </div>
          <div className="absolute z-5 right-65 -bottom-30">
            <picture>
              <img src="/home-br.svg" alt="" />
            </picture>
            <div className="-translate-y-60 translate-x-30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#CBF90C]"></div>
                <p className="text-[#CBF90C]">24/7 available</p>
              </div>
              <p className="ml-4 text-[#B3BBFC]/40">Night & Day</p>
            </div>
          </div>
        </picture>
      </div>
      <div className="absolute top-0 left-0 z-1">
        <picture>
          <img src="/BG.png" alt="" className="z-1 w-screen h-[3635px]" />
        </picture>
      </div>
    </div>
  );
}
