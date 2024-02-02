import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://vuesharvest-hucm-qa.chetu.com";
// axios.defaults.withCredentials= true;

const responseBody = (response) => response.data;

//request interceptors
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

//Response interceptors
axios.interceptors.response.use(async response => {
  return response;
}, (error) => {
  const { data, status } = error.response;
  switch (status) {
      case 400:
          console.log("data", data.message);
          toast.error(
            data.message, {
            position: toast.POSITION.TOP_RIGHT,
          }
          );
          break;
      case 401:
          // console.log("data.message",data.message);
      toast.error(
        data.message, {
        position: toast.POSITION.TOP_RIGHT,
      }
      );
          break;
      case 404:
          console.log(data);
          break;
      case 500:
          console.log(data);
          break;
      default:
          break;
  }
  return Promise.reject(error.response);
})

const requests = {
  get: (url, params) => axios.get(url, { params }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.put(url).then(responseBody),
};

let email = "";
const storeData = JSON.parse(localStorage.getItem("account"));
if (storeData) {
  const userDataString =
    storeData.state &&
    storeData.state.signedInUserData &&
    storeData.state.signedInUserData;
  email = userDataString?.data?.users?.email;
}

const Account = {
  userlogin: (values) => requests.post("Account/Login", values),
  refreshToken: (values) => requests.post("Account/refreshtoken", values),
  register: (values) => requests.post("Account/SignUp", values),
  forgetPassword: (values) =>requests.post(`Account/ForgotPassword?Email=${values.email}&Domain=${values.domain}`),
  generateOTP: (values) =>requests.post(`Account/GenerateOTP?Email=${values}`, values),
  resetPassword: (values) => requests.post(`Account/ResetPassword`, values),
  changePassword: (values) => requests.post(`Account/ChangePassword`, values),
  getJobSeeker: () => requests.get(`Account/GetUser?emailid=${email}`),
  getRole: (value) => requests.get("Account/GetRoles", value),
  confirmEmail: (values) =>requests.post(`Account/ConfirmEmail?token=${values.token}&email=${values.Email}`,values),
};

const Profile={
    getDegree: ()=>requests.get('Master/GetDegreeList'),
    getFieldOfStudyList: ()=>requests.get('Master/GetFieldOfStudyList'),
    getUniversity: ()=>requests.get('Master/GetUniversityList'),
    getComplitionYear: ()=>requests.get('Master/GetYearOfComplitionList'),
    getSkills: ()=>requests.get('Master/GetSkillList'),
    postJobSeekerDetails:(values)=>requests.post('JobSeeker/PostJobSeekerDetails',(values)),
    setJobSeekerSkills:(values)=>requests.post('JobSeeker/PostJobSeekerSkill',(values)),
    getJobSeekerDetails:()=>requests.get('JobSeeker/GetJobSeekerDetails'),
    updateJobSeeker:(values)=>requests.post('Account/UpdateUser',(values)),
    getUpdatedUser:()=>requests.get("Account/GetUser"),
    postJobSeekerExperience: (values)=> requests.post('JobSeeker/PostJobSeekerExperience',(values)),
    getJobSeekerExperience:()=>requests.get('JobSeeker/GetJobSeekerExperience'),
    setJobSeekerPreference:(values)=>requests.post('JobSeeker/PostJobSeekerPreference',(values)),
    getJobSeekerPreference:()=>requests.get('JobSeeker/GetJobSeekerPreference'),
    getSearchJobSKill:()=>requests.get("Job/SearchJobBasedOnSkill"),
}

const Job={
  getAppliedJobCount:()=>requests.get('JobSeeker/CountAppliedJob'),
  getApplyJobList:()=>requests.get("JobSeeker/ApplyJobList"),
  getSavedJobList: ()=>requests.get('JobSeeker/SavedJobList'),
  postSavedJob:(values)=>requests.post("JobSeeker/SavedJob",(values)),
  postUnsavedJob:(values)=>requests.post("JobSeeker/UnSavedJob",(values)),
  searchJob:(values)=>requests.post('Job/FindJobs',(values)),
  jobTypeList:()=>requests.get('Master/GetJobTypesList'),
  industryList:()=>requests.get('Master/GetIndustry'),
  applyJob:(values)=>requests.post('JobSeeker/ApplyJob',(values)),
  getJobPostPreview:(id)=>requests.get(`Job/GetJobPost?JobId=${id}`),
  uploadResume:(values)=>requests.post('Job/UploadResume',(values)),
}

const Recruiter ={
  getCountJobPost:()=>requests.get('/Job/CountJobPost'),
}

const Services = {
  Account,
  Profile,
  Job,
  Recruiter
};


export default Services;
