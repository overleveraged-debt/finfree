// Header Component
function createHeader(activePage = '') {
    // Apply sticky styles by default - frozen header with larger size
    const headerClass = 'fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md sticky';

    const logoHeight = 'h-36 md:h-48'; // Logo back in header - 144px mobile / 192px desktop (bigger than all text)
    const textColor = 'text-gray-800';
    const buttonColor = 'text-gray-800';
    const mobileMenuBg = 'bg-gray-900/95 backdrop-blur-sm border-t border-gray-700'; // Dark background for mobile menu
    const mobileLinkColor = 'text-white'; // White text for better visibility
    const mobileBorderColor = 'border-gray-700'; // Darker border for dark background

    function getNavLinkClass(page) {
        const baseClass = `font-semibold hover:text-orange-500 transition-colors nav-link-hover`;
        if (activePage === page) {
            return `text-orange-600 ${baseClass}`;
        }
        return `${textColor} ${baseClass}`;
    }

    function getMobileLinkClass(page) {
        const baseClass = `block py-3 hover:text-orange-500 border-b ${mobileBorderColor}`;
        if (activePage === page) {
            return `text-orange-600 ${baseClass} font-semibold`;
        }
        return `${mobileLinkColor} ${baseClass}`;
    }

    return `
    <header id="main-header" class="${headerClass}">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <!-- Logo back in header - sized to be bigger than all text but not massive -->
            <a href="./index.html" class="flex-shrink-0 logo-shine">
                <img src="./public/assets/images/fin-gate-logo.png" alt="FIN GATE Logo" class="${logoHeight} transition-all duration-300" id="logo-img">
            </a>
            <div class="hidden md:flex flex-grow justify-center space-x-8 items-center">
                <a href="./index.html#about" class="${getNavLinkClass('about')}">About Us</a>
                <a href="./services.html" class="${getNavLinkClass('services')}">Services</a>
                <a href="./index.html#process" class="${getNavLinkClass('process')}">Process</a>
                <a href="./index.html#testimonials" class="${getNavLinkClass('testimonials')}">Testimonials</a>
                <button onclick="openEMICalculator()" class="${getNavLinkClass('emi')} cursor-pointer">EMI Calculator</button>
                <a href="./certificates.html" class="${getNavLinkClass('certificates')}">Certificates</a>
            </div>
            <div class="hidden md:flex items-center flex-shrink-0">
                <a href="./index.html#contact" class="bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-orange-700 cta-button">Contact Us</a>
            </div>
            <div class="md:hidden">
                <button id="mobile-menu-button" class="${buttonColor} focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </nav>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden px-6 pb-4 ${mobileMenuBg}">
            <a href="/index.html#about" class="${getMobileLinkClass('about')}">About Us</a>
            <a href="/services.html" class="${getMobileLinkClass('services')}">Services</a>
            <a href="/index.html#process" class="${getMobileLinkClass('process')}">Process</a>
            <a href="/index.html#testimonials" class="${getMobileLinkClass('testimonials')}">Testimonials</a>
            <button onclick="openEMICalculator()" class="${getMobileLinkClass('emi')} cursor-pointer text-left w-full">EMI Calculator</button>
            <a href="/certificates.html" class="${getMobileLinkClass('certificates')}">Certificates</a>
            <a href="/index.html#contact" class="block mt-4 bg-orange-600 text-white px-4 py-3 rounded-lg text-center hover:bg-orange-700 font-semibold">Contact Us</a>
        </div>
    </header>`;
}

// Initialize header
function initHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        const pageType = document.body.getAttribute('data-page-type') || 'home';
        const activePage = document.body.getAttribute('data-active-page') || '';
        headerContainer.innerHTML = createHeader(pageType, activePage);
        
        // Initialize mobile menu functionality
        initMobileMenu();

        // Header is now frozen at larger size - no scroll behavior needed
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Header is now frozen at larger size - no scroll functionality needed
