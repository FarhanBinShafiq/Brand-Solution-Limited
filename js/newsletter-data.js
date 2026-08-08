// Global Newsletter Registry
// Future releases can simply be added to the top of this array!
window.NEWSLETTER_DATA = [
    {
        id: "july-2026",
        title: "Monthly Event Showcase",
        edition: "July 2026 Edition",
        month: "July 2026",
        image: "images/newsletter/newletter.jpeg",
        description: "Explore our highlights from major corporate summits, brand visibility setups, and international NGO conventions executed in July 2026.",
        isLatest: true
    }
];

// Helper to retrieve the active latest newsletter
window.getLatestNewsletter = function() {
    return window.NEWSLETTER_DATA.find(n => n.isLatest) || window.NEWSLETTER_DATA[0];
};
