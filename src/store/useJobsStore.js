import { create } from "zustand";
import Services from "../services/Services";
import { devtools, persist } from "zustand/middleware";

const useJobsStore = create(
  persist(
    devtools((set) => ({
      jobsList: null,
      jobFilters: null,
      // skill: "",

      // setSkill: function (value) {
      //   set({ skill: value });
      // },
      getJobsList: async () => {
        try {
          const allJobsList = await Services.Profile.getSearchJobSKill();
          set(() => ({
            jobsList: allJobsList.data,
          }));
        } catch (error) {
          return Promise.reject({ error: error.data });
        }
      },
      filterJobs: async (data) => {
        try {
          set((state) => ({
            jobFilters: data,
          }));
          const filteredJobsList = await Services.Job.searchJob(data);
          if (filteredJobsList) {
            set((state) => ({
              jobsList: filteredJobsList.data,
            }));
          }
        } catch (error) {
          return Promise.reject({ error: error.data });
        }
      },
      removeFilters: () => {
        set(() => ({ jobFilters: null }));
      },
    })),
    { name: "jobs" }
  )
);

export default useJobsStore;
