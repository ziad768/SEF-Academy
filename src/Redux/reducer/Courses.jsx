import { createSlice } from "@reduxjs/toolkit";

export const Courses = createSlice({
  name: "Courses",
  initialState: {
    Courses: [
      {
        id: "1",
        Title: "introduction to React JS",
        Instructor: "Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",
        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: "2",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",
        Language: "Eng",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Duration: "12:30",
        Certificate: "Back-end",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "3",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "4",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "5",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "6",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "7",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",

        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "8",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",

        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "9",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "On Going",

        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "10",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "Ended",

        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "11",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "Ended",

        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "12",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "Ended",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "13",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "Ended",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "14",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "Ended",

        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
      {
        id: "15",
        Title: "introduction to React JS",
        Instructor: " Islam Mohamed",
        Level: "1",
        PublishedOn: "Thursday, June 10th 12:30 PM",
        StartDate: "Thursday, June 8th",
        Status: "Ended",
        CourseIntroduction:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseAssessment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseRequirements:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        CourseMaterials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis labore! Dolorum saepe eligendi veritatis distinctio voluptate est, totam fugit repellat et numquam. Iste cumque consectetur quam neque, voluptas nihil?",
        image:
          "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Language: "Eng",
        Duration: "12:30",
        Certificate: "Front-End",
        counterStudents: "12",
        studentsIds: [
          "dl-5234",
          "dl-552314",
          "dl-21231",
          "dl-481",
          "dl-121",
          "dl-48231",
          "dl-5104",
          "dl-2851",
          "dl-41281",
          "dl-6814",
          "dl-51512",
          "dl-51014",
        ],
      },
    ],
  },

  reducers: {
    SortCourses: (state) => {
      const actionCourse = state.Courses.filter(
        (Course) => Course.Status === "On Going"
      );
      const InActionCourse = state.Courses.filter(
        (Course) => Course.Status !== "On Going"
      );
      state.Courses = [...actionCourse, ...InActionCourse];
    },
    upDataStatusCourse: (state, action) => {
      let Courses = state.Courses.filter(
        (Course) => Course.id != action.payload.id
      );
      Courses = [...Courses, action.payload];
      state.Courses = Courses;
    },
    delCourse: (state, action) => {
      const Courses = state.Courses.filter(
        (Course) => Course.id != action.payload
      );
      state.Courses = Courses;
    },
    upDataCourse: (state, action) => {
      let Courses = state.Courses.filter(
        (Course) => Course.id != action.payload.oldId
      );
      delete action.payload.oldId;
      Courses = [...Courses, action.payload];
      state.Courses = Courses;
      console.log(action.payload);
    },
    AddCourse: (state, action) => {
      const id = Date.now();
      console.log(id);
      state.Courses = [...state.Courses, { ...action.payload, id: id }];
    },
  },
});

export const {
  SortCourses,
  upDataStatusCourse,
  delCourse,
  upDataCourse,
  AddCourse,
} = Courses.actions;

export default Courses.reducer;
