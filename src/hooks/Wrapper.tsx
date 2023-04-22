import { FC } from 'react';
import { Nav } from '../components';

type Props = object

const Wrapper = (Component: FC )=> (props: Props) => {
  return (
    <>
        <Nav />
        <Component {...props} />
    </>
  )
}

export default Wrapper