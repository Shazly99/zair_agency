const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

(async function () {
    let response = await fetch(`https://zariontime.com/api/web/blog/${id}`)
    let responseData = await response.json();
    Blogs=responseData.Blog
    console.log(Blogs)
    displayBlogAr()
})();

 

function displayBlogAr() {
    var cartona = ``; 
        cartona += `
        <div class="main-title text-center py-4"> 
            <h2 class="fw-bold fs-1 blog__title-h2  ">${Blogs.BlogTitleAr}</h2>
        </div>
        <div class="app__blog col-12  mb-3 p-2 position-relative " dir="rtl">
            <div   class="w-100    rounded-3 overflow-hidden  p-3 ">
          
                    <img class="blog-img w-100" src="${Blogs.BlogImage}">
                    <div class="app__Blog-footer py-3">
                    <div class="app__Blog-footer-right ">
                        <i class="fa fa-user" style="font-size:20px"></i>
                        <span class='mt-3 blogAuthor' style="font-size:20px">${Blogs.BlogAuthorAr}</span>
                    </div>
                    <div class="app__Blog-footer-left">
                        <span class="BlogDate" style="font-size:20px">${Blogs.BlogDate}</span>
                    </div>
                </div>
                <p class='mt-2' style="font-size:18px">${Blogs.BlogBodyAr}</p>
            </div>
        </div>
    `;

    document.getElementById("rowData1").innerHTML = cartona;
}