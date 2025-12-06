// --- 1. CORE DATA AND DICTIONARY ---

const DICTIONARY = {
    "Aama-Buba Helper": "आमा-बुबा सहयोगी",
    "Welcome": "स्वागत छ",
    "Login": "लग-इन गर्नुहोस्",
    "Username": "प्रयोगकर्ता नाम",
    "Password": "पासवर्ड",
    "Home": "गृह पृष्ठ",
    "Tasks": "कार्यहरू",
    "Elder Profile": "बुजुर्ग प्रोफाइल",
    "Offer Help": "सहयोगको प्रस्ताव",
    "Volunteer Dashboard": "स्वयंसेवक ड्यासबोर्ड",
    "Requestor Dashboard": "अनुरोधकर्ता ड्यासबोर्ड",
    "Translate to Nepali": "नेपालीमा अनुवाद गर्नुहोस्",
    "Translate to English": "अंग्रेजीमा अनुवाद गर्नुहोस्",
    "Logout": "बाहिर निस्कनुहोस्",
    "Task Title": "कार्यको शीर्षक",
    "Description": "विवरण",
    "Category": "श्रेणी",
    "Location": "स्थान",
    "Ward Number": "वडा नम्बर",
    "Urgency": "अत्यावश्यकता",
    "Low": "कम",
    "Medium": "मध्यम",
    "High": "उच्च",
    "Post Task": "कार्य पोस्ट गर्नुहोस्",
    "New Task Request": "नयाँ कार्य अनुरोध",
    "My Posted Tasks": "मैले पोस्ट गरेका कार्यहरू",
    "All Tasks": "सबै कार्यहरू",
    "Elder Receiving Help": "सहयोग पाउने बुजुर्ग",
    "Status": "स्थिति",
    "Volunteer": "स्वयंसेवक",
    "No Volunteer Yet": "अहिलेसम्म कुनै स्वयंसेवक छैन",
    "Volunteer Assigned": "स्वयंसेवक तोकियो",
    "New": "नयाँ",
    "In Progress": "प्रगतिमा",
    "Completed": "पूरा भयो",
    "Verified": "प्रमाणित",
    "Offer": "प्रस्ताव",
    "Accept Task": "कार्य स्वीकार्नुहोस्",
    "Accept Offer": "प्रस्ताव स्वीकार्नुहोस्",
    "Mark as Completed": "पूरा भयो भनेर चिन्ह लगाउनुहोस्",
    "Verify & Close": "प्रमाणित गर्नुहोस् र बन्द गर्नुहोस्",
    "New Tasks Nearby": "नजिकैका नयाँ कार्यहरू",
    "Accepted Tasks": "स्वीकार गरिएका कार्यहरू",
    "Proactive Offers": "सक्रिय प्रस्तावहरू",
    "Offer Help to Requestors": "अनुरोधकर्ताहरूलाई सहयोगको प्रस्ताव गर्नुहोस्",
    "Post Offer": "प्रस्ताव पोस्ट गर्नुहोस्",
    "My Posted Offers": "मेरो पोस्ट गरिएका प्रस्तावहरू",
    "Cancel Offer": "प्रस्ताव रद्द गर्नुहोस्",
    "Elder Name": "बुजुर्गको नाम",
    "Age": "उमेर",
    "Address": "ठेगाना",
    "Phone": "फोन",
    "Add Elder Profile": "बुजुर्ग प्रोफाइल थप्नुहोस्",
    "Saved Profiles": "बचत गरिएका प्रोफाइलहरू",
    "Save Profile": "प्रोफाइल बचत गर्नुहोस्",
    "No new tasks in your area right now. Thank you for checking!": "तपाईंको क्षेत्रमा अहिले कुनै नयाँ कार्यहरू छैनन्। जाँच गर्नुभएकोमा धन्यवाद!",
    "You haven't posted any tasks yet. Post one now!": "तपाईंले अहिलेसम्म कुनै कार्यहरू पोस्ट गर्नुभएको छैन। अहिले एउटा पोस्ट गर्नुहोस्!",
    "Waiting for Requestor Verification...": "अनुरोधकर्ताको प्रमाणीकरणको लागि पर्खँदै...",
    "Task Closed.": "कार्य बन्द भयो।",
    "Profile Photo (Optional)": "प्रोफाइल फोटो (वैकल्पिक)",
    "Medical Notes": "चिकित्सा नोटहरू",
    "Emergency Contact": "आपतकालीन सम्पर्क",
    "General Health, Allergies, Mobility issues...": "सामान्य स्वास्थ्य, एलर्जी, हिँड्ने समस्याहरू...",
    "Name, Relation, Phone": "नाम, सम्बन्ध, फोन",
    "Filter Tasks": "कार्यहरू फिल्टर गर्नुहोस्",
    "Filter by Category": "श्रेणी अनुसार फिल्टर गर्नुहोस्",
    "Filter by Urgency": "अत्यावश्यकता अनुसार फिल्टर गर्नुहोस्",
    "Search by Keyword": "कुञ्जी शब्द अनुसार खोज्नुहोस्",
    "All Categories": "सबै श्रेणीहरू",
    "All Urgencies": "सबै अत्यावश्यकताहरू",
    "Select Elder Profile": "बुजुर्ग प्रोफाइल चयन गर्नुहोस्"
};

let activeUser = {
    isLoggedIn: false,
    role: null, // 'Requestor' or 'Volunteer'
    ward_number: null,
    id: null
};

let elderProfiles = [
    { id: 1, requestor_id: 1, name: "Shanta Devi", age: 72, address: "New Baneshwor", ward_number: "4", phone: "9841XXXXXX",
        photo: "https://via.placeholder.com/100?text=SD",
        medical_notes: "Mild joint pain, requires assistance for heavy lifting.",
        emergency_contact: "Ramesh, Son, 9801XXXXXX" },
    { id: 2, requestor_id: 1, name: "Hari Prasad", age: 78, address: "Buddhanagar", ward_number: "7", phone: "9841XXXXXX",
        photo: "https://via.placeholder.com/100?text=HP",
        medical_notes: "Diabetic, needs errands for specific food items.",
        emergency_contact: "Sita, Daughter, 9802XXXXXX" }
];

let tasks = [
    { id: 101, title: "Change Lightbulb", description: "Kitchen bulb is fused. Requires a ladder.", category: "Household", location: "Near Bhatbhateni", ward_number: "4", urgency: "Medium", status: "New", requestor_id: 1, volunteer_id: null, elder_profile_id: 1 },
    { id: 102, title: "Carry Rice Bag", description: "Need help moving a 50kg rice bag from the market to the 2nd floor.", category: "HeavyLift", location: "Old Town Market", ward_number: "4", urgency: "High", status: "In Progress", requestor_id: 1, volunteer_id: 2, elder_profile_id: 1 },
    { id: 103, title: "Fix TV Remote", description: "The TV remote is not working properly. Needs new batteries or a clean.", category: "Technical", location: "Near Airport", ward_number: "7", urgency: "Low", status: "Completed", requestor_id: 1, volunteer_id: 2, elder_profile_id: 2 },
    { id: 104, title: "Buy Groceries", description: "Need to buy vegetables and oil from the local shop.", category: "Errand", location: "Chuchepati", ward_number: "7", urgency: "Medium", status: "Verified", requestor_id: 1, volunteer_id: 2, elder_profile_id: 2 }
];

// --- NEW DATA STRUCTURE FOR VOLUNTEER OFFERS ---
let volunteerOffers = [
    { id: 201, title: "Tech Help Session", description: "I can help set up Wi-Fi, fix phones, or teach basic computer skills.", category: "Technical", ward_number: "4", volunteer_id: 2, status: "Offer" },
    { id: 202, title: "Gardening/Yard Cleanup", description: "Available to trim hedges or clear light debris on weekends.", category: "Household", ward_number: "4", volunteer_id: 2, status: "Offer" }
];

// --- Global Filter State ---
let currentFilters = {
    category: 'All',
    urgency: 'All',
    keyword: ''
};

// --- GLOBAL VARIABLE TO TRACK LAST ADDED TASK (FOR HIGHLIGHTING) ---
let lastAddedTaskId = null;


// --- 2. TRANSLATION LOGIC (JS) ---

let currentLang = localStorage.getItem('lang') || 'en'; // Load saved preference

function applyTranslation() {
    // Select all elements that might contain translatable text
    const elementsToTranslate = document.querySelectorAll('h1, h2, h3, p, a, label, button, .nav-link, .card-title, .card-text strong, .btn-primary, .btn-secondary, .btn-success, .btn-action, td, th, span, option');
    
    elementsToTranslate.forEach(el => {
        const text = el.textContent.trim();
        
        // Special handling for the language toggle button
        if (el.id === 'lang-toggle') {
            if (currentLang === 'ne') {
                el.textContent = DICTIONARY['Translate to English'];
            } else {
                el.textContent = DICTIONARY['Translate to Nepali'];
            }
            return;
        }
        
        // Skip if text is empty or too short to be a key
        if (!text) return;
        
        // Check if the element has data-en attribute (meaning it was previously translated)
        const originalText = el.getAttribute('data-en') || text;

        if (currentLang === 'ne' && DICTIONARY[originalText]) {
            if (!el.hasAttribute('data-en')) {
                el.setAttribute('data-en', originalText);
            }
            el.textContent = DICTIONARY[originalText];
        } else if (currentLang === 'en' && el.hasAttribute('data-en')) {
            el.textContent = el.getAttribute('data-en');
            el.removeAttribute('data-en');
        }
    });
}

function toggleLanguage() {
    currentLang = (currentLang === 'en' ? 'ne' : 'en');
    localStorage.setItem('lang', currentLang);
    
    // Re-render the current view to ensure newly created elements are also translated
    const currentView = document.getElementById('app-content').getAttribute('data-current-view');
    if (currentView) {
        renderView(currentView);
    }
    
    applyTranslation();
}

// --- 3. UI RENDERING LOGIC (JS) ---

const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('.nav-link');
const logoutBtn = document.getElementById('logout-btn');

function setNavVisibility() {
    const isRequestor = activeUser.role === 'Requestor';
    const isVolunteer = activeUser.role === 'Volunteer';
    
    document.querySelectorAll('.nav-requestor').forEach(el => {
        el.style.display = activeUser.isLoggedIn && isRequestor ? 'inline-block' : 'none';
    });
    document.querySelectorAll('.nav-volunteer').forEach(el => {
        el.style.display = activeUser.isLoggedIn && isVolunteer ? 'inline-block' : 'none';
    });

    logoutBtn.style.display = activeUser.isLoggedIn ? 'inline-block' : 'none';
}

function setView(viewName, htmlContent) {
    appContent.innerHTML = htmlContent;
    appContent.setAttribute('data-current-view', viewName);
    applyTranslation(); // Translate the newly rendered content
}

// --- Filtering UI Helper ---
function getFilterUI(isRequestorView = true) {
    const categories = ["Household", "Errand", "HeavyLift", "Technical", "Other"];
    const urgencies = ["Low", "Medium", "High"];

    // Determine the context title
    const titleText = isRequestorView ? DICTIONARY["My Posted Tasks"] : DICTIONARY["New Tasks Nearby"] + " (Ward " + activeUser.ward_number + ")";

    return `
        <h3 style="margin-top: 1rem;">${titleText}</h3>
        <div class="filter-section" id="task-filter-ui">
            <div class="form-group">
                <label for="filter-category" style="font-size: var(--font-size-base);">Filter by Category</label>
                <select id="filter-category">
                    <option value="All">All Categories</option>
                    ${categories.map(c => `<option value="${c}" ${currentFilters.category === c ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="filter-urgency" style="font-size: var(--font-size-base);">Filter by Urgency</label>
                <select id="filter-urgency">
                    <option value="All">All Urgencies</option>
                    ${urgencies.map(u => `<option value="${u}" ${currentFilters.urgency === u ? 'selected' : ''}>${u}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="filter-keyword" style="font-size: var(--font-size-base);">Search by Keyword</label>
                <input type="text" id="filter-keyword" placeholder="Search task title/description..." value="${currentFilters.keyword}">
            </div>
            <div class="form-group" style="display:flex; align-items: flex-end;">
                   <button class="btn btn-secondary" onclick="applyFilters()" style="padding: 1rem 1rem; width: 100%; font-size: var(--font-size-base);">Apply Filters</button>
            </div>
        </div>
    `;
}

window.applyFilters = function() {
    currentFilters.category = document.getElementById('filter-category').value;
    currentFilters.urgency = document.getElementById('filter-urgency').value;
    currentFilters.keyword = document.getElementById('filter-keyword').value.toLowerCase();
    
    // Re-render the dashboard to apply the filters to the task list
    renderDashboardView(); 
}

// --- VIEWS ---

function renderLoginView() {
    setView('login', `
        <div style="max-width: 400px; margin: 5rem auto 0; padding: 20px; background-color: white; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2>Welcome</h2>
            <p>Please login to access the **Aama-Buba Helper** platform.</p>
            <div class="form-group">
                <label for="username-input">Username</label>
                <input type="text" id="username-input" value="requestor_user">
            </div>
            <div class="form-group">
                <label for="password-input">Password</label>
                <input type="password" id="password-input" value="password123">
            </div>
            <button id="login-btn" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Login</button>
            <hr style="margin-top: 2rem;">
            <p style="text-align: center; font-size: var(--font-size-base);">
                <small>Demo Roles: <strong>Requestor</strong> (requestor_user) | <strong>Volunteer</strong> (volunteer_user)</small>
            </p>
        </div>
    `);
    
    document.getElementById('login-btn').addEventListener('click', () => {
        const user = document.getElementById('username-input').value;
        // Simple hardcoded login for demo
        if (user === 'requestor_user') {
            activeUser = { isLoggedIn: true, role: 'Requestor', ward_number: '4', id: 1 };
        } else if (user === 'volunteer_user') {
            activeUser = { isLoggedIn: true, role: 'Volunteer', ward_number: '4', id: 2 };
        }
        if (activeUser.isLoggedIn) {
            setNavVisibility();
            renderView('dashboard');
        } else {
            alert("Invalid Credentials (Use demo usernames)");
        }
    });
}

function renderDashboardView() {
    if (activeUser.role === 'Requestor') {
        renderRequestorDashboard();
    } else if (activeUser.role === 'Volunteer') {
        renderVolunteerDashboard();
    } else {
        renderLoginView();
    }
}

function filterTasks(taskList, filters) {
    return taskList.filter(task => {
        const matchesCategory = filters.category === 'All' || task.category === filters.category;
        const matchesUrgency = filters.urgency === 'All' || task.urgency === filters.urgency;
        const matchesKeyword = !filters.keyword || 
                                task.title.toLowerCase().includes(filters.keyword) ||
                                task.description.toLowerCase().includes(filters.keyword);
        return matchesCategory && matchesUrgency && matchesKeyword;
    });
}

function renderRequestorDashboard() {
    let userTasks = tasks.filter(t => t.requestor_id === activeUser.id);
    userTasks = filterTasks(userTasks, currentFilters); // Apply filters
    let foundNew = false;

    // Get offers in the Requestor's ward
    let localOffers = volunteerOffers.filter(o => o.ward_number === activeUser.ward_number);
    localOffers = filterTasks(localOffers, currentFilters); // Apply filters to offers
    
    const taskHtml = userTasks.map(task => {
        const elder = elderProfiles.find(e => e.id === task.elder_profile_id);
        const volunteerStatusText = task.volunteer_id ? DICTIONARY['Volunteer Assigned'] : DICTIONARY['No Volunteer Yet'];
        const statusClass = `card-status-${task.status.toLowerCase().replace(' ', '-')}`;
        const volunteerClass = task.volunteer_id ? 'volunteer-status-assigned' : 'volunteer-status-pending';
        
        let actionButton = '';
        if (task.status === 'Completed') {
            actionButton = `<button class="btn btn-success btn-action" onclick="verifyTask(${task.id})">${DICTIONARY['Verify & Close']}</button>`;
        } else if (task.status === 'Verified') {
            actionButton = `<p style="color: var(--color-primary);">✅ **${DICTIONARY['Task Closed.']}**</p>`;
        } else if (task.status === 'New') {
             actionButton = `<button class="btn btn-secondary btn-action" onclick="alert('TODO: Implement Edit/Cancel Task functionality')">Edit / Cancel</button>`;
        }
        // HIGHLIGHT the card if it's just been added
        let highlight = '';
        if (task.id === lastAddedTaskId && !foundNew) {
            highlight = 'style="box-shadow: 0 0 25px 4px #66bb6a; border: 3px solid #66bb6a; animation: newTaskPulse 1s ease;"';
            foundNew = true; // Only highlight the first occurrence in the filter
        }
        return `
            <div class="card ${statusClass}" id="task-card-${task.id}" ${highlight}>
                <div>
                    <h3 class="card-title">${task.title}</h3>
                    <p class="card-text"><strong>${DICTIONARY['Elder Receiving Help']}:</strong> ${elder ? elder.name : 'Unknown'}</p>
                    <p class="card-text"><strong>${DICTIONARY['Description']}:</strong> ${task.description}</p>
                    <p class="card-text"><strong>${DICTIONARY['Status']}:</strong> <strong>${DICTIONARY[task.status]}</strong></p>
                    <span class="volunteer-status ${volunteerClass}"><strong>${DICTIONARY['Volunteer']}:</strong> ${volunteerStatusText}</span>
                </div>
                ${actionButton}
            </div>
        `;
    }).join('');
    
    const offerHtml = localOffers.map(offer => {
        const volunteer = offer.volunteer_id === activeUser.id ? DICTIONARY['You'] : DICTIONARY['Volunteer'] + ' ' + offer.volunteer_id;
        return `
            <div class="card card-status-offer">
                <div>
                    <h3 class="card-title">${offer.title} (${DICTIONARY['Offer']})</h3>
                    <p class="card-text"><strong>${DICTIONARY['Category']}:</strong> ${offer.category}</p>
                    <p class="card-text"><strong>${DICTIONARY['Description']}:</strong> ${offer.description}</p>
                    <p class="card-text"><strong>${DICTIONARY['Volunteer']}:</strong> ${volunteer}</p>
                </div>
                <button class="btn btn-primary btn-action" onclick="acceptOffer(${offer.id})">${DICTIONARY['Accept Offer']}</button>
            </div>
        `;
    }).join('');
    
    setView('dashboard', `
         <h2>${DICTIONARY['Requestor Dashboard']}</h2>
         
        ${lastAddedTaskId ? '<div style="padding:1rem;background:#e3ffea;color:#328c46;margin-bottom:16px;border-radius:8px;font-weight:bold;">Task posted successfully! (Scroll to see highlight)</div>' : ''}
        <div style="text-align: center; margin-bottom: 2rem;">
            <a href="#" class="btn btn-primary"
             onclick="renderView('task_request')"
              style="width: auto;">POST</a>
        </div>
        ${getFilterUI(true)} 

        <div class="task-list">
            ${taskHtml || `<p>${DICTIONARY["You haven't posted any tasks yet. Post one now!"]}</p>`}
        </div>

        <hr style="margin-top: 2rem;">
        <h3 style="margin-top: 2rem;">${DICTIONARY['Proactive Offers']} Nearby</h3>
        <div class="task-list">
            ${offerHtml || `<p>${DICTIONARY['No proactive offers in your ward right now.'] || 'No proactive offers in your ward right now.'}</p>`}
        </div>
    `);
    // SCROLL to first highlighted task if present
    if (lastAddedTaskId) {
      setTimeout(function(){
        var el = document.getElementById('task-card-' + lastAddedTaskId);
        if (el) el.scrollIntoView({behavior: 'smooth', block: 'center'});
      }, 200);
    }
}

function renderVolunteerDashboard() {
    let newTasks = tasks.filter(t => t.ward_number === activeUser.ward_number && t.status === 'New');
    newTasks = filterTasks(newTasks, currentFilters); 
    
    const acceptedTasks = tasks.filter(t => t.volunteer_id === activeUser.id && t.status !== 'Verified');
    const myOffers = volunteerOffers.filter(o => o.volunteer_id === activeUser.id);

    const newTasksHtml = newTasks.map(task => `
        <div class="card card-status-new">
            <div>
                <h3 class="card-title">${task.title} (${task.urgency})</h3>
                <p class="card-text"><strong>${DICTIONARY['Description']}:</strong> ${task.description}</p>
                <p class="card-text"><strong>${DICTIONARY['Location']}:</strong> Ward ${task.ward_number}</p>
            </div>
            <button class="btn btn-action" onclick="acceptTask(${task.id})">${DICTIONARY['Accept Task']}</button>
        </div>
    `).join('');
    
    const acceptedTasksHtml = acceptedTasks.map(task => {
        const elder = elderProfiles.find(e => e.id === task.elder_profile_id);
        let actionButton = '';
        if (task.status === 'In Progress') {
            actionButton = `<button class="btn btn-action" onclick="completeTask(${task.id})">${DICTIONARY['Mark as Completed']}</button>`;
        } else if (task.status === 'Completed') {
            actionButton = `<p style="color: var(--color-primary);">${DICTIONARY['Waiting for Requestor Verification...']}</p>`;
        }
        
        return `
            <div class="card card-status-${task.status.toLowerCase().replace(' ', '-')}" style="border-left: 10px solid #a3e635;">
                <div>
                    <h3 class="card-title">${task.title}</h3>
                    <p class="card-text"><strong>${DICTIONARY['Elder Name']}:</strong> ${elder ? elder.name : 'Unknown'}</p>
                    <p class="card-text"><strong>${DICTIONARY['Status']}:</strong> <strong>${DICTIONARY[task.status]}</strong></p>
                </div>
                ${actionButton}
            </div>
        `;
    }).join('');

    const myOffersHtml = myOffers.map(offer => `
        <div class="card card-status-offer">
            <div>
                <h3 class="card-title">${offer.title} (${DICTIONARY['Offer']})</h3>
                <p class="card-text"><strong>${DICTIONARY['Category']}:</strong> ${offer.category}</p>
                <p class="card-text"><strong>${DICTIONARY['Ward Coverage'] || 'Ward Coverage'}:</strong> ${offer.ward_number}</p>
                <p class="card-text" style="color: var(--color-primary);">${DICTIONARY['Status']}: Available</p>
            </div>
            <button class="btn btn-action" style="background-color: var(--color-accent);" onclick="cancelOffer(${offer.id})">${DICTIONARY['Cancel Offer']}</button>
        </div>
    `).join('');
    
    setView('dashboard', `
        <h2>${DICTIONARY['Volunteer Dashboard']}</h2>
        
        <h3 style="margin-top: 2rem;">${DICTIONARY['My Posted Offers']}</h3>
        <div class="task-list">
            ${myOffersHtml || `<p>${DICTIONARY['You have no current proactive offers.'] || 'You have no current proactive offers.'} <a href="#" onclick="renderView('proactive_offer')">${DICTIONARY['Post one now!']}</a></p>`}
        </div>

        <hr style="margin-top: 2rem;">
        ${getFilterUI(false)} 

        <div class="task-list">
            ${newTasksHtml || `<p>${DICTIONARY['No new tasks in your area right now. Thank you for checking!']}</p>`}
        </div>
        <hr style="margin-top: 2rem;">
        <h3 style="margin-top: 2rem;">${DICTIONARY['Accepted Tasks']}</h3>
        <div class="task-list">
            ${acceptedTasksHtml || `<p>${DICTIONARY['You have not accepted any tasks yet.'] || 'You have not accepted any tasks yet.'}</p>`}
        </div>
    `);
}

// --- NEW VIEW: PROACTIVE OFFER FORM ---
function renderProactiveOfferView() {
    const categories = ["Household", "Errand", "HeavyLift", "Technical", "Other"];
    const categoryOptions = categories.map(c => `<option value="${c}">${c}</option>`).join('');

    setView('proactive_offer', `
        <h2>${DICTIONARY['Offer Help to Requestors']}</h2>
        <p>Post a task you are willing to perform in your local ward (**Ward ${activeUser.ward_number}**). Requestors in your area can then accept this offer.</p>
        <form id="proactive-offer-form" style="max-width: 600px; margin: 0 auto;">
            
            <div class="form-group">
                <label for="offer-title">${DICTIONARY['Task Title']}</label>
                <input type="text" id="offer-title" name="title" required placeholder="e.g., Weekly Grocery Run or Basic Repair">
            </div>
            <div class="form-group">
                <label for="offer-description">${DICTIONARY['Description']}</label>
                <textarea id="offer-description" name="description" rows="4" required placeholder="Specify your availability and what you can do."></textarea>
            </div>
            <div class="form-group">
                <label for="offer-category">${DICTIONARY['Category']}</label>
                <select id="offer-category" name="category" required>
                    <option value="">${DICTIONARY['Select Category'] || 'Select Category'}</option>
                    ${categoryOptions}
                </select>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">${DICTIONARY['Post Offer']}</button>
        </form>
    `);

    document.getElementById('proactive-offer-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newOffer = {
            id: volunteerOffers.length + 300,
            title: document.getElementById('offer-title').value,
            description: document.getElementById('offer-description').value,
            category: document.getElementById('offer-category').value,
            ward_number: activeUser.ward_number,
            volunteer_id: activeUser.id,
            status: "Offer"
        };
        volunteerOffers.push(newOffer);
        alert("Offer Posted Successfully! Check your Dashboard.");
        renderDashboardView();
    });
}

// --- REQUESTOR TASK POSTING VIEW (MAJOR REVISION) ---
function renderTaskRequestView() {
    const categories = ["Household", "Errand", "HeavyLift", "Technical", "Other"];
    const urgencies = ["Low", "Medium", "High"];

    // Filter elder profiles belonging to the current requestor
    const userProfiles = elderProfiles.filter(e => e.requestor_id === activeUser.id);
    
    // **Recommendation C: Dynamic Elder Profile Selection**
    const elderOptions = userProfiles.map(elder => 
        `<option value="${elder.id}">${elder.name} (Ward ${elder.ward_number})</option>`
    ).join('');

    const categoryOptions = categories.map(c => `<option value="${c}">${c}</option>`).join('');
    const urgencyOptions = urgencies.map(u => `<option value="${u}">${u}</option>`).join('');

    setView('task_request', `
        <h2>${DICTIONARY['New Task Request']}</h2>
        <form id="task-request-form" style="max-width: 600px; margin: 0 auto;">
            
            <div class="form-group">
                <label for="task-elder">${DICTIONARY['Elder Receiving Help']}</label>
                <select id="task-elder" name="elder_profile_id" required>
                    <option value="">${DICTIONARY['Select Elder Profile']}</option>
                    ${elderOptions}
                </select>
                <p style="font-size: var(--font-size-base); margin-top: 0.5rem;">
                    <a href="#" onclick="renderView('elder_profile')">
                        Need to add a new Aama-Buba? Click here to manage profiles.
                    </a>
                </p>
            </div>

            <div class="form-group">
                <label for="task-title">${DICTIONARY['Task Title']}</label>
                <input type="text" id="task-title" name="title" required placeholder="e.g., Go to Pharmacy, Fix leaking faucet">
            </div>
            <div class="form-group">
                <label for="task-description">${DICTIONARY['Description']}</label>
                <textarea id="task-description" name="description" rows="4" required placeholder="Provide clear details, like address notes, necessary tools, or specific needs."></textarea>
            </div>
            <div class="form-group">
                <label for="task-category">${DICTIONARY['Category']}</label>
                <select id="task-category" name="category" required>
                    <option value="">${DICTIONARY['Select Category'] || 'Select Category'}</option>
                    ${categoryOptions}
                </select>
            </div>
            <div class="form-group">
                <label for="task-urgency">${DICTIONARY['Urgency']}</label>
                <select id="task-urgency" name="urgency" required>
                    <option value="">${DICTIONARY['Select Urgency'] || 'Select Urgency'}</option>
                    ${urgencyOptions}
                </select>
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%;">${DICTIONARY['Post Task']}</button>
        </form>
    `);

    document.getElementById('task-request-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const elderId = parseInt(document.getElementById('task-elder').value);
        const elder = elderProfiles.find(e => e.id === elderId);

        if (!elder) {
            alert("Please select a valid Elder Profile.");
            return;
        }

        const newTask = {
            id: tasks.length + 1000,
            title: document.getElementById('task-title').value,
            description: document.getElementById('task-description').value,
            category: document.getElementById('task-category').value,
            location: elder.address, // Derive location from Elder profile
            ward_number: elder.ward_number, // Derive ward from Elder profile
            urgency: document.getElementById('task-urgency').value,
            status: "New",
            requestor_id: activeUser.id,
            volunteer_id: null,
            elder_profile_id: elderId
        };
        tasks.push(newTask);
        lastAddedTaskId = newTask.id; // HIGHLIGHT THIS TASK on next dashboard render!
        renderDashboardView();
        setTimeout(() => { lastAddedTaskId = null; }, 3000); // Remove highlight after 3s
    });
}

// --- ELDER PROFILE VIEW (MINOR REVISION) ---
function renderElderProfileView() {
    // Filter profiles belonging to the current requestor
    const userProfiles = elderProfiles.filter(e => e.requestor_id === activeUser.id);
    
    const savedProfilesHtml = userProfiles.map(elder => `
        <div class="profile-item">
            <img src="${elder.photo}" alt="Profile Photo">
            <h3>${elder.name} (${DICTIONARY['Age']}: ${elder.age})</h3>
            <p><strong>${DICTIONARY['Address']}:</strong> ${elder.address}, ${DICTIONARY['Ward Number']} ${elder.ward_number}</p>
            <p><strong>${DICTIONARY['Phone']}:</strong> ${elder.phone}</p>
            <p><strong>${DICTIONARY['Medical Notes']}:</strong> ${elder.medical_notes}</p>
            <p><strong>${DICTIONARY['Emergency Contact']}:</strong> ${elder.emergency_contact}</p>
            <button class="btn btn-secondary" style="font-size: var(--font-size-base); margin-top: 1rem;" onclick="alert('TODO: Implement Edit functionality for ${elder.name}')">Edit Profile</button>
        </div>
    `).join('');

    setView('elder_profile', `
        <h2>${DICTIONARY['Elder Profile Management'] || 'Elder Profile Management'}</h2>
        
        <div style="margin-bottom: 2rem;">
            <a href="#" class="btn btn-success" onclick="document.getElementById('add-profile-form').style.display='block';">
                ${DICTIONARY['Add Elder Profile']}
            </a>
        </div>

        <form id="add-profile-form" style="max-width: 600px; margin: 0 auto; display: none; padding: var(--spacing-unit); background: #fff; border-radius: 12px; margin-bottom: 2rem;">
            <h3>${DICTIONARY['Add Elder Profile']}</h3>
            <div class="form-group"><label for="elder-name">${DICTIONARY['Elder Name']}</label><input type="text" id="elder-name" required></div>
            <div class="form-group"><label for="elder-age">${DICTIONARY['Age']}</label><input type="text" id="elder-age" required></div>
            <div class="form-group"><label for="elder-address">${DICTIONARY['Address']}</label><input type="text" id="elder-address" required></div>
            <div class="form-group"><label for="elder-ward">${DICTIONARY['Ward Number']}</label><input type="text" id="elder-ward" value="${activeUser.ward_number}" required></div>
            <div class="form-group"><label for="elder-phone">${DICTIONARY['Phone']}</label><input type="text" id="elder-phone" required></div>
            <div class="form-group"><label for="elder-medical">${DICTIONARY['Medical Notes']}</label><textarea id="elder-medical" rows="3" placeholder="${DICTIONARY['General Health, Allergies, Mobility issues...']}"></textarea></div>
            <div class="form-group"><label for="elder-emergency">${DICTIONARY['Emergency Contact']}</label><input type="text" id="elder-emergency" placeholder="${DICTIONARY['Name, Relation, Phone']}"></div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">${DICTIONARY['Save Profile']}</button>
        </form>

        <h3>${DICTIONARY['Saved Profiles']}</h3>
        <div class="profile-grid">
            ${savedProfilesHtml || `<p>${DICTIONARY['You have not saved any elder profiles yet. Please add one above.'] || 'You have not saved any elder profiles yet. Please add one above.'}</p>`}
        </div>
    `);

    document.getElementById('add-profile-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newElder = {
            id: elderProfiles.length + 1,
            requestor_id: activeUser.id,
            name: document.getElementById('elder-name').value,
            age: document.getElementById('elder-age').value,
            address: document.getElementById('elder-address').value,
            ward_number: document.getElementById('elder-ward').value,
            phone: document.getElementById('elder-phone').value,
            medical_notes: document.getElementById('elder-medical').value,
            emergency_contact: document.getElementById('elder-emergency').value,
            photo: "https://via.placeholder.com/100?text=AB" // Default placeholder
        };
        elderProfiles.push(newElder);
        alert(`${newElder.name}'s Profile Saved!`);
        renderElderProfileView(); // Re-render to show the new profile
    });
}

// --- 4. ACTION LOGIC ---

window.acceptTask = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task && task.status === 'New') {
        task.status = 'In Progress';
        task.volunteer_id = activeUser.id; // Assign volunteer
        alert(`You have accepted the task: ${task.title}.`);
        renderDashboardView(); 
    }
}

window.completeTask = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task && task.status === 'In Progress') {
        task.status = 'Completed';
        alert(`Task ${task.title} marked as completed. Waiting for Requestor verification.`);
        renderDashboardView();
    }
}

window.verifyTask = function(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task && task.status === 'Completed') {
        task.status = 'Verified';
        alert(`Task ${task.title} verified and closed!`);
        renderDashboardView();
    }
}

window.cancelOffer = function(offerId) {
    const offerIndex = volunteerOffers.findIndex(o => o.id === offerId);
    if (offerIndex > -1) {
        volunteerOffers.splice(offerIndex, 1);
        alert("Proactive offer cancelled.");
        renderDashboardView();
    }
}

// **Recommendation E: Accept Offer Logic**
window.acceptOffer = function(offerId) {
    const offer = volunteerOffers.find(o => o.id === offerId);
    if (!offer) return;

    // 1. Get available Elder Profiles for this Requestor
    const userProfiles = elderProfiles.filter(e => e.requestor_id === activeUser.id);
    if (userProfiles.length === 0) {
        alert("ERROR: You must first create an Elder Profile before accepting an offer. Please go to the 'Elder Profile' tab.");
        renderView('elder_profile');
        return;
    }

    // 2. Select the most relevant elder profile (matching ward, or the first one)
    const elder = userProfiles.find(e => e.ward_number === offer.ward_number) || userProfiles[0];
    
    if (!confirm(`Do you want to accept the offer "${offer.title}" for ${elder.name} in Ward ${elder.ward_number}?`)) {
        return;
    }

    // 3. Create a new TASK based on the Offer
    const newTask = {
        id: tasks.length + 1000, 
        title: offer.title + " (Accepted Offer)",
        description: `Requestor accepted the volunteer's offer. Task: ${offer.description}`,
        category: offer.category,
        location: elder.address, 
        ward_number: elder.ward_number,
        urgency: "Medium", // Default urgency for an accepted offer
        status: "In Progress", // Skip 'New', go straight to In Progress
        requestor_id: activeUser.id,
        volunteer_id: offer.volunteer_id,
        elder_profile_id: elder.id,
        linked_offer_id: offerId 
    };
    tasks.push(newTask);
    
    // 4. Remove the offer from the active list so others can't accept it
    volunteerOffers = volunteerOffers.filter(o => o.id !== offerId); 

    alert(`Offer accepted! New task "${newTask.title}" is now **In Progress** with the volunteer (ID: ${offer.volunteer_id}).`);
    renderDashboardView(); // Refresh the view
};

// --- 5. INITIALIZATION & ROUTING ---

function renderView(viewName) {
    if (!activeUser.isLoggedIn && viewName !== 'login') {
        return renderLoginView();
    }
    // Reset filters when changing main tabs (except for dashboard to keep state)
    if (viewName !== 'dashboard') {
         currentFilters = { category: 'All', urgency: 'All', keyword: '' };
    }

    switch (viewName) {
        case 'dashboard':
            renderDashboardView();
            break;
        case 'task_request':
            renderTaskRequestView();
            break;
        case 'elder_profile':
            renderElderProfileView();
            break;
        case 'proactive_offer':
            renderProactiveOfferView();
            break;
        default:
            renderDashboardView();
    }
}

// Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        renderView(link.getAttribute('data-view'));
    });
});

document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

document.getElementById('logout-btn').addEventListener('click', () => {
     activeUser = { isLoggedIn: false, role: null, ward_number: null, id: null };
     setNavVisibility();
     renderLoginView();
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderLoginView();
});