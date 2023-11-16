import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

import ('./Footer.css')

function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white customMDBFooter'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <Button variant='dark'  className='m-1' href='#!' role='button'>
          <i className="ri-facebook-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='#!' role='button'>
          <i className="ri-twitter-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='#!' role='button'>
          <i className="ri-instagram-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='#!' role='button'>
          <i className="ri-linkedin-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='#!' role='button'>
          <i className="ri-github-line socialIcon"></i>
          </Button>
        </section>
      </MDBContainer>

      <hr />

      <div className='text-center p-3'>
        © 2023 Design: 
        <a className='text-white' href='#'>
          Kevin Joel Noviello
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;