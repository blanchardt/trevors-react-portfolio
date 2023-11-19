import { useState } from 'react';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [issue, setIssue] = useState('');

  //update the issue prompt with the new issue if issue field is empty.
  const checkIssue = (issuePrompt) => {
    if(issue === '') {
      console.log("issue empty");
      setIssue(issuePrompt);
    }
    console.log("after if in check issue");
  }

  const handleInputChange = (e) => {
    //get the value and field that triggered the change.
    const { name, value } = e.target;

    console.log(name);

    //Decide which field to set the value with.
    if(name === 'name') {
      if(value === '') {
        checkIssue('Name cannot be empty.');
        return setName(value);
      }
      else {
        if(issue === 'Name cannot be empty.') {
          setIssue('');
        }
        return setName(value);
      }
    }
    else if(name === 'email') {
      console.log("indeed email");
      var emailValidate = /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/;
      if(value === '' || !emailValidate.test(value)) {
        console.log("validation failed");
        checkIssue('Your email is invalid.');
        console.log("after updating issue");
        return setEmail(value);
      }
      else {
        console.log("validation passed");
        if(issue === 'Your email is invalid.') {
          setIssue('');
        }
        return setEmail(value);
      }
    }
    else {
      if(value === '') {
        checkIssue('Message cannot be empty.');
        return setMessage(value);
      }
      else {
        if(issue === 'Message cannot be empty.') {
          setIssue('');
        }
        return setMessage(value);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //console log the name, email and message, set up actuall backend later
    console.log(`${name} sent message, ${message}, from ${email}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
        />
        <textarea 
          value={message}
          name="message"
          onChange={handleInputChange} rows="8">
        </textarea>

        <p>{issue}</p>

        <button type="submit">
          Submit
        </button>
      </form>
      <p>you can also reach me at my email: blanchardt@merrimack.edu</p>
    </div>
  );
}

export default Contact;
