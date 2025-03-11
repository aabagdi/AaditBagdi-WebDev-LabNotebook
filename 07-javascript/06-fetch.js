const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  const loader = document.querySelector("#loading");

  // Fetch all books from the API of Ice and Fire
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((books) => {
      loader.remove();

      books.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.className = "card mb-3 mx-auto";
        bookElement.style.maxWidth = "500px";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body text-center";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = book.name;
        cardBody.appendChild(title);

        const author = document.createElement("p");
        author.className = "card-text";
        author.textContent = `Author: ${book.authors.join(", ")}`;
        cardBody.appendChild(author);

        const year = document.createElement("p");
        year.className = "card-text";
        year.textContent = `Published: ${new Date(
          book.released
        ).getFullYear()}`;
        cardBody.appendChild(year);

        const pages = document.createElement("p");
        pages.className = "card-text";
        pages.textContent = `Pages: ${book.numberOfPages}`;
        cardBody.appendChild(pages);

        bookElement.appendChild(cardBody);

        app.appendChild(bookElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      loader.remove();

      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Error loading books. Please try again later.";
      errorMessage.className = "text-danger";
      app.appendChild(errorMessage);
    });
};

fetchData(url);
