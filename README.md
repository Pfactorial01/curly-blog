# curly-blog
A REST API with basic blog functionalities like blog creation, comments, likes and total number of views, built with NodeJs and Express Server and remote MongoDB.

# API USAGE
hosted link:  https://curly-blog.onrender.com
github link: Pfactorial01/curly-blog
remote mongodb cluster was used for database
I also wrote some basic test cases with jest and supertest.


To create user:
send POST request to https://curly-blog.onrender.com/users/ with BODY {
    "full_name" : "eric campbell",
    "email" : " campbell@mail.com"
}


To create blog:
send POST request to https://curly-blog.onrender.com/blogs/  with BODY {
    "title": "Deploying a web app",
 "content": "lorem ipsum .......",
 "author":  "user ID" (gotten from create user endpoint)
  }
  
  
To comment on blog:
send POST request to https://curly-blog.onrender.com/blogs/<blog_id> with BODY {
    "blog" : "blog ID" (gotten from create blog endpoint),
    "content" : "lorem ipsum ........",
     "user_info": "user ID"
}


To co-author a blog:
send PATCH request to https://curly-blog.onrender.com/blogs/<blog_id> with BODY {
     "title" : "New title",
     "content": "additional content" (will be added to initial content),
     "author": "user ID" (will be added to array of authors)
}


To like a blog:
send PATCH request to https://curly-blog.onrender.com/blogs/<blog_id> with BODY {
     "like" : "true" (this will return Blog with like_count increased by 1)
}


To get a blog:
send GET request to https://curly-blog.onrender.com/blogs/<blog_id> 
this will return blog data and increase view_count by 1



To get all blogs:
send GET request to https://curly-blog.onrender.com/blogs/



# To run server
npm run startDev

# To run tests
npm test
