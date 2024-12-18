const ContactMap = () => {
  return (
    <div className="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.5781279972168!2d-6.2464495205004535!3d53.39645057204044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e2147da7bab%3A0x5c5708936e37c6ea!2sWhitehall%2C%20Dublin%2C%20D09%20Y5YV!5e0!3m2!1sen!2sie!4v1734457298345!5m2!1sen!2sie"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </div>
  );
};

export default ContactMap;
