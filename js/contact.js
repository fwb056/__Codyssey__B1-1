export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // 폼 검증 규칙을 한 번에 관리합니다.
    // - 이름/메시지는 공백만 있으면 안 됩니다.
    // - 이메일은 간단한 형식만 허용합니다. (예: user@example.com)
    const fields = [
        { id: 'name', error: 'nameError', validate: value => value.trim() !== '' },
        { id: 'email', error: 'emailError', validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) },
        { id: 'message', error: 'messageError', validate: value => value.trim() !== '' }
    ];

    // 에러 메시지와 입력 필드의 시각적 상태를 함께 변경합니다.
    // 성공이면 숨기고, 실패면 보이도록 처리합니다.
    const showError = (input, errorEl, isValid) => {
        if (!input || !errorEl) return;

        errorEl.style.display = isValid ? 'none' : 'block';
        input.classList.toggle('invalid', !isValid);
    };

    // 하나의 필드만 검증하는 함수입니다.
    // return 값이 true면 통과, false면 오류 상태입니다.
    const validateField = (field) => {
        const input = document.getElementById(field.id);
        const errorEl = document.getElementById(field.error);
        const isValid = field.validate(input?.value ?? '');

        showError(input, errorEl, isValid);
        return isValid;
    };

    // 사용자가 입력할 때마다 즉시 검증합니다.
    // 이렇게 해야 필수값 누락이나 이메일 형식 오류를 입력 직후 알 수 있습니다.
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input) return;

        input.addEventListener('input', () => validateField(field));
        input.addEventListener('blur', () => validateField(field));
    });

    // 최종 제출 시점에도 다시 한 번 전체 검증을 진행합니다.
    // 하나라도 실패하면 제출을 막고, 모두 통과하면 성공 메시지를 보여줍니다.
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;
        fields.forEach(field => {
            valid = validateField(field) && valid;
        });

        const successMsg = document.getElementById('successMsg');
        if (valid) {
            if (successMsg) successMsg.style.display = 'block';
            form.reset();

            // 사용자가 메시지를 확인할 수 있도록 잠깐 보여준 뒤 숨깁니다.
            setTimeout(() => {
                if (successMsg) successMsg.style.display = 'none';
            }, 3000);
        }
    });
}
