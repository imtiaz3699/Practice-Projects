import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form-Data", values);
};
const validate = (values) => {
  let errors = {
    name: "",
    email: "",
    channel: "",
  };

  if (values.name === "") {
    errors.name = "Required";
  }
  if (values.email === "") {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  } else {
    errors.email = "Not required";
  }

  if (values.channel === "") {
    errors.channel = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email Format").required("Required"),
  channel: Yup.string().required("Required"),
});

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("visited-fields", formik.touched);
  return (
    <div className="flex justify-center">
      <form
        className="flex justify-center flex-col gap-4 py-10"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <label htmlFor="name" className="text-2xl">
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            className="w-96 rounded-md px-5 py-2 border"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {/* the formik.touched.name checks whether user interacted with the field or not */}
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="flex flex-col gap-5">
          <label htmlFor="email" className="text-2xl">
            E-mail
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="w-96 rounded-md px-5 py-2 border"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="flex flex-col gap-5">
          <label htmlFor="channel" className="text-2xl">
            Channel
          </label>
          <input
            name="channel"
            id="channel"
            type="text"
            className="w-96 rounded-md px-5 py-2 border "
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="text-black">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
