import React, { useState } from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
})

const SignIn = () => {
    const [active, setActive] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmitHandler = (data) => {
        console.log({ data });
    }
    return (
        <section className="signIn">
            <h3>Sign in</h3>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="email">
                    <input {...register("email")} type="email" placeholder="Email address" />
                    <p className="error-message">{errors.email?.message}</p>
                    <br />
                </div>
                <div className="password">
                    <input {...register("password")} type={active ? 'text' : 'password'} placeholder="Password" />
                    <span style={{ marginLeft: '-30px', paddingTop: '2px', color: 'white', height: '14px', width: '14px' }}
                        onClick={() => setActive(!active)}>
                        {active ? <MdOutlineVisibility />
                            : <MdOutlineVisibilityOff />}
                    </span>
                    <p className="error-message">{errors.password?.message}</p>
                    <br />
                </div>
                <div className="checkBox">
                    <input type="checkbox" />
                    <label> Remember me </label>
                </div>
                <div className="submit">
                    <button type="submit" >SIGN IN</button>
                </div>
                <h4>I forgot my password</h4>
            </form>
        </section>
    )
}

export default SignIn
