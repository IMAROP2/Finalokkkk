document.getElementById('loadNewSectionBtn').addEventListener('click', function() {
    // Hide the old section and show the new section
    document.getElementById('oldSection').classList.add('hidden');
    document.getElementById('newSection').classList.remove('hidden');
});

document.getElementById('backToOldSectionBtn').addEventListener('click', function() {
    // Hide the new section and show the old section
    document.getElementById('newSection').classList.add('hidden');
    document.getElementById('oldSection').classList.remove('hidden');
});
