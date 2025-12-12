const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Project Report",
        description: "Create a detailed project status report for management review.",
        date: "2025-12-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss the new requirements with the client.",
        date: "2025-12-11",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve the authentication failure issue in the app.",
        date: "2025-12-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        description: "Perform scheduled backup of database and verify integrity.",
        date: "2025-12-12",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Design Dashboard UI",
        description: "Create a new dashboard layout for admin panel.",
        date: "2025-12-14",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Resolve API Latency",
        description: "Optimize API response times by 20%.",
        date: "2025-12-08",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team Presentation",
        description: "Present progress of current sprint to the development team.",
        date: "2025-12-13",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Test Payment Module",
        description: "Perform functional and regression testing on payment system.",
        date: "2025-12-10",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Add unit test cases for user authentication service.",
        date: "2025-12-15",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Verification",
        description: "Verify fixed bugs from yesterday’s sprint.",
        date: "2025-12-09",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Server Health Check",
        description: "Monitor CPU, RAM, and network usage of servers.",
        date: "2025-12-12",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy New Build",
        description: "Deploy the new version of the app to staging environment.",
        date: "2025-12-11",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Deployment Script",
        description: "Resolve environment variable mismatch in deployment script.",
        date: "2025-12-08",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Security Scan",
        description: "Run vulnerability scans and prepare report.",
        date: "2025-12-13",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Monitoring Alerts",
        description: "Modify alert thresholds for high-traffic hours.",
        date: "2025-12-14",
        category: "Monitoring",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Content Writing",
        description: "Prepare website content for new product launch.",
        date: "2025-12-09",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Optimize landing page for better search ranking.",
        date: "2025-12-10",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Email Campaign",
        description: "Create marketing email for customer engagement.",
        date: "2025-12-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social Media Post",
        description: "Design and publish new Instagram promotional post.",
        date: "2025-12-11",
        category: "Social Media",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));


    // console.log(employees, admin)
}