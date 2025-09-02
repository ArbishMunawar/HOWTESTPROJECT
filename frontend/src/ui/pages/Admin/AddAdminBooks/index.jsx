// import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const authorSchema = z.object({
  name: z.string().min(2, "Name is required"),
  bio: z.string().min(5, "bio is required"),
  about: z.string(),
  slug: z.string(),
  profession: z.string(),
  qualification: z.string(),
  degree: z.string(),
  university: z.string(),
  city: z.string(),
  province: z.string(),
  country: z.string(),
  isVerified: z.boolean().default(true),
});
const AddAdminBooks = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(authorSchema),
    defaultValues: {
      name: "",
      bio: "",
      about: "",
      slug: "",
      profession: "",
      qualification: "",
      degree: "",
      university: "",
      city: "",
      province: "",
      country: "",
      isVerified: true,
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8000/api/v1/author", {
        ...data,
        credentials: {
          qualification: data.qualification,
          degree: data.degree,
          university: data.university,
          city: data.city,
          province: data.province,
          country: data.country,
        },
      });
      if (res.data.success) {
        toast.success("Author added successfully!");
        reset();
      }
    } catch (err) {
      console.error("Error adding author:", err.response || err);
      toast.error("Failed to add author");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-6 bg-white shadow rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Add Author</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full p-2 border rounded-lg"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Short bio"
          {...register("bio")}
          className="w-full p-2 border rounded-lg"
        />
        {errors.bio && (
          <p className="text-red-500 text-sm">{errors.bio.message}</p>
        )}
      </div>

      <textarea
        placeholder="About"
        {...register("about")}
        className="w-full p-2 border rounded-lg"
      />

      <div>
        <input
          type="text"
          placeholder="Slug"
          {...register("slug")}
          className="w-full p-2 border rounded-lg"
        />
        {errors.slug && (
          <p className="text-red-500 text-sm">{errors.slug.message}</p>
        )}
      </div>

      <input
        type="text"
        placeholder="Profession"
        {...register("profession")}
        className="w-full p-2 border rounded-lg"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Qualification"
          {...register("qualification")}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Degree"
          {...register("degree")}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="University"
          {...register("university")}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="City"
          {...register("city")}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Province"
          {...register("province")}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Country"
          {...register("country")}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register("isVerified")}
          className="w-4 h-4"
        />
        Verified Author
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Adding..." : "Add Author"}
      </button>
    </form>
  );
};

export default AddAdminBooks;
