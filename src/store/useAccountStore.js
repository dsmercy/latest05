import { create } from 'zustand'
import Services from "../services/Services";
import { devtools, persist } from 'zustand/middleware';

const useAccountStore = create(persist(devtools((set) => ({
    signedInUserData: null,
    jobSeekerData: null,
    educationData: [],
    signInUser: async (data) => {
        try {
            const userDetail = await Services.Account.userlogin(data);
            if (userDetail) {
                set((state) => ({
                    signedInUserData: userDetail, 
                }));
            }
            return userDetail;
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    getJobSeeker: async() => {
        try {
            const userDetail = await Services.Account.getJobSeeker();
            set(() => ({
                jobSeekerData: userDetail 
            }));
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },

    getUser: async () => {
        try {
            const userDetail = await Services.Profile.getUpdatedUser();
            set(() => ({
                jobSeekerData: userDetail
            }));
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    saveEducation: (educationDetail) => {
        set((prevState) => ({
            educationData: prevState.educationData.length === 0
                ? educationDetail  // If educationData is empty, assign the new values directly
                : [...prevState.educationData, ...educationDetail],  // If not empty, append the new values
        }));
    },
    clearEducation: () => {
        set(() => ({ educationData: [] }));
    },
    
    signOut: () => {
        set(() => ({ signedInUserData: null }));
        // localStorage.removeItem('account');
        // localStorage.removeItem('token');
        set(() => ({ jobSeekerData: null }));
        set(() => ({ educationData: [] }));
        // navigate('/login');
    },
})), { name: 'account' }));


export default useAccountStore;