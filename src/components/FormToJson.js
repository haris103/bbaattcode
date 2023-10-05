import React from 'react';

const FormToJson = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const allFormJson = [];
    const formIds = [1, 2, 3]; // IDs of the forms

    // Iterate over each form ID
    for (const formId of formIds) {
      const formJson = { form_id: formId, data: [] };

      // Filter the form fields related to the current form ID
      for (const [name, value] of formData) {
        if (name.startsWith(`form${formId}-`)) {
          const fieldData = {
            label: form.elements[name].labels[0].textContent,
            value: value,
          };
          formJson.data.push(fieldData);
        }
      }

      allFormJson.push(formJson);
    }

    const payload = { forms: allFormJson };

    try {
      const response = await fetch('YOUR_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('All form data submitted successfully!');
      } else {
        console.error('Failed to submit form data. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form data:', error);
    }
  };

  return (
    <div>
      <h1>Forms</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="form1-name">Name:</label>
        <input type="text" name="form1-name" id="form1-name" /><br />

        <label htmlFor="form1-email">Email:</label>
        <input type="email" name="form1-email" id="form1-email" /><br />

        <label htmlFor="form1-message">Message:</label>
        <textarea name="form1-message" id="form1-message"></textarea><br />

        <label htmlFor="form2-name">Name:</label>
        <input type="text" name="form2-name" id="form2-name" /><br />

        <label htmlFor="form2-email">Email:</label>
        <input type="email" name="form2-email" id="form2-email" /><br />

        <label htmlFor="form2-message">Message:</label>
        <textarea name="form2-message" id="form2-message"></textarea><br />

        <label htmlFor="form3-name">Name:</label>
        <input type="text" name="form3-name" id="form3-name" /><br />

        <label htmlFor="form3-email">Email:</label>
        <input type="email" name="form3-email" id="form3-email" /><br />

        <label htmlFor="form3-message">Message:</label>
        <textarea name="form3-message" id="form3-message"></textarea><br />

        <input type="submit" value="Submit All Forms" />
      </form>
    </div>
  );
};

export default FormToJson;
