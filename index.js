const button = document.querySelector('button');

button.addEventListener('click', async () => {
  alert('test');

  console.log('requesting');
  const notificationPermission = await Notification.requestPermission();
  console.log('requested', notificationPermission, Notification.permission);
  const notification = new Notification('test');
  notification.onshow = () => {
    document.body.classList.toggle('shown', true);
    console.log('shown');
  }

  console.log('notification', notification);
});
