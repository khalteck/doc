import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  //to reg patients   //to reg patients   //to reg patients
  //to reg patients   //to reg patients   //to reg patients

  const [regPatient, setRegPatient] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function handleRegChange(event) {
    const { id, value } = event.target;
    setSubmitError("");
    setRegPatient((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  //to handle patient register form submit
  const handleRegSubmit = async (event) => {
    event.preventDefault();

    if (
      regPatient.first_name &&
      regPatient.last_name &&
      regPatient.email &&
      regPatient.password
    ) {
      setLoader(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("first_name", regPatient.first_name);
        formDataToSend.append("last_name", regPatient.last_name);
        formDataToSend.append("email", regPatient.email);
        formDataToSend.append("password", regPatient.password);

        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/patient/reg/",
          {
            method: "POST",
            body: formDataToSend,
          }
        );
        const data = await response.json();

        if (response.ok) {
          console.log(data);
          setRegisterSuccess("registered as a patient");
        } else {
          if (response.status === 400) {
            setSubmitError(data.message);
            console.log(data);
          } else {
            throw new Error("Server error.");
          }
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Something went wrong, try again later.");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  function proceedToLogin() {
    navigate("/login");
    setRegisterSuccess("");
  }

  //to reg doctors   //to reg doctors   //to reg doctors
  //to reg doctors   //to reg doctors   //to reg doctors

  const [regDoc, setRegDoc] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function handleRegDocChange(event) {
    const { id, value } = event.target;
    setSubmitError("");
    setRegDoc((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  //to handle patient register form submit
  const handleRegDocSubmit = async (event) => {
    event.preventDefault();

    if (
      regDoc.first_name &&
      regDoc.last_name &&
      regDoc.email &&
      regDoc.password
    ) {
      setLoader(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("first_name", regDoc.first_name);
        formDataToSend.append("last_name", regDoc.last_name);
        formDataToSend.append("email", regDoc.email);
        formDataToSend.append("password", regDoc.password);

        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/doctor/reg/",
          {
            method: "POST",
            body: formDataToSend,
          }
        );
        const data = await response.json();

        if (response.ok) {
          console.log(data);
          setRegisterSuccess("registered as a doctor");
        } else {
          if (response.status === 400) {
            setSubmitError(data.message);
            console.log(data);
          } else {
            throw new Error("Server error.");
          }
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Something went wrong, try again later.");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  //to login   //to login   //to login
  //to login   //to login   //to login
  const [loginSuccess, setLoginSuccess] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleLoginChange(event) {
    const { id, value } = event.target;
    setSubmitError("");
    setLogin((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    if (login.email && login.password) {
      setLoader(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("email", login.email);
        formDataToSend.append("password", login.password);

        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/login",
          {
            method: "POST",
            body: formDataToSend,
          }
        );
        const data = await response.json();

        if (response.ok) {
          if (data.code === 404) {
            setSubmitError("Invalid login details!");
          } else {
            setLoginSuccess("login success");
            let userDetails = {
              ...data.user_data,
              token: data.token,
            };
            localStorage.setItem("userData", JSON.stringify(userDetails));
            setUserData(userDetails);

            setTimeout(() => {
              setLoginSuccess("");
              navigate("/");
            }, 3000);
          }
        } else {
          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Something went wrong, try again later.");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("medicalDataStatus");
    localStorage.removeItem("doctors");
    setUserData({});
    window.scrollTo(0, 0);
  }

  //to submit appointments   //to submit appointments   //to submit appointments
  //to submit appointments   //to submit appointments   //to submit appointments

  const [appointment, setAppointment] = useState({
    day: "",
    month: "",
    year: "",
  });

  function handleAppointmentChange(event) {
    const { id, value } = event.target;
    setSubmitError("");
    setAppointment((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const handleSubmitAppointment = async (event) => {
    event.preventDefault();

    if (appointment.day && appointment.month && appointment.year) {
      setLoader(true);

      let date = `${appointment.day}-${appointment.month}-${appointment.year}`;
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("schedule_date", "2023-09-18 10:00:00");

        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/create/appointment/2",
          {
            method: "POST",
            body: formDataToSend,
            Authorization: `Bearer ${userData?.token}`,
          }
        );
        const data = await response.json();

        if (response.ok) {
          console.log(data);
        } else {
          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Something went wrong, try again later.");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  //to get doctors list   //to get doctors list   //to get doctors list
  //to get doctors list   //to get doctors list   //to get doctors list

  const [doctors, setDoctors] = useState(
    JSON.parse(localStorage.getItem("doctors")) || []
  );

  useEffect(() => {
    if (userData?.token) {
      const getDoctors = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            "https://medico-production-fa1c.up.railway.app/api/all/docs",
            {
              headers: {
                Authorization: `Bearer ${userData?.token}`,
              },
            }
          );
          const data = await response.json();
          localStorage.setItem("doctors", JSON.stringify(data?.doctors));
          setDoctors([...data?.doctors]);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };
      getDoctors();
    }
  }, [userData]);

  //to submit medical data status   //to submit medical data status   //to submit medical data status
  //to submit medical data status   //to submit medical data status   //to submit medical data status

  const [medicalData, setMedicalData] = useState({
    occupation: "",
    blood_group: "",
    medical_cases: "",
    home_address: "",
  });

  function handleMedicalDataChange(event) {
    const { id, value } = event.target;
    setSubmitError("");
    setMedicalData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [selectedRace, setSelectedRace] = useState("black");

  const handleRaceChange = (event) => {
    setSelectedRace(event.target.value);
  };

  const handleSubmitMedicalData = async (event) => {
    event.preventDefault();

    if (
      medicalData.occupation &&
      medicalData.blood_group &&
      medicalData.medical_cases &&
      medicalData.home_address
    ) {
      setLoader(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("race", selectedRace);
        formDataToSend.append("occupation", medicalData.occupation);
        formDataToSend.append("blood_group", medicalData.blood_group);
        formDataToSend.append("medical_cases", medicalData.medical_cases);
        formDataToSend.append("home_address", medicalData.home_address);

        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/api/add/med_data",
          {
            method: "POST",
            body: formDataToSend,
            Authorization: `Bearer ${userData?.token}`,
          }
        );
        const data = await response.json();

        if (response.ok) {
          console.log(data);
        } else {
          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Something went wrong, try again later.");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  //to get medical data status   //to get medical data status   //to get medical data status
  //to get medical data status   //to get medical data status   //to get medical data status
  const [medicalDataStatus, setMedicalDataStatus] = useState(
    JSON.parse(localStorage.getItem("medicalDataStatus")) || false
  );

  useEffect(() => {
    if (userData?.token) {
      const getmedicalDataStatus = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            "https://medico-production-fa1c.up.railway.app/api/get/status",
            {
              headers: {
                Authorization: `Bearer ${userData?.token}`,
              },
            }
          );
          const data = await response.json();
          localStorage.setItem(
            "medicalDataStatus",
            JSON.stringify(data.status)
          );
          setMedicalDataStatus(data.status);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };
      getmedicalDataStatus();
    }
  }, [userData]);

  // console.log(userData);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        handleRegChange,
        submitError,
        handleRegSubmit,
        registerSuccess,
        navigate,
        proceedToLogin,
        handleRegDocChange,
        handleRegDocSubmit,
        handleLoginChange,
        handleLogin,
        loginSuccess,
        userData,
        logout,
        doctors,
        handleAppointmentChange,
        handleSubmitAppointment,
        medicalDataStatus,
        handleMedicalDataChange,
        handleRaceChange,
        selectedRace,
        handleSubmitMedicalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
