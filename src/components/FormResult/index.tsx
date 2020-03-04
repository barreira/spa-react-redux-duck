import * as React from 'react';
import { connect } from 'react-redux';

import { Wrapper } from '../styles';

interface FormResultItem {
  id: string;
  text: string;
}

interface FormResultProps {
  data: FormResultItem[];
}

const FormResult: React.FC<{}> = () => {
  // const sortArrayById = (arr: FormResultItem[]): FormResultItem[] => {
  //   return [...arr].sort((a, b) => {
  //     return parseInt(a.id) - parseInt(b.id);
  //   });
  // };

  return <Wrapper>Form Result</Wrapper>;
};

export default connect(() => ({}), null)(FormResult);
