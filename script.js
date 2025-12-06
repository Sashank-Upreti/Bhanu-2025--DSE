
let currentLang = document.documentElement.lang.toUpperCase();

const translations = {
    EN: {
        pageTitle: 'Aama-Buba Helper',
        appHeader: 'Aama-Buba Helper',
        loginTitle: 'Log In',
        phoneLabel: 'Phone Number:',
        passwordLabel: 'Password:',
        loginButton: 'Log In',
        roleNote: 'Note: Role determines the dashboard view (Requestor, Elder, Volunteer).',

        callVolunteer: 'Call Volunteer',
        taskComplete: 'Task Complete',

        postTask: 'Post New Task',
        activeTasks: 'Active Tasks',
        taskTitle: 'Task Title (e.g., Change Lightbulb)',
        taskDesc: 'Detailed Description',
        postButton: 'Post Task Now'
    },

    NE: {
        pageTitle: 'आमा-बुबा सहयोगी',
        appHeader: 'आमा-बुबा सहयोगी',
        loginTitle: 'लग - इन',
        phoneLabel: 'फोन नम्बर:',
        passwordLabel: 'पासवर्ड:',
        loginButton: 'लग - इन गर्नुहोस्',
        roleNote: 'नोट: भूमिकाले ड्यासबोर्ड दृश्य निर्धारण गर्छ (अनुरोधकर्ता, ज्येष्ठ नागरिक, स्वयंसेवक)।',

       
        callVolunteer: 'स्वयंसेवकलाई कल गर्नुहोस्',
        taskComplete: 'काम पूरा भयो',

     
        postTask: 'नयाँ काम पोस्ट गर्नुहोस्',
        activeTasks: 'सक्रिय कामहरू',
        taskTitle: 'कार्य शीर्षक (जस्तै, बल्ब फेर्नु)',
        taskDesc: 'विस्तृत विवरण',
        postButton: 'काम पोस्ट गर्नुहोस्'
    }
};




function updateUIText(lang) {
    const t = translations[lang];

    if (!t) return
}