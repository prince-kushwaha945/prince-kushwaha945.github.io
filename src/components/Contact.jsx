import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const form = useRef();
  
  let [ formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
})

const handleChange = (e) =>{
    let filedName = e.target.name;
    let filedValue = e.target.value;
    console.log(filedValue)

    setFormData( (preVal) => {
        preVal[filedName]= filedValue;
        return {...preVal}
    })
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_6rgawrb', 'template_r5hyrxe', form.current, {
      publicKey: 'AT9dsvI_Gu9JQfCjb',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        toast.success("Message send successfully..");
        setFormData({
          from_name: "",
    from_email: "",
    message: ""
      })

      },
      (error) => {
        console.log('FAILED...', error.text);
        setFormData({
          from_name: "",
          from_email: "",
          message: ""
      })
      },
    );


};

  const contact_info = [
    { logo: "mail", text: "princeku945@gmail.com" },
    { logo: "logo-linkedin", text: "prince-kushwaha945" },
    { logo: "logo-whatsapp", text: "+91-8889542118" },
    {
      logo: "location",
      text: "Satna, Madhya Pradesh, IND",
    },
  ];
  let linkedin = "https://www.linkedin.com/in/princeku954/"

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="pb-10 px-5 text-white">
      <Toaster/>
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="lg:mt-10 mt-8 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" value={formData.from_name} name='from_name' onChange={handleChange} />
            <input type="Email" placeholder="Your Email Address" value={formData.from_email} name='from_email' onChange={handleChange} />
            <textarea placeholder="Your Message" rows={10} value={formData.message} name='message' onChange={handleChange}></textarea>
            <button type="submit" className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                {contact.logo === "logo-linkedin" ? (
                 <Link to=""  onClick={() => handleLinkClick(linkedin)} className="md:text-base text-sm  break-words hover:text-cyan-600 hover:underline">
                 {contact.text}
               </Link>
                ) : (
                  <p className="md:text-base text-sm  break-words">
                    {contact.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
