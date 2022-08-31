import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='gallery' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Projects</h2>
          <p>
           Know About my projects.
          </p>
        </div>
        <div className='row'>
          <div className='gallery-items'>
           { console.log(props.data)}
            {props.data
              ? props.data.map((d) => (
                <div key={`${d.title}`} className='col-sm-6 col-md-2 col-lg-6'>
       <a href={`${d.url}`}>
                  <Image title={'Go! => '+ d.title} image={d.image} className='icon-folder' />
                 </a>
                </div>
              ))
           
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
