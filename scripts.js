const postsDiv = document.querySelector(".posts");
const testiominalsDiv = document.querySelector(".testimonials");

const posts = [
    {
        title: "The Tech Revolution: How Innovation Shapes Our World",
        author: "KRISTIN WATSON",
        author_avatar: "./assets/images/profiles/47df98b128a92b03283e3e18ae7f0e19.jpg",
        post_date: "Mar 6, 2024",
        category: "Technology",
        minute_read: "20 minutes",
        image_url: "./assets/images/9c8747346ea0760a8e78f4042fde06fd.png"
    },
    {
        title: "Well-Read: Book Reviews, Recommendations, and Literary Musings",
        author: "DARRELL STEWARD",
        author_avatar: "./assets/images/profiles/c1828a1b9ee607310b714b4c0c30f131.jpg",
        post_date: "Mar 6, 2024",
        category: "Life Style",
        minute_read: "20 minutes",
        image_url: "./assets/images/257d2f9622ddc8c6449888121357b09b.png"
    },
    {
        title: "Life's Little Pleasures: Finding Joy in Everyday Moments",
        author: "JACOB JONES",
        author_avatar: "./assets/images/profiles/fb1f9db913bbebe3b7a90ad31591aae6.jpg",
        post_date: "Mar 6, 2024",
        category: "Life Style",
        minute_read: "20 minutes",
        image_url: "./assets/images/e2682d92d838da9831448222837f4e41.png"
    }
];


const postArea = (function () {
    posts.forEach((post) => {
        const postDiv = document.createElement("div");
        const postContentDiv = document.createElement("div");
        const postImageDiv = document.createElement("div");
        const postDetail = document.createElement("div");
        const postSubDetail = document.createElement("div");
        const authorWrapper = document.createElement("div");

        const title = document.createElement("h2");
        const author = document.createElement("h4");
        const authorAvatar = document.createElement("img");
        const category = document.createElement("span");
        const minuteRead = document.createElement("span");
        const postedDate = document.createElement("span");
        const imageUrl = document.createElement("img");

        postDiv.classList.add("flex", "gap-20", "post", "flex-wrap");
        postContentDiv.classList.add("flex-70", "gap-16", "flex", "flex-col");
        postImageDiv.classList.add("flex-30");
        postDetail.classList.add("post__detail", "flex", "justify-content-sb", "color__grey", "align-items-c", "flex-wrap");
        title.classList.add("post__title");
        authorAvatar.classList.add("profile-icon");
        authorWrapper.classList.add("flex", "align-items-c", "gap-12");
        category.classList.add("p-l-16");
        minuteRead.classList.add("p-l-16");
        postedDate.classList.add("p-l-16");

        title.textContent = post.title;
        author.textContent = post.author;

        category.textContent = post.category;
        minuteRead.textContent = post.minute_read;
        postedDate.textContent = post.post_date;

        imageUrl.textContent = post.image_url;

        authorAvatar.setAttribute("src", post.author_avatar);
        imageUrl.setAttribute("src", post.image_url);


        authorWrapper.append(authorAvatar, author);
        postSubDetail.append(category, minuteRead, postedDate);
        postDetail.append(authorWrapper, postSubDetail);
        postContentDiv.append(title, postDetail);
        postImageDiv.append(imageUrl);
        postDiv.append(postContentDiv, postImageDiv);
        postsDiv.append(postDiv);
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
        stars: 4,
        message: "The soothing voices of the hosts and the ethereal melodies weave together seamlessly, creating a good experience that leaves me feeling relaxed and content. It's a delightful escape from the stresses of daily life, and I always look forward to tuning in."
    },
    {
        name: "Ralph Edwards",
        profile_image: "./assets/avatar/audience-3.png",
        place: "Greece",
        stars: 4,
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
    const testimonialLineOne = document.createElement("div");
    const testimonialLineTwo = document.createElement("div");

    testimonialLineOne.classList.add("line-one");
    testimonialLineTwo.classList.add("line-two");


    testominals.forEach((testiomnial, index) => {

        const StarRatings = document.createElement("div");
        const hollowStar = document.createElement("img");


        StarRatings.classList.add("flex", "gap-10", "star-ratings");
        if (testiomnial.stars == 4) {
            for (let i = 0; i < 3; i++) {
                const startIcon = document.createElement("img");
                startIcon.setAttribute("src", "./assets/icons/star.svg");
                startIcon.classList.add("star-icon");
                StarRatings.append(startIcon);
            }
            StarRatings.append(hollowStar);
        }
        else{
            for (let i = 0; i < 5; i++) {
                const startIcon = document.createElement("img");
                startIcon.setAttribute("src", "./assets/icons/star.svg");
                startIcon.classList.add("star-icon");
                StarRatings.append(startIcon);
            }
        }


       

        const testimonialDiv = document.createElement("div");
        const testiomnialClientDiv = document.createElement("div");
        const clientInfoText = document.createElement("div");

        const name = document.createElement("h3");
        const country = document.createElement("span");
        const stars = document.createElement("span");
        const message = document.createElement("p");

        const profileImage = document.createElement("img");

        testimonialDiv.classList.add("testimonial");
        testiomnialClientDiv.classList.add("client", "flex", "align-items-c", "gap-24");
        country.classList.add("country");
        message.classList.add("response");
        profileImage.classList.add("avatar");

        hollowStar.classList.add("star-icon");

        name.textContent = testiomnial.name;
        country.textContent = testiomnial.place;
        message.textContent = testiomnial.message;

        profileImage.setAttribute("src", testiomnial.profile_image);
        hollowStar.setAttribute("src", "./assets/icons/hollow-star.svg")

        // stars.appendChild(StarRatings);
        clientInfoText.append(name, country);
        testiomnialClientDiv.append(profileImage, clientInfoText);
        testimonialDiv.append(testiomnialClientDiv, StarRatings, message);

        if (index < 4) {
            testimonialLineOne.append(testimonialDiv);
        }
        else {
            testimonialLineTwo.append(testimonialDiv);
        }


    });

    testiominalsDiv.append(testimonialLineOne, testimonialLineTwo);
})();
