export const Image = ({ title, image, url }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={url}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={image}
            
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}