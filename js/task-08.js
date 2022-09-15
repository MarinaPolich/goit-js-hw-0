const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    // if(!(event.currentTarget.elements.email.value && event.currentTarget.elements.password.value)) {
    //     alert(`всі поля повинні бути заповнені`);
    // } 

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
      } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);
        event.currentTarget.reset();
      }
}

