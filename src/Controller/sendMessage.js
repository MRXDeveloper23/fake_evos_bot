const fetch = require("node-fetch");
const FormData = require("form-data");

async function login() {
  try {
    const formData = new FormData();
    let email = "test@eskiz.uz";
    let password = "j6DWtQjjpLDNjWEk74Sx";
    formData.append("email", email);
    formData.append("password", password);
    const response = await fetch(`https://notify.eskiz.uz/api/auth/login`, {
      method: "POST",
      body: formData,
    });
    let res = await response.json();
    if (response.status >= 200 && response.status < 300) {
      return res.data.token;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function sms(phone_number, text) {
  try {
    let token = await login();
    const formData = new FormData();
    const mobile_phone = phone_number;
    const from = 4546;
    const message = text;
    formData.append("mobile_phone", mobile_phone);
    formData.append("from", from);
    formData.append("message", message);
    const response = await fetch(
      `https://notify.eskiz.uz/api/message/sms/send`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = sms;
