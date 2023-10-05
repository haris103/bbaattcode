// import React, { useState } from 'react';

// const FormToJson = () => {
//   const [formFields, setFormFields] = useState({});

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormFields((prevFields) => ({
//       ...prevFields,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const jsonForm = JSON.stringify(formFields);
//     console.log(jsonForm);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" name="name" id="name" onChange={handleInputChange} /><br />

//       <label htmlFor="email">Email:</label>
//       <input type="email" name="email" id="email" onChange={handleInputChange} /><br />

//       <label htmlFor="message">Message:</label>
//       <textarea name="message" id="message" onChange={handleInputChange}></textarea><br />

//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

// export default FormToJson;


// import React from 'react';

// const FormToJson = () => {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const formJson = {};

//     for (let [name, value] of formData) {
//       formJson[name] = value;
//     }

//     const jsonForm = JSON.stringify(formJson);
//     console.log(jsonForm);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" name="name" id="name" /><br />

//       <label htmlFor="email">Email:</label>
//       <input type="email" name="email" id="email" /><br />

//       <label htmlFor="message">Message:</label>
//       <textarea name="message" id="message"></textarea><br />

//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

// export default FormToJson;


// import React from 'react';

// const FormToJson = () => {
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const formJson = [];

//     for (let [name, value] of formData) {
//       const fieldData = {
//         label: form.elements[name].labels[0].textContent,
//         value: value
//       };
//       formJson.push(fieldData);
//     }

//     const payload = {
//       form_id: 1,
//       data: formJson
//     };


//     console.log(payload);
//     // try {
//     //   const response = await fetch('YOUR_ENDPOINT_URL', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify(payload)
//     //   });

//     //   if (response.ok) {
//     //     console.log('Form data submitted successfully!');
//     //   } else {
//     //     console.error('Failed to submit form data. Please try again.');
//     //   }
//     // } catch (error) {
//     //   console.error('An error occurred while submitting the form data:', error);
//     // }
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" name="name" id="name" /><br />

//       <label htmlFor="email">Email:</label>
//       <input type="email" name="email" id="email" /><br />

//       <label htmlFor="message">Message:</label>
//       <textarea name="message" id="message"></textarea><br />

//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

// export default FormToJson;



import React from 'react';

const App = () => {
  const handleFormSubmit = async (event, formId) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = [];

    for (let [name, value] of formData) {
      const fieldData = {
        label: form.elements[name].labels[0].textContent,
        value: value,
      };
      formJson.push(fieldData);
    }

    const payload = {
      form_id: formId,
      data: formJson,
    };

    console.log(payload);
  };

  return (
    <div>
      <h1>Forms</h1>

      <form onSubmit={(e) => handleFormSubmit(e, 1)}>
        <label htmlFor="form1-name">Name:</label>
        <input type="text" name="form1-name" id="form1-name" /><br />

        <label htmlFor="form1-email">Email:</label>
        <input type="email" name="form1-email" id="form1-email" /><br />

        <label htmlFor="form1-message">Message:</label>
        <textarea name="form1-message" id="form1-message"></textarea><br />

        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={(e) => handleFormSubmit(e, 2)}>
        <label htmlFor="form2-name">Name:</label>
        <input type="text" name="form2-name" id="form2-name" /><br />

        <label htmlFor="form2-email">Email:</label>
        <input type="email" name="form2-email" id="form2-email" /><br />

        <label htmlFor="form2-message">Message:</label>
        <textarea name="form2-message" id="form2-message"></textarea><br />

        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={(e) => handleFormSubmit(e, 3)}>
        <label htmlFor="form3-name">Name:</label>
        <input type="text" name="form3-name" id="form3-name" /><br />

        <label htmlFor="form3-email">Email:</label>
        <input type="email" name="form3-email" id="form3-email" /><br />

        <label htmlFor="form3-message">Message:</label>
        <textarea name="form3-message" id="form3-message"></textarea><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;

