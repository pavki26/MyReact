import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e:React.FormEvent) => {e.preventDefault();
    console.log(name, email, message);
  };

  return (
    
    <div className="contact">
      <h2>Contact Me</h2>
    <form onSubmit={handleSubmit} className="Info" >
      
      <input
      className="content"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
      className="content"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
      className="content"
        value={message}
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" disabled={message.length <= 10} className="Sendbutton">
        Send
      </button>
    </form>
    </div>
  );
};

export default Form;
