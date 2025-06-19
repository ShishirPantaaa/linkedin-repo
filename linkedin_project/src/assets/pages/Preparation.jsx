import React from 'react'
import Footer from '../components/footer'
import { Globe, BookOpen, FlaskConical, BarChart3, Lightbulb, Plane } from "lucide-react";
import ieltsImg1 from "./photo/1.png";
import ieltsImg2 from "./photo/2.png";
import ieltsImg3 from "./photo/3.png";
import pteImg1 from "./photo/4.png";
import pteImg2 from "./photo/5.png";
import pteImg3 from "./photo/6.png";
function Preparation() {
  return (
    <div>
      <div className="">
         <div className="bg-lime-100 text-gray-800 p-4 sm:p-6 md:p-10 rounded-xl max-w-7xl mx-auto shadow-lg space-y-8">
      <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-3">
        <Globe className="text-blue-700 w-7 h-7" /> What is IELTS?
      </h2>
      <p className="text-base md:text-lg">
        IELTS (International English Language Testing System) is one of the world’s most
        popular English language proficiency tests, especially for students who want to study,
        work, or live abroad in English-speaking countries like the UK, Canada, Australia,
        New Zealand, USA and South Korea.
      </p>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <BookOpen className="text-green-700 w-6 h-6" /> Why is IELTS Important for Studying Abroad?
      </h3>
      <p>
        Most universities and colleges in English-speaking countries require proof of English
        proficiency, especially from international applicants. IELTS is recognized by over
        11,000 institutions globally, including:
      </p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li>Universities</li>
        <li>Immigration authorities</li>
        <li>Professional bodies</li>
        <li>Government agencies</li>
      </ul>
      <p>
        A good IELTS score can help you get admission into top-ranked institutions and may
        also be required for visa approval.
      </p>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <FlaskConical className="text-green-700 w-6 h-6" /> Test Structure
      </h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-sm md:text-base">
          <thead className=" text-left">
            <tr>
              <th className="border px-4 py-2">Section</th>
              <th className="border px-4 py-2">Duration</th>
              <th className="border px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Listening</td>
              <td className="border px-4 py-2">30 mins</td>
              <td className="border px-4 py-2">
                4 recordings with questions based on conversations & monologues
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Reading</td>
              <td className="border px-4 py-2">60 mins</td>
              <td className="border px-4 py-2">
                3 passages (Academic or General)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Writing</td>
              <td className="border px-4 py-2">60 mins</td>
              <td className="border px-4 py-2">
                2 tasks: data & essay (Academic) / letter & essay (General)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Speaking</td>
              <td className="border px-4 py-2">11–14 mins</td>
              <td className="border px-4 py-2">
                Face-to-face interview with an examiner
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm italic text-gray-600">
        ✅ You can choose between IELTS Academic (for studying abroad) and IELTS General
        Training (for work or migration).
      </p>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <BarChart3 className="text-green-700 w-6 h-6" /> IELTS Score System
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li>9 = Expert User</li>
        <li>7+ = Good User (often minimum for top universities)</li>
        <li>6 = Competent User (minimum for many institutions)</li>
      </ul>
      <p>
        Each section gets a band score, and the overall score is the average.
      </p>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <Lightbulb className="text-green-700 w-6 h-6" /> Tips for Students
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Start preparing early – 2 to 3 months before your test date.</li>
        <li>Take practice tests to get familiar with the format.</li>
        <li>Focus on weak areas – especially writing and speaking.</li>
        <li>Join a coaching center or use online platforms if needed.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <Plane className="text-green-700 w-6 h-6" /> Final Thoughts
      </h3>
      <p>
        If you're serious about studying abroad, IELTS is your gateway. A strong IELTS score
        not only helps you meet admission requirements but also boosts your confidence in
        using English in real-life academic and social settings.
      </p>

      {/* Images in Responsive Flex Layout */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 mt-6">
        <img src={ieltsImg1} alt="IELTS Preparation" className="rounded-xl shadow-md w-full sm:w-[32%]" />
        <img src={ieltsImg2} alt="IELTS Speaking Test" className="rounded-xl shadow-md w-full sm:w-[32%]" />
        <img src={ieltsImg3} alt="IELTS Test Center" className="rounded-xl shadow-md w-full sm:w-[32%]" />
      </div>

      </div>
      <div className="mt-10">
        <div className="bg-amber-100 text-gray-800 p-4 sm:p-6 md:p-10 rounded-xl max-w-7xl mx-auto shadow-lg space-y-8">
      <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-3">
        <Globe className="text-blue-700 w-7 h-7" /> What is PTE?
      </h2>
      <p className="text-base md:text-lg">
        PTE (Pearson Test of English) Academic is a computer-based English language proficiency
        test widely accepted by universities, colleges, and governments around the world — especially in Australia, New Zealand,
         Canada, the UK,USA and south Korea . It evaluates your speaking, writing, reading, and listening skills using AI-driven scoring.
      </p>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <BookOpen className="text-green-700 w-6 h-6" /> Why is PTE Important for Studying Abroad?
      </h3>
      <p>
        PTE Academic is trusted by 3,000+ universities and government bodies worldwide. It is:
      </p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li>Accepted for student visas and academic admissions</li>
        <li>Fully computer-based (no human bias)</li>
        <li>Faster results — typically within 48 hours</li>
        <li>Accepted by institutions like Harvard, Yale, and many Australian universities</li>
      </ul>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <FlaskConical className="text-green-700 w-6 h-6" /> Test Structure
      </h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-sm md:text-base">
          <thead className=" text-left">
            <tr>
              <th className="border px-4 py-2">Section</th>
              <th className="border px-4 py-2">Duration</th>
              <th className="border px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Speaking & Writing</td>
              <td className="border px-4 py-2">54–67 mins</td>
              <td className="border px-4 py-2">
                Personal introduction, read aloud, repeat sentence, describe image, essay, etc.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Reading</td>
              <td className="border px-4 py-2">29–30 mins</td>
              <td className="border px-4 py-2">
                Multiple-choice, re-order paragraphs, fill in the blanks
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Listening</td>
              <td className="border px-4 py-2">30–43 mins</td>
              <td className="border px-4 py-2">
                Summarize spoken text, highlight correct summary, write from dictation
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <BarChart3 className="text-green-700 w-6 h-6" /> PTE Score System
      </h3>
      <p>
        PTE scores are reported on a scale from **10 to 90**, with 90 being the highest level of English proficiency.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>85–90 = Very Good / Expert User</li>
        <li>65–84 = Good User (commonly required by top universities)</li>
        <li>50–64 = Competent User (meets most study visa requirements)</li>
      </ul>
      <p>
        The score includes individual skill scores and an overall score based on AI evaluation.
      </p>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <Lightbulb className="text-green-700 w-6 h-6" /> Tips for Students
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Familiarize yourself with the computer-based format</li>
        <li>Practice speaking clearly into a microphone</li>
        <li>Use official PTE practice tests and scoring tools</li>
        <li>Time yourself during practice to improve speed</li>
      </ul>

      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
        <Plane className="text-green-700 w-6 h-6" /> Final Thoughts
      </h3>
      <p>
        PTE is a fast, fair, and secure English test for students who want quick results and prefer a digital experience. If you want to study or work abroad, especially in Australia or the UK, PTE can be your best option.
      </p>

      {/* Responsive Image Layout */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 mt-6">
        <img src={pteImg1} alt="PTE Speaking Test" className="rounded-xl shadow-md w-full sm:w-[32%]" />
        <img src={pteImg2} alt="PTE Computer-Based Exam" className="rounded-xl shadow-md w-full sm:w-[32%]" />
        <img src={pteImg3} alt="PTE Study Materials" className="rounded-xl shadow-md w-full sm:w-[32%]" />
      </div>
    </div>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Preparation
