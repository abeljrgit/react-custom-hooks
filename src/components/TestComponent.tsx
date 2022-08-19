import { TestContent } from '@content';
import { TestTypes } from '@types';

export const TestComponent = ({ testVariable }: TestTypes) => {
  return <div>{testVariable + TestContent[0].text}</div>;
};
