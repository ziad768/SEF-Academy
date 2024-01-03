import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import ProfilePage from './Pages/Profile/ProfilePage';
import EditPage from './Pages/Edit/EditPage';
import ArticleDetails from './Pages/Articles/ArticleDetails';
import Login from './Pages/Login/Login';
import Header from './Components/Header/Header';
import JobApplicants from './Pages/Admin/Job/JobApplicants';
import CreateUser from "./Pages/Admin/Users/CreateUser"
// import Home from './Pages/Home/Home';
import AddJob from './Pages/Admin/Job/Addjob';
import Users from './Pages/Admin/Users/Users';
import UpDataUser from './Pages/Admin/Users/UpDataUser';
import InstructorPortal from './Pages/InstructorPortal/InstructorPortal';
import Courses from './Pages/Admin/Courses/Courses';
import AddCourse from './Pages/Admin/Courses/AddCourse';
import UpDataCourse from './Pages/Admin/Courses/UpDataCourse';
import CvPage1 from './Pages/CvPage/CvPage1';
import CvPage2 from './Pages/CvPage/CvPage2';
import CvPage3 from './Pages/CvPage/CvPage3';
import CvPage4 from './Pages/CvPage/CvPage4';
import CvPage5 from './Pages/CvPage/CvPage5';
import CvPage6 from './Pages/CvPage/CvPage6';
import CvPage7 from './Pages/CvPage/CvPage7';
import CvPage8 from './Pages/CvPage/CvPage8';
import FilterArticle from './Pages/Articles/FilterArticle';
import Articles from './Pages/Articles/Articles';
import AddArticle from './Pages/Articles/AddArticle';
import UpDataArticle from './Pages/Articles/UpDataArticle';
import AdminJobs from './Pages/Admin/Job/AdminJobs';
import DetailsPage from './Pages/Jobs/DetailsPage';
import AllJobsPage from './Pages/Jobs/AlLJobsPage';
import ApplicationForJobPage from './Pages/Jobs/ApplicationForJobPage';
import UpDateJob from './Pages/Admin/Job/UpDateJob';
import Student from './Pages/StudentPortalPage/Student';
import CoursesPage from './Pages/courses/CoursesPage';
import AddExem from './Pages/AddExem';
import { useSelector } from 'react-redux';
import NotFound from './Pages/Error/ErrorPage';
import Loading from './Pages/Loading/Loading';
import Home from './Pages/Home/Home';
import CertificateDetails from './Pages/Certificate/CertificateDetails';
function App() {
  const online = useSelector(state => state.Users.online)
  const user = useSelector(state => state.Users.user)
  return (
    <div className='BackgroundImage'>
      <div className='overlay'>
        <BrowserRouter>
          <Header />
          <div style={{minHeight:'45vh' }}>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/articles/:Filter' element={<FilterArticle />} />
            <Route path='/articlesdetails/:idArticle' element={<ArticleDetails />} />
            {!online &&  <Route path='/login' element={<Login />} />}
            {online  &&  <Route path='/profile' element={<ProfilePage />} />}
            {online  &&  <Route path='/editprofile' element={<EditPage />} />}
            {online  && user.Role == 'Instructor' &&   <Route path='/Instructors' element={<InstructorPortal />} />}
            {online  && <Route path='/DetailsJobs/:id' element={<DetailsPage />} />}
            {online &&  user.Role == 'Student' && <Route path='/studentPortal' element={<Student/>} />}
            {online &&  user.Role == 'Instructor' &&    <Route path='/CreateExam' element={<AddExem/>} />}
            { online &&  user.Role == 'Admin' &&<Route path='/Admin' element={<Outlet />} >
              <Route path='' element={<Users role={'All'} />} />
              <Route path='CreateCertificate' element={<CertificateDetails/>} />
              <Route path='createuser' element={<CreateUser />} />
              <Route path='Admin' element={<Users role={"Admin"} />} />
              <Route path='Instructors' element={<Users role={"Instructor"} />} />
              <Route path='Students' element={<Users role={"Student"} />} />
              <Route path='upDataUser/:id' element={<UpDataUser />} />
              <Route path='Articles' element={<Articles Status={'All'} />} />
              <Route path='PublishedArticles' element={<Articles Status={'Published'} />} />
              <Route path='ScheduledArticles' element={<Articles Status={'All'} />} />
              <Route path='SavedArticles' element={<Articles Status={'Draft'} />} />
              <Route path='AddArticle' element={<AddArticle />} />
              <Route path='upDataArticle/:id' element={<UpDataArticle />} />
              <Route path='courses' element={<Courses Status={"All"} />} />
              <Route path='addCourse' element={<AddCourse />} />
              <Route path='upDatacourse/:id' element={<UpDataCourse />} />
              <Route path='PublishedCourses' element={<Courses Status={"On Going"} />} />
              <Route path='ScheduledCourses' element={<Courses Status={"All"} />} />
              <Route path='SavedCourses' element={<Courses Status={"Ended"} />} />
              <Route path='AddJob' element={<AddJob />} />
              <Route path='upDataJob/:id' element={<UpDateJob />} />
              <Route path='jobs' element={<AdminJobs Status={"All"} />} />
              <Route path='publisherJobs' element={<AdminJobs Status={'Open'} />} />
              <Route path='SavedJobs' element={<AdminJobs Status={'Closed'} />} />
              <Route path='ApplicationsJob/:id' element={<JobApplicants />} />
            </Route>}

            {online &&   <Route path='/courses/:id' element={<CoursesPage />} />}
            {online &&   <Route path='/jobs' element={<AllJobsPage />} />}
            {online &&   <Route path='/JobApplicants/:idJobs' element={<JobApplicants />} />}
            {online &&   <Route path='/ApplicationForJob/:idJobs' element={<ApplicationForJobPage />} />}
            {online &&   <Route path='/CV' element={<Outlet />}>
              <Route path='' element={<CvPage1 />} />
              <Route path='Form2' element={<CvPage2 />} />
              <Route path='Form3' element={<CvPage3 />} />
              <Route path='Form4' element={<CvPage4 />} />
              <Route path='Form5' element={<CvPage5 />} />
              <Route path='Form6' element={<CvPage6 />} />
              <Route path='Form7' element={<CvPage7 />} />
              <Route path='Form8' element={<CvPage8 />} />
              </Route>}
            <Route path='*' element={<NotFound/>} />
            {/**LOADING PAGE  */}
            <Route path='Loading' element={<Loading/>} />
            </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
