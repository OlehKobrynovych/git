https://react.dev/reference/react/useId


useIdце React Hook для генерації унікальних ідентифікаторів, які можна передати в атрибути доступності.
const id = useId()

import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}