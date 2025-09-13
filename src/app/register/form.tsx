"use client";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Form,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { useState } from "react";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(null);

  return (
    <Form className="max-w-[900px] w-full flex items-left" onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        console.log(`submit ${JSON.stringify(data)}`);
      }}
    >
      <div className="flex flex-row flex-wrap gap-4">
        <Input
          isRequired
          label="First name"
          labelPlacement="outside"
          name="firstName"
          placeholder="Enter your first name"
          type="text"
          variant="bordered"
          className="w-[250px]"
        />
        <Input
          isRequired
          label="Last name"
          labelPlacement="outside"
          name="lastName"
          placeholder="Enter your last name"
          type="text"
          variant="bordered"
          className="w-[250px]"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="bordered"
          className="w-[250px]"
        />
        <Input
          isRequired
          label="University / Institution"
          labelPlacement="outside"
          name="institutionName"
          placeholder="Enter your institution name"
          type="text"
          variant="bordered"
          className="w-[400px]"
        />
      </div>
      <div className="w-full mt-10 sm:mt-4">
        <Select
        isRequired
        label="How familiar are you with quantum computing and/or quantum physics?"
        labelPlacement="outside"
        placeholder="Select an option"
        variant="bordered"
        name="familiarityQuantum"
        className="bg-inherit text-inherit max-w-[300px] sm:max-w-[600px]"
      >
        {familiarityOptions.map((option) => (
          <SelectItem key={option.key} className="bg-white text-black">
            {option.label}
          </SelectItem>
        ))}
      </Select>
      </div>
      <Select
        isRequired
        label="How would you prefer to attend Qiskit Fall Fest?"
        labelPlacement="outside"
        placeholder="Select an option"
        variant="bordered"
        name="attendancePreference"
        className="w-[400px] bg-inherit text-inherit"
      >
        {attendanceOptions.map((option) => (
          <SelectItem key={option.key} className="bg-white text-black">
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Checkbox isRequired name="pdpaConsent">
        I agree to the collection and use of my personal data in accordance with the Personal Data Protection Act (PDPA).
       </Checkbox>
      <Button type="submit" variant="solid" className="rounded-full px-10 mt-4" color="secondary">
        Submit Form
      </Button>
    </Form>
  );
}

const familiarityOptions = [
  {
    key: "newbie",
    value: "newbie",
    label: "I’m brand new to quantum computing",
  },
  {
    key: "heard",
    value: "heard",
    label: "I’ve heard of it but haven’t explored much",
  },
  {
    key: "tutorials",
    value: "tutorials",
    label: "I’ve tried a few tutorials or courses",
  },
  {
    key: "projects",
    value: "projects",
    label: "I’ve worked on small quantum computing projects",
  },
  {
    key: "advanced",
    value: "advanced",
    label: "I consider myself advanced in the field",
  },
];

const discoveryOptions = [
  "Social media (Twitter, LinkedIn, etc.)",
  "University or student club",
  "Qiskit website or newsletter",
  "Friend or colleague",
  "Other",
];

const attendanceOptions = [
  { key: "onsite", value: "onsite", label: "Onsite (in-person)" },
  { key: "online", value: "online", label: "Online (virtual)" },
];
