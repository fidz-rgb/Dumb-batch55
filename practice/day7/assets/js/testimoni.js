class Testimonial {
    constructor(img, content, author) {
      this.img = img;
      this.content = content;
      this.author = author;
    }
  }
  
  const testimonialOne = new Testimonial(
    "https://media.istockphoto.com/id/1335941248/id/foto/ditembak-seorang-pemuda-tampan-berdiri-dengan-latar-belakang-abu-abu.jpg?b=1&s=612x612&w=0&k=20&c=bzipsO-7TWZSBQ52Ji2jlBuy7unO5XSi1QTrekzoZ6w=",
    "Keren kali bang!",
    "Kenblock"
  );
  
  const testimonialTwo = new Testimonial(
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Ril pic no hoax",
    "Zukerberg"
  );
  
  const testimonialThree = new Testimonial(
    "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Enak dan bergiji!",
    "rosamun pike"
  );
  
  const testimonialData = [testimonialOne, testimonialTwo, testimonialThree];
  
  function renderTestimonial() {
    const testimonialContent = document.getElementById("testimonial");
  
    testimonialData.forEach((testimonial) => {
      const testimonialItem = `
      <div class="card-item">
            <div class="card-image">
              <a href=""><img src="${testimonial.img}" alt="people" /></a>
            </div>
            <div class="comment">
              <p class="comment-text">"${testimonial.content}"</p>
            </div>
            <div class="creator">
              <p class="creator-text">- ${testimonial.author}</p>
            </div>
          </div>
      `;
      testimonialContent.insertAdjacentHTML("beforeend", testimonialItem);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderTestimonial)