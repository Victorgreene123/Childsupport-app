import { Link } from "react-router-dom";
// import '../App';
import "../index.css";

export default function Signup() {
  const [formData, setFormdata] = React.useState({
    email: "",
    password: "",
    rememberPassword: true,
    firstname: "",
    lastname: "",
  });
  const [talk, setTalk] = React.useState("");
  const [emailtalk, setemailtalk] = React.useState("");
  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setFormdata((prevState) => {
      return { ...prevState, [name]: [type] == "checkbox" ? checked : value };
    });
    switch (name) {
      case "email":
        if (/^.+@+..+com/.test(value)) {
          setemailtalk("Valid email");
        } else {
          setemailtalk("Invalid email");
        }
      case "password":
        if (value.length < 8) {
          setTalk("password must be greater then 8 characters");
        } else {
          if (/\d/.test(value)) {
            setTalk("Valid password");
          } else {
            setTalk("Must contains a number and a symbol");
          }
        }

        break;

      default:
        break;
    }
    // console.log(formData)
  }
  function handleSubmit() {}

  return (
    <div className="container">
      <div className="row">
        <div className="form-container">
          <div className="form-body">
            <h2>Create account</h2>
            <p> Please enter your details</p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-input">
                <label>First name</label>
                <input
                  placeholder="Enter your first"
                  type="text"
                  onChange={handleChange}
                  value={formData.firstname}
                ></input>
              </div>
              <div className="form-input">
                <label>Last name</label>
                <input
                  placeholder="Enter your Last name"
                  type="text"
                  onChange={handleChange}
                  value={formData.lastname}
                ></input>
              </div>
              <div className="form-input">
                <label>Email</label>
                <input
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                <p>{emailtalk}</p>
              </div>
              <div className="form-input">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={formData.password}
                />
                <p>{talk}</p>
              </div>
              <div>
                <span className="checkbox-container">
                  <input
                    name="rememberPassword"
                    type="checkbox"
                    className="checkbox"
                    onChange={handleChange}
                    checked={formData.rememberPassword}
                  />
                  <label>Remember for 30 days</label>
                </span>
              </div>

              <button className="signin">Create account</button>
              <button className="witgoogle">
                <span className="google-container">
                  <img
                    src={process.env.PUBLIC_URL + "/google.png"}
                    alt="icon of google"
                  />{" "}
                  <span className="signgoogle">Sign up with Google</span>
                </span>
              </button>
              <p>
                Already have an account ? <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="options"></div>
      </div>
    </div>
  );
}
