import React from "react";
import { Row, Col } from "react-flexbox-grid";

import { Page } from "../../layout";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { FormWrapper, HeaderText, DescriptionText, PaddedDiv } from "./Signup.style";

const SignupPage = () => {
  const handleLoginCTAClick = (e) => {
    e.preventDefault();

    window.location = "/login";
  };

  const handleFormSubmit = () => {
    console.log("Submit form and redirect user");
  };

  return (
    <Page>
      <FormWrapper>
        <HeaderText>Create account</HeaderText>
        <DescriptionText>Create an account to post your request</DescriptionText>
        <form onSubmit={() => handleFormSubmit()}>
          <Row>
            <Col xs={12}>
              <PaddedDiv>
                <Input inputType="text" dataId="fullName" inputName="fullName" label="FULL NAME" />
              </PaddedDiv>
            </Col>
            <Col xs={12}>
              <PaddedDiv>
                <Input inputType="text" dataId="email" inputName="email" label="EMAIL" />
              </PaddedDiv>
            </Col>
            <Col xs={12}>
              <PaddedDiv>
                <Input
                  inputType="text"
                  dataId="phoneNumber"
                  inputName="phoneNumber"
                  label="PHONE NUMBER"
                />
              </PaddedDiv>
            </Col>
            <Col xs={12}>
              <PaddedDiv>
                <Input inputType="text" dataId="zipCode" inputName="zipCode" label="ZIP CODE" />
              </PaddedDiv>
            </Col>
          </Row>
          <Row>
              <Button
                text="Create account"
                onClick={() => handleFormSubmit()}
                secondary
                size="m"
                style={{margin: "0 auto"}}
              />
          </Row>
        </form>
      </FormWrapper>
    </Page>
  );
};

export default SignupPage;
