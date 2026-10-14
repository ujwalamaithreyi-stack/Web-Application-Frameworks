import React, {
    createContext,
    useContext,
    useState
} from "react";

const CourseContext = createContext();

function CourseProvider({ children }) {
    const [selectedCourses, setSelectedCourses] = useState([]);

    const courses = [
        "Web Application Frameworks",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks"
    ];

    const toggleCourse = (course) => {
        if (selectedCourses.includes(course)) {
            setSelectedCourses(
                selectedCourses.filter(c => c !== course)
            );
        } else {
            setSelectedCourses([
                ...selectedCourses,
                course
            ]);
        }
    };

    return (
        <CourseContext.Provider
            value={{
                courses,
                selectedCourses,
                toggleCourse
            }}
        >
            {children}
        </CourseContext.Provider>
    );
}

function CourseList() {
    const {
        courses,
        selectedCourses,
        toggleCourse
    } = useContext(CourseContext);

    return (
        <div>
            <h2>Available Courses</h2>

            {courses.map(course => (
                <div key={course}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCourses.includes(course)}
                            onChange={() => toggleCourse(course)}
                        />
                        {course}
                    </label>
                </div>
            ))}
        </div>
    );
}

function SelectedCourses() {
    const { selectedCourses } = useContext(CourseContext);

    return (
        <div>
            <h2>Selected Courses</h2>

            {selectedCourses.length === 0 ? (
                <p>No courses selected.</p>
            ) : (
                <ul>
                    {selectedCourses.map(course => (
                        <li key={course}>{course}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function App() {
    return (
        <CourseProvider>
            <h1>Course Registration System</h1>
            <CourseList />
            <SelectedCourses />
        </CourseProvider>
    );
}

export default App;
