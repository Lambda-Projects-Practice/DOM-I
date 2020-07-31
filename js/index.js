const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav_items = document.querySelectorAll("a");
nav_items[0].textContent = siteContent["nav"]["nav-item-1"];
nav_items[1].textContent = siteContent["nav"]["nav-item-2"];
nav_items[2].textContent = siteContent["nav"]["nav-item-3"];
nav_items[3].textContent = siteContent["nav"]["nav-item-4"];
nav_items[4].textContent = siteContent["nav"]["nav-item-5"];
nav_items[5].textContent = siteContent["nav"]["nav-item-6"];

//adding extra content to nav
let nav = document.querySelector('nav');
let begin_nav = document.createElement("a");
let last_nav = document.createElement("a");
begin_nav.setAttribute('href', "#");
last_nav.setAttribute('href', "#")
begin_nav.textContent = 'Home';
last_nav.textContent = 'Log Out';
nav.prepend(begin_nav);
nav.appendChild(last_nav);

let new_nav = document.querySelectorAll('a');
new_nav.forEach((element) => {
  element.style.color = 'green'
})

let cta_header = document.querySelector(".cta-text h1");
cta_header.textContent = siteContent['cta']['h1'];

let cta_button = document.querySelector('.cta-text button');
cta_button.textContent = siteContent['cta']['button'];

let cta_img = document.getElementById('cta-img');
cta_img.setAttribute('src', siteContent['cta']['img-src']);

let h4s = document.querySelectorAll('.text-content h4');
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];

let content = document.querySelectorAll('.text-content p');
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['services-content'];
content[3].textContent = siteContent['main-content']['product-content'];
content[4].textContent = siteContent['main-content']['vision-content'];

let middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contact_header = document.querySelector('.contact h4');
contact_header.textContent = siteContent['contact']['contact-h4'];

let contact_p = document.querySelectorAll('.contact p');
contact_p[0].textContent = siteContent['contact']['address'];
contact_p[1].textContent = siteContent['contact']['phone'];
contact_p[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']