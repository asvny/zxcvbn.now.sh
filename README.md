# zxcvbn.now.sh

> zxcvbn (by Dropbox) - password strength estimator as a service

## Usage

```javascript
var payload = {
    password: 'emily'
};


fetch("https://zxcvbn.now.sh",
{
    method: "POST",
    body: JSON.stringify(payload)
})
.then(function(res){ return res.json(); })
.then(console.log)

```
