export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        const fields = [
            { id: 'name', error: 'nameError', check: v => v.trim() !== '' },
            { id: 'email', error: 'emailError', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
            { id: 'message', error: 'messageError', check: v => v.trim() !== '' }
        ];

        fields.forEach(f => {
            const input = document.getElementById(f.id);
            const errorEl = document.getElementById(f.error);
            if (!input || !errorEl) return;

            if (!f.check(input.value)) {
                errorEl.style.display = 'block';
                input.classList.add('invalid');
                valid = false;
            } else {
                errorEl.style.display = 'none';
                input.classList.remove('invalid');
            }
        });

        const successMsg = document.getElementById('successMsg');
        if (valid) {
            if (successMsg) successMsg.style.display = 'block';
            form.reset();
            setTimeout(() => {
                if (successMsg) successMsg.style.display = 'none';
            }, 3000);
        }
    });
}