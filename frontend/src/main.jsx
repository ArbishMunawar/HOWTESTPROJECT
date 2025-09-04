import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SearchProvider } from "./hooks/searchContet.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./App.jsx";
import HomePage from "./ui/pages/HomePage/index.jsx";
import RecommendedPage from "./ui/pages/RecommendedPage/index.jsx";
import AllAuthorsPage from "./ui/pages/AllAuthorsPage/index.jsx";
import RecommendedDetailsPage from "./ui/pages/RecommendedDetailsPage/index.jsx";
import AllOnlineBooks from "./ui/pages/AllOnlineBooks/index.jsx";
import AllOnlineBooksDeatils from "./ui/pages/AllOnlineBooksDetails/index.jsx";
import EachBookDetail from "./ui/pages/EachBookDetail/index.jsx";
import SearchResultsPage from "./ui/pages/SearchResultPage/index.jsx";
import Login from "./ui/pages/LoginPage/index.jsx";
import SignUpPage from "./ui/pages/SignUpPage/index.jsx";
import CategoriesPage from "./ui/pages/CategoriesPage/index.jsx";
import AuthorDeatilsSection from "./ui/pages/AuthorDetailsPage/index.jsx";
// import AdminRoot from "./admin/AdminRoot.jsx";
import AdminLoginPage from "./ui/pages/Admin/AdminLogin.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
import AdminDashboard from "./ui/pages/Admin/AdminDashboard.jsx";
import AdminAuthors from "./ui/pages/Admin/AdminAuthors.jsx/index.jsx";
import AddAdminAuthor from "./ui/pages/Admin/AddAdminAuthors.jsx/index.jsx";
import AddAdminCategory from "./ui/pages/Admin/AddAdminCategory/index.jsx";
import AdminCategories from "./ui/pages/Admin/AdminCategories/index.jsx";
import AddAdminBooks from "./ui/pages/Admin/AddAdminBooks/index.jsx";
import AdminBooks from "./ui/pages/Admin/AdminBooks/index.jsx";
import AddArticle from "./ui/pages/Admin/AddAdminArticles/index.jsx";
import AdminArticles from "./ui/pages/Admin/AdminArticles/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { path: "/recommended", element: <RecommendedPage /> },
      { path: "/categories/:category", element: <CategoriesPage /> },
      { path: "/articles/:id", element: <RecommendedDetailsPage /> },
      { path: "/authors", element: <AllAuthorsPage /> },
      { path: "/author/:id", element: <AuthorDeatilsSection /> },
      { path: "/books", element: <AllOnlineBooks /> },
      { path: "/booksdetail/:category", element: <AllOnlineBooksDeatils /> },
      { path: "/book/:id", element: <EachBookDetail /> },
      { path: "/search", element: <SearchResultsPage /> },
      { path: "/login", element: <Login /> },
      { path: "/login/signup", element: <SignUpPage /> },
      { path: "/admin/login", element: <AdminLoginPage /> },
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/authors", element: <AdminAuthors /> },
      { path: "/admin/new-author", element: <AddAdminAuthor /> },
      { path: "/admin/new-category", element: <AddAdminCategory /> },
      { path: "/admin/category", element: <AdminCategories /> },
      { path: "/admin/new-book", element: <AddAdminBooks /> },
      { path: "/admin/books", element: <AdminBooks/> },
      { path: "/admin/new-article", element: <AddArticle/> },
      { path: "/admin/articles", element: <AdminArticles/> },
    ],
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <AppContextProvider>
        <AdminProvider>
          <RouterProvider router={router} />
        </AdminProvider>
      </AppContextProvider>
    </SearchProvider>
  </StrictMode>
);
