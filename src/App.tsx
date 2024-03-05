import Profile from "./Components/Profile";
import MyImage from "./assets/MyImage.jpeg";
import LinkButtons from "./Components/LinkButtons";
import Resume from "./assets/Resume Pavki.pdf";
import Form from "./Components/Form";

const App = () => {
  return (
    <>
       <Profile
        Image={MyImage}
        about="My name is Pavki. I am a committed Enthusiast who brings proven leaderships, organizational and managerial skills. I started my Coding journey at Seneca College to Computer Engineering technolgy course. I specialise in creating visually attractive and responsive websites and web applications, having experience with HTML, CSS, and JavaScript. As a team player, I thrive in collaborative environments where ideas are exchanged freely, and collective efforts lead to exceptional outcomes. My familiarity with version control technologies, like Git, also guarantees effective code management and cooperation. As a quick learner and dynamic personality, I m constantly seeking challenges and opportunities to express my knowledge in the field of related areas to enhance and grow my skills"
      /> 
       <Form />
       <div className="Links">
        <LinkButtons
          url="http://linkedin.com/in/pavki-pavki-36b3b928b"
          Label="LinkedIn"
        />
        <LinkButtons
          url="https://github.com/pavki26"
          Label="GitHub"
        ></LinkButtons>
        <LinkButtons url={Resume} Label="Resume"></LinkButtons>
      </div> 
      
    </>
  );
};

export default App;
