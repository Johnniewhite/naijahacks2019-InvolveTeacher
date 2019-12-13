
export const addCourses = (courses = []) => {
    return {
        type: "ADD_COURSES",
        courses
    }
}


export const topicsList = (topics = []) => {
    return {
        type: "TOPICS_ID",
       topics
    }
}


export const subTopicsList = (subTopics = []) => {
    return {
        type: "SUBTOPICS_ID",
       subTopics
    }
}

export const courseList = (courses = []) => {
    return {
        type: "COURSESLIST",
       courses
    }
}




