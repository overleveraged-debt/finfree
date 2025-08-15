// Footer Component
function createFooter() {
    return `
    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-gray-900 text-white">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-extrabold text-center mb-16 section-title reveal">Get In Touch</h2>
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div class="reveal">
                    <h3 class="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                    <p class="text-lg mb-8 opacity-90">Contact us today for personalized financial solutions tailored to your needs.</p>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <i class="fas fa-phone text-2xl mr-4"></i>
                            <div>
                                <p class="font-semibold">Call Us</p>
                                <p class="opacity-90">+91 94488 52674 | +91 97436 52468</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-envelope text-2xl mr-4"></i>
                            <div>
                                <p class="font-semibold">Email Us</p>
                                <p class="opacity-90">Fingate@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-map-marker-alt text-2xl mr-4"></i>
                            <div>
                                <p class="font-semibold">Visit Us</p>
                                <p class="opacity-90">Bangalore, Karnataka</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reveal">
                    <form class="bg-white rounded-xl p-8 text-gray-800 premium-shadow">
                        <h3 class="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
                        <div class="grid md:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Your Name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <input type="email" placeholder="Your Email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                        </div>
                        <input type="tel" placeholder="Your Phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4">
                        <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4">
                            <option>Select Service</option>
                            <option>Personal Loan</option>
                            <option>Home Loan</option>
                            <option>Business Loan</option>
                            <option>Loan Against Property</option>
                            <option>Other</option>
                        </select>
                        <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 mb-6"></textarea>
                        <button type="submit" class="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 cta-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
        <div class="container mx-auto px-6 py-10">
            <div class="grid md:grid-cols-3 gap-8">
                <div class="mb-6 md:mb-0">
                    <img src="./public/assets/images/fin-gate-logo.png" alt="FIN GATE Logo" class="h-20 mb-4">
                    <p class="text-gray-400">Your trusted partner in financial services. Let us solve your money issues and finance needs.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="/index.html#about" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="/services.html" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
                        <li><a href="/index.html#process" class="text-gray-400 hover:text-white transition-colors">Our Process</a></li>
                        <li><a href="/index.html#testimonials" class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                        <li><a href="/certificates.html" class="text-gray-400 hover:text-white transition-colors">Certificates</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
                    <div class="space-y-2">
                        <p class="text-gray-400"><i class="fas fa-phone mr-2"></i> +91 94488 52674</p>
                        <p class="text-gray-400"><i class="fas fa-phone mr-2"></i> +91 97436 52468</p>
                        <p class="text-gray-400"><i class="fas fa-envelope mr-2"></i> Fingate@gmail.com</p>
                        <p class="text-gray-400"><i class="fas fa-map-marker-alt mr-2"></i> Bangalore, Karnataka</p>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">&copy; 2024 FIN GATE. All rights reserved. | <a href="#" id="privacy-policy-link" class="hover:underline">Privacy Policy</a> | <a href="#" id="terms-service-link" class="hover:underline">Terms of Service</a></p>
            </div>
        </div>
    </footer>

    <!-- Fraud Alert -->
    <div id="fraud-alert" class="hidden fixed bottom-5 right-5 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-lg max-w-sm z-50">
        <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-11a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V7zm1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg></div>
            <div>
                <p class="font-bold">FRAUD ALERT</p>
                <p class="text-sm">Please note FINGATE does not have any Branch or Office outside Bangalore. Only Mr. Andrews John interact with Customers via Mobile Nos. and via Email. Calls/Emails received from any other Mobile No or Email Address as FINGATE is Fraudulent and not us.</p>
                <ul class="text-sm list-disc list-inside mt-2">
                    <li><strong>Mobile:</strong> 94488 52674</li>
                    <li><strong>Mobile:</strong> 97436 52468</li>
                    <li><strong>Email:</strong> Fingate@gmail.com</li>
                </ul>
            </div>
            <button id="close-fraud-alert" class="ml-4 text-red-500 hover:text-red-700">&times;</button>
        </div>
    </div>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/919448852674" target="_blank" rel="noopener noreferrer" id="whatsapp-fab" class="hidden fixed bottom-5 left-5 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-40">
        <i class="fab fa-whatsapp text-4xl"></i>
    </a>

    <!-- Privacy Policy Modal -->
    <div id="privacy-policy-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div class="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">Privacy Policy</h2>
                <button id="close-privacy-policy" class="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
            </div>
            <div class="prose max-w-none">
                <p><strong>Last Updated: 13th April 2023</strong></p>
                <p>This Privacy Policy applies to the website Fingate.in. Fingate.in recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on http://www.Fingate.in and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.</p>
                <p>Fingate.in is a property of FIN GATE, a Sole Propreitorship firm registered under the Indian Companies Act, having its registered office at Christ School Road, Christ University, DHARMARAM COLLEGE, 33, 3rd floor, St Thomas Shopping Complex, Post, Landmark:, Bengaluru, Karnataka 560029.</p>

                <h3>Information we collect</h3>
                <p><strong>Contact information.</strong> We might collect your name, email, mobile number, phone number, street, city, state, pincode andcountry.</p>
                <p><strong>Payment and billing information.</strong> We NEVER collect your billing name, billing address and payment method when you apply for any Loan at our website. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our partner Banks, as and when needed.</p>
                <p><strong>Information you post.</strong> We collect information you post in a public space on our website or on a third-party social media site belonging to Fingate.in.</p>
                <p><strong>Demographic information.</strong> We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.</p>
                <p><strong>Other information.</strong> If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.</p>

                <h3>We collect information in different ways</h3>
                <p><strong>We collect information directly from you.</strong> We collect information directly from you when you apply for any loan on our website. We also collect information if you post a comment on our website or ask us a question through phone or email.</p>
                <p><strong>We collect information from you passively.</strong> We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website.</p>
                <p><strong>We get information about you from third parties.</strong> For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.</p>

                <h3>Use of your personal information</h3>
                <p><strong>We use information to contact you:</strong> We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes.</p>
                <p><strong>We use information to respond to your requests or questions.</strong> We might use your information to confirm your registration for an event or contest.</p>
                <p><strong>We use information to improve our products and services.</strong> We might use your information to customize your experience with us. This could include displaying content based upon your preferences.</p>
                <p><strong>We use information to look at site trends and customer interests.</strong> We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.</p>
                <p><strong>We use information for security purposes.</strong> We may use information to protect our company, our customers, or our websites.</p>
                <p><strong>We use information for marketing purposes.</strong> We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you buy tickets from us we'll enroll you in our newsletter. To learn about your choices for these communications, read the choices section below.</p>
                <p><strong>We use information to send you transactional communications.</strong> We might send you emails or SMS about your account or a loan application.</p>

                <h3>Sharing of information with third-parties</h3>
                <p><strong>We will share information with third parties who perform services on our behalf.</strong> We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of India.</p>
                <p><strong>We will share information with our business partners.</strong> This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies.</p>
                <p><strong>We will share information if we think we have to in order to comply with the law or to protect ourselves.</strong> We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.</p>
                <p><strong>We may share information with any successor to all or part of our business.</strong> For example, if part of our business is sold we may give our customer list as part of that transaction.</p>
                <p><strong>We may share your information for reasons not described in this policy.</strong> We will tell you before we do this.</p>

                <h3>Email Opt-Out</h3>
                <p><strong>You can opt out of receiving our marketing emails.</strong> To stop receiving our promotional emails, please email unsubscriber@Fingate.in. It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your application.</p>

                <h3>Third party sites</h3>
                <p>If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.</p>

                <h3>Grievance Officer</h3>
                <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
                <p>Mr. Andrews John.<br>
                Christ School Road, Christ University, DHARMARAM COLLEGE, 33, 3rd floor, St Thomas Shopping Complex, Post, Landmark:, Bengaluru, Karnataka 560029<br>
                Phone: +91-080 4809 2051<br>
                Email: fingate@gmail.com</p>
                <p>If you have any questions about this Policy or other privacy concerns, you can email us at fingate@gmail.com</p>
            </div>
        </div>
    </div>

    <!-- Terms of Service Modal -->
    <div id="terms-service-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div class="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">Terms of Service</h2>
                <button id="close-terms-service" class="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
            </div>
            <div class="prose max-w-none">
                <p><strong>Last Updated: 13th April 2023</strong></p>

                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using the FIN GATE website (www.fingate.in), you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h3>2. Services</h3>
                <p>FIN GATE provides financial consultation services including but not limited to loan advisory, documentation assistance, and liaison services with banks and financial institutions. We do not directly provide loans but act as intermediaries between customers and lending institutions.</p>

                <h3>3. User Responsibilities</h3>
                <p>Users are responsible for:</p>
                <ul>
                    <li>Providing accurate and complete information</li>
                    <li>Maintaining confidentiality of their personal information</li>
                    <li>Complying with all applicable laws and regulations</li>
                    <li>Not misusing our services for fraudulent activities</li>
                </ul>

                <h3>4. Service Limitations</h3>
                <p>FIN GATE operates only from Bangalore, Karnataka. We do not have branches or offices outside Bangalore. Any communication claiming to be from FIN GATE from other locations should be considered fraudulent.</p>

                <h3>5. Fees and Charges</h3>
                <p>Our service fees are clearly communicated before engagement. No hidden charges apply. Fees are non-refundable once services have been rendered.</p>

                <h3>6. Privacy and Data Protection</h3>
                <p>We are committed to protecting your privacy. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal information.</p>

                <h3>7. Limitation of Liability</h3>
                <p>FIN GATE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

                <h3>8. Termination</h3>
                <p>We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason whatsoever.</p>

                <h3>9. Governing Law</h3>
                <p>These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of courts in Bangalore, Karnataka.</p>

                <h3>10. Contact Information</h3>
                <p>For any questions regarding these terms, please contact:</p>
                <p>Mr. Andrews John<br>
                FIN GATE<br>
                Christ School Road, Christ University, DHARMARAM COLLEGE<br>
                33, 3rd floor, St Thomas Shopping Complex<br>
                Bengaluru, Karnataka 560029<br>
                Phone: +91 94488 52674, +91 97436 52468<br>
                Email: fingate@gmail.com</p>
            </div>
        </div>
    </div>

    <!-- EMI Calculator Modal -->
    <div id="emi-calculator-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div class="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-gray-900 flex items-center">
                    <i class="fas fa-calculator text-orange-600 mr-3"></i>
                    EMI Calculator
                </h2>
                <button id="close-emi-calculator" class="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
            </div>

            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Input Section -->
                    <div class="space-y-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">Loan Details</h3>

                        <!-- Loan Amount -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-rupee-sign text-orange-600 mr-1"></i>
                                Loan Amount
                            </label>
                            <div class="flex items-center space-x-3">
                                <input type="range" id="loan-amount-slider" min="50000" max="50000000" value="1000000"
                                       class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                                <input type="text" id="loan-amount-input" value="₹10,00,000"
                                       class="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-right">
                            </div>
                            <div class="flex items-center space-x-3 mt-1">
                                <div class="flex-1 flex justify-between text-xs text-gray-500">
                                    <span>₹50K</span>
                                    <span>₹5Cr</span>
                                </div>
                                <div class="w-32"></div>
                            </div>
                        </div>

                        <!-- Interest Rate -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-percentage text-orange-600 mr-1"></i>
                                Interest Rate (Annual)
                            </label>
                            <div class="flex items-center space-x-3">
                                <input type="range" id="interest-rate-slider" min="6" max="24" step="0.1" value="10.5"
                                       class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                                <input type="text" id="interest-rate-input" value="10.5%"
                                       class="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-right">
                            </div>
                            <div class="flex items-center space-x-3 mt-1">
                                <div class="flex-1 flex justify-between text-xs text-gray-500">
                                    <span>6%</span>
                                    <span>24%</span>
                                </div>
                                <div class="w-20"></div>
                            </div>
                        </div>

                        <!-- Loan Tenure -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-calendar-alt text-orange-600 mr-1"></i>
                                Loan Tenure
                            </label>
                            <div class="flex items-center space-x-3">
                                <input type="range" id="tenure-slider" min="1" max="30" value="20"
                                       class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                                <input type="text" id="tenure-input" value="20 years"
                                       class="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-right">
                            </div>
                            <div class="flex items-center space-x-3 mt-1">
                                <div class="flex-1 flex justify-between text-xs text-gray-500">
                                    <span>1 year</span>
                                    <span>30 years</span>
                                </div>
                                <div class="w-24"></div>
                            </div>
                        </div>

                        <!-- Preset Loan Types -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Quick Presets</label>
                            <div class="grid grid-cols-3 gap-2">
                                <button class="preset-btn px-3 py-2 text-xs border border-orange-200 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                                        data-amount="2500000" data-rate="8.5" data-tenure="25">Home Loan</button>
                                <button class="preset-btn px-3 py-2 text-xs border border-orange-200 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                                        data-amount="500000" data-rate="14" data-tenure="5">Personal Loan</button>
                                <button class="preset-btn px-3 py-2 text-xs border border-orange-200 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                                        data-amount="1500000" data-rate="16" data-tenure="7">Business Loan</button>
                            </div>
                        </div>
                    </div>

                    <!-- Results Section -->
                    <div class="space-y-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">Calculation Results</h3>

                        <!-- Monthly EMI -->
                        <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                            <p class="text-sm text-orange-600 font-medium mb-1">Monthly EMI</p>
                            <p id="monthly-emi" class="text-3xl font-bold text-orange-600">₹9,650</p>
                        </div>

                        <!-- Total Amount and Interest -->
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                                <p class="text-sm text-gray-600 font-medium mb-1">Total Amount</p>
                                <p id="total-amount" class="text-xl font-bold text-gray-900">₹23,16,000</p>
                            </div>
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                                <p class="text-sm text-gray-600 font-medium mb-1">Total Interest</p>
                                <p id="total-interest" class="text-xl font-bold text-gray-900">₹13,16,000</p>
                            </div>
                        </div>

                        <!-- Breakdown Chart -->
                        <div>
                            <p class="text-sm font-medium text-gray-700 mb-2">Payment Breakdown</p>
                            <div class="flex rounded-lg overflow-hidden h-8 bg-gray-200">
                                <div id="principal-bar" class="bg-orange-600 transition-all duration-300" style="width: 43%"></div>
                                <div id="interest-bar" class="bg-orange-300 transition-all duration-300" style="width: 57%"></div>
                            </div>
                            <div class="flex justify-between text-xs text-gray-600 mt-1">
                                <span><span class="inline-block w-3 h-3 bg-orange-600 rounded mr-1"></span>Principal</span>
                                <span><span class="inline-block w-3 h-3 bg-orange-300 rounded mr-1"></span>Interest</span>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="space-y-3">
                            <button id="apply-loan-btn" class="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                                <i class="fas fa-paper-plane mr-2"></i>
                                Apply for this Loan
                            </button>
                            <button id="reset-calculator" class="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                <i class="fas fa-redo mr-2"></i>
                                Reset Calculator
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

// Initialize footer
function initFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
        
        // Initialize footer functionality
        initFooterFunctionality();
    }
}

// Footer functionality
function initFooterFunctionality() {
    // Fraud alert functionality (original popup style)
    const fraudAlert = document.getElementById('fraud-alert');
    const closeFraudAlert = document.getElementById('close-fraud-alert');

    if (fraudAlert && closeFraudAlert) {
        // Show fraud alert after 2 seconds
        setTimeout(() => {
            fraudAlert.classList.remove('hidden');
        }, 2000);

        // Auto-hide after 15 seconds
        setTimeout(() => {
            fraudAlert.classList.add('hidden');
        }, 17000);

        closeFraudAlert.addEventListener('click', () => {
            fraudAlert.classList.add('hidden');
        });
    }

    // WhatsApp button functionality
    const whatsappFab = document.getElementById('whatsapp-fab');
    if (whatsappFab) {
        setTimeout(() => {
            whatsappFab.classList.remove('hidden');
        }, 2000);
    }

    // Privacy Policy Modal functionality
    const privacyPolicyLink = document.getElementById('privacy-policy-link');
    const privacyPolicyModal = document.getElementById('privacy-policy-modal');
    const closePrivacyPolicyButton = document.getElementById('close-privacy-policy');

    if (privacyPolicyLink && privacyPolicyModal && closePrivacyPolicyButton) {
        privacyPolicyLink.addEventListener('click', (e) => {
            e.preventDefault();
            privacyPolicyModal.classList.remove('hidden');
        });

        closePrivacyPolicyButton.addEventListener('click', () => {
            privacyPolicyModal.classList.add('hidden');
        });

        privacyPolicyModal.addEventListener('click', (e) => {
            if (e.target === privacyPolicyModal) {
                privacyPolicyModal.classList.add('hidden');
            }
        });
    }

    // Terms of Service Modal functionality
    const termsServiceLink = document.getElementById('terms-service-link');
    const termsServiceModal = document.getElementById('terms-service-modal');
    const closeTermsServiceButton = document.getElementById('close-terms-service');

    if (termsServiceLink && termsServiceModal && closeTermsServiceButton) {
        termsServiceLink.addEventListener('click', (e) => {
            e.preventDefault();
            termsServiceModal.classList.remove('hidden');
        });

        closeTermsServiceButton.addEventListener('click', () => {
            termsServiceModal.classList.add('hidden');
        });

        termsServiceModal.addEventListener('click', (e) => {
            if (e.target === termsServiceModal) {
                termsServiceModal.classList.add('hidden');
            }
        });
    }

    // EMI Calculator functionality
    initEMICalculator();
}

// EMI Calculator Functions
function initEMICalculator() {
    const emiModal = document.getElementById('emi-calculator-modal');
    const closeEmiButton = document.getElementById('close-emi-calculator');
    const loanAmountSlider = document.getElementById('loan-amount-slider');
    const loanAmountInput = document.getElementById('loan-amount-input');
    const interestRateSlider = document.getElementById('interest-rate-slider');
    const interestRateInput = document.getElementById('interest-rate-input');
    const tenureSlider = document.getElementById('tenure-slider');
    const tenureInput = document.getElementById('tenure-input');
    const presetButtons = document.querySelectorAll('.preset-btn');
    const resetButton = document.getElementById('reset-calculator');
    const applyButton = document.getElementById('apply-loan-btn');

    if (!emiModal) return;

    // Close modal functionality
    if (closeEmiButton) {
        closeEmiButton.addEventListener('click', () => {
            emiModal.classList.add('hidden');
        });
    }

    // Click outside to close
    emiModal.addEventListener('click', (e) => {
        if (e.target === emiModal) {
            emiModal.classList.add('hidden');
        }
    });

    // Slider and input synchronization
    if (loanAmountSlider && loanAmountInput) {
        loanAmountSlider.addEventListener('input', () => {
            const value = parseInt(loanAmountSlider.value);
            loanAmountInput.value = formatCurrency(value);
            calculateEMI();
        });

        loanAmountInput.addEventListener('input', () => {
            const value = parseCurrency(loanAmountInput.value);
            if (value >= 50000 && value <= 50000000) {
                loanAmountSlider.value = value;
                calculateEMI();
            }
        });
    }

    if (interestRateSlider && interestRateInput) {
        interestRateSlider.addEventListener('input', () => {
            const value = parseFloat(interestRateSlider.value);
            interestRateInput.value = value + '%';
            calculateEMI();
        });

        interestRateInput.addEventListener('input', () => {
            const value = parseFloat(interestRateInput.value.replace('%', ''));
            if (value >= 6 && value <= 24) {
                interestRateSlider.value = value;
                calculateEMI();
            }
        });
    }

    if (tenureSlider && tenureInput) {
        tenureSlider.addEventListener('input', () => {
            const value = parseInt(tenureSlider.value);
            tenureInput.value = value + (value === 1 ? ' year' : ' years');
            calculateEMI();
        });

        tenureInput.addEventListener('input', () => {
            const value = parseInt(tenureInput.value.replace(/[^0-9]/g, ''));
            if (value >= 1 && value <= 30) {
                tenureSlider.value = value;
                tenureInput.value = value + (value === 1 ? ' year' : ' years');
                calculateEMI();
            }
        });
    }

    // Preset buttons
    presetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const amount = button.dataset.amount;
            const rate = button.dataset.rate;
            const tenure = button.dataset.tenure;

            if (loanAmountSlider && loanAmountInput) {
                loanAmountSlider.value = amount;
                loanAmountInput.value = formatCurrency(parseInt(amount));
            }

            if (interestRateSlider && interestRateInput) {
                interestRateSlider.value = rate;
                interestRateInput.value = rate + '%';
            }

            if (tenureSlider && tenureInput) {
                tenureSlider.value = tenure;
                tenureInput.value = tenure + (tenure === '1' ? ' year' : ' years');
            }

            calculateEMI();
        });
    });

    // Reset button
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            if (loanAmountSlider && loanAmountInput) {
                loanAmountSlider.value = 1000000;
                loanAmountInput.value = '₹10,00,000';
            }

            if (interestRateSlider && interestRateInput) {
                interestRateSlider.value = 10.5;
                interestRateInput.value = '10.5%';
            }

            if (tenureSlider && tenureInput) {
                tenureSlider.value = 20;
                tenureInput.value = '20 years';
            }

            calculateEMI();
        });
    }

    // Apply button
    if (applyButton) {
        applyButton.addEventListener('click', () => {
            emiModal.classList.add('hidden');

            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });

                // Pre-select loan type in dropdown if available
                setTimeout(() => {
                    const serviceSelect = document.querySelector('#contact select');
                    if (serviceSelect) {
                        const loanAmount = parseInt(loanAmountSlider.value);
                        if (loanAmount >= 2000000) {
                            serviceSelect.value = 'Home Loan';
                        } else if (loanAmount <= 1000000) {
                            serviceSelect.value = 'Personal Loan';
                        } else {
                            serviceSelect.value = 'Business Loan';
                        }
                    }
                }, 500);
            }
        });
    }

    // Initial calculation
    calculateEMI();
}

// EMI Calculation Function
function calculateEMI() {
    const loanAmountSlider = document.getElementById('loan-amount-slider');
    const interestRateSlider = document.getElementById('interest-rate-slider');
    const tenureSlider = document.getElementById('tenure-slider');

    if (!loanAmountSlider || !interestRateSlider || !tenureSlider) return;

    const principal = parseInt(loanAmountSlider.value);
    const annualRate = parseFloat(interestRateSlider.value);
    const years = parseInt(tenureSlider.value);

    // Calculate EMI
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    let emi = 0;
    if (monthlyRate > 0) {
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);
    } else {
        emi = principal / months;
    }

    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    // Update display
    const monthlyEmiElement = document.getElementById('monthly-emi');
    const totalAmountElement = document.getElementById('total-amount');
    const totalInterestElement = document.getElementById('total-interest');
    const principalBar = document.getElementById('principal-bar');
    const interestBar = document.getElementById('interest-bar');

    if (monthlyEmiElement) {
        monthlyEmiElement.textContent = formatCurrency(Math.round(emi));
    }

    if (totalAmountElement) {
        totalAmountElement.textContent = formatCurrency(Math.round(totalAmount));
    }

    if (totalInterestElement) {
        totalInterestElement.textContent = formatCurrency(Math.round(totalInterest));
    }

    // Update breakdown chart
    if (principalBar && interestBar) {
        const principalPercentage = (principal / totalAmount) * 100;
        const interestPercentage = (totalInterest / totalAmount) * 100;

        principalBar.style.width = principalPercentage + '%';
        interestBar.style.width = interestPercentage + '%';
    }
}

// Utility Functions
function formatCurrency(amount) {
    // Always show exact amounts with Indian number formatting
    return '₹' + Math.round(amount).toLocaleString('en-IN');
}

function formatCurrencyCompact(amount) {
    // Compact format for display in smaller spaces (if needed)
    if (amount >= 10000000) { // 1 crore
        return '₹' + (amount / 10000000).toFixed(1) + 'Cr';
    } else if (amount >= 100000) { // 1 lakh
        return '₹' + (amount / 100000).toFixed(1) + 'L';
    } else if (amount >= 1000) { // 1 thousand
        return '₹' + (amount / 1000).toFixed(0) + 'K';
    } else {
        return '₹' + Math.round(amount).toLocaleString('en-IN');
    }
}

function parseCurrency(value) {
    // Remove currency symbols and convert to number
    const cleanValue = value.replace(/[₹,\s]/g, '');

    if (cleanValue.includes('Cr')) {
        return Math.round(parseFloat(cleanValue.replace('Cr', '')) * 10000000);
    } else if (cleanValue.includes('L')) {
        return Math.round(parseFloat(cleanValue.replace('L', '')) * 100000);
    } else if (cleanValue.includes('K')) {
        return Math.round(parseFloat(cleanValue.replace('K', '')) * 1000);
    } else {
        return Math.round(parseFloat(cleanValue)) || 0;
    }
}

// Global function to open EMI calculator
function openEMICalculator() {
    const emiModal = document.getElementById('emi-calculator-modal');
    if (emiModal) {
        emiModal.classList.remove('hidden');
        // Recalculate when opened
        setTimeout(() => calculateEMI(), 100);
    }
}
