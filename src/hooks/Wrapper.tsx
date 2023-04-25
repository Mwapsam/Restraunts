import { FC } from 'react';
import { Nav, Footer } from '../components';

type Props = object

const Wrapper = (Component: FC )=> (props: Props) => {
  return (
    <>
        <Nav />
        <Component {...props} />
        <Footer />
    </>
  )
}

export default Wrapper;