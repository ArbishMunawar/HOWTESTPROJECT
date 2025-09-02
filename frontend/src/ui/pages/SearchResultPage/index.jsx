import React, { useState } from "react";
import { useSearch } from "../../../hooks/searchContet";
import UseFetch from "../../../hooks/UseFetch";
import { Search } from "lucide-react";

const SearchResultsPage = () => {
  const { searchQuery, setSearchQuery, input, setInput } = useSearch();
  const [localInput, setLocalInput] = useState(searchQuery);

  const { data: books } = UseFetch(
    `/books`
  );
  const { data: articles } = UseFetch(
    `/articles`
  );
  const { data: authors } = UseFetch(
    `/authors`
  );

  const handleSearch = () => {
    setSearchQuery(localInput);
  };

  const filterByQuery = (data) => {
    if (!searchQuery.trim()) return [];
    return data?.filter((item) => {
      const text = `
        ${item.title || ""}
        ${item.name || ""}
        ${item.category || ""}
        ${item.bio || ""}
        ${item.author || ""}
      `.toLowerCase();
      return text.includes(searchQuery.toLowerCase());
    });
  };

  const filteredBooks = filterByQuery(books);
  const filteredArticles = filterByQuery(articles);
  const filteredAuthors = filterByQuery(authors);

  const renderCard = (item) => (
    <div key={item.id} className="border border-gray-300  rounded-lg shadow-sm p-4 flex gap-4 ">
      <img
        src={item.image}
        alt={item.title || item.name}
        className="w-24 h-32 object-cover rounded"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {item.title || item.name}
          </h3>
          {item.author && (
            <p className="text-sm text-gray-600">By {item.author}</p>
          )}
          {item.date && (
            <p className="text-xs text-gray-500 mt-1">{item.date}</p>
          )}
        </div>
        {item.views && (
          <p className="text-xs text-gray-500">Views: {item.views}</p>
        )}
        {item.downloaded && (
          <p className="text-xs text-gray-500">{item.downloaded}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative mb-6">
        <input
          value={localInput}
          onChange={(e) => setLocalInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search again..."
          className="md:w-[50%] border border-gray-300 rounded py-2 px-4 pr-[7rem] text-sm"
        />
        <button
          onClick={handleSearch}
          className="absolute top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-tr rounded-br"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Search Results for: <span className="text-blue-600">{searchQuery}</span>
      </h2>

      {filteredBooks.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Books</h3>
          <div className="space-y-4">
            {filteredBooks.map((book) => renderCard(book))}
          </div>
        </section>
      )}

      {filteredArticles.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Articles</h3>
          <div className="space-y-4">
            {filteredArticles.map((article) => renderCard(article))}
          </div>
        </section>
      )}
      {filteredAuthors.map((author) => (
        <div
          key={author.id}
          className="border rounded-lg shadow-sm p-4 flex gap-4 mb-6"
        >
          <img
            src={author.image}
            alt={author.name}
            className="object-contain rounded"
          />
          <div className="flex flex-col justify-between gap-7">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {author.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{author.bio}</p>
              <p className="text-xs mt-1">
                Articles Published: {author.articlesPublished}
              </p>
              <p className="text-xs ">Total Readers: {author.totalReaders}</p>
            </div>
          </div>
        </div>
      ))}

      {filteredBooks.length === 0 &&
        filteredArticles.length === 0 &&
        filteredAuthors.length === 0 && (
          <p className="text-gray-500 mt-4">No results found.</p>
        )}
    </div>
  );
};

export default SearchResultsPage;
