import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Batch {
    id: number;
    instituteId: number;
    batch: string;
    startingDate?: string;
    timing?: string;
    createdAt?: string;
    updatedAt?: string;
    type?: string;
    classDays?: string;
    courseId: number
}

export interface Course {
    id: number;
    instituteId: number;
    course: string;
    courseCategory: string,
    courseDuration: string;
    courseImage: string;
    courseLogo: string;
    incomeRange: string;
    jobOpportunities?: string;
    courseInfo?: string;
    createdAt?: string;
    updatedAt?: string;
    isTopCourse?: boolean;
}

export interface CourseCategories {
    id: number;
    instituteId: number;
    courseCategory: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Curriculum {
    id: number;
    topic: string;
    subTopic: string[];
    instituteId: number;
    courseId: number;
    createdAt: string;
    updatedAt: string;
}

export interface Blogs {
    id: number,
    heading: string,
    date: string,
    tagline: string,
    desc: string,
    instituteId: number,
    createdAt: string;
    updatedAt: string;
}

export interface AboutUsArray {
    desc: string,
    title: string
}

export interface testimonial {
    createdAt: string,
    id: number,
    instituteId: number,
    name: string,
    newCompany: string,
    newJobRole: string,
    oldJobRole: string,
    studentImage: string,
    testimonial: string,
    updatedAt: string
}

export interface AboutCards {
    bg: string,
    desc: string,
    icon: string,
    color: string,
    title: string
}

export interface faqArray{
    answer: string,
    question:string
}

export interface WhyChooseUsArray {
    desc: string,
    title: string,
    symbol: string
}

export interface Store {

    instituteId: string | null;

    trainingInfo: {
        id: number;
        instituteName: string;
        logo?: string;
        abbv?: string;
        email?: string;
        createdAt?: string;
        updatedAt?: string;
        phone?: string;
        altPhone?: number;
        address?: number;
    } | null,

    socialInfo: {
        id: number;
        facebook?: Url;
        linkedIn?: string;
        Instagram?: string;
        twitter?: string;
        createdAt?: string;
        updatedAt?: string;
        youtube?: string;
        instituteId?: number;
    } | null,

    upcomingBatches: Batch[],

    topCourses: Course[],

    courses: Course[],

    testimonial: testimonial[],

    course:
    {
        id: number;
        instituteId: number;
        course: string;
        courseCategory: string,
        courseDuration: string;
        courseImage: string;
        courseLogo: string;
        incomeRange: string;
        jobOpportunities?: string;
        courseInfo?: string;
        createdAt?: string;
        updatedAt?: string;
        isTopCourse?: boolean;
    } | null,

    courseCategories: CourseCategories[],

    curriculum: Curriculum[],

    blogs: Blogs[],

    blog: {
        id: number,
        heading: string,
        date: string,
        tagline: string,
        desc: string,
        instituteId: number,
        createdAt: string;
        updatedAt: string;
    } | null,

    heroSection: {
        createdAt: string,
        description: string,
        heading: string,
        id: number,
        instituteId: number,
        subHeading: string,
        tagline: string,
        updatedAt: string
    } | null,

    aboutUs: {
        AboutUs: AboutUsArray[],
        createdAt: string,
        updatedAt: string,
        instituteId: number,
        id: number
    } | null,

    whoWeAre: {
        id: number,
        instituteId: number,
        aboutCards: AboutCards[],
        aboutList: string[],
        image: string,
        createdAt: string,
        updatedAt: string,
    } | null,

    whyChooseUs: {
        id: number,
        instituteId: number,
        whyChooseUsArray: WhyChooseUsArray[],
        createdAt: string,
        updatedAt: string,
    } | null,

    shapingSuccess: {
        id: number,
        instituteId: number,
        shapingSuccessArray: string[],
        shapingSuccessText: string,
        createdAt: string,
        updatedAt: string,
    } | null,

    faq: {
        id: number,
        instituteId: number,
        faqArray: faqArray[],
        createdAt: string,
        updatedAt: string,
    } | null,

    setInstituteId: (id: string) => void;
    getTrainingInfo: () => Promise<void>;
    getSocialInfo: () => Promise<void>;
    addStudentEnquiry: ({ name: string, type: string, contact: string, enquiryAbout: string }) => Promise<void>;
    getUpcomingBatches: () => Promise<void>;
    getTopCourses: () => Promise<void>;
    getCourseCategory: () => Promise<void>;
    getCourses: () => Promise<void>;
    getCourse: (id: string) => Promise<void>;
    getCourseCurriculum: (courseId: string | null, instituteId: string | null) => Promise<void>;
    getBlog: (id: string) => Promise<void>;
    getBlogs: () => Promise<void>;
    getHeroSection: () => Promise<void>;
    getAboutUs: () => Promise<void>;
    getTestimonials: () => Promise<void>;
    getWhoWeAre: () => Promise<void>;
    getWhyChooseUs: () => Promise<void>;
    getShapingSuccess: () => Promise<void>;
    getFaq: () => Promise<void>;
}