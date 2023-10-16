const user = {

    lastActivity : '13th sept',
  
    posts : [{title: 'Post one', body: 'This is Post one'},{title: 'Post two', body: 'This is Post two'}]
  
  }
  
  
  
  
  
  function createpost(post){
  
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        user.posts.push(post)
  
        resolve(user.posts)
  
      }, 1000)
  
    })
  
  }
  
  
  
  function updateLastUserActivityTime(){
  
    return new Promise ((resolve, reject) => {
  
      setTimeout(() => {
  
        user.lastActivity = new Date().getTime();
  
        resolve(user.lastActivity)
  
      }, 1000)
  
    })
  
  }
  
  
  
  function deletepost(){
  
    return new Promise((resolve,reject)=>{
  
      setTimeout(()=>{
  
        if (user.posts.length>0){
  
          const deletedPost = user.posts.pop();
  
          resolve(deletedPost);
  
        }else{
  
          reject('Error')
  
        }
  
      }, 1000)
  
    })
  
  }
  
  
  
  function func(){
  
    Promise.all([createpost({title: 'Post three', body: 'This is Post three'}), updateLastUserActivityTime()]).then((val)=> {
  
      console.log(val) // This logs the result of createpost and updateLastUserActivityTime
  
      return deletepost(); // Chain the deletepost promise here
  
      })
  
      .then((deletedpost) => {
  
        console.log(user.posts)
  
      })
  
      .catch((err)=>console.log(err))
  
  }
  
  
  
  func()
  
//  when we run it and go to console this post3 is not printing there but it's prototype is (if we run this code in normal compiler it will show)  
//  This can happen due to the asynchronous nature of your code.