https://holostenko.ua/uk/blog/mikrorazmetka-dlya-internet-magazina


import { Helmet } from 'react-helmet';

<Helmet>
    <title>{selectBlock.seo_default_title}</title>
    <meta name="description" content={selectBlock.seo_default_description} />
    <meta name="keywords" content={selectBlock.seo_default_keywords} />
</Helmet>

//метатеги open graph при пересиланні url через повідомлення щоб відображалась картинка і опис 
<meta property="og:title" content={product.seo_default_title?.length ? product.seo_default_title : 'Товар'} />
<meta property="og:description" content={product.seo_default_description} />
<meta property="og:image" content={product.images?.length ? product.images[0] : noPhotos} />
<meta property="og:url" content={`${process.env.REACT_APP_BASE_URL}${location.pathname}`}/> 
<meta property="og:type" content="website"/>

//вказує що сторінка є основна для SEO
<link rel="canonical" href={`${process.env.REACT_APP_BASE_URL}${location.pathname}`} />


// сформувати mapsait
// https://www.mysitemapgenerator.com/ru/



// robotstxt.html файл
// # https://www.robotstxt.org/robotstxt.html
// User-agent: *                               // команда для всіх роботів
// Disallow: /auth/                            // сторінки які не варто індексувати
// Disallow: /login
// Disallow: /partner-registration
// Disallow: /pricevyroby
// Disallow: /success
// Disallow: /favorite
// Disallow: /checkout
// Disallow:                                  // команда блочить всі верхні команди потрібно видалити її якщо потрібно щоб сайт індексувався
