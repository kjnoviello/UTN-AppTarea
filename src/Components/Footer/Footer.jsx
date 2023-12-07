import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import ('./Footer.css')

function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white customMDBFooter'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        
          <Button variant='dark'  className='m-1' href='https://informaticanoviello.aptugo.app/' role='button' target='_blank'>
          <i className="ri-global-line socialIcon"></i>
          </Button>
          <Button variant='dark'  className='m-1' href='https://www.linkedin.com/in/kevinjoelnoviello/' role='button' target='_blank'>
          <i className="ri-linkedin-line socialIcon"></i>
          </Button>
          <Button variant='dark'  className='m-1' href='https://github.com/kjnoviello' role='button' target='_blank'>
          <i className="ri-github-line socialIcon"></i>
          </Button>
          <Button variant='dark'  className='m-1' href='https://wa.me/3416851106' role='button' target='_blank'>
          <i className="ri-whatsapp-line socialIcon"></i>
          </Button>
        </section>
      </MDBContainer>
      <hr />
      <div className='text-center p-3'>
        © 2023 -  
        <a className='text-white' href='https://www.linkedin.com/in/kevinjoelnoviello/' target='_blanck'>
          Kevin Joel Noviello
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;