import { ADMIN_URL, API_URL } from "../services/config";
import { create } from "zustand";
import { Store } from "./types/store";

function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
}

export const useStore = create<Store>((set, get) => ({
    instituteId: typeof window !== "undefined" ? getCookie("instituteId") : null,
    trainingInfo: null,
    socialInfo: null,
    course: null,
    upcomingBatches: [],
    topCourses: [],
    courseCategories: [],
    courses: [],
    curriculum: [],

    setInstituteId: (id) => {
        if (typeof document !== "undefined") {
            document.cookie = `instituteId=${id}; path=/`;
        }
        set({ instituteId: id });
    },
    getTrainingInfo: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getInstituteInfo/${get().instituteId}`);
            const result = await response.json();
            set({ trainingInfo: result.companyInfo });
        } catch (error) {
            console.error((error as Error).message);
        }

    },
    getSocialInfo: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getSocialInfo/${get().instituteId}`);
            const result = await response.json();

            set({ socialInfo: result.socialLinks });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    addStudentEnquiry: async (data: { name: string; type: string; contact: string; enquiryAbout: string; instituteId?: string | null; }) => {
        try {
            data = { ...data, instituteId: get().instituteId }
            const response = await fetch(`${API_URL}/addStudentEnquiry`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data })
            });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getUpcomingBatches: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getUpcomingBatches/${get().instituteId}`);
            const result = await response.json();

            set({ upcomingBatches: result.batches });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getTopCourses: async () => {
        try {
            const response = await fetch(`${API_URL}/getTopCourses/${get().instituteId}`);
            const result = await response.json();

            set({ topCourses: result.courses });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getCourseCategory: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getCourseCategory/${get().instituteId}`);
            const result = await response.json();

            set({ courseCategories: result.categories });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getCourses: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getCourses/${get().instituteId}`);
            const result = await response.json();

            set({ courses: result.courses });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getCourse: async (id: string) => {
        try {
            const response = await fetch(`${ADMIN_URL}/getCourse/${id}`);
            const result = await response.json();
            set({ course: result.course });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getCourseCurriculum: async (courseId: string | null, instituteId: string | null) => {
        try {
            const response = await fetch(`${ADMIN_URL}/getCourseCurriculum/${courseId}/${instituteId}`);
            const result = await response.json();
            set({ curriculum: result.curriculum });
        } catch (error) {
            console.error((error as Error).message);
        }
    },

    //blogs
    blogs: [],
    blog: null,

    getBlogs: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getBlogs/${get().instituteId}`);
            const result = await response.json();
            set({ blogs: result.blogs });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getBlog: async (id: string) => {
        try {
            const response = await fetch(`${ADMIN_URL}/getBlog/${id}`);
            const result = await response.json();
            set({ blog: result.blog });
        } catch (error) {
            console.error((error as Error).message);
        }
    },

    //landingPageData

    heroSection: null,
    aboutUs: null,
    whoWeAre: null,
    whyChooseUs: null,
    shapingSuccess:null,

    getHeroSection: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getHeroSection/${get().instituteId}`);
            const result = await response.json();
            set({ heroSection: result.heroSection });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getAboutUs: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getAboutUs/${get().instituteId}`);
            const result = await response.json();
            set({ aboutUs: result.aboutUs });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getWhoWeAre: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getWhoWeAre/${get().instituteId}`);
            const result = await response.json();
            set({ whoWeAre: result.whoWeAre });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getWhyChooseUs: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getWhyChooseUs/${get().instituteId}`);
            const result = await response.json();
            set({ whyChooseUs: result.whyChooseUs });
        } catch (error) {
            console.error((error as Error).message);
        }
    },
    getShapingSuccess: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getShapingSuccess/${get().instituteId}`);
            const result = await response.json();
            set({ shapingSuccess: result.shapingSuccess });
        } catch (error) {
            console.error((error as Error).message);
        }
    },

    //testimonials
    testimonial: [],

    getTestimonials: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getTestimonials/${get().instituteId}`);
            const result = await response.json();
            set({ testimonial: result.testimonials });
        } catch (error) {
            console.error((error as Error).message);
        }
    },

    //faqs
    faq: null,
    
    getFaq: async () => {
        try {
            const response = await fetch(`${ADMIN_URL}/getFaq/${get().instituteId}`);
            const result = await response.json();
            set({ faq:result.faq})
        } catch (error) {
            console.error((error as Error).message);
        }
    },
}));
