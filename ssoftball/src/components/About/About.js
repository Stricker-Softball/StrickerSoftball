import React, { useRef, useEffect } from 'react';
import './About.scss';
import { motion, useAnimation } from 'framer-motion';
import sueImg from '../../images/coaches/sueCoach.jpg';

let defaultBody = `Founder and creator of Softball Science, Sue Stricker is a former professional softball player and coach. With over 20 years of experience in coaching the sport, she has dedicated her career to training and developing young athletes. Sue has authored several books on softball techniques and strategies, and her insights have been featured in numerous sports publications and broadcasts. She continues to inspire and educate through her work at Softball Science.`;

export function About({ id, title = 'About the Founder — Sue Stricker', body = defaultBody, imageUrl = sueImg, bullets = [], align = 'left', backgroundClass = '' }) {
  const imageFirst = align === 'left';
  const reveal = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  // refs & animation controls to reliably trigger reveal when in viewport
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const imgControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    const ioOptions = { threshold: 0.15 };
    if ('IntersectionObserver' in window) {
      const imgObserver = imgRef.current
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                imgControls.start('visible');
                imgObserver.disconnect();
              }
            });
          }, ioOptions)
        : null;

      const contentObserver = contentRef.current
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                contentControls.start('visible');
                contentObserver.disconnect();
              }
            });
          }, ioOptions)
        : null;

      if (imgObserver && imgRef.current) imgObserver.observe(imgRef.current);
      if (contentObserver && contentRef.current) contentObserver.observe(contentRef.current);

      return () => {
        if (imgObserver) imgObserver.disconnect();
        if (contentObserver) contentObserver.disconnect();
      };
    }

    // fallback: start animations immediately
    imgControls.start('visible');
    contentControls.start('visible');
  }, [imgControls, contentControls]);

  return (
    <section id={id} className={`about-section ${backgroundClass}`}>
      <div className={`about-container ${imageUrl ? 'with-image' : 'no-image'}`}>
        {imageUrl && imageFirst && (
          <motion.div
            ref={imgRef}
            initial="hidden"
            animate={imgControls}
            variants={reveal}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className="about-image-wrap"
          >
            <img src={imageUrl} alt={title} className="about-image" />
          </motion.div>
        )}

        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={contentControls}
          variants={reveal}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
          className="about-content"
        >
          {title && <h2 className="about-title">{title}</h2>}
          <p className="about-body">{body}</p>
          {bullets && bullets.length > 0 && (
            <ul className="about-list">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </motion.div>

        {imageUrl && !imageFirst && (
          <motion.div
            ref={imgRef}
            initial="hidden"
            animate={imgControls}
            variants={reveal}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className="about-image-wrap"
          >
            <img src={imageUrl} alt={title} className="about-image" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
