import { Outlet } from 'react-router';
import { Container, Wrap } from './styles';
import Navbar from '../Navbar';
function Layout() {
  return (
    <Wrap>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </Wrap>
  );
}

export default Layout;
