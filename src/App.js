import React from "react";
import styled from "styled-components";
import AppSvg from "./AppSvg";
import mixin from "./Styles/Mixin";

export default function App() {
  return (
    <Container>
      <Header>
        <HeadTitle>Create a new repository</HeadTitle>
        <Details>
          A repository contains all project files, including the revision
          history. Already have a project repository elsewhere?
        </Details>
      </Header>
      <RepoTemplate>
        <RepoLabel>Repository template</RepoLabel>
        <RepoDetail>
          Start your repository with a template repository's contents.
        </RepoDetail>
        <SelectBox>
          <SelectBoxTitle>No Template</SelectBoxTitle>
        </SelectBox>
      </RepoTemplate>
      <RepoInfoSection>
        <RepoInfoWrapper>
          <RepoInfoBox>
            <RepoLabel strong>Owner</RepoLabel>
            <SelectBox>
              <SelectBoxTitle>wecode</SelectBoxTitle>
            </SelectBox>
          </RepoInfoBox>
          <Divider>/</Divider>
          <RepoInfoBox>
            <RepoLabel strong>Repository name</RepoLabel>
            <RepoInput />
          </RepoInfoBox>
        </RepoInfoWrapper>
        <Suggestion>
          Great repository names are short and memorable. Need inspiration? How
          about <Strong>fictional-lamp</Strong>?
        </Suggestion>
        <DescBox>
          <RepoLabel>Description</RepoLabel>
          <RepoInput />
        </DescBox>
        <CheckBoxForm>
          <RepoLabel>
            <RadioInput
              type="radio"
              value="public"
              name="repoAccess"
              checked="checked"
              onChange={(e) => console.log(e)}
            />
            Public
          </RepoLabel>
          {AppSvg.public}
          <RepoDetail>
            Anyone on the internet can see this repository. You choose who can
            commit.
          </RepoDetail>
        </CheckBoxForm>
        <CheckBoxForm>
          <RepoLabel>
            <RadioInput
              type="radio"
              value="private"
              name="repoAccess"
              onChange={(e) => console.log(e)}
            />
            Private
          </RepoLabel>
          {AppSvg.private}
          <RepoDetail>
            You choose who can see and commit to this repository.
          </RepoDetail>
        </CheckBoxForm>
      </RepoInfoSection>
      <InitializingSection>
        <RepoLabel>Initialize this repository with:</RepoLabel>
        <Details>
          Skip this step if you’re importing an existing repository.
        </Details>
        <InitializingCheckBox>
          <RepoLabel>
            <CheckboxInput type="checkbox" value="0" name="repository" />
            Add a README file
          </RepoLabel>
          <RepoDetail>
            This is where you can write a long description for your project.
          </RepoDetail>
        </InitializingCheckBox>
        <InitializingCheckBox>
          <RepoLabel>
            <CheckboxInput type="checkbox" value="1" name="repository" />
            Add .gitignore
          </RepoLabel>
          <RepoDetail>
            Choose which files not to track from a list of templates.
          </RepoDetail>
        </InitializingCheckBox>
        <InitializingCheckBox>
          <RepoLabel>
            <CheckboxInput type="checkbox" value="2" name="repository" />
            Choose a license
          </RepoLabel>
          <RepoDetail>
            A license tells others what they can and can't do with your code.
          </RepoDetail>
        </InitializingCheckBox>
      </InitializingSection>
      <CreateRepo> Create repository </CreateRepo>
    </Container>
  );
}

const Container = styled.div`
  max-width: 768px;
  padding: 0 24px;
  margin: 40px 0;
  margin-right: auto;
  margin-left: auto;
  font-family: ${({ theme }) => theme.font};
`;

const Header = styled.div`
  margin-bottom: 32px;
  border-bottom: ${({ theme }) => theme.border};
`;

const HeadTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Details = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  color: #586069;
`;

const RepoTemplate = styled.div`
  margin: -8px 0 24px 0;
  padding-bottom: 24px;
  border-bottom: ${({ theme }) => theme.border};
`;

const RepoLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;

  &:after {
    padding-left: 5px;
    color: ${({ theme }) => theme.color.red};
    content: ${({ strong }) => strong && `"*"`};
  }
`;

const RepoDetail = styled.p`
  min-height: 17px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #586069;
`;

const SelectBox = styled.details``;

const SelectBoxTitle = styled.summary`
  display: inline-block;
  padding: 5px 16px;
  border: 1px solid;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const RepoInfoSection = styled.div``;

const RepoInfoWrapper = styled.div`
  display: flex;
`;

const RepoInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const RepoInput = styled.input`
  ${mixin.input}
`;

const Divider = styled.span`
  /*padding 손보기*/
  padding-top: 18px;
  margin: 4px 8px 0;
  font-size: 24px;
`;

const Suggestion = styled.p`
  display: inline;
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.5;
`;

const Strong = styled.strong`
  display: inline;
  color: #22863a;
  cursor: pointer;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding-bottom: 15px;
  border-bottom: ${({ theme }) => theme.border};
`;

const CheckBoxForm = styled.div`
  padding-left: 20px;
  margin: 15px 0;
`;

const RadioInput = styled.input`
  margin: 5px 0 0 -20px;
`;

const InitializingSection = styled.div`
  padding-top: 15px;
  border-top: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
`;

const InitializingCheckBox = styled.div`
  margin-bottom: 16px;
`;

const CheckboxInput = styled.input``;

const CreateRepo = styled.button`
  margin-top: 15px;
`;
