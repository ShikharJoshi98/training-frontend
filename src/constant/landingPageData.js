import { useStore } from "../store/store";
import { FaBriefcase, FaChalkboardTeacher, FaGlobe, FaHandshake } from "react-icons/fa";
import { useEffect } from "react";
import { MdScience } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";

export function useAppData() {
  const { trainingInfo, getTrainingInfo } = useStore();

  useEffect(() => {
    getTrainingInfo();
  }, [getTrainingInfo]);

  const aboutInfoArray = [
    { title: "12+", desc: "Year Est." },
    { title: "20k+", desc: "Students" },
    { title: "50+", desc: "Courses" },
    { title: "50+", desc: "Companies" },
    ];
    
     const blogArray = [{title:'Roadmap To Prepare For Campus Placement',date:'01 August 2025'},{title:'6 Amazing Java Applications You Should Know About',date:'25 July 2025'}, {title:'Python Machine Learning Libraries',date:'19 July 2025'}];

const studentData = [
    { text: `${trainingInfo?.instituteName} gave me the confidence to switch careers. The instructors are patient, knowledgeable, and genuinely care about your progress. I never thought I&apos;d be building full-stack apps, but here I am!`, name: 'Arjun Mehta', userImage: '/maletestimonail1.jpg' }
  ];
  
   const upcomingBatchArray = [
    { title: 'Full Stack Java Development', date: '19 July 2025', duration: '11:00 AM to 02:00 PM', days: 'Weekend', type: 'Online/Offline' },
    { title: 'MERN Stack Development', date: '18 August 2025', duration: '07:00 PM to 08:30 PM', days: 'Weekday', type: 'Online/Offline' },
    { title: 'Frontend Web Development', date: '25 August 2025', duration: '10:00 AM to 12:00 PM', days: 'Weekday', type: 'Online/Offline' }
];
  const whyChooseUsArray = [
    { symbol: <FaBriefcase />, title: "Job Assured Courses", desc: "Our programs are crafted to be job-focused and ensure relevant skills for your career" },
    { symbol: <FaChalkboardTeacher />, title: "Expert Instructors", desc: "Gain insights from experienced professionals who offer practical, real-world knowledge" },
    { symbol: <FaHandshake />, title: "Career Support", desc: "Get expert help with resume crafting, interview skills, and job placement services" },
    { symbol: <MdScience />, title: "Hands-On Learning", desc: "Participate in live projects and assignments that reflect actual industry challenges" },
  ];

  const iconMap = {
    FaGlobe: <FaGlobe size={25} />,
    CgSandClock: <CgSandClock size={25} />,
    GiStairsGoal: <GiStairsGoal size={25} />,
    BsGraphUpArrow: <BsGraphUpArrow size={25} />,
  };

  const icon = {
    FaBriefcase: <FaBriefcase />,
    FaChalkboardTeacher: <FaChalkboardTeacher />,
    FaHandshake: <FaHandshake />,
    MdScience: <MdScience />,
};
  
  const aboutCards = [
    {
      title: "Our Journey",
      desc: "Our journey began as a Training Center, focused on skilling people and guiding them toward secure careers.",
      color: "bg-green-500",
      icon: "CgSandClock",
      bg: "bg-[#E4FEEF]",
    },
    {
      title: "IT Industry Impact",
      desc: "The IT sector evolves rapidly, influencing all industries. It's a driving force shaping the future across domains.",
      color: "bg-yellow-400",
      icon: "FaGlobe",
      bg: "bg-[#fffae5]",
    },
    {
      title: "Skills to Success",
      desc: "Training youth in emerging technologies bridges the skill gap, ensuring placements in top roles across sectors.",
      color: "bg-pink-400",
      icon: "GiStairsGoal",
      bg: "bg-[#f6edec]",
    },
    {
      title: "Leading with Learning",
      desc: "As a leading institute in Java training, we now offer a wide range of IT courses to cater to diverse career paths.",
      color: "bg-purple-400",
      icon: "BsGraphUpArrow",
      bg: "bg-[#F3F0FF]",
    },
  ];

  const faqData = [ { question: "Can I join if I have a gap after graduation?", desc: "Yes, definitely! Many of our students join after a gap. We offer personalized training and guidance to help you restart your career confidently in the IT sector." }, { question: "What kind of placement support do you offer?", desc: "We offer 100% placement assistance including resume building, aptitude tests and mock interviews." }, { question: "Are your courses beginner-friendly?", desc: "Yes! Our courses are designed for both freshers and non-IT students. We start from basics and guide you step-by-step towards becoming job-ready." }, { question: "Is there any EMI/payment plan available?", desc: "We do not offer EMI options at the moment, but we do provide flexible installment plans to help students manage their payments more comfortably." }, { question: "How do I get started with a course?", desc: `Simply fill out our inquiry form Click here or call us ${trainingInfo?.phone}. Our team will help you choose the right course and start your learning journey right away.` }, { question: "What if I miss a class?", desc: "No worries. We offer class recordings and backup sessions so that you never miss out on learning, even if you skip a session." }, { question: "Do I need a technical background to join?", desc: "Not at all. Many of our students come from non-technical backgrounds. We start from scratch and build your skills step by step." }, { question: "Will I get a certificate after course completion?", desc: `Yes, you’ll receive a recognized course completion certificate from ${trainingInfo?.abbv ? (trainingInfo?.abbv) : (trainingInfo?.instituteName)}, which can be shared on your resume and LinkedIn.` } ];

  return { aboutInfoArray, whyChooseUsArray, faqData, blogArray, studentData,upcomingBatchArray, iconMap, icon, aboutCards };
}