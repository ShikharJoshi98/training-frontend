import { FaBriefcase, FaChalkboardTeacher, FaHandshake, FaLaptopCode } from "react-icons/fa";

export const companyName = "SNT";
export const contactNo = "+91 8595161711";

export const aboutInfoArray = [{ title: '12+', desc: 'Year Est.' },
{ title: '20k+', desc: 'Students' },
{ title: '50+', desc: 'Courses' },
{ title: '50+', desc: 'Companies' }
];

export const courseArray = [{ image: "/javafullstackdeveloper (1).jpg", title: "Java Full Stack Development", duration: "8 Months", income: "Minimum 6-8 LPA", opportunites: "1.08 lac+ jobs/internship Opportunities" },
{ image: "/frontenddeveloper.jpg", title: "Frontend Web Development", duration: "4 Months", income: "Average 3-5 LPA", opportunites: "50k+ jobs/internship Opportunities" },
{ image: "/MERNSTACKDEVELOPER.jpg", title: "MERN Stack Development", duration: "6 Months", income: "Average 4-6 LPA", opportunites: "70k+ jobs/internship Opportunities" }
];

export const upcomingBatchArray = [
    { title: 'Full Stack Java Development', date: '19 July 2025', duration: '11:00 AM to 02:00 PM', days: 'Weekend', type: 'Online/Offline' },
    { title: 'MERN Stack Development', date: '18 August 2025', duration: '07:00 PM to 08:30 PM', days: 'Weekday', type: 'Online/Offline' },
    { title: 'Frontend Web Development', date: '25 August 2025', duration: '10:00 AM to 12:00 PM', days: 'Weekday', type: 'Online/Offline' }
];

export const whyChooseUsArray = [
    { symbol: <FaBriefcase />, title: 'Job Assured Courses', desc: 'Our programs are crafted to be job-focused and ensure relevant skills for your career' },
    { symbol: <FaChalkboardTeacher />, title: 'Expert Instructors', desc: 'Gain insights from experienced professionals who offer practical, real-world knowledge' },
    { symbol: <FaHandshake />, title: 'Career Support', desc: 'Get expert help with resume crafting, interview skills, and job placement services' },
    { symbol: <FaLaptopCode />, title: 'Hands-On Learning', desc: 'Participate in live projects and assignments that reflect actual industry challenges' }
];

export const studentData = [
    { text: `${companyName} gave me the confidence to switch careers. The instructors are patient, knowledgeable, and genuinely care about your progress. I never thought I&apos;d be building full-stack apps, but here I am!`, name: 'Arjun Mehta', userImage: '/maletestimonail1.jpg' }
];

export const blogArray = [{title:'Roadmap To Prepare For Campus Placement',date:'01 August 2025'},{title:'6 Amazing Java Applications You Should Know About',date:'25 July 2025'}, {title:'Python Machine Learning Libraries',date:'19 July 2025'}];

export const faqData = [
    { question: "Can I join if I have a gap after graduation?", desc: "Yes, definitely! Many of our students join after a gap. We offer personalized training and guidance to help you restart your career confidently in the IT sector." },
    { question: "What kind of placement support do you offer?", desc: "We offer 100% placement assistance including resume building, aptitude tests and mock interviews." },
    { question: "Are your courses beginner-friendly?", desc: "Yes! Our courses are designed for both freshers and non-IT students. We start from basics and guide you step-by-step towards becoming job-ready." },
    { question: "Is there any EMI/payment plan available?", desc: "We do not offer EMI options at the moment, but we do provide flexible installment plans to help students manage their payments more comfortably." },
    { question: "How do I get started with a course?", desc: "Simply fill out our inquiry form Click here or call us +91 8595161711. Our team will help you choose the right course and start your learning journey right away." },
    { question: "What if I miss a class?", desc: "No worries. We offer class recordings and backup sessions so that you never miss out on learning, even if you skip a session." },
    { question: "Do I need a technical background to join?", desc: "Not at all. Many of our students come from non-technical backgrounds. We start from scratch and build your skills step by step." },
    { question: "Will I get a certificate after course completion?", desc: `Yes, you’ll receive a recognized course completion certificate from ${companyName}, which can be shared on your resume and LinkedIn.` },
];


// const studentData = [{ text: "SNT gave me the confidence to switch careers. The instructors are patient, knowledgeable, and genuinely care about your progress. I never thought I&apos;d be building full-stack apps, but here I am!", name: 'Arjun Mehta', userImage: '/maletestimonail1.jpg' }, { text: "What really sets SNT apart is the incredible support from the teaching team. Anytime I got stuck, there was always someone ready to help—whether it was during class, late at night on Slack, or in weekend doubt-clearing sessions. I never felt alone in the learning process.", name: 'Nitin Sharma', userImage: '/maletestimonail2.jpg' }, { text: "Before joining SNT, I struggled to grasp even the basics of programming. Their hands-on teaching style and real-world projects completely changed the game for me. I landed my first developer job just two months after completing the course. Truly life-changing!", name: 'Riya Sharma', userImage: '/girltestimonial.jpg' }]
