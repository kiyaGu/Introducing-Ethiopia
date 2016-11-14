/* COLOUR REFERENCES

Green:		#79b044
Salmon:		#dd5638
Blue Gray:  #3e4249

*/

/*===============Normalize================*/

/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */

/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Correct the line height in all browsers.
 * 3. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */

/* Document
   ========================================================================== */

html {
  font-family: sans-serif; /* 1 */
  line-height: 1.15; /* 2 */
  -ms-text-size-adjust: 100%; /* 3 */
  -webkit-text-size-adjust: 100%; /* 3 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers (opinionated).
 */

body {
  margin: 0;
}

/**
 * Add the correct display in IE 9-.
 */

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in IE.
 */

figcaption,
figure,
main { /* 1 */
  display: block;
}

/**
 * Add the correct margin in IE 8.
 */

figure {
  margin: 1em 40px;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
}

/**
 * Remove the outline on focused links when they are also active or hovered
 * in all browsers (opinionated).
 */

a:active,
a:hover {
  outline-width: 0;
}

/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */

b,
strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font style in Android 4.3-.
 */

dfn {
  font-style: italic;
}

/**
 * Add the correct background and color in IE 9-.
 */

mark {
  background-color: #ff0;
  color: #000;
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

audio,
video {
  display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */

button,
html [type="button"], /* 1 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* 2 */
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Change the border, margin, and padding in all browsers (opinionated).
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
 * Remove the default vertical scrollbar in IE.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 */

details, /* 1 */
menu {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Scripting
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

canvas {
  display: inline-block;
}

/**
 * Add the correct display in IE.
 */

template {
  display: none;
}

/* Hidden
   ========================================================================== */

/**
 * Add the correct display in IE 10-.
 */

[hidden] {
  display: none;
}

/*=============End normalize==============*/


/* ==== GENERAL ==== */

body{
    margin-top: 50px;
    font-family: 'Raleway', Helvetica, sans-serif;
    font-size: 16px;
    background: url(https://res.cloudinary.com/fcc-project/image/upload/v1478879466/tile_bfr3wz.jpg) top left repeat;
}
/* === GLOBAL === */
h1,h2,h3,h4,h5,h6{
    -webkit-font-smoothing:antialiased;
    text-rendering: optimizeLegibility;
    font-weight: bold;
}
h1{
    font-size: 3em;
}
h1,h2{
    margin: 0 0 40px;
}
h3{
    margin:20px 0;
}
h4{
    font-size: 18px;
}
p{
    margin: 0 0 15px;
}
p.lead{
    font-weight: normal;
}
a:link, a:visited {
    color:#dd5638;
}
a:hover{
    text-decoration: none;
    color:#c9302c;
}
button, input, .btn, a.btn {
     -webkit-font-smoothing:antialiased;
    text-rendering: optimizeLegibility;
    color: white;
}
.btn{
    font-weight: bold;    
}
button.btn:focus{
    outline: none !important;
}
.btn-danger{
    background-color: #dd5638;
    border-collapse: #d95131;
}
.btn-success{
    background: #79b044;
    border: none;
}
.btn-sucess:hover{
    background: #6a9b3d;
    border-color: #6a9b3d;
}
img{
    max-width: 100%;
}

.badge.social{
    background: transparent;
    font-size: 22px;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 42px;
    margin: 0 5px 20px 0;
    padding-top: 0px;/*codepen*/
    -webkit-border-radius:50px;
    -moz-border-radius:50px ;
    -ms-border-radius:50px ;
    -o-border-radius:50px ;
    border-radius:50px;
    color:  #d9dee9;
	border: 1px solid #fec951;
}

.badge.social.twitter:hover{
    background: #55acee;
}
.badge.social.facebook:hover{
    background: #3b5998;
}
.badge.social.linkedin:hover{
    background: #007bb6;
}
.badge.social.gplus:hover{
    background: #db4b39;
}
blockquote{
    padding: 0;
    border: none;
    font-style: italic;
    text-align: left;
}
blockquote cite{
    display: block;
    color: #777;
    margin: 15px 0 0 0;
}
blockquote:before{
    display: none;
}

/* === LAYOUT === */
/*
.row + .row{
    margin-top: 20px;
}
*/
section{
  padding: 80px 0;  
}
section{
    padding: 40px 0;
}
sectioon h2{
    margin:20px 0 40px;
}
section h3{
    margin: 30px 0 10px;
}
#primary{
    padding-top: 40px;
    padding-bottom: 40px;
}
.feature-image{
    display: table;
    width: 100%;
}
footer{
/*     background: #3e4249; */
  background: url("https://res.cloudinary.com/fcc-project/image/upload/v1478954038/code-938776_xtcaps.jpg") no-repeat !important;
		background-size: cover;
    color:#fec85d;
    padding:20px 0 10px;
    font-size: 12px;
}
footer p{
    margin:0;    
}
footer a:link, footer a:visited{
    color: white;
}
footer a:hover{
    color: #dd5638;
}
footer li.signup-link a{
    color:#dd5638;    
}
footer li.signup-link a:hover{
   font-weight: bold;   
}
.navbar{
		background: url("https://res.cloudinary.com/fcc-project/image/upload/v1478954038/code-938776_xtcaps.jpg") no-repeat !important;
		background-size: cover;
	
}
.navbar-collapse ul > li.active a{
	color: #fec951 !important;
}
.navbar-nav > li.active{
	background-color: #3f3e50 !important;
}
.navbar-brand img{
	width: 30px;
	height: 30px;
}
.navbar-collapse  li.active{
	color: white !important;
	background-color: #3f3e50 !important;
}

section{
	margin: 20px 0;		
}

.home-section{
	background: url(https://res.cloudinary.com/fcc-project/image/upload/v1478880770/monitor-933392_1920_zvdisa.jpg) 50% 0 repeat fixed; 
	  background-size: cover;
	  height: 620px; 
 	  margin: 0 auto; 
  	width: 100%; 
  	max-width: 1920px; 
  	position: relative;
	  padding-top:20px;
}
.about-me-section{
	background: url(https://res.cloudinary.com/fcc-project/image/upload/v1478954046/laptop-926775_ue3mi0.jpg) 50% 0 repeat fixed; 
	  background-size: cover;	
  	height: 620px; 
 	  margin: 0 auto; 
  	width: 100%; 
  	max-width: 1920px; 
  	position: relative; 
	  
    
}
.resume-section{
	background: url(https://res.cloudinary.com/fcc-project/image/upload/v1478954038/code-938776_xtcaps.jpg) 50% 0 repeat fixed; 
	background-size: cover;
 	margin: 0 auto; 
  	width: 100%; 
  	max-width: 1920px; 
  		position: relative; 
}
.portfolio-section{
	background: url(https://res.cloudinary.com/fcc-project/image/upload/v1478880770/monitor-933392_1920_zvdisa.jpg) 50% 0 
    repeat fixed; 

	background-size: cover; 

 	margin: 0 auto; 
  	width: 100%; 
  	max-width: 1920px; 
  		position: relative; 
}
.contact-me-section{
	background: url(https://res.cloudinary.com/fcc-project/image/upload/v1478954053/at-64056_fyocbs.jpg) 50% 0 repeat fixed; min-height: 720px; 
	background-size: cover;
	 
 	margin: 0 auto; 
  	width: 100%; 
  	max-width: 1920px; 
  	position: relative;
}

section div.container{
	background: url(https://res.cloudinary.com/fcc-project/image/upload/v1478883465/dark-bg_cr9ppm.jpg);
	padding: 20px;	
	margin: 0 auto;
	opacity: 0.9;
	color:white;
}
#home div.container{
	margin-top: 5px !important;
  padding-top: 10px !important;
	padding-bottom: 5px !important;
	
}

.hire-me{
 margin: 5px !important;
 
}
.hire-me a{
	color: black !important;
}
.hire-me i{
	color: black !important;
}
#profile-pic{
	margin-top: 35px;
	padding-right: 5px;
	margin-bottom: 230px !important;
}
#profile-pic img{
	border-radius: 50%;
	height: auto;
	width: 85%;
}
#download-resume{
	padding-top: 110px;
}
#download-resume button{
	color:  #34324b !important;
}
#move-down{
	margin-top: 20px;
}
#move-down button{
	border-radius:80%;
	background: transparent;
	border: 1px solid #fec951;
}
#move-down button:hover{
	background: #79b044;
    border: none;
	color: black;
	
}
#send-button{
	color:  #34324b !important;
}
/* #about-me .container{
	margin-top: 50px;
} */
hr{
	margin-bottom: 30px !important;
}
#contact-me hr{
	margin-bottom: 20px !important;
}
#contact-me .container{
	padding-top: 10px !important;
}
#social-link-bottom{
	margin-top: 5px !important;
}
.progress-bar-text{
	color: black;
	font-weight: 700;
	
}
.progress{
	height: 25px !important;
	margin: 35px auto;
	
}
.experience{
	padding-bottom: 0px;
}
.progress-bar-text-display{
	display: none !important;
	
}
.progress-bar-text{
	line-height: 2 !important;
}

#introduction{
	
	
	padding-top: 90px;
	
	
}
.navbar{
  padding:5px !important;
}
/* #about-me{
	padding-bottom: 100px;
} */
#typed strong{
		font-weight:800;
		font-size: 54px;
	  
	}
.row{
	margin-top: 0px !important;
}
.text-success{
	color: #fec951 !important;
}
.portfolio-section h2{
  margin-bottom:5px;
}
/*====================slick===============*/

.slider {
        width: auto;
        margin: 40px auto;
    }

.slick-slide {
      margin: 0px 20px;
	}

.slick-prev:before,
.slick-next:before {
        color: #fec951 !important;
    }

.slide-item img{
	height: 300px;
	
	}
slider-portfolio-pic{
	height: 250px !important;
	margin: 5px auto;
  wedith:100%;
}
.slider-portfolio-content{
	height: 120px;
	margin: 30px 10px auto;
}
#portfolio-text-content{
  margin-top: 80px;
}
.slider-portfolio-pic img{
	width: 100%;
	height: 300px;
}
.slider-education-pic, .slider-education-pic img{
	height: 200px;
	background-size: cover;
}
.slider-education-content{
	height: 100px;
  margin-bottom: 0px;
}
.slider-portfolio-nav, .slider-portfolio-nav img{
	height: 100px ;
	width: 80%;
	background-size: cover;
}
.slick-dots li button:before{
	color: #fec951 !important;
	font-size: 10px;
	margin-top: 10px;
}
.slick-arrows{
	background-color: #fec951 !important;	
}


.slider-for img{
 margin: 0 auto;
}
#micro-pic{
	height: 250px !important;
}



/*==================== typed.js===============*/

.typed-cursor{
	font-size: auto;
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

/*==================== MEDIA QUERIES===============*/
@media screen and (max-width:991px){
    #instructor .container{
        background: rgba(255,255,255,0.8);
    }  
}
@media screen and (max-width:768px){
    
	

#home div.container{
 	 margin-top: 0 !important;
   padding-top: 0 !important;
  
  
}
#profile-pic{
	margin-top: 25px !important;
	padding-right: 5px;
	margin-bottom: 10px;
}
#profile-pic img{
	border-radius: 50%;
	height: 250px;
	width: auto;
	padding:0;
		
}

section{
		padding: 10px;
	}

#intro-name{	
	
	height: 50%;
	
}

#typed strong{
		font-weight:800;
		font-size: 24px;
	}
hr{
	margin: 10px !important;
}
	
.slide-item img{
	height: 200px;
	
	}
 .slider-experience-pic,.slider-education-pic{
	height: 200px;
	background-size: cover;
}
.slick-slide {
      margin: 0px 5px;
	}
#micro-pic{
	height: 200px !important;
}
.slider-for{
	height: 50%;
	margin: 20px auto;
}
.slider-for img{
	width: 100%;
	height: 100%;
}
.progress{
	height: 20px !important;	
}
#introduction{
		padding-top: 0;
	
}
#download-resume{
	padding-top: 10px;
}
	#move-down{
	margin-top: 100px !important;
}
	#about-me{
	padding-bottom: 110px;
}
	.row{
		margin: 10px 0 !important;
	}
	.skills{
		padding-bottom: 15px;
	}
	.experience h1{
		padding: 30px 0;
	}
	.education {
		padding: 10px 0;
	}

	.education h1{
		padding: 30px 0;
	}

	#hr-education{
		margin-top: 20px;
	}
	.badge.social{
  padding-top:0px;
  }
}
@media screen and (max-width:568px){
   

#home div.container{
 	margin-top: 0 !important;
    padding-top: 10px !important;
	
}
  #personal-info h3{
    margin: 10px 0 15px 0 !important;
    color:#fec951;
  }
  h2{
    margin: 10px 10px 15px 0;
    font-size: 16px;
  }
#home{
		
		height: auto !important;
	}
.home-section{
		margin-bottom: 0px;
		
	}
#profile-pic{
	margin-top: 5px !important;
	padding-right: 5px;
	margin-bottom: 5px !important;
}
#profile-pic img{
	border-radius: 50%;
	height: 90px;
	width: 40%;
	padding:0;		
}

section{
		padding:10px 20px 0 10px;
	}
  section div.container{
    padding:10px 0;
  }
#intro-name{
		height: 50%;	
}

#typed strong{
		font-weight:800;
		font-size: 24px;
	}
  #typed{
		
		font-size: 1.2rem;
	}
hr{
	margin: 10px !important;
}
  .badge.social{
    margin-bottom:5px;
  }
  .slide-item{
    margin: 10px 0;
  }
.slide-item img{
	height: 150px !important;
	
	}
/*
 .slider-experience,.slider-education{
	height: 150px;
	background-size: cover;
}
*/
  
.slick-slide {
      margin: 0px 5px;
	}
#micro-pic{
	height: 150px !important;
}
.slider-portfolio-pic{
	height: 100%;
	margin: 10px 0 10px 10px;
  
  
}
  .slider-portfolio-nav{
    width:93% !important;
    height:60px !important;
    
  }
  .slider-portfolio-nav > .slide-item {
	height: 60px !important;
	
	}
  .slider-portfolio-nav  {
	height: 60px !important;
	
	}
  .slider-portfolio-nav img{
	width: 80%;
	height: 60px !important;
   
}
  .slider-portfolio-pic img{
	width: 100%;
	height: 100%;
}
.slider-education-pic{
	height: 100%;
	margin: 10px auto;
  width: 93%;
}
	
	
.slider-education-pic img{
	width: 100%;
	height: 100%;
}
.slider-education-content{
	height: 100px !important;
	margin-top:0px;
}
.progress{
	height: 20px !important;	
}
#introduction{
	
	padding-top: 10px;
	
}
#download-resume{
	padding-top: 10px;
}
#move-down{
	margin-top: 10px !important;
}
#about-me{
	padding-bottom: 0px;
  text-align: left;
}
.row{
		margin: 0 !important;
	}
.experience{
		padding-bottom: 0;
	}
#about-me .container{
	margin-top: 0px;
	
}
.education {
		padding: 5px 0;
	}
.slider-portfolio-content{
	
  height: 120px;
	margin: 5px auto;
}
  #portfolio-text-content{
   margin-top: 10px;
   
}
  #portfolio-text-content p strong{
    color:#fec951;
  }
.about-me-section{
		height: auto ;
		}
 #portfolio.portfolio-section{
		padding-bottom: 10px !important;
		
	}
.hire-me{
		margin-top: 10px !important;
	}
  #intro-break{
    display:none !important;
  }
 
}





/*============experience section===============*/

/* line 10, style.scss */
body {
  
  -webkit-font-smoothing: antialiased;
  line-height: 150%; }

/* line 16, style.scss */
.border {
  height: 6px;
  border: 0;
  background-color: #fd7473;
  margin: 20px 0;
  background-image: linear-gradient(to right, #fd7473, #fd7473 25%, #fec951 25%, #fec951 50%, #47b8e0 50%, #47b8e0 75%, #9f68d0 75%, #9f68d0 100%, #9f68d0 100%);
  -webkit-background-size: 50% 100%;
  -moz-background-size: 50% 100%;
  -ms-background-size: 50% 100%;
  -o-background-size: 50% 100%;
  background-size: 50% 100%; }

/* line 41, style.scss */
#timeline ul {
  position: relative; }
  /* line 54, style.scss */
  #timeline ul:after {
    content: " ";
    width: 1px;
    background: 1px #d9dee9;
    height: 90%;
    position: absolute;
    top: 3em;
    left: 5em;
    z-index: 0; }
  /* line 64, style.scss */
  #timeline ul a {
    text-decoration: underline;
    color: #34414c !important;
    font-weight: 700; }
  /* line 73, style.scss */
  #timeline ul .listing {
    background: #ffffff;
    border: 1px solid #d9dee9;
    border-radius: .3em;
    padding: 1em;
    margin-bottom: 1em;
    position: relative;
    z-index: 1;
    display: table;
    width: 100%; }
    /* line 83, style.scss */
    #timeline ul .listing img, #timeline ul .listing .info, #timeline ul .listing .job_type {
      display: table-cell;
      vertical-align: middle;
      font-size: .9em;
      color: #9592ad; }
    /* line 89, style.scss */
    #timeline ul .listing .image_wrapper {
      width: 100px; }
      /* line 91, style.scss */
      #timeline ul .listing .image_wrapper img {
        width: 100px;
        display: block;
        margin: 0 auto;
        border-radius: .25em;
        background: black;
        height: 100px; }
    /* line 100, style.scss */
    #timeline ul .listing .info {
      line-height: 1.25;
      width: 640px;
      padding-left: 25px;
      color: #34414c; }
      /* line 105, style.scss */
      #timeline ul .listing .info .job_title {
        font-weight: 700;
        font-size: 1.5em; }
      /* line 109, style.scss */
      #timeline ul .listing .info .job_info {
        display: block;
        margin-top: 10px; }
        /* line 113, style.scss */
        #timeline ul .listing .info .job_info span {
          margin: 0 .75em; }
    /* line 118, style.scss */
    #timeline ul .listing .job_type {
      text-transform: uppercase;
      font-weight: 700;
      font-size: .75em;
      position: relative;
      white-space: nowrap;
      padding-top: .6em;
      width: 100px; }
      /* line 126, style.scss */
      #timeline ul .listing .job_type:before {
        content: " ";
        background: #fd7473;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: absolute;
        left: -20px;
        top: 47px; }
    /* line 138, style.scss */
    #timeline ul .listing .volunteer {
      color: #fd7473; }
      /* line 140, style.scss */
      #timeline ul .listing .volunteer:before {
        background: #fd7473; }
    /* line 146, style.scss */
    #timeline ul .listing .part_time {
      color: #fec951; }
      /* line 148, style.scss */
      #timeline ul .listing .part_time:before {
        background: #fec951; }
    /* line 154, style.scss */
    #timeline ul .listing .full_time {
      color: #47b8e0; }
      /* line 156, style.scss */
      #timeline ul .listing .full_time:before {
        background: #47b8e0; }
    /* line 162, style.scss */
    #timeline ul .listing .freelance {
      color: #9f68d0; }
      /* line 164, style.scss */
      #timeline ul .listing .freelance:before {
        background: #9f68d0; }
  /* line 177, style.scss */
  #timeline ul .date {
    display: inline-block;
    padding: .6em 0;
    width: 20%;
    background: #ffffff;
    border: 2px solid #fd7576;
    border-radius: 3em;
    font-weight: 700;
    font-size: .75em;
    text-align: center;
    z-index: 2;
    position: relative;
    margin: 1em 0 2em 0;
    color: black; }

@media screen and (max-width: 568px) {
    /* line 199, style.scss */
  body {
    line-height: 150%; }

  /* line 202, style.scss */
  #timeline {
    padding: 0 !important; }
    /* line 204, style.scss */
    #timeline ul {
      padding: 5px !important;
      margin: 0 !important; }
      /* line 207, style.scss */
      #timeline ul:after {
        left: 2em !important; }
  /* line 210, style.scss */
      #timeline ul .listing {
        padding: 10px 5px; }
      /* line 211, style.scss */
      #timeline ul .listing .image_wrapper {
        margin: .5em .5em;
        width: 50px; }
        /* line 214, style.scss */
        #timeline ul .listing .image_wrapper img {
          width: 50px;
          height: 50px; }
      /* line 219, style.scss */
      #timeline ul .listing .info {
        width: 100%;
        padding: .4em 0 0 .4em; }
        /* line 224, style.scss */
        #timeline ul .listing .info .job_info {
          width: 100%;
          margin-top: 10px;
          font-size: 1.3rem !important; }
          /* line 229, style.scss */
          #timeline ul .listing .info .job_info a {
            display: block;
            margin: .75em !important; }
          /* line 234, style.scss */
          #timeline ul .listing .info .job_info span {
            margin: .7em !important; }
        /* line 241, style.scss */
        #timeline ul .listing .info .job_title {
          font-size: 1em; }
      /* line 246, style.scss */
      #timeline ul .listing .job_type {
        display: none !important; }
      /* line 251, style.scss */
      #timeline ul .date {
        padding: .6em;
        width: 50% !important;
        background: #ffffff;
        
        border-radius: 3em;
        font-weight: 700;
        font-size: .75em;
        text-align: center;
        z-index: 2;
        position: relative;
        margin: 1em 0 2em 0;
        color: #34324b; }  }

/*# sourceMappingURL=style.css.map */
/*!
 * Start Bootstrap - Scrolling Nav (http://startbootstrap.com/)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

body {
    width: 100%;
    height: 100%;
}

html {
    width: 100%;
    height: 100%;
}

@media(min-width:767px) {
    .navbar {
        padding: 20px 0;
        -webkit-transition: background .5s ease-in-out,padding .5s ease-in-out;
        -moz-transition: background .5s ease-in-out,padding .5s ease-in-out;
        transition: background .5s ease-in-out,padding .5s ease-in-out;
    }

    .top-nav-collapse {
        padding: 0;
    }
}

/* Demo Sections - You can use these as guides or delete them - the scroller will work with any sort of height, fixed, undefined, or percentage based.
The padding is very important to make sure the scrollspy picks up the right area when scrolled to. Adjust the margin and padding of sections and children 
of those sections to manage the look and feel of the site. */

.intro-section {
    height: 100%;
    padding-top: 150px;
    text-align: center;
    background: #fff;
}

.about-section {
    height: 100%;
    padding-top: 150px;
    text-align: center;
    background: #eee;
}

.services-section {
    height: 100%;
    padding-top: 150px;
    text-align: center;
    background: #fff;
}

.contact-section {
    height: 100%;
    padding-top: 150px;
    text-align: center;
    background: #eee;
}