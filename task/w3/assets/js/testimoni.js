const testimonials = [
  {
    image:
      "https://media.istockphoto.com/id/1335941248/id/foto/ditembak-seorang-pemuda-tampan-berdiri-dengan-latar-belakang-abu-abu.jpg?b=1&s=612x612&w=0&k=20&c=bzipsO-7TWZSBQ52Ji2jlBuy7unO5XSi1QTrekzoZ6w=",
    content: "Keren kali bang!",
    author: "Kenblock",
    rating: 1,
  },
  {
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Ril pic no hoax",
    author: "Zukerberg",
    rating: 2,
  },
  {
    image:
      "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Enak dan bergiji!",
    author: "rosamun pike",
    rating: 3,
  },
];

function allTestimonial() {
  if (!testimonials.length) {
    return (document.getElementById(
      "testimonial"
    ).innerHTML = `<h1>Data Not Found!</h1>`);
  }

  const testimonialHTMl = testimonials.map((testimonial) => {
    return `
    <div class="card-item">
          <div class="card-image">
            <a href=""><img src="${testimonial.image}" alt="people" /></a>
          </div>
          <div class="comment">
            <p class="comment-text">"${testimonial.content}"</p>
          </div>
          <div class="creator">
            <p class="creator-text">- ${testimonial.author}</p>
          </div>
        </div>
    `;
  });

  document.getElementById("testimonial").innerHTML = testimonialHTMl.join("");
}

function filterTestimonial(rating) {
  const filteredTestimonial = testimonials.filter(
    (testimonial) => testimonial.rating === rating
  );

  if (!filteredTestimonial.length) {
    return (document.getElementById(
      "testimonial"
    ).innerHTML = `<h1>Data Not Found!</h1>`);
  }

  const testimonialHTMl = filteredTestimonial.map((testimonial) => {
    return `
    <div class="card-item">
          <div class="card-image">
            <a href=""><img src="${testimonial.image}" alt="people" /></a>
          </div>
          <div class="comment">
            <p class="comment-text">"${testimonial.content}"</p>
          </div>
          <div class="creator">
            <p class="creator-text">- ${testimonial.author}</p>
          </div>
        </div>
    `;
  });

  document.getElementById("testimonial").innerHTML = testimonialHTMl.join("");
}

allTestimonial();
