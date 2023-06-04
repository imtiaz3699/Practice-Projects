import React from "react";
import Button from "../components/Button/Button";
import { useFormik } from "formik";

function AdmissionForm() {
  const navbarItems = [
    "Home",
    "About Us",
    "Our Program",
    "Gallery",
    "Contact Us",
  ];
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      MiddleName: "",
      LastName: "",
      FatherFirstName: "",
      FatherLastName: "",
      email: "",
      PhoneNumber: "",
      description: "",
      ChooseRelationShip: "",
      MotherFirstName: "",
      MotherLastName: "",
      SecondEmail: "",
      SecondPhoneNumber: "",
      SecondEducation: "",
    },
  });

  console.log(formik.values.SecondEducation);
  return (
    <div className="container mx-auto">
      <nav className="flex flex-row justify-between items-center py-5">
        <div>School</div>

        <div className="flex flex-row gap-10 font-normal items-center text-base">
          {navbarItems.map((element, idx) => {
            return <div key={idx}>{element}</div>;
          })}
          <Button
            btnText="Admission"
            className="bg-[#FF7162] w-[172px] h-[74px] text-white shadow-xl rounded-md hover:text-black font-bold"
          />
        </div>
      </nav>

      <div className="px-20 mt-[30px]">
        <h1 className="font-extrabold text-[42px] text-[#FF7162]">
          Application Form For Admission
        </h1>
        <p className="mt-[24px] font-normal text-[24px] leading-[32px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
          dolorol egestas morbi sem vulputate etiam facilisis pellentesque ut
          quis. Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
          dolorol egestas morbi sem vulputate etiam facilisis pellentesque ut
          quis.
        </p>
      </div>
      <div className="mt-[43px] mx-20 p-[30px] bg-[#FFF1F1] rounded-[30px]">
        <h1 className="font-extrabold text-[18px] leading-[24px]">
          Admission At NagendraBathala School
        </h1>
        <div className="flex flex-row justify-between mt-[32px]">
          <div>
            <h1 className="font-extrabold text-base text-[#767676]">
              Please Select Branch
            </h1>
            <select className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px]">
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
            </select>
          </div>
          <div>
            <h1 className="font-extrabold text-base text-[#767676]">
              Registration Number*{" "}
            </h1>
            <input
              type="number"
              min="0"
              placeholder="123456"
              className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px]"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-base text-[#767676]">
              Photo of the Student
            </h1>
            <div className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px] bg-white text-center border-[#FF7162] text-[#FF7162] font-extrabold text-base border">
              Upload PDf/Doc
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="mt-[43px] mx-20 p-[30px] bg-[#FFF1F1] rounded-[30px]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="FirstName"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                First name
              </label>
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                placeholder="First name"
                className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg"
                onChange={formik.handleChange}
                value={formik.values.FirstName}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="MiddleName"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Middle Name
              </label>
              <input
                type="text"
                name="MiddleName"
                id="MiddleName"
                placeholder="Middle name"
                className="w-[286px] h-[72px] rounded-[50px] px-6"
                onChange={formik.handleChange}
                value={formik.values.MiddleName}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="LastName"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Last Name
              </label>
              <input
                type="text"
                name="LastName"
                id="LastName"
                placeholder="Last name"
                className="w-[286px] h-[72px] rounded-[50px] px-6"
                onChange={formik.handleChange}
                value={formik.values.LastName}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div>
              <h1 className="font-extrabold text-base leading-[22px] text-[#767676]">
                Gender
              </h1>
              <select className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px]">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <h1 className="font-extrabold text-base leading-[22px] text-[#767676]">
                Gender
              </h1>
              <select className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px]">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <h1 className="font-extrabold text-base leading-[22px] text-[#767676]">
                Gender
              </h1>
              <select className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px]">
                <option>4th</option>
                <option>Fifth</option>
                <option>Sixth</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-[43px] mx-20 p-[30px] bg-[#FFF1F1] rounded-[30px]">
          <h1 className="font-extrabold text-lg leading-6">*Parent/Guardian</h1>
          <div className="flex flex-row items-center justify-between mt-[31px]">
            <div className="flex flex-col">
              <label
                htmlFor="relationship"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Choose RelationShip
              </label>
              <select className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px]">
                <option>Father</option>
                <option>Mother</option>
                <option>Brother</option>
                <option>Sister</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="FatherFirstName"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Father first name
              </label>
              <input
                type="text"
                name="FatherFirstName"
                id="FatherFirstName"
                className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                placeholder="father first name"
                onChange={formik.handleChange}
                value={formik.values.FatherFirstName}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="FatherLastName"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Father last name
              </label>
              <input
                className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                name="FatherLastName"
                id="FatherLastName"
                placeholder="father last name"
                onChange={formik.handleChange}
                value={formik.values.FatherLastName}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-[31px]">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                placeholder="example@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="PhoneNumber"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Phone number
              </label>
              <input
                type="number"
                min="0"
                name="PhoneNumber"
                id="PhoneNumber"
                className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                placeholder="03002089085"
                onChange={formik.handleChange}
                value={formik.values.PhoneNumber}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="education"
                className="font-extrabold text-base leading-[22px] text-[#767676]"
              >
                Education Qualification
              </label>
              <select className="w-[285px] h-[72px] rounded-[50px] px-5 py-5 mt-[12px]">
                <option>BA</option>
                <option>MA</option>
                <option>Metric</option>
                <option>Computer Science</option>
              </select>
            </div>
          </div>
          <div className="mt-[31px] border-b pb-[50px] border-[Grey]">
            <h1 className="font-extrabold text-lg leading-6 text-black">
              Residential Address of the Parent/Guardian
            </h1>
            <textarea
              className="w-full h-[156px] rounded-3xl p-5 mt-[12px]"
              placeholder="enter your text here"
              name="description"
              id="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>

          <div className="mt-[50px]">
            <h1 className="font-extrabold text-lg leading-6 text-black">
              Parent/Guardian
            </h1>
            <div className="flex flex-row items-center justify-between mt-[31px]">
              <div className="flex flex-col">
                <label
                  htmlFor="ChooseRelationShip"
                  className="font-extrabold text-base leading-[22px] text-[#767676]"
                >
                  Choose relation
                </label>
                <input
                  type="text"
                  name="ChooseRelationShip"
                  id="ChooseRelationShip"
                  className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                  placeholder="choose-relation"
                  onChange={formik.handleChange}
                  value={formik.values.ChooseRelationShip}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="MotherFirstName"
                  className="font-extrabold text-base leading-[22px] text-[#767676]"
                >
                  Mother first name
                </label>
                <input
                  type="text"
                  min="0"
                  name="MotherFirstName"
                  id="MotherFirstName"
                  className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                  placeholder="First name"
                  onChange={formik.handleChange}
                  value={formik.values.MotherFirstName}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="MotherLastName"
                  className="font-extrabold text-base leading-[22px] text-[#767676]"
                >
                  Mother Last name
                </label>
                <input
                  type="text"
                  min="0"
                  name="MotherLastName"
                  id="MotherLastName"
                  className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                  placeholder="Mother Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.MotherLastName}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-[31px]">
              <div className="flex flex-col">
                <label
                  htmlFor="SecondEmail"
                  className="font-extrabold text-base leading-[22px] text-[#767676]"
                >
                  Second Email
                </label>
                <input
                  type="text"
                  name="SecondEmail"
                  id="SecondEmail"
                  className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                  placeholder="choose-relation"
                  onChange={formik.handleChange}
                  value={formik.values.SecondEmail}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="SecondPhoneNumber"
                  className="font-extrabold text-base leading-[22px] text-[#767676]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  min="0"
                  name="SecondPhoneNumber"
                  id="SecondPhoneNumber"
                  className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                  placeholder="First name"
                  onChange={formik.handleChange}
                  value={formik.values.SecondPhoneNumber}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="SecondEducation"
                  className="font-extrabold text-base leading-[22px] text-[#767676]"
                >
                  Second Education
                </label>
                <input
                  type="text"
                  min="0"
                  name="SecondEducation"
                  id="SecondEducation"
                  className="w-[286px] h-[72px] rounded-[50px] px-6 font-normal text-lg mt-[12px]"
                  placeholder="Mother Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.SecondEducation}
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdmissionForm;
