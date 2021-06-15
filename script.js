  $(function() {
    function post() {
      let date = new Date();
      let postDate = '';
      postDate = formatDate(date);
      let postText = $('#postText').val();
      $('#postText').val('');
      $('#posts').append('<article><div class="post-text">' + postText + '</div><div class="post-timestamp">posted on:'  + postDate + '</div></article>');
    }
    function formatDate(date){
      absDate = date.getTime() + date.getTimezoneOffset()*60*1000; //calculates UTC date
      date.setTime(absDate); //sets date to UTC
      dateText = date.toDateString() + " ";
      date.getHours() < 10 ? dateText += '0' + date.getHours() + ":" : dateText += date.getHours() + ":";
      date.getMinutes() < 10 ? dateText += '0' + date.getMinutes() + ":" : dateText += date.getMinutes() + ":";
      date.getSeconds() < 10 ? dateText += '0' + date.getSeconds() + " UTC" : dateText += date.getSeconds() + " UTC";
      return dateText;
    }
    $('#postButton').on('click', post);
  });