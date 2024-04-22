import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Jobs: [
    {
      id: "0",
      companyName: "Company One",
      position: "Position one",
      Status: "Open",
      Posted: "Monday,june 5th 12:30 PM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "EGYPT",
      filed: "Front-End",
      jobType: "Full-time",
      startSalaryRang: "4000",
      endSalaryRang: "7000",
      RemoteOrOnSite: "On Site",
      PublishDate: "2 h age",
      Currency: "$",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "1",
      companyName: "Company Two",
      position: "Position two",
      Status: "Open",
      Posted: "Tuesday,July 6th 9:45 AM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "EGYPT",
      filed: "Front-End",
      jobType: "Full-time",
      startSalaryRang: "1200",
      endSalaryRang: "3500",
      RemoteOrOnSite: "Remote",
      PublishDate: "2 h age",
      Currency: "$",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "2",
      companyName: "Company Three",
      position: "Position three",
      Status: "Open",
      Posted: "Wednesday,August 7th 10:00 AM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "EGYPT",
      filed: "Front-End",
      jobType: "Part-time",
      startSalaryRang: "1200",
      endSalaryRang: "3500",
      RemoteOrOnSite: "On Site",
      PublishDate: "2 h age",
      Currency: "$",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "3",
      companyName: "Company Four",
      position: "Position four",
      Status: "Open",
      Posted: "Thursday,September 8th 11:30 AM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "EGYPT",
      filed: "Front-End",
      jobType: "Part-time",
      startSalaryRang: "1200",
      endSalaryRang: "3500",
      RemoteOrOnSite: "On Site",
      PublishDate: "2 h age",
      Currency: "$",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "4",
      companyName: "Company Five",
      position: "Position five",
      Status: "Open",
      Posted: "Friday,October 9th 12:00 PM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "EGYPT",
      filed: "Front-End",
      jobType: "Part-time",
      startSalaryRang: "1200",
      endSalaryRang: "3500",
      RemoteOrOnSite: "Remote",
      PublishDate: "2 h age",
      Currency: "$",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "5",
      companyName: "Company Two",
      position: "Position two",
      Status: "Open",
      Posted: "Tuesday,July 6th 9:45 AM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "EGYPT",
      filed: "Back-End",
      jobType: "Part-time",
      startSalaryRang: "6000",
      endSalaryRang: "12000",
      RemoteOrOnSite: "On Site",
      PublishDate: "4 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "6",
      companyName: "Company Three",
      position: "Position three",
      Status: "Closed",
      Posted: "Wednesday,August 7th 10:00 AM",

      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "EGYPT",
      filed: "Back-End",
      jobType: "Contract",
      startSalaryRang: "6000",
      endSalaryRang: "12000",
      RemoteOrOnSite: "Remote",
      PublishDate: "4 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "7",
      companyName: "Company Four",
      position: "Position four",
      Status: "Closed",
      Posted: "Thursday,September 8th 11:30 AM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "USA",
      filed: "Back-End",
      jobType: "Contract",
      startSalaryRang: "6000",
      endSalaryRang: "12000",
      RemoteOrOnSite: "Remote",
      PublishDate: "4 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "8",
      companyName: "Company Five",
      position: "Position five",
      Status: "Closed",
      Posted: "Friday,October 9th 12:00 PM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "USA",
      filed: "Back-End",
      jobType: "Contract",
      startSalaryRang: "6000",
      endSalaryRang: "12000",
      RemoteOrOnSite: "On Site",
      PublishDate: "7 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: [".NET", "JavaScript", "OOP"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "9",
      companyName: "Company Two",
      position: "Position two",
      Status: "Closed",
      Posted: "Tuesday,July 6th 9:45 AM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "USA",
      filed: "Back-End",
      jobType: "Contract",
      startSalaryRang: "6000",
      endSalaryRang: "12000",
      RemoteOrOnSite: "Remote",
      PublishDate: "7 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: ["React JS", "JavaScript", "Node JS"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "10",
      companyName: "Company Three",
      position: "Position three",
      Status: "Closed",
      Posted: "Wednesday,August 7th 10:00 AM",

      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "USA",
      filed: "Full-Stack",
      jobType: "Contract",
      startSalaryRang: "4000",
      endSalaryRang: "7000",
      RemoteOrOnSite: "Remote",
      PublishDate: "7 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: ["React JS", "JavaScript", "Node JS"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "11",
      companyName: "Company Four",
      position: "Position four",
      Status: "Closed",
      Posted: "Thursday,September 8th 11:30 AM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "USA",
      filed: "Full-Stack",
      jobType: "Full-time",
      startSalaryRang: "4000",
      endSalaryRang: "7000",
      RemoteOrOnSite: "On Site",
      PublishDate: "12 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: ["React JS", "JavaScript", "Node JS"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
    {
      id: "12",
      companyName: "Company Five",
      position: "Position five",
      Status: "Closed",
      Posted: "Friday,October 9th 12:00 PM",
      aboutCompany:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      location: "ASW",
      filed: "Full-Stack",
      jobType: "Full-time",
      startSalaryRang: "4000",
      endSalaryRang: "7000",
      RemoteOrOnSite: "Remote",
      PublishDate: "12 h age",
      Currency: "EGP",
      JobDescription:
        " our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      JobRequirements:
        "A career in our Salesforce Service practice, within Salesforce Consulting services, will provide you with the opportunity to help our clients leverage Salesforce technology to enhance their customer experiences, enable sustainable change, and drive results. We focus on understanding our client’s challenges and developing custom solutions powered by Salesforce to transform their sales, service and marketing capabilities by exploring data and identifying trends, managing customer life cycles, strategically building and leveraging online communities, driving employee engagement and collaboration, and connecting directly with channel partners to share goals, objectives, and activities in a secure, branded location.As part of our service team, you’ll help deliver transformative applications for the mobile and social connected enterprise through Salesforce. You’ll help our clients build custom applications to transform the customer experience through improved service by providing real time access to information across channels.To really stand out and make us fit for the future in a constantly changing world, each and every one of us at PwC needs to be a purpose-led and values-driven leader at every level. To help us achieve this we have the PwC Professional; our global leadership development framework. It gives us a single set of expectations across our lines, geographies and career paths, and provides transparency on the skills we need as individuals to be successful and progress in our careers, now and in the future.",
      Skills: ["React JS", "JavaScript", "Node JS"],
      Applications: [
        {
          companyName: "software future",
          expe: 2,
          email: "mohamed@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 1,
          email: "ebada984@gmail.com",
          mobileNumber: "0128101143",
        },
        {
          companyName: "software future",
          expe: 3,
          email: "khalid@gmail.com",
          mobileNumber: "0125554687",
        },
        {
          companyName: "software future",
          expe: 5,
          email: "ashraf886@gmail.com",
          mobileNumber: "0127754687",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
        {
          companyName: "software future",
          expe: 7,
          email: "mohamed@gmail.com",
          mobileNumber: "0128956456",
        },
      ],
      counterApplications: 6,
    },
  ],
};

export const Jobs = createSlice({
  name: "Jobs",
  initialState,
  reducers: {
    filterForId: (state, action) => {
      const findJob = state.Jobs.find((job) => job.id == action.payload);
      if (findJob) {
        state.ShowJobDitelails = findJob;
      }
    },
    SortJobs: (state) => {
      const PublishJob = state.Jobs.filter((Job) => Job.Status === "Open");
      const DraftJob = state.Jobs.filter((Job) => Job.Status === "Closed");
      state.Jobs = [...PublishJob, ...DraftJob];
    },
    upDataOpen: (state, action) => {
      let Jobs = state.Jobs.filter((Job) => Job.id !== action.payload.id);
      Jobs = [...Jobs, action.payload];
      state.Jobs = Jobs;
    },
    delJob: (state, action) => {
      const Jobs = state.Jobs.filter((Job) => Job.id != action.payload);
      state.Jobs = Jobs;
    },
    upDataJob: (state, action) => {
      let Jobs = state.Jobs.filter((Job) => Job.id !== action.payload.id);
      Jobs = [...Jobs, action.payload];
      state.Jobs = Jobs;
    },
    AddJob: (state, action) => {
      const id = Date.now();
      const Jobs = [...state.Jobs, { ...action.payload, id }];
      state.Jobs = Jobs;
    },
    Application: (state, action) => {
      let job = state.Jobs.find((job) => job.id == action.payload.id);
      job = {
        ...job,
        counterApplications :  job.counterApplications + 1,
        Applications: [...job.Applications, action.payload.Application],
      };
      const Jobs = state.Jobs.filter((job) => job.id != action.payload.id);
      state.Jobs = [...Jobs, job];
    },
  },
});

export const {
  filterForId,
  SortJobs,
  delJob,
  upDataOpen,
  upDataJob,
  AddJob,
  Application,
} = Jobs.actions;
export default Jobs.reducer;
