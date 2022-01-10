// Getting share number

let blog_shares = 5

function getShares() {
  let sharesEl = document.querySelector(".share-number")
  sharesEl.innerText = `${blog_shares} shares`
}

window.addEventListener("load", getShares)


// Closing footer at bottom 
let closeFooterEl = document.querySelector(".close-footer")
closeFooterEl.addEventListener("click", () => {
  let footerAdEl = document.querySelector(".my-footer-sticky")
  footerAdEl.style.display = "none";
})

// Main Blog Data 
let mainBlogImageUrl = 'https://images.pexels.com/photos/1831115/pexels-photo-1831115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
let mainBlogData =
{
  "title": "Poker | Title of Blog Post Here",
  "secondaryTitle": "Second Headline Blah Blah",
  "author": "Sebastian Ingrams",
  "date": "Jan 01 2020",
  "images": [mainBlogImageUrl, "https://images.pexels.com/photos/534181/pexels-photo-534181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"],
  "text": [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptate? Laudantium, beatae! Enim odit, architecto vero unde doloremque, a harum nesciunt neque veniam cupiditate voluptates? Incidunt quis hic ducimus ipsa ullam provident aspernatur ex veniam, esse, expedita obcaecati illum inventore! Non vitae magnam nam magni, accusamus ipsum neque ad ipsam?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus ipsa quos voluptatum accusamus nam inventore! Culpa, repellendus illo, velit provident itaque quis cum odit porro accusantium quam facere debitis est delectus illum soluta laborum quisquam blanditiis assumenda. Optio, exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa iure, molestias perferendis nostrum voluptatem, minus illum sapiente, veritatis tenetur cupiditate. Sed non minima similique porro autem quas nobis nesciunt.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptate? Laudantium, beatae! Enim odit, architecto vero unde doloremque, a harum nesciunt neque veniam cupiditate voluptates? Incidunt quis hic ducimus ipsa ullam provident aspernatur ex veniam, esse, expedita obcaecati illum inventore! Non vitae magnam nam magni, accusamus ipsum neque ad ipsam?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus ipsa quos voluptatum accusamus nam inventore! Culpa, repellendus illo, velit provident itaque quis cum odit porro accusantium quam facere debitis est delectus illum soluta laborum quisquam blanditiis assumenda. Optio, exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa iure, molestias perferendis nostrum voluptatem, minus illum sapiente, veritatis tenetur cupiditate. Sed non minima similique porro autem quas nobis nesciunt.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus ipsa quos voluptatum accusamus nam inventore! Culpa, repellendus illo, velit provident itaque quis cum odit porro accusantium quam facere debitis est delectus illum soluta laborum quisquam blanditiis assumenda. Optio, exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa iure, molestias perferendis nostrum voluptatem, minus illum sapiente, veritatis tenetur cupiditate. Sed non minima similique porro autem quas nobis nesciunt.",
  ],
  "videoIframe": `<iframe src="https://www.youtube.com/embed/8uD6s-X3590" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

window.addEventListener("load", () => {
  let mainImageEl = document.querySelector(".main-img")
  mainImageEl.style.background = `url(${mainBlogImageUrl})`
  mainImageEl.style.backgroundSize = "cover"
  // mainImageEl.style.backgroundRepeat = "no-repeat"


  let mainBlogEl = document.querySelector(".main-blog")
  let output = `
    <div class="date-author">
      <p>Written by <span class="main-blog-author">${mainBlogData.author}</span> on ${mainBlogData.date}</p>
    </div>
    <h1 class= "main-blog-title"> ${mainBlogData.title}</h1>
    <img class = "title-image" src="${mainBlogData.images[0]}" alt="">
    <h3 class = "main-blog-secondary-title" >${mainBlogData.secondaryTitle}</h3>

    <div class="text-before-secondary-image">
      <p>${mainBlogData.text[0]}</p>
      <p>${mainBlogData.text[1]}</p>
    </div>

    <div class="secondary-image">
      <img src="${mainBlogData.images[1]}" alt="">
    </div>

    <div class="text-after-secondary-image">
        <p>${mainBlogData.text[2]}</p>
        <p>${mainBlogData.text[3]}</p>
        <p>${mainBlogData.text[4]}</p>
    </div>   
  
    <div class="video-after-text">${mainBlogData.videoIframe}</div>

    <div class="text-after-video">
        <p>${mainBlogData.text[2]}</p>
        <p>${mainBlogData.text[3]}</p>
        <p>${mainBlogData.text[4]}</p>
    </div>  

  `

  mainBlogEl.innerHTML = output
})



// Aside Popular Blog data 
let popularBlogData = [
  {
    "title": "Lorem ipsum dolor sit amet",
    "author": "Sebastian Ingrams",
    "date": "Jan 01 2020",
    "image": "https://images.pexels.com/photos/4275892/pexels-photo-4275892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "title": "Lorem ipsum dolor sit amet",
    "author": "Sebastian Ingrams",
    "date": "Jan 01 2020",
    "image": "https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "title": "Lorem ipsum dolor sit amet",
    "author": "Sebastian Ingrams",
    "date": "Jan 01 2020",
    "image": "https://images.pexels.com/photos/715603/pexels-photo-715603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },

  {
    "title": "Lorem ipsum dolor sit amet",
    "author": "Sebastian Ingrams",
    "date": "Jan 01 2020",
    "image": "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
]

window.addEventListener("load", () => {
  let popularAsideEl = document.querySelector('.popular-aside-blogs')
  let popularAsideBlogsEl = document.createElement('div')
  let output = ""
  popularBlogData.map(blog => {
    output += `        
            <div class="card blog-item border-0" style="width: 20rem;">
                <img src="${blog.image}" class = "card-img-top img-fluid">
                <div class="card-body blog-item-content ">
                    <div class="blog-details">
                        <div class = "blog-date">
                            <i class="far fa-calendar-alt"></i>  
                            <p>${blog.date}</p>
                         </div>
                        <div class = "blog-author">
                            <i class="fas fa-user"></i>
                            <p>${blog.author}</p>
                        </div>
                    </div>
                    <h3 class="blog-title">${blog.title}</h3>
                </div>
            </div>
            <div class = "aside-blog-underline" ></div>
        `
  })

  popularAsideBlogsEl.innerHTML = output;
  popularAsideBlogsEl.classList.add('popular-blog-container')
  popularAsideEl.insertAdjacentElement('afterbegin', popularAsideBlogsEl)

})