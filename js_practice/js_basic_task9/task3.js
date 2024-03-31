async function getPostBodyById(postId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const postData = await response.json();
      console.log("Post body:", postData.body);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function getUsersAndPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
  
      for (const user of users) {
        const userPostsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const userPosts = await userPostsResponse.json();

        console.log(`User ${user.name} posts:`);
      userPosts.forEach(post => console.log(post.title));
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
getPostBodyById(1); 
getUsersAndPosts();
