export const adminStats = [
    { label: 'Total Complaints', value: '12,482', trend: '+12%', icon: 'FileText' },
    { label: 'Resolved Cases', value: '10,240', trend: '+18%', icon: 'CheckCircle' },
    { label: 'Pending Review', value: '845', trend: '-5%', icon: 'Clock' },
    { label: 'Active Alerts', value: '4', trend: 'Critical', icon: 'AlertTriangle' }
];

export const departmentData = [
    { name: 'PWD', value: 400 },
    { name: 'Health', value: 300 },
    { name: 'Urban', value: 300 },
    { name: 'Police', value: 200 },
    { name: 'Other', value: 100 },
];

export const monthlyTrend = [
    { name: 'Sep', complaints: 400, resolved: 240 },
    { name: 'Oct', complaints: 300, resolved: 139 },
    { name: 'Nov', complaints: 200, resolved: 980 },
    { name: 'Dec', complaints: 278, resolved: 390 },
    { name: 'Jan', complaints: 189, resolved: 480 },
    { name: 'Feb', complaints: 239, resolved: 380 },
];

export const recentComplaints = [
    { id: 'COMP-2026-1024', citizen: 'John Doe', category: 'Health', status: 'In Progress', date: '2026-02-15' },
    { id: 'COMP-2026-1025', citizen: 'Sarah Smith', category: 'Urban', status: 'Under Review', date: '2026-02-15' },
    { id: 'COMP-2026-1026', citizen: 'Mike Ross', category: 'PWD', status: 'Resolved', date: '2026-02-14' },
    { id: 'COMP-2026-1027', citizen: 'Jane Doe', category: 'Police', status: 'Assigned', date: '2026-02-14' },
];
