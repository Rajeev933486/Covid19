// import React, { useEffect, useState } from 'react';
// import '../css/ContactPage.css'; // Import CSS if needed

// const ContactPage = () => {
//   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('checkbox') === 'true');

//   useEffect(() => {
//     const checkbox = document.getElementById('checkbox');
//     const jhamela = document.getElementById('jhamela');

//     if (checkbox) {
//       checkbox.checked = isDarkMode;
//     }

//     if (isDarkMode) {
//       jhamela.classList.remove('darkEdition');
//     } else {
//       jhamela.classList.add('darkEdition');
//     }
//   }, [isDarkMode]);

//   const handleThemeChange = () => {
//     setIsDarkMode(prevState => {
//       const newState = !prevState;
//       localStorage.setItem('checkbox', newState);
//       return newState;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (window.confirm('Message sent successfully! Thank you.')) {
//       // Handle form submission logic here, e.g., send data to backend
//       console.log('Form submitted');
//     }
//   };

//   return (
//     <div id="jhamela" className={`darkEdition lightEdition ${isDarkMode ? '' : 'darkEdition'}`}>
//       {/* Include Navbar */}
//       {/* <Navbar /> */}

//       <div id="myDiv" className="animate-bottom" style={{ display: 'none' }}>
//         {/* Include Preloader */}
//         {/* <Preloader /> */}

//         <div className="container my-5">
//           <div className="contact-container">
//             <h3>Contact Us</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" className="form-control" id="name" name="name" aria-describedby="name" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email address</label>
//                 <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
//                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number</label>
//                 <input type="tel" className="form-control" id="phone" name="phone" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="content">Describe your issue:</label>
//                 <textarea className="form-control" name="content" id="content" cols="30" rows="5"></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           </div>

//           {/* Include Testimonials */}
//           {/* <Testimonials /> */}
//         </div>

//         {/* Include Footer */}
//         {/* <Footer /> */}
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
