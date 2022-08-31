import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
 const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
      'service_tj10rno',  'template_yek99rg', e.target, 'wmmorZv5KrqW2h6VR'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <p>✧ Do you like what you see?</p>
                <h2>🖋️Write me! ❤</h2>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name...'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email...'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message...'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg' value='Send'>
                  Send

                </button>
              </form>  
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>❤ Contact</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> 📍 Adress
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> 📱 Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
              <button type='submit' className=''>
             <a width='80' h
               
               href="https://wa.me/5492995036040?text=Hello!%20i%20want%20to%20meet%20 you :)"
             > <strong className='fa fa-whatsapp'></strong>Send me a WhatsApp</a>  
                </button>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i>✉️ Email
                </span>{' '}
                {props.data ? props.data.email : 'loading... '}
              </p>
             
            </div>
          </div>
          <div className='col-md-12'>
            
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkIn : '/'}>
                      <img className='' alt='github' src='https://th.bing.com/th/id/R.4f86ef12f713ddfb134577d10f51f1a7?rik=X%2b%2fbqKvDsdZPHA&pid=ImgRaw&r=0' width='35'/>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.github : '/'}>
            
                      <img className='' alt='github' src='https://th.bing.com/th/id/R.414ebc476f27d06e04c0bca440c98053?rik=9GfG%2bNdIGvKshQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgithub-icon-1600.png&ehk=15KDlK3QmUHw9Edzl6NT2MuFVvib1138uNzZHL%2fBtTo%3d&risl=&pid=ImgRaw&r=00' width='35'/>
             
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.henrytalent : '/'}>
                    <img className='' alt='github' src='https://img2.freepng.es/20180414/fle/kisspng-github-computer-icons-logo-encapsulated-postscript-adress-5ad1a257e41948.3542396215236880239343.jpg' width='35'/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
 
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Ireby{' '}
            <a href='' rel='nofollow'>
            All rights reserved
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
