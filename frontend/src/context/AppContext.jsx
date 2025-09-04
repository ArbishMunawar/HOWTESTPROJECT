import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const [articles, setArticles] = useState([]);
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [booksLoading, setBooksLoading] = useState(false);
  const [authorLoading, setAuthorLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);

  // Fetch Articles
  const getArticlesData = async () => {
    try {
      setArticlesLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/v1/article`);
      setArticles(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setArticlesLoading(false);
    }
  };

  // Fetch Books
  const getBooksData = async () => {
    try {
      setBooksLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/v1/book/`);
      setBooks(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setBooksLoading(false);
    }
  };

  // Fetch Authors
  const getAuthorsData = async () => {
    try {
      setAuthorLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/v1/author/`);
      setAuthors(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setAuthorLoading(false);
    }
  };

  // Fetch Categories
  const getCategoriesData = async () => {
    try {
      setCategoryLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/v1/category/`);
      setCategory(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setCategoryLoading(false);
    }
  };


  useEffect(() => {
    getArticlesData();
    getBooksData();
    getAuthorsData();
    getCategoriesData()
  }, []);

  return (
    <AppContext.Provider
      value={{
        books,
        authors,
        category,
        articles,
        backendUrl,
        articlesLoading,
        booksLoading,
        authorLoading,
        categoryLoading,
        getArticlesData,
        getBooksData,
        getAuthorsData,
        getCategoriesData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
