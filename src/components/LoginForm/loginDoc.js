import React from "react";
import { Container } from "./LoginElements";
import { FormWrap } from "./LoginElements";
import { Icon } from "./LoginElements";
import { FormContent } from "./LoginElements";
import { Form } from "./LoginElements";
import { FormH1 } from "./LoginElements";
import { FormLabel } from "./LoginElements";
import { FormInput } from "./LoginElements";
import { FormButton } from "./LoginElements";
import { Text } from "./LoginElements";
import Footer from "../Footer";
const DocForm = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form action="/DocEntry">
              <FormH1>Sign Up to register as new Doctor</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type={String} required />
              <FormLabel htmlFor="to">Liscence no:</FormLabel>
              <FormInput type={String} required />
              <FormLabel htmlFor="to">Hospital name</FormLabel>
              <FormInput type={String} required />
              <FormLabel htmlFor="to">Faculty</FormLabel>
              <FormInput type={String} required />
              <FormLabel htmlFor="to">Contact</FormLabel>
              <FormInput type={Number} required />
              <FormButton type="submit" to="/DocEntry">
                Register
              </FormButton>
              {/* <Text>Forgot Password</Text>
                      <Text>Sign Up</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default DocForm;
