let aboutMessage = 'Issue Tracker API v1.0';

function setMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

function getMessage() {
  console.log('getMessage');
  return aboutMessage;
}

module.exports = { getMessage, setMessage };
