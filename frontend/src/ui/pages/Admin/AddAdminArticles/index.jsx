import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";

const articleSchema = z.object({
  title: z.string().min(2, "Title is required"),
  image: z.instanceof(File, { message: "Image is required" }),
  author: z.string().min(1, "Author is required"),
  category: z.string().min(1, "Category is required"),
  abstract: z.string().min(5, "Abstract is required"),
  content: z.string().min(5, "Content is required"),
  tableOfContents: z.string().optional(),
  tags: z.string().min(1, "Tags are required"),
  isActive: z.boolean().default(true),
});

const AddAdminArticles = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      image: "",
      author: "",
      category: "",
      abstract: "",
      content: "",
      tableOfContents: "",
      tags: "",
      isActive: true,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [authorsRes, categoriesRes] = await Promise.all([
          axios.get("http://localhost:8000/api/v1/author"),
          axios.get("http://localhost:8000/api/v1/category"),
        ]);
        setAuthors(authorsRes.data.data || []);
        setCategories(categoriesRes.data.data || []);
      } catch (err) {
        console.error("Error fetching authors/categories:", err);
        toast.error("Failed to load authors or categories");
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const tagsArray = data.tags.split(",").map((tag) => tag.trim());

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("author", data.author);
      formData.append("category", data.category);
      formData.append("abstract", data.abstract);
      formData.append("content", data.content);
      formData.append("tableOfContents", data.tableOfContents || "");
      formData.append("tags", JSON.stringify(tagsArray));
      formData.append("isActive", data.isActive);
      if (data.image) {
        formData.append("image", data.image);
      }

      const res = await axios.post(
        "http://localhost:8000/api/v1/article",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        toast.success("Article added successfully!");
        reset();
        setContent("");
      }
    } catch (err) {
      console.error("Error adding article:", err.response || err);
      toast.error("Failed to add article");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-6 bg-white shadow rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Add Article</h2>

      <input
        type="text"
        placeholder="Title"
        {...register("title")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setValue("image", e.target.files[0])}
        className="w-full p-2 border rounded-lg"
      />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}

      <select {...register("author")} className="w-full p-2 border rounded-lg">
        <option value="">Select Author</option>
        {authors.map((auth) => (
          <option key={auth._id} value={auth._id}>
            {auth.name}
          </option>
        ))}
      </select>
      {errors.author && <p className="text-red-500">{errors.author.message}</p>}

      <select
        {...register("category")}
        className="w-full p-2 border rounded-lg"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.title}
          </option>
        ))}
      </select>
      {errors.category && (
        <p className="text-red-500">{errors.category.message}</p>
      )}

      <textarea
        placeholder="Abstract"
        {...register("abstract")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.abstract && (
        <p className="text-red-500">{errors.abstract.message}</p>
      )}

      {/* <textarea
        placeholder="Content"
        {...register("content")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.content && (
        <p className="text-red-500">{errors.content.message}</p>
      )} */}

      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
          setValue("content", newContent);
        }}
      />

      <textarea
        placeholder="Table of Contents (comma separated)"
        {...register("tableOfContents")}
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        {...register("tags")}
        className="w-full p-2 border rounded-lg"
      />
      {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("isActive")} className="w-4 h-4" />
        Active Article
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Adding..." : "Add Article"}
      </button>
    </form>
  );
};

export default AddAdminArticles;
