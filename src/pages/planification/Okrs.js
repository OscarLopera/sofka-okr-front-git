import React, { useEffect, useState } from "react";
import axios from "axios";
import { environment } from "../../environment/backendurl";
import Navbar from "../../components/structure/Navbar";
import Sidebar from "../../components/structure/Sidebar";
import "../../assets/styles/planification/Planification.scss";
import { auth } from "../../functions/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../administration/SingIn";

const Okrs = () => {
  const [okr, setOkr] = useState([]);
  const [user] = useAuthState(auth);
  const urlOkr = environment.apiOkrUrl;

  const getAllOkr = () => {
    axios.get(urlOkr).then((res) => {
      setOkr(res.data);
    });
  };

  useEffect(() => {
    getAllOkr();
    // eslint-disable-next-line
  }, []);
  if (user) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <section className="okr">
          <div className="containerOKR">
            <div className="title">
              <h3>Mis OKR's</h3>
            </div>

            {okr &&
              okr.map((item) => (
                <div className="okr-item">
                  <div className="headerOKR">
                    <div className="titleOKR">
                      <h3>{item.title}</h3>
                      <div className="icons">
                        <i className="fas fa-trash-alt"></i>
                        <i className="fas fa-edit"></i>
                      </div>
                    </div>
                  </div>

                  <div className="contentOKR"></div>
                </div>
              ))}
          </div>
        </section>
      </>
    );
  }
  return <SignIn />;
};

export default Okrs;
