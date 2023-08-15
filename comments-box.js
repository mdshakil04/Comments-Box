// -------step-1: add eventListener to the button -----
document.getElementById('post-button').addEventListener('click', function(){
    // console.log('post  button clicked')
    //----- step-2: get the comment box------
    const commentsBox = document.getElementById('new-comments');
    // console.log(commentsBox)
    const newComments = commentsBox.value;
    // console.log(newComments)
    // step-3: Post comments inside the comments container

    // 1.get the comments container
    const commentsContainer = document.getElementById('comments-container');
    // 2. create a new element "p tag"
    const p = document.createElement('p');
    // 3. set the inner text from comments box
    p.innerText = newComments;
    // 4. add the p tag in comments container using appendChild
    commentsContainer.appendChild(p);
    // step 4: clear the comments Box
    commentsBox.value = '';

})