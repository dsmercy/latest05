import { create } from "zustand";
import Services from "../services/Services";
import { devtools, persist } from "zustand/middleware";


const useRecruiterStore = create(
    persist(
      devtools((set) => ({
        signedInUserData: null,
        signInUser: async (data) => {
          try {
            const userDetail = await Services.Account.userlogin(data);
            console.log("hgjhgjhghj", data);
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

        
      signOut: () => {
        set(() => ({ signedInUserData: null }));
         },
    })),
    { name: "account" }
  )
);

export default useRecruiterStore;