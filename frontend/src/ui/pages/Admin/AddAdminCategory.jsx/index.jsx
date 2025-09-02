
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const categorySchema = z.object({
  title: z.string().min(2, "Title is required"),
  slug: z.string().min(2, "Slug is required"),
  description: z.string(),
  image: z.any(),
  isActive: z.boolean().default(true),
});

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      image: null,
      isActive: true,
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("slug", data.slug);
      formData.append("description", data.description);
      formData.append("isActive", data.isActive);
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]); 
      }

      const res = await axios.post(
        "http://localhost:8000/api/v1/category",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("Category added successfully!");
        reset();
      }
    } catch (err) {
      console.error("Error adding category:", err.response || err);
      toast.error("Failed to add category");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-6 bg-white shadow rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Add Category</h2>

      <input
        type="text"
        placeholder="Title"
        {...register("title")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      <input
        type="text"
        placeholder="Slug"
        {...register("slug")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.slug && (
        <p className="text-red-500 text-sm">{errors.slug.message}</p>
      )}

      <textarea
        placeholder="Description"
        {...register("description")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.description && (
        <p className="text-red-500 text-sm">{errors.description.message}</p>
      )}

      <input
        type="file"
        accept="image/*"
        {...register("image")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.image && (
        <p className="text-red-500 text-sm">{errors.image.message}</p>
      )}

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("isActive")} className="w-4 h-4" />{" "}
        Active
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Adding..." : "Add Category"}
      </button>
    </form>
  );
};

export default AddCategory;
