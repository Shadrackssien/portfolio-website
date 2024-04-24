import emailjs from "emailjs-com"
import DOMPurify from 'dompurify'
import { useState } from "react"

function ContactMenu() {
    const initialState = {
        name: "",
        email: "",
        message: "",
    }

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validateForm();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }
    
        setIsLoading(true);

        const {name, email, message} = formData;

        const sanitizeData = {
            name: "Name: " + DOMPurify.sanitize(name),
            name: "Email: " + DOMPurify.sanitize(email),
            name: "Message: " + DOMPurify.sanitize(message)
        }

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs
        .send(serviceID, templateID,sanitizeData, userID)
        .then((response) => {
            console.log("Email is sent successfully!", response.text);
            setFormData(initialState);
            setErrors({});
            setIsSent(false);
        })
        .catch((error) => {
            console.log("Email Sending failed", error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const validateForm = () => {
        const {name, email, message} = formData;
        const errors = {};

        if (!name.trim()) {
            errors.name = "Name is required"
        }

        if (!email.trim()) {
            errors.email = "Email is required"
        } else if (!isValidEmail(email)) {
            errors.email = "invalid email format"
        }

        if (!message.trim()) {
            errors.message = "Message is required"
        }

        return errors
    }

    const isValidEmail = (value) => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return emailRegex.test(value);
    }

  return (
    <div className="contact-menu">
        {!isSent && (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Name" />
                </div>
            </form>
        )}
    </div>
  )
}

export default ContactMenu


