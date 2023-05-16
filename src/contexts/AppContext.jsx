import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Compressor from "compressorjs";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [submitError, setSubmitError] = useState("");
  useEffect(() => {
    setSubmitError("");
  }, [currentPage]);
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);

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
          // console.log(data);
          setRegisterSuccess("registered as a patient");
        } else {
          if (response.status === 400) {
            setSubmitError(data.message);
            // console.log(data);
          } else {
            throw new Error("Server error.");
          }
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Bad network connection");
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
    years_of_experience: "",
    specialty: "",
    other: null,
    profile_image: null,
    imageData: "",
    password: "",
  });
  // console.log(regDoc);

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

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      new Compressor(file, {
        quality: 0.9,
        maxWidth: 500,
        maxHeight: 500,
        success: (compressedFile) => {
          setRegDoc({
            ...regDoc,
            profile_image: compressedFile,
          });
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    };
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "*",
    multiple: false,
    onDrop: handleDrop,
  });

  //to handle patient register form submit
  const handleRegDocSubmit = async (event) => {
    event.preventDefault();

    if (
      regDoc?.first_name &&
      regDoc?.last_name &&
      regDoc?.email &&
      regDoc?.password &&
      regDoc?.specialty &&
      regDoc?.profile_image
    ) {
      setLoader(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("first_name", regDoc?.first_name);
        formDataToSend.append("last_name", regDoc?.last_name);
        formDataToSend.append("email", regDoc?.email);
        formDataToSend.append(
          "years_of_experience",
          regDoc?.years_of_experience
        );
        formDataToSend.append("specialty", regDoc?.specialty.toUpperCase());
        formDataToSend.append("other", regDoc?.other?.toUpperCase());
        formDataToSend.append("profile_image", regDoc?.profile_image);
        formDataToSend.append("password", regDoc?.password);

        console.log(formDataToSend);
        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/doctor/reg/",
          {
            method: "POST",
            body: formDataToSend,
          }
        );
        const data = await response.json();

        if (response.ok) {
          // console.log(data);
          setRegisterSuccess("registered as a doctor");
        } else {
          if (response.status === 400) {
            setSubmitError(data.message);
            // console.log(data);
          } else {
            throw new Error("Server error.");
          }
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Something went wrong");
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

    if (login?.email && login?.password) {
      setLoader(true);

      const formDataToSend = new FormData();
      formDataToSend.append("email", login?.email);
      formDataToSend.append("password", login?.password);

      const response = await fetch(
        "https://medico-production-fa1c.up.railway.app/api/login",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      const data = await response.json();

      try {
        if (response.ok) {
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
            window.location.reload();
            setLoader(false);
          }, 3000);
        }
        // console.log(data);
        throw new Error("Server error.");
      } catch (error) {
        console.log(error);
        data?.code === 404
          ? setSubmitError("Incorrect Email please try again!")
          : setSubmitError("Bad network connection");

        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  const [loggedOut, setLoggedOut] = useState(false);

  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("medicalDataStatus");
    localStorage.removeItem("doctors");
    localStorage.removeItem("appointmentsList");
    setUserData({});
    navigate("/");
    window.scrollTo(0, 0);
    setLoggedOut(true);
    setTimeout(() => {
      setLoggedOut(false);
    }, 3000);
  }

  //to submit appointments   //to submit appointments   //to submit appointments
  //to submit appointments   //to submit appointments   //to submit appointments

  const [appointment, setAppointment] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    ampm: "",
    medical_issue: "",
    referral_letter: "",
  });
  // console.log(appointment?.day.split("").length);

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

  const [appointmentSuccess, setAppointmentSuccess] = useState("");
  // console.log(appointmentSuccess);

  const handleSubmitAppointment = async (event, id) => {
    event.preventDefault();

    if (
      appointment?.day &&
      appointment?.month &&
      appointment?.year &&
      appointment?.medical_issue &&
      appointment?.referral_letter
    ) {
      setLoader(true);

      let date = `${appointment?.year}-${
        appointment?.month === "January"
          ? "01"
          : appointment?.month === "February"
          ? "02"
          : appointment?.month === "March"
          ? "03"
          : appointment?.month === "April"
          ? "04"
          : appointment?.month === "May"
          ? "05"
          : appointment?.month === "June"
          ? "06"
          : appointment?.month === "July"
          ? "07"
          : appointment?.month === "August"
          ? "08"
          : appointment?.month === "September"
          ? "09"
          : appointment?.month === "October"
          ? "10"
          : appointment?.month === "November"
          ? "11"
          : appointment?.month === "December"
          ? "12"
          : null
      }-${
        appointment?.day.split("").length === 1
          ? `0${appointment?.day}`
          : appointment?.day
      }`;
      let time = `${appointment?.hour}:${appointment?.minute} ${appointment?.ampm}`;
      const time24Hour = moment(time, "hh:mm A").format("HH:mm:ss");
      try {
        const formDataToSend = {
          schedule_date: `${date} ${time24Hour}`,
          medical_issue: appointment?.medical_issue,
          referral_letter: appointment?.referral_letter,
        };
        // console.log(formDataToSend);

        const response = await fetch(
          `https://medico-production-fa1c.up.railway.app/api/create/appointment/${id}`,
          {
            method: "POST",
            body: JSON.stringify(formDataToSend),
            headers: {
              Authorization: `Bearer ${userData?.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          // console.log(data);
          setAppointmentSuccess(data?.message);
          setTimeout(() => {
            setAppointmentSuccess("");
            navigate("/appointments");
          }, 3000);
        } else {
          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Something went wrong!");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };
  // console.log(userData?.token);

  //to get doctors list   //to get doctors list   //to get doctors list
  //to get doctors list   //to get doctors list   //to get doctors list

  const [doctors, setDoctors] = useState(
    JSON.parse(localStorage.getItem("doctors")) || []
  );
  // console.log(doctors);

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
          data?.doctors &&
            localStorage.setItem("doctors", JSON.stringify(data?.doctors));
          data?.doctors && setDoctors([...data?.doctors]);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };
      getDoctors();
    }
  }, [userData]);
  // console.log(doctors);

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

  const [medicalDataSubmitSuccess, setMedicalDataSubmitSuccess] = useState("");

  const handleSubmitMedicalData = async (event) => {
    event.preventDefault();

    if (
      medicalData?.occupation &&
      medicalData?.blood_group &&
      medicalData?.medical_cases &&
      medicalData?.home_address
    ) {
      setLoader(true);

      try {
        const formDataToSend = new URLSearchParams();
        formDataToSend.append("race", selectedRace.toUpperCase());
        formDataToSend.append(
          "occupation",
          medicalData?.occupation.toUpperCase()
        );
        formDataToSend.append(
          "blood_group",
          medicalData?.blood_group.toUpperCase()
        );
        formDataToSend.append(
          "medical_cases",
          medicalData?.medical_cases.toUpperCase()
        );
        formDataToSend.append(
          "home_address",
          medicalData?.home_address.toUpperCase()
        );

        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/add/med_data",
          {
            method: "POST",
            body: formDataToSend,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${userData?.token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          // console.log(data);
          localStorage.setItem("medicalDataStatus", JSON.stringify(true));
          setMedicalDataStatus(true);
          setMedicalDataSubmitSuccess("success");
          setTimeout(() => {
            setMedicalDataSubmitSuccess("");
          }, 3000);
        } else {
          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Bad network connection");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  // console.log(userData?.token);

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
          data?.status &&
            localStorage.setItem(
              "medicalDataStatus",
              JSON.stringify(data.status)
            );
          data?.status && setMedicalDataStatus(data.status);
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

  //to get appointments   //to get appointments   //to get appointments
  //to get appointments   //to get appointments   //to get appointments
  const [appointmentsList, setAppointmentsList] = useState(
    JSON.parse(localStorage.getItem("appointmentsList")) || []
  );

  useEffect(() => {
    if (userData?.token) {
      const getAppointmentsList = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            "https://medico-production-fa1c.up.railway.app/api/get/appointments",
            {
              headers: {
                Authorization: `Bearer ${userData?.token}`,
              },
            }
          );
          const data = await response.json();
          console.log("patient appointments", data);
          if (data.length > 0) {
            localStorage.setItem(
              "appointmentsList",
              JSON.stringify(data[0]?.appointments)
            );
            setAppointmentsList([...data[0]?.appointments]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };
      getAppointmentsList();
    }
  }, [userData, appointmentSuccess]);
  // console.log(appointmentsList);

  //to be sent
  const [documentsData, setDocumentsData] = useState({
    title: "",
    description: "",
    file: {},
  });

  function handledocumentsDataChange(event) {
    const { id, value } = event.target;
    setSubmitError("");
    setDocumentsData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setDocumentsData((prev) => {
      return {
        ...prev,
        file: file,
      };
    });
  };

  const [DocSubmitSuccess, setDocSubmitSuccess] = useState(false);

  const handleSubmitDoc = async (event) => {
    event.preventDefault();

    if (
      documentsData?.title &&
      documentsData?.file &&
      documentsData?.description
    ) {
      setLoader(true);

      try {
        const formDataToSend = new URLSearchParams();
        formDataToSend.append("title", documentsData?.title.toUpperCase());
        formDataToSend.append("file", documentsData?.file);
        formDataToSend.append(
          "description",
          documentsData?.description.toUpperCase()
        );

        const response = await fetch(
          "https://medico-production-fa1c.up.railway.app/api/add/docs",
          {
            method: "POST",
            body: formDataToSend,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${userData?.token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          // localStorage.setItem("medicalDataStatus", JSON.stringify(true));
          setDocSubmitSuccess(true);
          setTimeout(() => {
            setDocSubmitSuccess(false);
            navigate("/");
          }, 3000);
        } else {
          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("Bad network connection");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  //to get all patients

  const [patientsList, setPatientsList] = useState([]);
  useEffect(() => {
    if (userData?.token) {
      const getpatientsList = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            "https://medico-production-fa1c.up.railway.app/api/assigned/patients",
            {
              headers: {
                Authorization: `Bearer ${userData?.token}`,
              },
            }
          );
          const data = await response.json();
          setPatientsList(data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };
      getpatientsList();
    }
  }, [userData]);

  const [docAppointments, setDocAppointments] = useState([]);
  useEffect(() => {
    if (userData?.token) {
      const getdocAppointments = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            "https://medico-production-fa1c.up.railway.app/api/my/appointments",
            {
              headers: {
                Authorization: `Bearer ${userData?.token}`,
              },
            }
          );
          const data = await response.json();
          console.log("Doc appointments", data);
          setDocAppointments(data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };
      getdocAppointments();
    }
  }, [userData]);

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
        medicalDataSubmitSuccess,
        appointmentSuccess,
        loggedOut,
        appointmentsList,
        setIsDoctor,
        isDoctor,
        regDoc,
        getRootProps,
        getInputProps,
        handledocumentsDataChange,
        handleFileChange,
        handleSubmitDoc,
        DocSubmitSuccess,
        patientsList,
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
