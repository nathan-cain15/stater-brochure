import React, { useState } from 'react';
import { User, Clock, Lightbulb, FileText } from 'lucide-react';

// Types
interface TimelineEvent {
    year: number;
    title: string;
    description: string;
}

interface Project {
    title: string;
    description: string;
    status: "Planning" | "In Progress" | "Completed";
    technologies: string[];
}

// Styles
const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    tabList: {
        display: 'flex',
        gap: '10px',
        borderBottom: '1px solid #e5e7eb',
        marginBottom: '20px',
    },
    tab: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 24px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        color: '#4b5563',
        borderBottom: '2px solid transparent',
    },
    activeTab: {
        color: '#3b82f6',
        borderBottom: '2px solid #3b82f6',
    },
    section: {
        marginBottom: '24px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
    },
    timelineEvent: {
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
    },
    year: {
        minWidth: '80px',
        fontWeight: 'bold',
        color: '#3b82f6',
    },
    projectCard: {
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
    },
    tag: {
        display: 'inline-block',
        padding: '4px 8px',
        backgroundColor: '#e5e7eb',
        borderRadius: '4px',
        fontSize: '14px',
        marginRight: '8px',
        marginBottom: '8px',
    },
} as const;

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'about' | 'timeline' | 'projects' | 'statement'>('about');

    const timelineEvents: TimelineEvent[] = [
        {
            year: 2020,
            title: "Started University",
            description: "Began studying Computer Science at University"
        },
        {
            year: 2022,
            title: "First Internship",
            description: "Software Engineering Intern at Tech Corp"
        },
        {
            year: 2023,
            title: "Graduation",
            description: "Graduated with honors in Computer Science"
        },
        {
            year: 2023,
            title: "Graduation",
            description: "Graduated with honors in Computer Science"
        }
    ];

    const projects: Project[] = [
        {
            title: "Personal Finance Dashboard",
            description: "A web application for tracking expenses and investments with data visualization",
            status: "In Progress",
            technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
        },
        {
            title: "AI Learning Platform",
            description: "Platform for interactive learning with AI-powered feedback",
            status: "Planning",
            technologies: ["Python", "TensorFlow", "FastAPI", "React"]
        },
        {
            title: "Health Tracking App",
            description: "Mobile app for tracking fitness and nutrition goals",
            status: "Completed",
            technologies: ["React Native", "Firebase", "TypeScript"]
        },
        {
            title: "Health Tracking App",
            description: "Mobile app for tracking fitness and nutrition goals",
            status: "Completed",
            technologies: ["React Native", "Firebase", "TypeScript"]
        }
    ];

    const renderAboutMe = () => (
        <div style={styles.section}>
            <h2 style={styles.title}>About Me</h2>
            <p>
                I'm a passionate software developer with a strong foundation in full-stack development.
                I enjoy solving complex problems and creating user-friendly applications that make a difference.
            </p>
            <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Skills</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '8px' }}>• Full-stack Development (React, Node.js, TypeScript)</li>
                    <li style={{ marginBottom: '8px' }}>• Database Design (SQL, NoSQL)</li>
                    <li style={{ marginBottom: '8px' }}>• Cloud Services (AWS, Firebase)</li>
                    <li style={{ marginBottom: '8px' }}>• UI/UX Design</li>
                </ul>
            </div>
        </div>
    );

    const renderTimeline = () => (
        <div style={styles.section}>
            <h2 style={styles.title}>My Journey</h2>
            {timelineEvents.map((event, index) => (
                <div key={index} style={styles.timelineEvent}>
                    <div style={styles.year}>{event.year}</div>
                    <div>
                        <h3 style={{ marginBottom: '8px' }}>{event.title}</h3>
                        <p style={{ color: '#4b5563' }}>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderProjects = () => (
        <div style={styles.section}>
            <h2 style={styles.title}>Project Ideas</h2>
            {projects.map((project, index) => (
                <div key={index} style={styles.projectCard}>
                    <h3 style={{ marginBottom: '8px' }}>{project.title}</h3>
                    <p style={{ marginBottom: '12px', color: '#4b5563' }}>{project.description}</p>
                    <div style={{ marginBottom: '12px' }}>
            <span style={{
                ...styles.tag,
                backgroundColor:
                    project.status === 'Completed' ? '#dcfce7' :
                        project.status === 'In Progress' ? '#dbeafe' :
                            '#fef3c7'
            }}>
              {project.status}
            </span>
                    </div>
                    <div>
                        {project.technologies.map((tech, i) => (
                            <span key={i} style={styles.tag}>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    const renderPersonalStatement = () => (
        <div style={styles.section}>
            <h2 style={styles.title}>Personal Statement</h2>
            <div style={{ lineHeight: '1.6' }}>
                <p style={{ marginBottom: '16px' }}>
                    My journey in technology began with a curiosity about how things work. This curiosity
                    evolved into a passion for creating software that solves real-world problems and
                    improves people's lives.
                </p>
                <p style={{ marginBottom: '16px' }}>
                    Throughout my academic and professional journey, I've developed a strong foundation
                    in software development, with a particular focus on web technologies and user experience.
                    I believe in writing clean, maintainable code and creating intuitive user interfaces.
                </p>
                <p>
                    Looking ahead, I aim to continue growing as a developer while contributing to meaningful
                    projects. I'm particularly interested in exploring emerging technologies and their
                    potential to create positive social impact.
                </p>
            </div>
        </div>
    );

    return (
        <div style={styles.container}>
            <div style={styles.tabList}>
                <button
                    style={{ ...styles.tab, ...(activeTab === 'about' ? styles.activeTab : {}) }}
                    onClick={() => setActiveTab('about')}
                >
                    <User size={18} /> About
                </button>
                <button
                    style={{ ...styles.tab, ...(activeTab === 'timeline' ? styles.activeTab : {}) }}
                    onClick={() => setActiveTab('timeline')}
                >
                    <Clock size={18} /> Timeline
                </button>
                <button
                    style={{ ...styles.tab, ...(activeTab === 'projects' ? styles.activeTab : {}) }}
                    onClick={() => setActiveTab('projects')}
                >
                    <Lightbulb size={18} /> Projects
                </button>
                <button
                    style={{ ...styles.tab, ...(activeTab === 'statement' ? styles.activeTab : {}) }}
                    onClick={() => setActiveTab('statement')}
                >
                    <FileText size={18} /> Statement
                </button>
            </div>

            {activeTab === 'about' && renderAboutMe()}
            {activeTab === 'timeline' && renderTimeline()}
            {activeTab === 'projects' && renderProjects()}
            {activeTab === 'statement' && renderPersonalStatement()}
        </div>
    );
};

export default Portfolio;