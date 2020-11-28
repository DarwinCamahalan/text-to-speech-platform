export default function Social() {
  return (
    <div className="social-container">
      <div className="social-col">
        <a
          href="https://www.facebook.com/darpax101/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook " />
        </a>

        <hr />
        <a
          href="https://www.linkedin.com/in/DarwinCamahalan"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="fab fa-linkedin" />
        </a>

        <hr />
        <a
          href="https://github.com/DarwinCamahalan"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="fab fa-github " />
        </a>
      </div>
    </div>
  );
}
