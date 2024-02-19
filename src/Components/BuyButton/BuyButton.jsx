import React, { useEffect } from 'react';
import './buybutton.css'; // Importa los estilos CSS

const BuyButton = () => {
    useEffect(() => {
        const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

        // Función para cargar el script de Shopify
        const loadScript = () => {
            const script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            script.onload = initializeShopifyBuyButton; // Llamar a la función de inicialización una vez que se cargue el script
            document.body.appendChild(script);
        };

        // Función para inicializar el componente de Shopify Buy Button
        const initializeShopifyBuyButton = () => {
            const client = ShopifyBuy.buildClient({
                domain: 'a8b6bd-f8.myshopify.com',
                storefrontAccessToken: '04e2f37a66666826835339d2c1e52c8f',
            });

            ShopifyBuy.UI.onReady(client).then(ui => {
                ui.createComponent('collection', {
                    id: '423667663066',
                    node: document.getElementById('collection-component-1708322871612'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "styles": {

                                "img": {
                                    // Estilos específicos para la imagen del producto
                                    "@media (max-width: 576px)": { // Media query para dispositivos móviles pequeños
                                        "height": "150px", // Altura de la imagen reducida para dispositivos móviles
                                        "width": "auto" // Ancho automático para mantener la proporción de aspecto
                                    },
                                },
                                "button": {
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#4e4e4e" // Color de fondo al pasar el ratón sobre el botón
                                    },
                                    "background-color": "#2e2e2e", // Color de fondo normal del botón
                                    ":focus": {
                                        "background-color": "#4e4e4e" // Color de fondo al enfocar el botón
                                    },
                                    "border-radius": "5px"
                                }
                            },
                            "text": {
                                "button": "Agendar Cita"
                            }
                        },
                        // Otras opciones aquí
                    },
                });
            });
        };

        // Verificar si el script ya está cargado antes de cargarlo nuevamente
        if (!window.ShopifyBuy || !window.ShopifyBuy.UI) {
            loadScript();
        } else {
            initializeShopifyBuyButton();
        }
    }, []); // Este efecto solo se ejecuta una vez, cuando el componente se monta por primera vez

    return (
        <section className="citas section" id="citas">
            <h2 className="section__title">Agendar Citas</h2>
            <span className="section__subtitle">
                Descubre cómo puedo ayudarte en el camino
            </span>
            <div id='collection-component-1708322871612'></div>
        </section>
    );
};

export default BuyButton;
