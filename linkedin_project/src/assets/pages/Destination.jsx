import { motion } from "framer-motion";
import { useRef } from "react";
import { Globe, School, ArrowRight } from "lucide-react";
import Footer from "../components/footer";
import Daejinlogo from "./photo/Djuniversitylogo.png"
import StudentJin from "./photo/student.jpg"
import studentjin1 from "./photo/daestudent.jpg"
import studentcheongam from "./photo/cheongam student.jpg"
import cheongambulding from "./photo/cheongam bulding.jpg"
import cheongamlogo from "./photo/cheongam.jpg"
import ajouLogo from "./photo/ajamonto.jpg"
import ajouBuilding from "./photo/aja.jpg"
import ajouStudents from "./photo/ajamontudents.jpg"
import masanBuilding from "./photo/masan-university bulding.jpg"
import masanStudents from "./photo/masang student.png"
import masanLogo from "./photo/Masan-logo.png"
import korea from "./photo/korea.png"
import japan from "./photo/japan.png"
import australia from "./photo/australia.png"
import uk from "./photo/uk.png"

export default function App() {
  const daejinRef = useRef(null);

  const scrollToDaejin = () => {
    daejinRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openWebsite = () => {
    window.open("https://www.daejin.ac.kr", "_blank");
  };

  const openCheongamWebsite = () => {
    window.open("https://www.angazetu.com/cheongam-college/", "_blank");
  };

  const openAjouWebsite = () => {
    window.open("https://www.alluniversity.info/south-korea/ajou-motor-college/", "_blank");
  };

  const openMasanWebsite= () => {
    window.open("https://www.standyou.com/study-abroad/masan-university-south-korea/", "_blank");
  };


  const countries = [
    { name: "South Korea", img:korea, onClick: scrollToDaejin },
    { name: "Japan", img: japan },
    { name: "UK", img: uk },
    { name: "Australia", img: australia },
    

  ];

  return (
    <div className="bg-green-900 min-h-screen text-white p-4">
      {/* Country Selection */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {countries.map(({ name, img, onClick }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer max-w-[150px] text-center"
            onClick={onClick}
          >
            <img src={img} alt={name} className="rounded-lg w-full h-full shadow-md" />
            <div className="mt-2 font-semibold text-lg flex justify-center items-center gap-1">
              <Globe className="w-5 h-5" /> {name}
            </div>
          </motion.div>
        ))}
      </div>
<div className="mt-10">
  
      {/* Daejin University Section */}
<div
  ref={daejinRef}
  className="bg-green-100 text-black p-6 rounded-xl max-w-6xl mx-auto shadow-lg mt4"

>
  <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
    <School className="w-6 h-6" />
    South Korea – Daejin University
  </h2>

  {/* Section 1: Campus Info */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={Daejinlogo}
      alt="Daejin University Campus"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-40">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        📍 Pocheon, Gyeonggi Province
      </h3>
      <p className="mb-4 text-sm md:text-base">
        Established in 1991 by the Daesun Jinrihoe Foundation, Daejin University is a private university offering
        high-quality education across fields including Engineering, Business, Humanities, Natural Sciences, and Arts.
        It officially opened in March 1992 and is located in Pocheon, a scenic and peaceful city just outside of Seoul.
      </p>
    </div>
  </div>

  {/* Section 2: Why Choose */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Why Choose Daejin University?</h4>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>✔️ Affordable tuition compared to other major Korean universities</li>
      <li>✔️ Peaceful campus environment with modern facilities</li>
      <li>✔️ Strong focus on research and global exchange programs</li>
      <li>✔️ Partnerships with universities in the U.S., China, Japan, and more</li>
      <li>✔️ Active support for international students (language classes, dormitories, etc.)</li>
    </ul>
  </div>

  {/* Section 3: Tuition & Scholarships with Student Image */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={StudentJin}
      alt="Daejin student photo"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-32">
      <h4 className="font-semibold text-green-700">Tuition & Scholarships:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>Humanities/Social Science: ~$3,000–$3,500 USD per semester</li>
        <li>Engineering/Natural Science: ~$3,500–$4,000 USD per semester</li>
        <li>Scholarships based on academic merit and Korean language proficiency</li>
        <li>Discounts available for TOPIK certificate holders</li>
      </ul>
    </div>
  </div>

  {/* Section 4: Admissions */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Admissions (International Students):</h4>
    <ul className="list-disc list-inside text-sm">
      <li>Programs: Bachelor’s, Master’s, Doctoral</li>
      <li>Language of Instruction: Korean (some courses in English)</li>
      <li>Korean Language Program: Available for beginners before entry</li>
    </ul>
  </div>

  {/* Section 5: Documents with Optional Reuse of Image */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={studentjin1}
      alt="Daejin University logo"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-36">
      <h4 className="font-semibold text-green-700">Documents Required:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>High school diploma (or bachelor’s for graduate)</li>
        <li>Passport</li>
        <li>Financial proof</li>
        <li>Language certificate (TOPIK or equivalent)</li>
      </ul>
    </div>
  </div>

  {/* Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={openWebsite}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2"
  >
    View More <ArrowRight className="w-4 h-4" />
  </motion.button>
</div>
</div>
  <div className="mt-10">
    <div
  // ref={cheongamRef}
  className="bg-green-100 text-black p-6 rounded-xl max-w-6xl mx-auto shadow-lg mt4"
>
  <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
    <School className="w-6 h-6" />
    South Korea – Cheongam College
  </h2>

  {/* Section 1: Campus Info */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={cheongamlogo}
      alt="Cheongam College Campus"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-40">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        📍 Location: Republic of Korea
      </h3>
      <p className="mb-4 text-sm md:text-base">
        <strong>July 2, 2024</strong> – Cheongam College is one of the Republic of Korea’s
        most prominent universities. Known for its wide range of academic programs,
        top-tier research facilities, and vibrant campus life, the college continues to
        attract students from across the nation and beyond. Since its founding, Cheongam
        College has maintained a strong commitment to academic excellence and innovation.
      </p>
    </div>
  </div>

  {/* Section 2: Why Choose */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Why Choose Cheongam College?</h4>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>✔️ Wide range of undergraduate and postgraduate programs</li>
      <li>✔️ State-of-the-art research and learning facilities</li>
      <li>✔️ Vibrant campus life and modern student services</li>
      <li>✔️ Strong ties with industries and global academic partners</li>
      <li>✔️ Excellent support for international students</li>
    </ul>
  </div>

  {/* Section 3: Tuition & Scholarships */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={cheongambulding}
      alt="Cheongam student"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-32">
      <h4 className="font-semibold text-green-700">Tuition & Scholarships:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>Average tuition: ~$3,000–$4,000 USD per semester</li>
        <li>Engineering and Medical programs may vary in cost</li>
        <li>Merit-based and need-based scholarships available</li>
        <li>Special funding support for TOPIK-certified students</li>
      </ul>
    </div>
  </div>

  {/* Section 4: Admissions */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Admissions (International Students):</h4>
    <ul className="list-disc list-inside text-sm">
      <li>Programs: Bachelor’s, Master’s, Doctoral</li>
      <li>Medium: Mostly Korean, with English-taught tracks available</li>
      <li>Language Program: Offered to help students prepare before starting major courses</li>
    </ul>
  </div>

  {/* Section 5: Documents */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={studentcheongam}
      alt="Cheongam College Students"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-36">
      <h4 className="font-semibold text-green-700">Documents Required:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>High school or university diploma (translated)</li>
        <li>Valid passport copy</li>
        <li>Proof of financial support</li>
        <li>Korean or English language certificate (TOPIK, TOEFL, IELTS)</li>
      </ul>
    </div>
  </div>

  {/* Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={openCheongamWebsite}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2"
  >
    View More <ArrowRight className="w-4 h-4" />
  </motion.button>
</div>

  </div>
<div className="mt-10">
  <div
  // ref={ajouRef}
  className="bg-green-100 text-black p-6 rounded-xl max-w-6xl mx-auto shadow-lg mt4"
>
  <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
    <School className="w-6 h-6" />
    South Korea – Ajou Motor College
  </h2>

  {/* Section 1: Campus Info */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={ajouLogo}
      alt="Ajou Motor College Campus"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-40">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        📍 Location: Boryeong, South Chungcheong Province, South Korea
      </h3>
      <p className="mb-4 text-sm md:text-base">
        Ajou Motor College, formerly known as Daecheon College, is a private technical college
        located in the coastal city of Boryeong, South Chungcheong Province, South Korea.
        The college specializes in automotive engineering and vocational education. With
        approximately 100 dedicated instructors, Ajou Motor College provides hands-on training
        and industry-aligned education aimed at producing skilled professionals for Korea’s
        thriving automotive and engineering sectors.
      </p>
    </div>
  </div>

  {/* Section 2: Why Choose */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Why Choose Ajou Motor College?</h4>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>✔️ Strong specialization in automotive and technical education</li>
      <li>✔️ Industry partnerships with major Korean automotive brands</li>
      <li>✔️ Modern labs, workshops, and training equipment</li>
      <li>✔️ Dedicated international student support center</li>
      <li>✔️ Coastal location with a quiet and affordable lifestyle</li>
    </ul>
  </div>

  {/* Section 3: Tuition & Scholarships */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={ajouBuilding}
      alt="Ajou Motor College Building"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-32">
      <h4 className="font-semibold text-green-700">Tuition & Scholarships:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>Average tuition: ~$2,500–$3,500 USD per semester</li>
        <li>Discounts available for early registration and top-performing students</li>
        <li>Industry-sponsored scholarship opportunities</li>
        <li>Additional support for international applicants with TOPIK certification</li>
      </ul>
    </div>
  </div>

  {/* Section 4: Admissions */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Admissions (International Students):</h4>
    <ul className="list-disc list-inside text-sm">
      <li>Programs: Vocational diplomas, associate degrees, technical majors</li>
      <li>Language of instruction: Primarily Korean</li>
      <li>Optional Korean Language Program offered before major intake</li>
    </ul>
  </div>

  {/* Section 5: Documents */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={ajouStudents}
      alt="Ajou Motor College Students"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-36">
      <h4 className="font-semibold text-green-700">Documents Required:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>High school diploma or equivalent (translated)</li>
        <li>Copy of passport</li>
        <li>Bank statement or proof of financial support</li>
        <li>Korean language certificate (TOPIK) or English test scores if applicable</li>
      </ul>
    </div>
  </div>

  {/* Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={openAjouWebsite}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2"
  >
    View More <ArrowRight className="w-4 h-4" />
  </motion.button>
</div>

<div className=" mt-10">
  <div
  // ref={masanRef}
  className="bg-green-100 text-black p-6 rounded-xl max-w-6xl mx-auto shadow-lg mt4"
>
  <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
    <School className="w-6 h-6" />
    South Korea – Masan University
  </h2>

  {/* Section 1: Campus Info */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={masanLogo}
      alt="Masan University Campus"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-40">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        📍 Location: Masan (Changwon), South Gyeongsang Province, South Korea
      </h3>
      <p className="mb-4 text-sm md:text-base">
        Masan University is a reputable private institution located in the city of Masan,
        which is now a part of Changwon, South Gyeongsang Province. The university is known
        for its specialized programs in healthcare, technology, and vocational training.
        Masan University focuses on producing career-ready graduates through hands-on
        education, modern facilities, and practical industry exposure.
      </p>
    </div>
  </div>

  {/* Section 2: Why Choose */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Why Choose Masan University?</h4>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>✔️ Career-oriented programs with strong practical training</li>
      <li>✔️ Special focus on nursing, healthcare, and industrial technology</li>
      <li>✔️ Located near Changwon, a major industrial hub</li>
      <li>✔️ Friendly environment for international students</li>
      <li>✔️ Strong local employment connections and internships</li>
    </ul>
  </div>

  {/* Section 3: Tuition & Scholarships */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={masanBuilding}
      alt="Masan University Building"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-32">
      <h4 className="font-semibold text-green-700">Tuition & Scholarships:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>Average tuition: ~$2,800–$3,800 USD per semester</li>
        <li>Special tuition waivers for foreign students</li>
        <li>Scholarships based on academic performance and language scores</li>
        <li>Additional financial aid for students from developing countries</li>
      </ul>
    </div>
  </div>

  {/* Section 4: Admissions */}
  <div className="mb-6">
    <h4 className="font-semibold text-green-700">Admissions (International Students):</h4>
    <ul className="list-disc list-inside text-sm">
      <li>Programs: Associate degrees, bachelor's in applied science and health fields</li>
      <li>Language: Primarily Korean with limited English-medium classes</li>
      <li>Korean language training program available for international students</li>
    </ul>
  </div>

  {/* Section 5: Documents */}
  <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
    <img
      src={masanStudents}
      alt="Masan University Students"
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="flex-1 lg:mt-36">
      <h4 className="font-semibold text-green-700">Documents Required:</h4>
      <ul className="list-disc list-inside text-sm">
        <li>High school graduation certificate or diploma (translated)</li>
        <li>Copy of passport</li>
        <li>Proof of financial support or sponsor letter</li>
        <li>Korean (TOPIK) or English proficiency test scores if required</li>
      </ul>
    </div>
  </div>

  {/* Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={openMasanWebsite}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2"
  >
    View More <ArrowRight className="w-4 h-4" />
  </motion.button>
</div>

  
</div>
</div>
      <Footer/>
    </div>
  );
}
