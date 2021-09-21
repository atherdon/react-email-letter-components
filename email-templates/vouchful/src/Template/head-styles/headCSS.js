// just a copy of head-styles.css rules
export default `
/* === Custom Fonts === */
/* Add your fonts here via imports */

/* === Client Styles === */
#outlook a {padding: 0;}
.ReadMsgBody {width: 100%;} .ExternalClass {width: 100%;}
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}        
body, table, td, p, a, li, blockquote {-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;}
table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}

/* === Reset Styles === */
body, p, h1, h3 {margin: 0; padding: 0;}
img {border: 0; display: block; height: auto; line-height: 100%; max-width: 100%; outline: none; text-decoration: none;}
table, td {border-collapse: collapse}
body {height: 100% !important; margin: 0; padding: 0; width: 100% !important;}

/* === Page Structure === */
/*
Set the background color of your email. Light neutrals or your primary brand color are most common.
*/
body {
  background-color: #f8fafc; /* Edit */
}

/*
This optional section will be hidden in your email but the text will appear after the subject line. 
*/
#preheader {display: none !important; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; mso-hide: all !important; opacity: 0; overflow: hidden; visibility: hidden;}

/*
Set the background color, border and radius of your primary content area. White or light neutrals for the background-color are recommended.
*/
.panel-container {
  background-color: #ffffff; /* Edit */
  border: 1px solid #eaebec; /* Edit */
  border-collapse: separate;
  border-radius: 2px; /* Edit */
}

/*
Set the horizontal padding of your content areas. Any changes should following the default spacing scale.
*/         
#header, #footer {padding-left: 32px; padding-right: 32px;}
.panel-body {padding-left: 32px; padding-right: 32px;}

/*
Set the sizes of your spacer rows. Spacers are used for vertical padding. Any changes should following the default spacing scale.
*/
.spacer-xxs, .spacer-xs, .spacer-sm, .spacer-md, .spacer-lg, .spacer-xl, .spacer-xxl {display: block; width: 100%;}
.spacer-xxs {height: 4px; line-height: 4px;}
.spacer-xs {height: 8px; line-height: 8px;}
.spacer-sm {height: 16px; line-height: 16px;}
.spacer-md {height: 24px; line-height: 24px;}
.spacer-lg {height: 32px; line-height: 32px;}
.spacer-xl {height: 40px; line-height: 40px;}
.spacer-xxl {height: 48px; line-height: 48px;}

/* === Page Styles === */
/*
Set the font-family of your type. Classes should be set directly on the table cell for compatibility with older clients. Any changes should following the default typography scale.
*/
.headline-one, .headline-two, .headline-three, .heading, .subheading, .body, .caption, .button, .table-heading {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; /* Edit */
  font-style: normal;
  font-variant: normal;
}
.headline-one {font-size: 32px; font-weight: 500; line-height: 40px;}
.headline-two {font-size: 24px; font-weight: 500; line-height: 32px;}
.headline-three {font-size: 20px; font-weight: 500; line-height: 24px;}
.heading {font-size: 16px; font-weight: 500; line-height: 24px;}
.subheading {font-size: 12px; font-weight: 700; line-height: 16px; text-transform: uppercase;}
.body {font-size: 14px; font-weight: 400; line-height: 20px;}
.caption {font-size: 12px; font-weight: 400; line-height: 16px;}
.table-heading {font-size: 10px; font-weight: 700; text-transform: uppercase;}

/*
Set the styles of your links.
*/
a {color: inherit; font-weight: normal; text-decoration: underline;}

/*
Set the colors of your text.
*/      
.text-primary {
  color: #007bff; /* Edit */
}
.text-secondary {
  color: #6c757d; /* Edit */
}
.text-black {
  color: #000000; /* Edit */
}
.text-dark-gray {
  color: #343a40; /* Edit */
}
.text-gray {
  color: #6c757d; /* Edit */
}
.text-light-gray {
  color: #f8f9fa; /* Edit */
}
.text-white {
  color: #ffffff; /* Edit */
}
.text-success {
  color: #28a745; /* Edit */
}
.text-danger {
  color: #dc3545; /* Edit */
}
.text-warning {
  color: #ffc107; /* Edit */
}
.text-info {
  color: #17a2b8; /* Edit */
}

/*
Set the styles of your buttons. Each button requires a matching background.
*/
.button-bg {
  border-radius: 2px; /* Editable */
}
.button-bg-primary {
  background-color: #007bff /* Editable */;
}
.button-bg-secondary {
  background-color: #6c757d; /* Editable */
}
.button-bg-success {
  background-color: #28a745; /* Editable */
}
.button-bg-danger {
  background-color: #dc3545; /* Editable */
}
.button {
  border-radius: 2px; /* Editable */
  color: #ffffff; /* Editable */
  display: inline-block;
  font-size: 14px;
  font-weight: 700;       
  padding: 10px 20px 10px;
  text-decoration: none;
}
.button-primary {
  border: 1px solid #007bff /* Editable */;
}
.button-secondary {
  border: 1px solid #6c757d; /* Editable */
}
.button-success {
  border: 1px solid #28a745; /* Editable */
}      
.button-danger {
  border: 1px solid #dc3545; /* Editable */
}

/*
Set the styles of your backgrounds.
*/     
.bg {padding-left: 24px; padding-right: 24px;}    
.bg-primary {
  background-color: #007bff; /* Edit */
}
.bg-secondary {
  background-color: #6c757d; /* Edit */
}
.bg-black {
  background-color: #000000; /* Edit */
}
.bg-dark-gray {
  background-color: #343a40; /* Edit */
}
.bg-gray {
  background-color: #6c757d; /* Edit */
}
.bg-light-gray {
  background-color: #f8f9fa; /* Edit */
}
.bg-white {
  background-color: #ffffff; /* Edit */
}
.bg-success {
  background-color: #28a745; /* Edit */
}
.bg-danger {
  background-color: #dc3545; /* Edit */
}
.bg-warning {
  background-color: #ffc107; /* Edit */
}
.bg-info {
  background-color: #17a2b8; /* Edit */
}

/*
Set the styles of your tabular information. This class should not be set on tables with a role of presentation.
*/
.table {min-width: 100%; width: 100%;}
.table td {
  border-top: 1px solid #eaebec; /* Editable */
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  vertical-align: top;
}

/*
Set the styles of your utility classes.
*/
.address, .address a {color: inherit !important;}
.border-solid {
  border-style: solid !important;
  border-width: 2px !important; /* Edit */
  border-color: #eaebec !important; /* Edit */
}
.divider {
  border-bottom: 0px; 
  border-top: 1px solid #eaebec; /* Edit */
  height: 1px; 
  line-height: 1px;
  width: 100%;
}    
.text-bold {font-weight: 700;}
.text-italic {font-style: italic;}
.text-uppercase {text-transform: uppercase;}
.text-underline {text-decoration: underline;}

@media only screen and (max-width: 599px) 
{
  /* === Client Styles === */        
  body, table, td, p, a, li, blockquote {-webkit-text-size-adjust: none !important;}
  body {min-width: 100% !important; width: 100% !important;}
  center {padding-left: 12px !important; padding-right: 12px !important;}

  /* === Page Structure === */
  /*
  Adjust sizes and spacing on mobile.
  */
  #email-container {max-width: 600px !important; width: 100% !important;}
  #header, #footer {padding-left: 24px !important; padding-right: 24px !important;}
  .panel-container {max-width: 600px !important; width: 100% !important;}  
  .panel-body {padding-left: 24px !important; padding-right: 24px !important;}
  .column-responsive {display: block !important; padding-bottom: 24px !important; width:100% !important;}
  .column-responsive img {width: auto !important;}
  .column-responsive-last {padding-bottom: 0px !important;}
  .column-responsive-gutter {display: none !important;}

  /* === Page Styles === */
  /*
  Adjust sizes and spacing on mobile.
  */
`;