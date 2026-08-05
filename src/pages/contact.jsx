import { useState } from "react";
import Swal from 'sweetalert2';



const Contact = () => {
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

  

 const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        icon: "success",
        title: "Sending...",
        text: "Your message is being sent.",
    }).then(() => {
        e.target.submit();
    });
};

    return (
        <section className="contact bg-gray-900 text-white py-8 mt-20 min-h-screen">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
             <form
    action="https://formsubmit.co/aftabch1003@gmail.com"
    method="POST"
    onSubmit={handleSubmit}
    className="max-w-md mx-auto space-y-6"
>
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="New Contact Form" />
    <input type="hidden" name="_next" value="https://electrodeseng.com" />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

    {/* Name */}
    <div>
        <label htmlFor="name" className="block text-sm mb-1">
            Name
        </label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
        />
    </div>

    {/* Email */}
    <div>
        <label htmlFor="email" className="block text-sm mb-1">
            Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
        />
    </div>

    {/* Phone */}
    <div>
        <label htmlFor="phone" className="block text-sm mb-1">
            Phone Number
        </label>
        <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
        />
    </div>

    {/* Subject */}
    <div>
        <label htmlFor="subject" className="block text-sm mb-1">
            Subject
        </label>
        <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
        />
    </div>

</div>

{/* Message */}
<div>
    <label htmlFor="message" className="block text-sm mb-1">
        Message
    </label>
    <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
    ></textarea>
</div>

{/* Button */}
<button
    type="submit"
    className="w-full rounded-full border-2 border-yellow-500 py-3 text-yellow-500 transition hover:bg-yellow-500 hover:text-gray-900"
>
    Send Message
</button>

</form>
            </div>
        </section>
    );
};

export default Contact;
