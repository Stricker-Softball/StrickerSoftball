'use client';
import './Partners.scss';
import brintItImg from '../../images/bring-it.jpg';
import champImg from '../../images/champion.png';

export function Partners({ id, title, items }) {
  const sectionId ='partners-features';
  const heading = 'Partners';
  const productItems =  [
    {
      title: '',
      imageUrl: champImg,
      body: '',
      link: 'https://www.championcraftcoaching.com/',
      linkText: 'Visit',
    },
    {
      title: '',
      imageUrl: brintItImg,
      body: '',
      link: 'https://www.bringitsportsacademy.com/',
      linkText: 'Visit',
    },
  ];

  return (
    <section id={sectionId} className="section products-section partners-section">
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
                <div className={`partner-card ${ink ? 'card-ink' : 'card'}`}>
                  {fimgUrl ? (
                    <div className={`product-image-wrap ${imgSizeClass}`}>
                      <img src={fimgUrl} alt={f.title || ''} width={980} height={740} loading="eager" />
                    </div>
                  ) : null}
                  <div className="product-title">{f.title}</div>
                  {f.body ? <p className={`product-body ${ink ? '' : 'muted'}`}>{f.body}</p> : null}
                  <div className="mt-6">
                    {f.link ? (
                      <a href={f.link} className={`product-link button-main ${ink ? 'text-white' : 'text-white'}`}>
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
