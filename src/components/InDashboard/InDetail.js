import React from "react";
//import { Container, Title, FormWrap } from './DdashboardElements';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
} from "./IndashboardElement";
// import { FormWrap } from './DdashboardElements';
//import { Icon } from './DdashboardElements';
// import { FormContent } from './DdashboardElements';
// import { Form } from './DdashboardElements';
// import { FormH1 } from './DdashboardElements';
// import { FormLabel } from './DdashboardElements';
// import { FormInput } from './DdashboardElements';
// import { FormButton } from './DdashboardElements';
// import { Text } from './DdashboardElements';
// import styled from 'styled-components';
//import { OuterBox } from './DdashboardElements';

const InDetail = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Look up into Insurance detail</FormH1>
              <FormLabel htmlFor="for">Account address :</FormLabel>
              <FormLabel htmlFor="to">Name :</FormLabel>
              <FormLabel htmlFor="to">Contact :</FormLabel>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default InDetail;
