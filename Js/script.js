document.getElementById('intro-text').addEventListener('mouseover', function () {
    const text = this.textContent.trim();
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            newText += text[i];
            this.textContent = newText;
        }, i * 50);
    }
});

document.getElementById('intro-text').addEventListener('mouseout', function () {
    this.textContent = 'Hi, I am Sourav';
});

function downloadResume() {
    var link = document.getElementById('hidden-download-link');
    link.click();
}

function showCertificates(skill) {
    const pdfSource = `resources/certificates/${skill}.pdf`;

    document.getElementById('certificateEmbed').src = pdfSource;

    document.getElementById('certificatesModal').style.display = 'block';
}

function closeCertificatesModal() {
    document.getElementById('certificatesModal').style.display = 'none';

    document.getElementById('certificateEmbed').src = '';
}

function openEmailClient() {
    const emailAddress = 'sourav280902@gmail.com';
    
    const mailtoLink = `mailto:${emailAddress}`;
    
    window.location.href = mailtoLink;
}
  