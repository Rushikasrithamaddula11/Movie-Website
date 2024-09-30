document.addEventListener("DOMContentLoaded", function() {
    const movieSelect = document.getElementById("movie");
    const movies = [
        { title: "Movie 1", id: 1 },
        { title: "Movie 2", id: 2 },
        { title: "Movie 3", id: 3 },
        { title: "Movie 4", id: 4 }, // Example of adding more movies
        { title: "Movie 5", id: 5 }
    ];

    // Populate movie selection dropdown
    movies.forEach(movie => {
        let option = document.createElement("option");
        option.value = movie.id; // Use movie ID as the value for better identification
        option.text = movie.title; // Display the movie title
        movieSelect.add(option);
    });

    // Handle booking form submission
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedMovieId = movieSelect.value;
        const selectedMovie = movies.find(movie => movie.id == selectedMovieId);
        const date = document.getElementById("date").value;
        const seats = document.getElementById("seats").value;

        // Handle booking logic (you can send this data to your server here)
        alert(`Booking Confirmed!\nMovie: ${selectedMovie.title}\nDate: ${date}\nSeats: ${seats}`);
    });

    // Handle contact form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Handle contact form submission logic (you can send this data to your server here)
        alert(`Message sent successfully!\nName: ${name}\nEmail: ${email}`);
    });
});
