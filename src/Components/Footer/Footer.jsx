import {
  MDBFooter,
  MDBContainer,
//   MDBCol,
//   MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import ('./Footer.css')

function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white customMDBFooter'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3'>
        © 2023 Design: 
        <a className='text-white' href='https://mdbootstrap.com/'>
          Grupo K
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;