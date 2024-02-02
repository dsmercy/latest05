import { create } from "zustand";
import Services from "../services/Services";
import { devtools, persist } from "zustand/middleware";
const useAccountStore = create(
  persist(
    devtools((set) => ({
      signedInUserData: null,
      jobSeekerData: null,
      educationData: [],
      experienceData: [],
      preferenceData: [],
      showPreview: {},

      setShowPreview: function (value) {
        set({ showPreview: value });
      },
      signInUser: async (data) => {
        try {
          const userDetail = await Services.Account.userlogin(data);
          if (userDetail) {
            // console.log("userDetail",userDetail)
            set((state) => ({
              signedInUserData: userDetail,
            }));
          }
          return userDetail;
        } catch (error) {
          return Promise.reject({ error: error.data });
        }
      },
      getRefreshToken: async (data) => {
        try {
          const userDetail = await Services.Account.refreshToken(data);
          console.log("userDetails",userDetail);
          if (userDetail) {
            localStorage.setItem("token", userDetail.data.accessToken);
            set((state) => ({
              signedInUserData: {
                ...state.signedInUserData,
                data: {
                  ...state.signedInUserData.data,
                  accessToken: userDetail.data.accessToken,
                  refreshToken: userDetail.data.refreshToken,
                },
              },
            }));
          }
          return userDetail;
        } catch (error) {
          console.log(error);
          return Promise.reject({ error: error.data });
        }
      },
      getJobSeeker: async () => {
        try {
          const userDetail = await Services.Account.getJobSeeker();
          set(() => ({
            jobSeekerData: userDetail,
          }));
        } catch (error) {
          return Promise.reject({ error: error.data });
        }
      },

      getUser: async () => {
        try {
          const userDetail = await Services.Profile.getUpdatedUser();
          set(() => ({
            jobSeekerData: userDetail,
          }));
        } catch (error) {
          return Promise.reject({ error: error.data });
        }
      },
      saveEducation: (educationDetail) => {
        set((prevState) => ({
          educationData:
            prevState.educationData.length === 0
              ? educationDetail.map((item) => ({
                  ...item,
                  id: 1,
                }))
              : [
                  ...prevState.educationData,
                  ...educationDetail.map((item) => ({
                    ...item,
                    id:
                      Math.max(
                        ...prevState.educationData.map((item) => item.id)
                      ) + 1,
                  })),
                ], // If not empty, append the new values
        }));
      },
      getEducation: async () => {
        try {
          const userDetail = await Services.Profile.getJobSeekerDetails();
          const updatedUserDetail = userDetail.data.map((obj, index) => ({
            ...obj,
            id: index + 1,
          }));
          set(() => ({
            educationData: updatedUserDetail,
          }));
        } catch (error) {
          return { error: error.data };
        }
      },
      deleteEducationById: (educationId) => {
        set((prevState) => ({
          educationData: prevState.educationData.filter(
            (item) => item.id !== educationId
          ),
        }));
      },
      saveExperience: (experienceDetail) => {
        set((prevState) => ({
          experienceData:
            prevState.experienceData.length === 0
              ? experienceDetail.map((item) => ({
                  ...item,
                  id: 1,
                }))
              : [
                  ...prevState.experienceData,
                  ...experienceDetail.map((item) => ({
                    ...item,
                    id:
                      Math.max(
                        ...prevState.experienceData.map((item) => item.id)
                      ) + 1,
                  })),
                ],
        }));
      },
      getExperience: async () => {
        try {
          const userDetail = await Services.Profile.getJobSeekerExperience();
          userDetail.data.forEach((item) => {
            item.skillID = item.skills.map((skill) => skill.id);
            item.expTypes = item.expTypeId;
            delete item.expTypeName;
            delete item.salaryTypeName;
            delete item.skills;
            delete item.expTypeId;
          });
          const updatedUserDetail = userDetail.data.map((obj, index) => ({
            ...obj,
            id: index + 1,
          }));
          set(() => ({
            experienceData: updatedUserDetail,
          }));
        } catch (error) {
          return Promise.reject({ error: error.data });
        }
      },
      deleteExperiencById: (experienceId) => {
        set((prevState) => ({
          experienceData: prevState.experienceData.filter(
            (item) => item.id !== experienceId
          ),
        }));
      },
      savePreference: (preferenceDetail) => {
        set((prevState) => ({
          preferenceData: { ...prevState.preferenceData, ...preferenceDetail },
        }));
      },
      clearEducation: () => {
        set(() => ({ educationData: [] }));
      },

      clearExperience: () => {
        set(() => ({ experienceDetail: [] }));
      },

      signOut: () => {
        set(() => ({ signedInUserData: null }));
        set(() => ({ jobSeekerData: null }));
        set(() => ({ educationData: [] }));
        set(() => ({ experienceData: [] }));
        set(() => ({ preferenceData: [] }));
      },
    })),
    { name: "account" }
  )
);

export default useAccountStore;
