document.getElementById('loadNewSectionBtn').addEventListener('click', function() {
    // Fetch new HTML content (for demo, using hardcoded content)
    const newSectionHTML = `
        <h2>New Section</h2>
        <p>This is a dynamically loaded section with its own content.</p>
        <button id="newActionBtn">Click Me!</button>
    `;
    
    // Insert the new section into the DOM
    document.getElementById('newSection').innerHTML = newSectionHTML;

    // Load additional CSS
    const newStyles = document.createElement('link');
    newStyles.rel = 'stylesheet';
    newStyles.href = 'newStyles.css';
    document.head.appendChild(newStyles);

    // Load additional JS (for button functionality in the new section)
    const script = document.createElement('script');
    script.src = 'newScript.js';
    document.body.appendChild(script);
});
