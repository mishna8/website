import { setApiKey, send } from '@sendgrid/mail';

setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'michal.na8@gmail.com',
  from: 'michal.na8@gmail.com',
  subject: 'Form Submission',
  text: 'hi there here is the form detailes:\nName: ' + formData.name + '\nEmail: ' + formData.email,
};

send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error);
  });