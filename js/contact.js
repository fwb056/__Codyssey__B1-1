export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // 검증 규칙을 배열로 정의해 한 곳에서 관리합니다.
    // 이름과 메시지는 비어 있으면 안 되고, 이메일은 형식이 올바른지 확인합니다.
    const fields = [
        { id: 'name', error: 'nameError', validate: value => value.trim() !== '' },
        { id: 'email', error: 'emailError', validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) },
        { id: 'message', error: 'messageError', validate: value => value.trim() !== '' }
    ];

    // 에러 메시지와 입력창에 시각적 상태를 반영합니다.
    // 유효하면 숨기고, 실패하면 메시지를 보여주며 invalid 스타일을 적용합니다.
    const showError = (input, errorEl, isValid) => {
        if (!input || !errorEl) return;

        errorEl.style.display = isValid ? 'none' : 'block';
        input.classList.toggle('invalid', !isValid);
    };

    // 특정 필드 하나를 검증하는 함수입니다.
    // true면 통과, false면 오류 상태입니다.
    const validateField = (field) => {
        const input = document.getElementById(field.id);
        const errorEl = document.getElementById(field.error);
        const isValid = field.validate(input?.value ?? '');

        showError(input, errorEl, isValid);
        return isValid;
    };

    // 사용자가 입력하는 즉시 검증합니다.
    // 이를 통해 빈 값이나 이메일 형식 오류를 입력 직후 바로 알 수 있습니다.
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input) return;

        input.addEventListener('input', () => validateField(field));
        input.addEventListener('blur', () => validateField(field));
    });

    // 최종 제출 시점에도 전체 폼을 다시 검증해 안전하게 처리합니다.
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

            // 사용자가 성공 메시지를 확인할 수 있도록 잠깐 보여주고 숨깁니다.
            setTimeout(() => {
                if (successMsg) successMsg.style.display = 'none';
            }, 3000);
        }
    });
}
