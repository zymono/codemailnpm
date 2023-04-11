const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadString, getDownloadURL } = require("firebase/storage");
const fetch = require("node-fetch");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const emailjs = require("emailjs-com");

function saveCloud(where, what) {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBzBFr-dt2pxVWr3FePWxfAIM16wHfFVuY",
    authDomain: "zymono-codemail.firebaseapp.com",
    projectId: "zymono-codemail",
    storageBucket: "zymono-codemail.appspot.com",
    messagingSenderId: "602783646028",
    appId: "1:602783646028:web:0eb4e7ff60d2510ed58fe9"
  };
  // export default firebaseConfig;
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
        var sr = "userMail/" + where
    
    const storage = getStorage();
  const storageRef = ref(storage, sr);
  
  uploadString(storageRef, what).then((snapshot) => {
    console.log('Subscribed List: ' + what);
    
    })
  }
  
async function subscribe(mailingID, formName, redirectURL) {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
  
        const firebaseConfig = {
    apiKey: "AIzaSyBzBFr-dt2pxVWr3FePWxfAIM16wHfFVuY",
    authDomain: "zymono-codemail.firebaseapp.com",
    projectId: "zymono-codemail",
    storageBucket: "zymono-codemail.appspot.com",
    messagingSenderId: "602783646028",
    appId: "1:602783646028:web:0eb4e7ff60d2510ed58fe9"
  };
  // export default firebaseConfig;
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
        
        var get = 'userMail/recentIP.zyc'
                                    getDownloadURL(ref(getStorage(), get))
                                      .then((url) => {
                                        // // `url` is the download URL for your variable
                                    try {
                                        const xhr = require('xmlhttprequest').XMLHttpRequest;
  
                                        xhr.open('GET', url);
                                        xhr.onload = function() {
                                          if (xhr.status === 200) {
  
                                            if(xhr.responseText == data.ip) {
                                              alert('Error Cannot Submit More Than One Email Address!')
                                              history.back()
                                            } else {
                                              const email = document.getElementById('codemail-email').value
                                              saveCloud(mailingID + '/' + email + '/type.zyc', formName)
                                              saveCloud(mailingID + '/' + email + '/ip.zyc', data.ip)
                                              saveCloud('recentIP.zyc', data.ip)
  
  
                                              const emailServiceId = 'service_5lifede';
              const emailTemplateId = 'template_7izd1am';
        emailjs.init('ySPV8Qf0psFEUPlLL');
  
        const html = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Zymono Codemail - Signup Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #444;
          background-color: #f9f9f9;
        }
        h1 {
          font-size: 24px;
          font-weight: bold;
          color: #555;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        a {
          color: #3498db;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <h1>Thank you for joining a Zymono Codemail community!</h1>
      <p>We're thrilled to have you as part of their community. You'll be receiving updates soon!</p>
      <p>If you didn't intend to join any Zymono Codemail community, please let us know by clicking <a href="https://codemail.zymono.com/notme/?id=${mailingID}&email=${email}">here</a>.</p>
      <p>Thanks,<br>The Zymono Codemail Team</p>
    </body>
  </html>
  `
              // Define the email parameters
              const emailParams = {
                  to_email: document.getElementById('codemail-email').value,
                  from_name: 'Zymono',
                  reply_to: 'inovate@code.mail.zymono.com',
          html: html
              };
  
              // Send the email using the EmailJS API
              emailjs.send(emailServiceId, emailTemplateId, emailParams)
                  .then(() => {
                      console.log('Verification email sent successfully.');
              window.location.href = redirectURL
                  })
                  .catch((error) => {
                      console.error(error);
                  });
                                            }
  
  
                                          } else {
                                            console.error(xhr.statusText);
                                            const err3 = error
                                          }
                                        };
                                        xhr.onerror = function(error) {
                                          console.error(error);
                                          const err3 = error
    };
                                        xhr.send();
                                        } catch (error) {
  
                                        }
                                      }) //end
        return data.ip
      })
  }

  function test() {
    console.log('working')
  }

module.exports = {
    subscribe,
    saveCloud,
    test
  };
  