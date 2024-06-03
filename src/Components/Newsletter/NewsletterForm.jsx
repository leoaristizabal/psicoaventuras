import React, { useEffect } from 'react';
import '../../App.css';

const NewsletterForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      (function ($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = 'EMAIL';
        ftypes[0] = 'email';
        fnames[1] = 'FNAME';
        ftypes[1] = 'text';
        fnames[2] = 'LNAME';
        ftypes[2] = 'text';
        fnames[4] = 'PHONE';
        ftypes[4] = 'phone';
        fnames[3] = 'ADDRESS';
        ftypes[3] = 'address';
        fnames[5] = 'BIRTHDAY';
        ftypes[5] = 'birthday';
      }(window.jQuery));
      window.$mcj = window.jQuery.noConflict(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      
      <div id="mc_embed_signup">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <style type="text/css">
          {`
          #mc_embed_signup {
            background: #fff;
            border-radius: 0.75rem;
            font: 14px Poppins, Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 600px;
            margin: auto;
            width: 90%;
            color: var(--text-color); 
          }
          .title__newsletter{
            color: var(--morado);
            text-align: center;
          }
          .button__newsletter {
            background-color: var(--morado);
            color: var(--title-color);
            padding: 10px 10px;
            border: none; 
            cursor: pointer;
            text-align: center;
            width: 360px;
            font-weight: var(--font-medium)
          }
          .button__newsletter:hover {
            transition: .3s;
            transform: scale(1.05);
            background-color: var(--morado);
            box-shadow: var(--morado) 0px 5px 15px;
          }

          .mc-field-group{
            display:flex;
            color: var(--morado);
            border-radius: 0.75rem;
          }

          .mc-field-group input{
            color: var(--morado);
          }

          .text_newsletter{
            font-size: var(--small-font-size);
            text-align: center;
          }

          .refferal_badge {
            width: 220px;
            height: 40px;
            display: flex;
            padding: 2px 12px;
            justify-content: center;
            align-items: center;
          }
        `}
        </style>
        <form action="https://psicoaventuras.us17.list-manage.com/subscribe/post?u=9e8b07224a294d797532ea1b8&amp;id=f7514c6d27&amp;f_id=00c5e5e3f0"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <h2 className='title__newsletter'>¡Suscribete a mi comunidad!</h2>
            <p className='text_newsletter'> Al suscribirte obtendras la guía de Rutinas Efectivas gratis!</p>
            <div className="indicates-required"><span className="asterisk">*</span> Campo Requerido</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Correo electrónico <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Nombre</label>
              <input type="text" name="FNAME" className="text" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Apellidos</label>
              <input type="text" name="LNAME" className="text" id="mce-LNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">Número de teléfono</label>
              <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_9e8b07224a294d797532ea1b8_f7514c6d27" tabIndex="-1" value="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button__newsletter" value="Suscribirme"  />
                <p style={{
                  margin: '0px auto'
                }}>
                  <a href="http://eepurl.com/iQOWAY" title="Mailchimp - email marketing made easy and fun">
                    <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                      <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp" />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
};

export default NewsletterForm;
