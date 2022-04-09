import MainLayout from "../domains/shared/components/Layouts/MainLayout";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Kontakt = () => {
  const [state, handleSubmit] = useForm("xbjwzjbj");
  if (state.succeeded) {
    return <p>Wiadomość została wysłana!</p>;
  }
  return (
    <MainLayout>
      <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Wiadomość</label>
          <textarea id="message" name="message" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Wyślij
          </button>
        </form>
      </Container>
    </MainLayout>
  );
};

export default Kontakt;

const Container = styled.main`
  padding-top: 150px;

  form {
    padding: 50px;
    width: 30%;
    display: flex;
    flex-direction: column;
  }
`;
