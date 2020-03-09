function addingEventListener() {
  // The node that will be doing the listening is
  // stored in the input constant
  const input = document.getElementById('input');

  // We are invoking addEventListener on the node
  // that will be doing the listening
  // The first argument 'click' is the event name we are
  // listening for.
  // The second argument is the callback function. The
  // work that will be executed when the node "hears"
  // the event specified.
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}
