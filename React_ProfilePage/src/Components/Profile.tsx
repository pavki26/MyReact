import "./Profile.css";

interface ProfileProps
{
    about: string;
    Image: string;
}
const Profile = ({about, Image}: ProfileProps) => {
  return (
    <div className="container">
      <img src={Image} className="Image"></img>
      <p className="about">{about}</p>
    </div>
  );
};

export default Profile;
