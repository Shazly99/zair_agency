const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

(async function test() {
    let Blogs = '';
    $.ajax({
        url: "https://zariagency.com/test/public/api/blog/show",
        method: 'post',
        data: {
            IDBlog: id
        },
        success: function (result) {
            Blogs = result.Blog
            console.log(Blogs);
            var cartona = ``;
            cartona += `
           <div class="main-title text-center py-4"> 
               <h2 class="fw-bold fs-1 blog__title-h2  ">${Blogs.BlogTitle}</h2>
           </div>
           <div class="app__blog col-12 mb-3 p-2 position-relative ">
               <div   class="w-100 rounded-3 overflow-hidden  p-3 ">
                       <img class="blog-img w-100" src="${Blogs.BlogImages[0].BlogImage}">
                    <div class="app__Blog-footer py-3" style="display: flex !important; justify-content: space-between !important; align-items: center; flex-direction: row;">
                       <div class="app__Blog-footer-right ">
                           <i class="fa fa-user" style="font-size:20px"></i>
                           <span class='mt-3 blogAuthor' style="font-size:20px">${Blogs.BlogAuthor}</span>
                       </div>
                       <div class="app__Blog-footer-left">
                           <span class="BlogDate" style="font-size:20px">${Blogs.BlogDate}</span>
                       </div>
                   </div>
                   <p class='mt-2' style="font-size:20px">${Blogs.BlogBody}</p>
               </div>
           </div>
       `;
            document.getElementById("rowData1").innerHTML = cartona;

        }
    });


})(); 
