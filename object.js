let user = {

  name: 'juan',
  age: 30,
  location: 'colombia',
  blogs: ['Trading from 0', 'Try not to'],
  login: function(){
    console.log('you are logged in')
  },
  logout: () => console.log('you are logged out'),

  logBlogs: function(){
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }

};

user.logBlogs(); 

console.log(user.location);
user.login();
user.logout();