document.getElementById('profile-photo').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('profile-photo-preview').src = reader.result;
        document.getElementById('preview-profile-photo').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('full-name').addEventListener('input', function() {
    document.getElementById('preview-full-name').textContent = this.value;
});

document.getElementById('contact-details').addEventListener('input', function() {
    document.getElementById('preview-contact-details').textContent = this.value;
});

document.getElementById('address').addEventListener('input', function() {
    document.getElementById('preview-address').textContent = this.value;
});

document.getElementById('work-experience').addEventListener('input', function() {
    document.getElementById('preview-work-experience').textContent = this.value;
});

document.getElementById('education').addEventListener('input', function() {
    document.getElementById('preview-education').textContent = this.value;
});

document.getElementById('skills').addEventListener('input', function() {
    document.getElementById('preview-skills').textContent = this.value;
});

document.getElementById('certifications').addEventListener('input', function() {
    document.getElementById('preview-certifications').textContent = this.value;
});

document.getElementById('hobbies').addEventListener('input', function() {
    document.getElementById('preview-hobbies').textContent = this.value;
});

document.getElementById('references').addEventListener('input', function() {
    document.getElementById('preview-references').textContent = this.value;
});

document.querySelectorAll('.color-picker div').forEach(function(colorDiv) {
    colorDiv.addEventListener('click', function() {
        document.querySelectorAll('.color-picker div').forEach(function(div) {
            div.classList.remove('selected');
        });
        this.classList.add('selected');
        document.querySelector('.resume-preview').style.borderColor = this.style.backgroundColor;
    });
});

document.querySelectorAll('.template-picker div').forEach(function(templateDiv) {
    templateDiv.addEventListener('click', function() {
        document.querySelectorAll('.template-picker div').forEach(function(div) {
            div.classList.remove('selected');
        });
        this.classList.add('selected');
        applyTemplate(this.dataset.template);
    });
});

function applyTemplate(template) {
    const resumePreview = document.getElementById('resume-preview');
    resumePreview.className = 'resume-preview'; // Reset classes
    resumePreview.classList.add(template);
}

document.querySelector('.download-btn').addEventListener('click', function() {
    html2canvas(document.getElementById('resume-preview')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
        doc.text('Created by Muhammad Hasnain', 10, doc.internal.pageSize.height - 10);
        doc.save('resume.pdf');
    });
});