import React from 'react'

const Register = () => {
  return (
    <section class="my-5 py-5">
    <div class="container  mt-3 pt-5">
        <h2 class="form-weight-bold">Register</h2>
        <hr/>

    </div>
    <div class="text-center container">
        <form id="register-form" action="">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" id="register-name" name="fname" placeholder="Name" required/>
            </div>
            <div class="form-group">
                <label for=""> Email</label>
                <input type="text" class="form-control" id="login-email" name="email" placeholder="Email" required/>
            </div>
            <div class="form-group">
                <label for="">PassWord</label>
                <input type="password" class="form-control" id="login-password" name="password" placeholder="Password" required/>
            </div>
            <div class="form-group p-2">
                <input type="submit" class="submit px-2" id="register-btn" value="Register"/>
            </div>
        </form>

    </div>
  </section>
  )
}

export default Register
