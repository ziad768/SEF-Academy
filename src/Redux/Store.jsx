import { configureStore } from "@reduxjs/toolkit";
import Articles from "./reducer/Articles";
import Users from "./reducer/Users";
import Jobs from "./reducer/Jobs";
import Courses from "./reducer/Courses";
import CV from "./reducer/CV";


export const Store = configureStore({
    reducer:{
        articles: Articles,
        Users: Users,
        Jobs:Jobs,
        Courses:Courses,
        CV: CV
    },
}) 
