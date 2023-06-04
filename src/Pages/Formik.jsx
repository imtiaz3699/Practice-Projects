import React from "react";
import { useFormik } from "formik";
import YoutubeForm from "../components/Form/YoutubeForm";
import AdmissionForm from "./AdmissionForm";
function FormikForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "", channel: "" },
    onSubmit: (values) => {
      console.log("Submit", values);
    },
    validate: (values) => {},
  });
  // console.log("Form Values", formik.values);
  return (
    <div>
      {" "}
      <YoutubeForm />
      {/* <AdmissionForm /> */}
    </div>
  );
}

export default FormikForm;
