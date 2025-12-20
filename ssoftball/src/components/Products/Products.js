'use client';
import './Products.scss';
import bookCover1 from '../../images/bookCover.jpg';
import bookCover2 from '../../images/baseballCover.jpg';

export function Products({ id, title, items }) {
  const sectionId ='product-features';
  const heading = 'Our Products';
  const productItems =  [
    {
      title: 'Softball Journal Workbook',
      imageUrl: bookCover1,
      body: '',
      link: 'https://www.amazon.com/dp/B0DV5CXX1J?ref_=cm_sw_r_ffobk_cp_ud_dp_2Z12YR9M5JMDMPAABR44_1&skipTwisterOG=1&bestFormat=true&newOGT=1',
      linkText: 'Get a Copy',
    },
    {
      title: 'Baseball Journal Workbook',
      imageUrl: bookCover2,
      body: '',
      link: 'https://a.co/d/0d9A4yZ',
      linkText: 'Get a Copy',
    },
  ];

  return (
    <section id={sectionId} className="section products-section">
      <div className="products-container">
        {heading ? <h2 className="products-title">{heading}</h2> : null}

        <div className="products-grid">
          {productItems.map((f, i) => {
            const fimgUrl = f.imageUrl;
            const ink = i % 2 === 0; // alternate ink panels
            // allow small/medium/large descriptors or full-size image URLs
            const imgSizeClass = f.imgSize === 'sm' ? 'img-sm' : f.imgSize === 'md' ? 'img-md' : f.imgSize === 'lg' ? 'img-lg' : 'img-full';
            return (
              <div key={i}>
                <div className={`product-card `}>
                  {fimgUrl ? (
                    <div className={`product-image-wrap ${imgSizeClass}`}>
                      <img src={fimgUrl} alt={f.title || ''} width={980} height={740} loading="eager" />
                    </div>
                  ) : null}
                  <div className="product-title">{f.title}</div>
                  {f.body ? <p className={`product-body `}>{f.body}</p> : null}
                  <div className="mt-6">
                    {f.link ? (
                      <a href={f.link} target="_blank" rel="noreferrer" className={`product-link button-main`}>
                        {f.linkText || 'Learn more'}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
