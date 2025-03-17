const postDiv = document.querySelector(".posts");
const testiominalDiv = document.querySelector(".testimonials");

const posts = [
    {
        title: "The Tech Revolution: How Innovation Shapes Our World",
        author: "KRISTIN WATSON",
        post_date: "Mar 6, 2024",
        category: "Technology",
        minute_read: "20 minutes",
        image_url: "./assets/images/9c8747346ea0760a8e78f4042fde06fd.png"
    },
    {
        title: "Well-Read: Book Reviews, Recommendations, and Literary Musings",
        author: "DARRELL STEWARD",
        post_date: "Mar 6, 2024",
        category: "Life Style",
        minute_read: "20 minutes",
        image_url: "./assets/images/257d2f9622ddc8c6449888121357b09b.png"
    },
    {
        title: "Life's Little Pleasures: Finding Joy in Everyday Moments",
        author: "JACOB JONES",
        post_date: "Mar 6, 2024",
        category: "Life Style",
        minute_read: "20 minutes",
        image_url: "./assets/images/e2682d92d838da9831448222837f4e41.png"
    }
];


const postArea = (function () {
    posts.forEach((post) => {

        const postContentDiv = document.createElement("div");
        const postImageDiv = document.createElement("div");

        const title = document.createElement("h2");
        const author = document.createElement("h4");
        const category = document.createElement("span");
        const minuteRead = document.createElement("span");
        const postedDate = document.createElement("span");
        const imageUrl = document.createElement("img");

        title.textContent = post.title;
        author.textContent = post.author;
        category.textContent = post.category;
        minuteRead.textContent = post.minute_read;
        imageUrl.textContent = post.image_url;
        imageUrl.setAttribute("src", post.image_url);
        postedDate.textContent = post.post_date;

        postContentDiv.append(title, author, category, minuteRead, postedDate);
        postImageDiv.append(imageUrl);
        postDiv.append(postContentDiv, postImageDiv);
    });
})();

const testominals = [
    {
        name: "Jerome Bell",
        profile_image: "./assets/avatar/audience-1.png",
        place: "Bahrain",
        stars: 5,
        message: "The Lullaby Podcast is an absolute gem! Its soothing melodies and calming narratives provide the perfect backdrop for winding down after a long day. The gentle rhythms and stories helps me transition from the bustle of the day to a peaceful state of mind."
    },
    {
        name: "Jenny Wilson",
        profile_image: "./assets/avatar/audience-2.png",
        place: "Guinea",
        stars: 5,
        message: "I love how the Lullaby Podcast combines enchanting storytelling with gentle music. It's like a warm hug for the soul before bedtime. Each episode feels like a magical journey, whisking me away to distant lands filled with wonder and possibility."
    },
    {
        name: "Albert Flores",
        profile_image: "./assets/avatar/audience-3.png",
        place: "Serbia",
        stars: 4,
        message: "Listening to the Lullaby Podcast has become an essential part of our bedtime routine. The carefully curated stories and melodies have a calming effect on both the mind and body, helping us let go of the worries of the day and embrace a sense of serenity."
    },
    {
        name: "Ralph Edwards",
        profile_image: "./assets/avatar/audience-4.png",
        place: "Greece",
        stars: 5,
        message: "The soothing voices of the hosts and the ethereal melodies weave together seamlessly, creating a good experience that leaves me feeling relaxed and content. It's a delightful escape from the stresses of daily life, and I always look forward to tuning in."
    },
    {
        name: "Ralph Edwards",
        profile_image: "./assets/avatar/audience-1.png",
        place: "Greece",
        stars: 5,
        message: "The soothing voices of the hosts and the ethereal melodies weave together seamlessly, creating a good experience that leaves me feeling relaxed and content. It's a delightful escape from the stresses of daily life, and I always look forward to tuning in."
    },
    {
        name: "Ralph Edwards",
        profile_image: "./assets/avatar/audience-2.png",
        place: "Greece",
        stars: 5,
        message: "The soothing voices of the hosts and the ethereal melodies weave together seamlessly, creating a good experience that leaves me feeling relaxed and content. It's a delightful escape from the stresses of daily life, and I always look forward to tuning in."
    },
    {
        name: "Ralph Edwards",
        profile_image: "./assets/avatar/audience-3.png",
        place: "Greece",
        stars: 5,
        message: "The soothing voices of the hosts and the ethereal melodies weave together seamlessly, creating a good experience that leaves me feeling relaxed and content. It's a delightful escape from the stresses of daily life, and I always look forward to tuning in."
    },
    {
        name: "Ralph Edwards",
        profile_image: "./assets/avatar/audience-4.png",
        place: "Greece",
        stars: 5,
        message: "The soothing voices of the hosts and the ethereal melodies weave together seamlessly, creating a good experience that leaves me feeling relaxed and content. It's a delightful escape from the stresses of daily life, and I always look forward to tuning in."
    },
];

const testominalArea = (function () {
    testominals.forEach((testiomnial) => {

        const testiomnialClientDiv = document.createElement("div");
        const testiomnialImageDiv = document.createElement("div");

        const name = document.createElement("h3");
        const country = document.createElement("h4");
        const stars = document.createElement("span");
        const message = document.createElement("p");
       
        const profileImage = document.createElement("img");

        name.textContent = testiomnial.name;
        country.textContent = testiomnial.country;
        stars.textContent = testiomnial.stars;
        message.textContent = testiomnial.message;

        profileImage.setAttribute("src", testiomnial.profile_image);


        testiomnialClientDiv.append(profileImage, name, country);
    
        testiominalDiv.append(testiomnialClientDiv, stars, message);
    });
})();
