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
          <Button variant='dark'  className='m-1' href='https://www.facebook.com/?locale=es_LA' role='button' target='_blank'>
          <i className="ri-facebook-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='https://twitter.com/?lang=es' role='button' target='_blank'>
          <i className="ri-twitter-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='https://www.instagram.com/' role='button' target='_blank'>
          <i className="ri-instagram-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='https://www.linkedin.com/' role='button' target='_blank'>
          <i className="ri-linkedin-line socialIcon"></i>
          </Button>

          <Button variant='dark'  className='m-1' href='https://github.com/' role='button' target='_blank'>
          <i className="ri-github-line socialIcon"></i>
          </Button>
        </section>
      </MDBContainer>

      <hr />

      {/* <div className='text-center p-3'>
        © 2023 Design: 
        <a className='text-white' href='#'>
          Kevin Joel Noviello
        </a>
      </div> */}
      <div className='text-center p-3'>
        © 2023 - 
        <a className='text-white' href='#'>
          UTN -React
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;