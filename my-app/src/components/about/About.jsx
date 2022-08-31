export const About = (props) => {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about1.jpeg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Me</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>Why me?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "Loading..."}
                    </ul>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
