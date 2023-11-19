/* filename: complex_code.js */

// This code is a complex implementation of a social media analytics tool

// Global variables
let users = [];
let posts = [];

// Classes
class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  addPost(post) {
    posts.push(post);
  }

  getPosts() {
    return posts.filter((post) => post.userId === this.id);
  }
}

class Post {
  constructor(id, userId, content, likes, comments) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.likes = likes;
    this.comments = comments;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  like() {
    this.likes++;
  }
}

// Function to generate users and posts
function generateData() {
  const names = ['John', 'Jane', 'Mike', 'Emily', 'David'];
  
  for (let i = 1; i <= 10; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const age = Math.floor(Math.random() * 30) + 20;
    
    const user = new User(i, name, age);
    users.push(user);
    
    for (let j = 1; j <= 5; j++) {
      const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Post ${j} by User ${i}`;
      const likes = Math.floor(Math.random() * 20);
      const comments = [];
      
      const post = new Post(j, i, content, likes, comments);
      user.addPost(post);
    }
  }
}

// Function to analyze social media data
function analyzeData() {
  let totalLikes = 0;
  let totalComments = 0;
  
  for (const user of users) {
    const posts = user.getPosts();
    
    for (const post of posts) {
      totalLikes += post.likes;
      totalComments += post.comments.length;
    }
  }

  console.log(`Total likes: ${totalLikes}`);
  console.log(`Total comments: ${totalComments}`);
}

// Main program
generateData();
analyzeData();