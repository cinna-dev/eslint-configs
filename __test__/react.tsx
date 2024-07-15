/* eslint-disable strict */
import {
  type FC, type ReactNode, useState
} from 'packages/eslint-config-test/__test__/react';

interface ComponentProps {
	children: ReactNode;
}

const Component: FC<ComponentProps> = (props) => {
  const [ click, setClick ] = useState();
  const handleClick: kEventHandler<HTMLElement> = (event) => setClick(event);

  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default Component;
